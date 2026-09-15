# AWS Step Functions

## What the Service Is
AWS Step Functions is a low-code, visual serverless orchestration service used to coordinate multiple AWS services into flexible workflows.

## Description of the Service
Step Functions represents workflows as state machines written in Amazon States Language (JSON/YAML). It manages state, branching logic, parallel execution, retries with exponential backoff, try/catch error handling, and human-in-the-loop approval steps.

## When to Use the Service
- Use AWS Step Functions when coordinating multi-step distributed workflows, long-running processes (up to 1 year), and complex ETL data pipelines.
- Use AWS Step Functions to orchestrate multiple AWS Lambda functions and container tasks, eliminating custom orchestration glue code.

## Workflow Types Table

| Workflow Type | Maximum Execution Duration | Execution Rate & Model | Pricing | When to Use It |
|---|---|---|---|---|
| **Standard Workflows** | Up to 1 year | Up to 2,000 executions/sec; exactly-once execution. | Billed per state transition. | Use for long-running, auditable business processes, order fulfillment, machine learning pipelines, and human approval workflows. |
| **Express Workflows** | Up to 5 minutes | Up to 100,000+ executions/sec; at-least-once execution. | Billed by execution duration and memory. | Use for high-volume, short-duration event processing, IoT data ingestion, real-time API transformation, and stream processing. |
