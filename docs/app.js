import { cards } from "./cards.js";

const KEY = "architecture-cards-progress-v1";
const DAY = 24 * 60 * 60 * 1000;
const byId = new Map(cards.map(card => [card.id, card]));
const $ = selector => document.querySelector(selector);
const el = {
  due: $("#due-count"), learned: $("#learned-count"), status: $("#session-status"),
  region: $("#card-region"), domain: $("#domain-filter"), search: $("#search"),
  daily: $("#mode-daily"), browse: $("#mode-browse"), dialog: $("#settings-dialog")
};

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) || "{}");
    return Object.fromEntries(Object.entries(data).filter(([id, state]) => byId.has(id) &&
      state && Number.isFinite(state.due) && Number.isFinite(state.interval) && Number.isFinite(state.reps)));
  } catch { return {}; }
}

let progress = loadProgress();
let mode = "daily";
let queue = [];
let browseIndex = 0;
let revealed = false;
let completed = 0;

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(progress)); }
  catch { alert("Progress could not be saved in this browser. Export a backup from Settings."); }
}

function filteredCards() {
  const domain = el.domain.value;
  const query = el.search.value.trim().toLowerCase();
  return cards.filter(card => (domain === "all" || String(card.domain) === domain) &&
    (!query || `${card.question} ${card.answer} ${card.cue} ${card.topic}`.toLowerCase().includes(query)));
}

function hash(value) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i++) h = Math.imul(h ^ value.charCodeAt(i), 16777619);
  return h >>> 0;
}

function rebuildQueue() {
  const stamp = new Date().toDateString();
  queue = filteredCards().filter(card => !progress[card.id] || progress[card.id].due <= Date.now())
    .sort((a, b) => hash(stamp + a.id) - hash(stamp + b.id)).slice(0, 12).map(card => card.id);
  completed = 0;
  browseIndex = 0;
  revealed = false;
  render();
}

function activeCard() {
  if (mode === "daily") return byId.get(queue[0]);
  const list = filteredCards();
  if (browseIndex >= list.length) browseIndex = 0;
  return list[browseIndex];
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[char]);
}

function render() {
  const now = Date.now();
  el.due.textContent = cards.filter(card => !progress[card.id] || progress[card.id].due <= now).length;
  el.learned.textContent = Object.values(progress).filter(item => item.reps > 0).length;
  el.daily.classList.toggle("selected", mode === "daily");
  el.browse.classList.toggle("selected", mode === "browse");
  el.daily.setAttribute("aria-pressed", String(mode === "daily"));
  el.browse.setAttribute("aria-pressed", String(mode === "browse"));
  el.status.textContent = mode === "daily" ? `${completed} reviewed · ${queue.length} left` : `${filteredCards().length} cards`;
  const card = activeCard();
  if (!card) {
    const empty = mode === "daily" ? "All clear for now." : "No cards match that search.";
    const detail = mode === "daily" ? "Come back when more cards are due, or browse the full deck." : "Try another topic or domain.";
    el.region.innerHTML = `<div class="empty"><span class="empty-icon">✦</span><h3>${empty}</h3><p>${detail}</p><button type="button" id="empty-browse">Browse all cards ↗</button></div>`;
    return;
  }
  const domainName = {1:"Secure",2:"Resilient",3:"High-performing",4:"Cost-optimized"}[card.domain];
  const count = mode === "daily" ? `${completed + 1} / ${completed + queue.length}` : `${browseIndex + 1} / ${filteredCards().length}`;
  el.region.innerHTML = `<article class="flashcard ${revealed ? "is-revealed" : ""}">
    <div class="card-top"><span class="domain-pill domain-${card.domain}">D${card.domain} · ${domainName}</span><span class="card-count">${count}</span></div>
    <p class="card-topic">${escapeHtml(card.topic)} · Task ${card.section}</p>
    <h3>${escapeHtml(card.question)}</h3>
    ${revealed ? `<div class="answer" id="answer"><p class="answer-label">THE DECISION</p><p class="answer-main">${escapeHtml(card.answer)}</p><p class="answer-cue">${escapeHtml(card.cue)}</p><div class="sources"><a href="${card.guide}" target="_blank" rel="noopener">Your study guide ↗</a><a href="${card.source}" target="_blank" rel="noopener">AWS exam domain ↗</a></div></div>` : `<button class="reveal" id="reveal" type="button">Reveal answer <span aria-hidden="true">↓</span></button>`}
  </article>
  ${revealed ? `<div class="rating"><p>How well did you know it?</p><div class="rating-buttons"><button type="button" data-grade="again"><strong>Again</strong><small>1 min</small></button><button type="button" data-grade="hard"><strong>Hard</strong><small>1 day</small></button><button type="button" data-grade="good"><strong>Good</strong><small>longer</small></button></div></div>` : ""}
  ${mode === "browse" ? `<div class="browse-nav"><button type="button" id="previous">← Previous</button><button type="button" id="next">Next →</button></div>` : ""}`;
}

