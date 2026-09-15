# Amazon CloudFront

## What the Service Is
Amazon CloudFront is a fast, highly secure, and programmable Content Delivery Network (CDN) service that globally distributes data, videos, applications, and APIs to users with low latency and high transfer speeds.

## Description of the Service
CloudFront delivers content through a worldwide network of 450+ Points of Presence (PoPs) and Regional Edge Caches. When users request content, the request is routed to the nearest edge location. If cached, content is returned instantly; if not, CloudFront fetches the content from designated origins (Amazon S3, ALB, EC2, API Gateway, or custom HTTP servers). CloudFront provides automated DDoS protection via AWS Shield Standard and integrates with AWS WAF.

## When to Use the Service
- Use Amazon CloudFront to deliver static website assets, streaming video, software downloads, and dynamic web content with lowest latency.
- Use Amazon CloudFront to reduce origin server load and avoid AWS data egress charges from S3 to edge locations.
- Use Amazon CloudFront to enforce HTTPS with free certificates from AWS Certificate Manager (ACM) and restrict content access via Signed URLs and Signed Cookies.

## Edge Compute Options Table

| Edge Compute Option | Runtime | Execution Timeout | Memory | When to Use It |
|---|---|---|---|---|
| **CloudFront Functions** | Lightweight JavaScript (ECMAScript 5.1+) | < 1 millisecond | 2 MB | Use for high-scale, sub-millisecond viewer-tier operations: URL redirects, URL rewrites, header manipulations, and basic token validations. |
| **Lambda@Edge** | Node.js, Python | Up to 5s (viewer request/response) or 30s (origin request/response) | Up to 10 GB | Use for complex compute tasks: user authentication/authorization against IdPs, dynamic origin selection, server-side HTML rendering at the edge. |
