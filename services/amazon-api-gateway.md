# Amazon API Gateway

## What the Service Is
Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.

## Description of the Service
API Gateway acts as the "front door" for applications to access data, business logic, or functionality from backend services (AWS Lambda, containerized microservices, or public HTTP endpoints). It handles traffic management, CORS support, authorization and access control (IAM, Cognito, Lambda authorizers), throttling, monitoring, and API versioning.

## When to Use the Service
- Use Amazon API Gateway to expose serverless RESTful or WebSocket endpoints fronting AWS Lambda functions.
- Use Amazon API Gateway to protect backend services with Usage Plans, API Keys, and rate throttling (token bucket algorithm).

## API Types Table

| API Type | Protocol | Key Features | When to Use It |
|---|---|---|---|
| **HTTP APIs** | HTTP/HTTPS | Low latency, cost-effective (up to 70% cheaper than REST), native OIDC/OAuth 2.0 authorization, automatic CORS. | Use for modern serverless RESTful APIs with AWS Lambda or HTTP backends where advanced API management features are not needed. |
| **REST APIs** | HTTP/HTTPS | Full feature set: API Keys, Usage Plans, client SDK generation, request/response validation, WAF integration, caching. | Use when enterprise API management features (per-client rate limiting, usage plans, request validation, API caching) are required. |
| **WebSocket APIs** | WebSocket (WSS) | Stateful, bidirectional communication; routes messages based on JSON frame content. | Use for real-time applications: chat apps, live dashboards, multi-player gaming, and streaming updates. |

## Endpoint Types
- **Edge-Optimized:** Routes requests through AWS CloudFront globally distributed edge locations (best for geographically dispersed clients).
- **Regional:** Deployed in the target AWS Region without CloudFront edge routing (reduces latency when clients reside within the same region).
- **Private:** Accessible only from within an Amazon VPC via an interface VPC endpoint (PrivateLink).