function grade(kind) {
  const card = activeCard();
  if (!card || !revealed) return;
  const prior = progress[card.id] || {interval: 0, reps: 0};
  const interval = kind === "again" ? 1 / 1440 : kind === "hard" ? Math.max(1, prior.interval * 1.2) : prior.interval < 1 ? 3 : Math.max(3, prior.interval * 2.5);
  progress[card.id] = {due: Date.now() + interval * DAY, interval, reps: prior.reps + 1};
  save();
  if (mode === "daily") {queue.shift(); completed++;}
  else browseIndex = (browseIndex + 1) % filteredCards().length;
  revealed = false;
  render();
}

function download(name, content, type) {
  const url = URL.createObjectURL(new Blob([content], {type}));
  const anchor = document.createElement("a");
  anchor.href = url; anchor.download = name; anchor.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function csvCell(value) { return `"${String(value).replaceAll('"', '""')}"`; }

el.region.addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.id === "reveal") {revealed = true; render();}
  if (button.dataset.grade) grade(button.dataset.grade);
  if (button.id === "empty-browse") {mode = "browse"; el.search.value = ""; render();}
  if (button.id === "previous") {browseIndex = (browseIndex - 1 + filteredCards().length) % filteredCards().length; revealed = false; render();}
  if (button.id === "next") {browseIndex = (browseIndex + 1) % filteredCards().length; revealed = false; render();}
});

el.daily.addEventListener("click", () => {mode = "daily"; rebuildQueue();});
el.browse.addEventListener("click", () => {mode = "browse"; browseIndex = 0; revealed = false; render();});
el.domain.addEventListener("change", rebuildQueue);
el.search.addEventListener("input", () => {mode === "daily" ? rebuildQueue() : (browseIndex = 0, revealed = false, render());});
document.querySelectorAll("[data-pick-domain]").forEach(button => button.addEventListener("click", () => {
  el.domain.value = button.dataset.pickDomain;
  mode = "browse"; browseIndex = 0; revealed = false; render();
  document.querySelector(".study").scrollIntoView({behavior:"smooth"});
}));
$("#settings-button").addEventListener("click", () => el.dialog.showModal());
$("#export-progress").addEventListener("click", () => download("architecture-cards-progress.json", JSON.stringify({format:"architecture-cards-v1", exportedAt:new Date().toISOString(), progress}, null, 2), "application/json"));
$("#export-cards").addEventListener("click", () => {
  const rows = [["id","domain","task","topic","question","answer","decision cue","study guide"], ...cards.map(c => [c.id,c.domain,c.section,c.topic,c.question,c.answer,c.cue,c.guide])];
  download("architecture-cards.csv", rows.map(row => row.map(csvCell).join(",")).join("\r\n"), "text/csv;charset=utf-8");
});
$("#import-progress").addEventListener("click", () => $("#import-file").click());
$("#import-file").addEventListener("change", async event => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const data = JSON.parse(await file.text());
    if (data.format !== "architecture-cards-v1" || !data.progress || typeof data.progress !== "object") throw new Error("Invalid backup format");
    const valid = Object.fromEntries(Object.entries(data.progress).filter(([id, state]) => byId.has(id) && state && Number.isFinite(state.due) && Number.isFinite(state.interval) && Number.isFinite(state.reps)));
    progress = valid; save(); rebuildQueue(); el.dialog.close();
  } catch { alert("This file is not a valid Architecture Cards progress backup."); }
  event.target.value = "";
});

document.addEventListener("keydown", event => {
  if (event.target.closest("input, select, dialog") || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.code === "Space" && !revealed && activeCard()) {event.preventDefault(); revealed = true; render();}
  if (revealed && ["Digit1","Digit2","Digit3"].includes(event.code)) grade({Digit1:"again",Digit2:"hard",Digit3:"good"}[event.code]);
});

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
rebuildQueue();
