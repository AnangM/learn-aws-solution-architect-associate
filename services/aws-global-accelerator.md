# AWS Global Accelerator

## What the Service Is
AWS Global Accelerator is a networking service that improves the availability and performance of applications with global users by using the AWS global network infrastructure.

## Description of the Service
Global Accelerator provides static Anycast IP addresses that serve as fixed entry points to your application endpoints across multiple AWS Regions (ALB, NLB, EC2, Elastic IPs). Client traffic enters the nearest AWS edge location and travels entirely across AWS's private, congestion-free fiber backbone. It continuously monitors endpoint health and reroutes traffic within 30 seconds upon failure.

## When to Use the Service
- Use AWS Global Accelerator for non-HTTP applications (gaming, IoT, VoIP, media streaming via UDP/TCP) requiring low latency and jitter.
- Use AWS Global Accelerator when clients or firewall whitelists require static Anycast IP addresses that never change.
- Use AWS Global Accelerator for fast multi-region automated failover (RTO < 30 seconds).

## Comparison: CloudFront vs. AWS Global Accelerator

| Dimension | Amazon CloudFront | AWS Global Accelerator |
|---|---|---|
| **Traffic Handled** | HTTP, HTTPS, WebSocket (Layer 7). | TCP, UDP, HTTP, HTTPS (Layer 4 & 7). |
| **Caching** | Caches static and dynamic content at edge locations. | No caching; proxies traffic directly to origin via AWS backbone. |
| **IP Addresses** | Dynamic DNS-resolved edge IPs. | Two fixed, static Anycast IP addresses. |
| **Primary Benefit** | Offload origin load and accelerate cacheable web content. | Reduce network latency, jitter, and packet loss for live TCP/UDP traffic. |
