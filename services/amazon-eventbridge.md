# Amazon EventBridge

## What the Service Is
Amazon EventBridge is a serverless event bus service that makes it easy to connect applications together using data from your own applications, integrated SaaS applications, and AWS services.

## Description of the Service
EventBridge ingests real-time streams of events, evaluates JSON-based routing rules against event payloads, and routes matching events to over 20 AWS targets (Lambda, Step Functions, SQS, SNS, ECS tasks, Kinesis). EventBridge includes EventBridge Pipes (point-to-point integration with filtering/enrichment) and EventBridge Scheduler (scheduling cron and one-time tasks).

## When to Use the Service
- Use Amazon EventBridge as the central nervous system for event-driven architectures.
- Use EventBridge to trigger automated remediation actions from AWS system state changes (e.g., EC2 state change, GuardDuty finding).
- Use EventBridge to ingest third-party SaaS webhook events (Zendesk, Datadog, PagerDuty, Salesforce) without writing custom webhook listeners.
