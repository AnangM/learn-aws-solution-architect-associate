# Domain 4.4 — Design cost-optimized network architectures

**Source transcript:** [`skillbuilder/domain-4.4.md`](../skillbuilder/domain-4.4.md)

## What this sub-domain is about

Manage connectivity, transfer, API, endpoint, hybrid-link, and administration costs while preserving security and performance.

### Learning objectives

- Include connection hours, endpoint hours, processing, inter-Region transfer, egress, API calls, and service usage.
- VPN is usually lower fixed cost; Direct Connect fits sustained throughput or predictable private connectivity.
- Session Manager can avoid bastion hosts and inbound administration paths.
- Keep data and compute close and compare endpoint and NAT costs before changing topology.

## AWS services mentioned in the transcript

- **AWS Site-to-Site VPN**
- **AWS Direct Connect**
- **AWS Transit Gateway**
- **Amazon VPC**
- **VPC endpoints**
- **AWS PrivateLink**
- **AWS Systems Manager Session Manager**
- **AWS Client VPN**
- **AWS CloudTrail**
- **Amazon CloudWatch**
- **Amazon EC2**
- **Amazon CloudFront**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Network Firewall**
- **AWS Network Manager**
- **AWS Cloud WAN**
- **AWS Cost Explorer**
- **VPC Flow Logs**

## Detailed study material

### Study point 1

Include connection hours, endpoint hours, processing, inter-Region transfer, egress, API calls, and service usage.

### Study point 2

VPN is usually lower fixed cost; Direct Connect fits sustained throughput or predictable private connectivity.

### Study point 3

Session Manager can avoid bastion hosts and inbound administration paths.

### Study point 4

Keep data and compute close and compare endpoint and NAT costs before changing topology.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Hybrid | VPN vs Direct Connect | VPN usually minimizes fixed cost; Direct Connect is selected when requirements justify it. |
| Administration | Session Manager vs bastion | Session Manager avoids managing a jump host when the agent model fits. |
| AWS access | Endpoint vs NAT/public path | Compare endpoint hours and processing charges with isolation and routing benefits. |

## Host questions and answers

**Question inventory:** 5 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. And you may pause here and ask, Julie, what are you talking about?

**Answer:** Use AWS managed network services when you want to eliminate the operational burden of physical routers, switches, and cabling and shift to a pay-as-you-go consumption model; be sure to budget for data transfer charges and API calls, which are frequently overlooked.

**Classification:** Rhetorical prompt introducing AWS managed virtual networking.

### Q2. Which one would you choose to minimize costs?

**Answer:** Use AWS Site-to-Site VPN when you need a private, cost-effective hybrid connection between your on-premises data center and AWS; use AWS Direct Connect only when high throughput, dedicated bandwidth, or private leased-line consistency strictly justifies the higher fixed port and circuit costs.

**Classification:** Scenario prompt comparing Site-to-Site VPN and Direct Connect.

### Q3. When would you use a peering connection instead of a transit gateway?

**Answer:** Use VPC Peering when connecting a small number of VPCs (point-to-point, intra- or inter-Region) where traffic volume or direct routing makes it more cost-effective by avoiding the hourly attachment fees and per-GB data processing charges of AWS Transit Gateway; use Transit Gateway when hub-and-spoke scale (hundreds of VPCs) justifies management centralization over raw per-GB pricing.

**Classification:** Scenario prompt comparing VPC Peering vs. Transit Gateway costs.

### Q4. How might you set up usage plans and API keys to accomplish this?

**Answer:** Use Amazon API Gateway Usage Plans combined with API Keys when you want to control customer consumption, protect downstream services, and optimize costs by enforcing rate throttling (transactions per second / burst capacity) and quotas (call limits per day, week, or month).

**Classification:** Direct knowledge check / implementation prompt for API Gateway cost controls.

### Q5. If you want to configure a failover with minimal costs, how would you do it, a separate Direct Connect connection or a site-to-site VPN connection?

**Answer:** Use AWS Site-to-Site VPN over the internet as failover when you want to provide low-cost redundancy for an active Direct Connect connection without paying for a second provisioned, expensive Direct Connect link; use a second Direct Connect connection only when maximum bandwidth and predictable latency are non-negotiable during failover.

**Classification:** Scenario prompt for hybrid failover architecture.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
