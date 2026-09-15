# Amazon Simple Notification Service (Amazon SNS)

## What the Service Is
Amazon SNS is a fully managed, pub/sub messaging service that enables message delivery from publishers to multiple subscriber endpoints.

## Description of the Service
Amazon SNS decouples publishers from consumers using topics. When a message is published to an SNS topic, it is fanned out simultaneously to multiple subscribers, including Amazon SQS queues, AWS Lambda functions, HTTPS endpoints, SMS text messages, mobile push notifications, and email.

## When to Use the Service
- Use Amazon SNS for pub/sub fan-out architectures (e.g., publishing a new order event to multiple SQS queues for parallel invoice processing, fulfillment, and analytics).
- Use Amazon SNS for automated system alerts, operational notifications, and mobile SMS push messaging.

## Topic Types Table

| Topic Type | Message Ordering & Deduplication | Supported Subscribers | When to Use It |
|---|---|---|---|
| **Standard Topic** | Best-effort ordering; at-least-once delivery; unlimited throughput. | SQS, Lambda, HTTP/S, Email, SMS, Mobile Push. | Use for high-throughput broadcast fanout where strict ordering is not required. |
| **FIFO Topic** | Strict message ordering; exactly-once deduplication. | SQS FIFO queues only. | Use for ordered message fanout across multiple downstream microservices. |
