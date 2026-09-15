# AWS Lambda

## What the Service Is
AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.

## Description of the Service
Lambda executes code in response to events triggered by over 200 AWS services (S3, DynamoDB Streams, Kinesis, SQS, API Gateway, EventBridge) and SaaS applications. It automatically scales compute execution from zero to thousands of parallel instances, billing strictly by execution duration measured in milliseconds and memory consumed.

## When to Use the Service
- Use AWS Lambda for short-lived, event-driven compute tasks (up to a 15-minute execution limit).
- Use AWS Lambda for real-time file processing, stream ingestion, webhook processing, and serverless REST/GraphQL APIs (with API Gateway).
- Use AWS Lambda for automated infrastructure maintenance and operational tasks triggered by CloudWatch alarms or EventBridge events.

## Lambda Features & Edge Variations

| Feature / Variant | Description | When to Use It |
|---|---|---|
| **Standard Lambda** | Runs in regional AWS data centers inside or outside customer VPCs, up to 15 min execution, 10 GB RAM, 10 GB ephemeral `/tmp`. | Use for general serverless backend logic, APIs, ETL, and stream event processing. |
| **Lambda Provisioned Concurrency** | Keeps pre-warmed execution environments ready to respond immediately to execution requests. | Use when eliminating cold-start latency is critical for interactive user-facing APIs. |
| **Lambda@Edge** | Executes Lambda functions at CloudFront edge locations globally; up to 30s timeout on viewer/origin responses. | Use when complex, compute-intensive customization of HTTP requests/responses (e.g., auth tokens, header rewriting) is required close to users. |
| **CloudFront Functions** | Lightweight sub-millisecond JavaScript execution at 450+ CloudFront edge PoPs; up to 1ms runtime. | Use for high-scale, simple viewer-tier tasks: URL rewrites/redirects, HTTP header normalizations, and simple JWT verifications. |
