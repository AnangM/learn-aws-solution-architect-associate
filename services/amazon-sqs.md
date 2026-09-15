# Amazon Simple Queue Service (Amazon SQS)

## What the Service Is
Amazon SQS is a fully managed, distributed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.

## Description of the Service
Amazon SQS eliminates the complexity and overhead associated with managing message-oriented middleware. SQS queues act as temporary, durable buffers for messages (up to 256 KB, expandable to 2 GB with the Amazon SQS Extended Client Library via S3). It supports standard queues and First-In-First-Out (FIFO) queues.

## When to Use the Service
- Use Amazon SQS to decouple producers and consumers in distributed architectures, preventing slow downstream consumers from crashing upstream producers.
- Use Amazon SQS queue depth (`ApproximateNumberOfMessagesVisible`) to trigger dynamic auto-scaling of backend worker instances.

## Queue Types Table

| Queue Type | Delivery Guarantee | Ordering | Max Throughput | When to Use It |
|---|---|---|---|---|
| **Standard Queue** | At-least-once delivery (occasional duplicate messages). | Best-effort ordering. | Unlimited transactions per second (TPS). | Use when high throughput is required and application consumers are idempotent (can handle duplicate messages out of order). |
| **FIFO Queue** | Exactly-once processing (deduplication built-in). | Strict First-In-First-Out ordering preserved. | Up to 3,000 messages/sec with high throughput mode (or 300 msgs/sec default). | Use when operations must execute in strict chronological sequence without duplicate processing (e.g., banking transactions, order placements, ticket reservations). |

## Core SQS Configurations
- **Visibility Timeout:** Duration (default 30s, max 12h) a message is hidden from other consumers while being processed.
- **Dead-Letter Queue (DLQ):** Secondary queue where unprocessable messages are moved after reaching `maxReceiveCount`.
- **Long Polling:** Setting `WaitTimeSeconds` (1-20s) to wait for messages, reducing empty responses and lowering API costs.
