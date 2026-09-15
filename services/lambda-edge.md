# Lambda@Edge & CloudFront Functions

## What It Is
Lambda@Edge and CloudFront Functions are serverless compute capabilities that let you run custom code at AWS edge locations (CloudFront Points of Presence and Regional Edge Caches) to customize the content that CloudFront delivers with low latency.

> See canonical file: [aws-lambda.md](file:///home/aoki/Learn/aws-solution-architect/services/aws-lambda.md) and [amazon-cloudfront.md](file:///home/aoki/Learn/aws-solution-architect/services/amazon-cloudfront.md)

## Description
Edge compute allows you to intercept and manipulate web requests and responses as they flow through CloudFront at four distinct triggers: Viewer Request, Origin Request, Origin Response, and Viewer Response. CloudFront Functions provides lightweight JavaScript execution for sub-millisecond header manipulations, while Lambda@Edge provides full Node.js/Python execution environments with network access and file system support.

## When to Use
- Inspecting, rewriting, or redirecting HTTP URLs based on country, device type, or headers before hitting origin servers.
- Dynamic origin selection (content-based routing, A/B testing, multi-region failover).
- Modifying security headers (HSTS, CSP, X-Frame-Options) on responses without touching backend application code.
- Server-side rendering (SSR) of dynamic web pages or edge bot detection.

## CloudFront Edge Compute Comparison

| Capability / Attribute | CloudFront Functions | Lambda@Edge |
| :--- | :--- | :--- |
| **Runtime Support** | JavaScript (ECMAScript 5.1 compliant) | Node.js, Python |
| **Execution Location** | 450+ CloudFront edge locations (PoPs) | 13+ Regional Edge Caches (RECs) |
| **Supported Triggers** | Viewer Request, Viewer Response only | Viewer Request, Origin Request, Origin Response, Viewer Response |
| **Maximum Execution Time** | < 1 millisecond | 5 seconds (Viewer triggers), 30 seconds (Origin triggers) |
| **Memory Limit** | 2 MB | 128 MB – 10 GB |
| **Network & Disk Access** | No network access, no file system | Full internet/network access, /tmp disk storage |
| **Request Body Access** | No | Yes (can view and replace request body) |
| **Pricing / Cost** | ~1/6th the price of Lambda@Edge | Standard Lambda pricing per invocation & duration |
| **Best Used For** | Header manipulation, URL rewrites, redirects, basic token validation | Dynamic SSR, heavy JWT validation, network calls to databases/APIs, body parsing |
