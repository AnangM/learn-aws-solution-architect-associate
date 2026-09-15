# AWS X-Ray

## What It Is
AWS X-Ray is a distributed tracing and application performance monitoring service that helps developers analyze and debug distributed applications, such as those built using a microservices or serverless architecture.

> See canonical file: [aws-xray.md](file:///home/aoki/Learn/aws-solution-architect/services/aws-xray.md)

## Description
AWS X-Ray collects data about requests that your application serves, providing tools to view, filter, and gain insights into that data to identify issues and opportunities for optimization. X-Ray generates an end-to-end service map that traces requests as they traverse API Gateways, Lambda functions, ECS/EKS containers, EC2 instances, and downstream database/queue calls.

## When to Use
- Identifying high-latency bottlenecks and performance issues across distributed microservices.
- Visualizing application dependency graphs and real-time service maps.
- Pinpointing root causes of 4xx and 5xx errors across complex multi-tier architectures.
- Tracing asynchronous events and workflows orchestrated by SQS, SNS, and Step Functions.

## Core Concepts & Components

| Concept / Component | Description | When to Use |
| :--- | :--- | :--- |
| **Segments & Subsegments** | Breaks down request execution into granular compute time, network calls, database queries, and downstream HTTP calls. | Use inside application code using the X-Ray SDK to record method execution times and external API latency. |
| **Service Map** | Visual dependency graph showing all microservices, databases, and external APIs with error rates and latency heatmaps. | Use for architectural visualization and rapid incident triage during performance degradation. |
| **Sampling Rules** | Configurable rules determining what percentage of requests are traced (default: 1 req/sec and 5% of additional requests). | Use to control monitoring costs while ensuring statistically representative trace sampling. |
| **X-Ray Daemon / ADOT** | Background agent that buffers trace data over UDP port 2000 and uploads batches to X-Ray via HTTPS. | Deploy alongside containerized (ECS/EKS) or EC2 workloads to offload trace shipping from the application process. |
