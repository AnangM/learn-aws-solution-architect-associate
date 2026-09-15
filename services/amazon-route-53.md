# Amazon Route 53

## What the Service Is
Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service designed to route end users to internet applications by translating human-readable names into IP addresses.

## Description of the Service
Route 53 operates on an anycast global network of DNS servers, delivering 100% SLA availability. It functions as a domain registrar, DNS authoritative server (Public and Private Hosted Zones), and health-checking service. It supports special AWS Alias records that route directly to AWS resources (ALBs, CloudFront distributions, S3 website buckets) without DNS lookup charges.

## When to Use the Service
- Use Amazon Route 53 for public domain registration and global DNS resolution.
- Use Amazon Route 53 Private Hosted Zones for split-view DNS and internal service discovery within Amazon VPCs.
- Use Amazon Route 53 for advanced multi-region traffic routing and automated failover.

## Routing Policies Table

| Routing Policy | What the Policy Is About | When to Use It |
|---|---|---|
| **Simple Routing** | Standard DNS resolution returning one or more IP addresses in random order. No health checks. | Use for a single resource (e.g., one web server) or basic round-robin DNS. |
| **Weighted Routing** | Distributes traffic across multiple resources in proportions you define (e.g., 80% to v1, 20% to v2). | Use for canary testing, blue/green deployments, and gradual workload migrations. |
| **Latency-Based Routing** | Routes user requests to the AWS Region that provides the lowest network latency for that specific user. | Use when serving users globally from multiple AWS regions to optimize response times. |
| **Failover Routing** | Configures active-passive failover: routes to primary resource while healthy; flips to standby when health check fails. | Use for primary/secondary disaster recovery architectures. |
| **Geolocation Routing** | Routes traffic based on the geographic location of the DNS requester (continent, country, or US state). | Use for localized content delivery, language localization, and licensing compliance. |
| **Geoproximity Routing** | Routes traffic based on geographic distance between users and AWS resources, customizable with "bias" values via Route 53 Traffic Flow. | Use when you want to expand or shrink the geographic serving boundary of specific data centers. |
| **Multivalue Answer Routing** | Returns up to eight healthy records selected randomly from all healthy endpoints; supports Route 53 health checks. | Use for simple DNS-based load balancing with health-checking resilience. |
| **IP-Based Routing** | Routes users based on the CIDR block that their client IP address belongs to. | Use to optimize performance or apply custom routing rules for specific ISPs or enterprise partner IP ranges. |
