# AWS WAF (Web Application Firewall)

## What the Service Is
AWS WAF is a web application firewall that helps protect your web applications and APIs against common web exploits and bots that may affect availability, compromise security, or consume excessive resources.

## Description of the Service
AWS WAF operates at Layer 7 (Application Layer) of the OSI model. It inspects incoming HTTP/HTTPS requests against customizable Web Access Control Lists (Web ACLs). Rules can filter based on IP addresses, HTTP headers, URI paths, SQL injection patterns, cross-site scripting (XSS), rate limits, and AWS Managed Rules (OWASP Top 10, Bot Control, Account Takeover Prevention).

## Supported Integration Targets

| Service Target | When to Use WAF on This Target |
|---|---|
| **Amazon CloudFront** | Protects global web applications at edge locations before malicious traffic reaches origins. |
| **Application Load Balancer (ALB)** | Protects regional multi-tier application architectures inside VPCs. |
| **Amazon API Gateway** | Protects REST and WebSocket APIs against abuse and SQLi/XSS attacks. |
| **AWS AppSync** | Protects GraphQL APIs from unauthorized query abuse. |
| **Amazon Cognito User Pools** | Protects sign-in and sign-up pages from credential stuffing and bot takeover. |
