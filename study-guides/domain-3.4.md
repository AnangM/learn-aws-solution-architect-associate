# Domain 3.4 — Determine high-performing and/or scalable network architectures

**Source transcript:** [`skillbuilder/domain-3.4.md`](../skillbuilder/domain-3.4.md)

## What this sub-domain is about

Choose network, hybrid, global, edge, and transfer services using bandwidth, latency, jitter, throughput, security, and scale.

### Learning objectives

- Bandwidth is capacity; throughput is delivered work; latency is delay; jitter is variation.
- VPN is encrypted over the internet; Direct Connect is dedicated and predictable but needs planning.
- Transit Gateway centralizes attachments; peering is direct; PrivateLink is narrow provider-consumer exposure.
- CloudFront caches HTTP content; Route 53 answers DNS; Global Accelerator improves supported TCP/UDP paths and failover.

## AWS services mentioned in the transcript

- **Amazon VPC**
- **Route 53**
- **CloudFront**
- **AWS Global Accelerator**
- **AWS Direct Connect**
- **AWS Site-to-Site VPN**
- **AWS Transit Gateway**
- **AWS CloudHub**
- **VPC peering**
- **AWS PrivateLink**
- **VPC endpoints**
- **AWS DataSync**
- **AWS Snow Family**
- **AWS Transfer Family**
- **AWS DMS**
- **S3 Multi-Region Access Points**
- **DynamoDB global tables**
- **Elastic Load Balancing**
- **EC2 Auto Scaling**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Direct Connect Gateway**
- **Route 53 Resolver**
- **AWS Client VPN**
- **AWS Network Manager**
- **AWS Cloud WAN**
- **AWS Network Firewall**

## Detailed study material

### Study point 1

Bandwidth is capacity; throughput is delivered work; latency is delay; jitter is variation.

### Study point 2

VPN is encrypted over the internet; Direct Connect is dedicated and predictable but needs planning.

### Study point 3

Transit Gateway centralizes attachments; peering is direct; PrivateLink is narrow provider-consumer exposure.

### Study point 4

CloudFront caches HTTP content; Route 53 answers DNS; Global Accelerator improves supported TCP/UDP paths and failover.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Hybrid | VPN vs Direct Connect | VPN usually costs less and deploys faster; Direct Connect fits sustained throughput or predictable paths. |
| Global web | CloudFront vs Global Accelerator | CloudFront caches HTTP(S); Global Accelerator routes TCP/UDP. |
| VPCs | Transit Gateway vs peering | Transit Gateway scales hub-and-spoke; peering is simple for few direct links. |

## Host questions and answers

**Question inventory:** 14 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. What components are needed for your VPC?

**Answer:** A functional VPC requires an IPv4 CIDR block, public and private subnets distributed across at least two Availability Zones, route tables, an Internet Gateway for public subnet traffic, NAT Gateways for secure private subnet outbound internet egress, Network ACLs for stateless subnet-level perimeter control, and Security Groups for stateful instance-level firewalls.

**Classification:** VPC foundation and core components check.

### Q2. How would you design and secure this architecture?

**Answer:** Use AWS Direct Connect (or AWS Site-to-Site VPN with IPsec encryption) terminated on an AWS Transit Gateway or Virtual Private Gateway, using private BGP routing, route tables, and Security Groups to ensure on-premises resources communicate strictly with private subnets without public internet traversal.

**Classification:** Hybrid network architecture design scenario.

### Q3. What AWS service or feature would you use to route the traffic to the correct Region?

**Answer:** Use Amazon Route 53 Geoproximity routing (using Route 53 Traffic Flow to configure routing biases) or Geolocation routing policies to direct user DNS queries to the AWS Region geographically closest to the end user's location.

**Classification:** Route 53 routing policy selection prompt.

### Q4. How would you architecture resources for a global customer base accessing a web-based application?

**Answer:** Use Amazon CloudFront as the global edge caching layer, Amazon Route 53 with Latency-based or Geolocation routing policies pointing to multi-region Application Load Balancers, and AWS WAF at CloudFront edge locations to protect against web application exploits.

**Classification:** Global web application architecture prompt.

### Q5. Would you use CloudFront, Global Accelerator, serverless solutions to meet scale while minimizing cost?

**Answer:** Use Amazon CloudFront to cache static and dynamic web content (HTTP/S) at edge locations; use AWS Global Accelerator when accelerating non-HTTP protocols (TCP/UDP) or when requiring static Anycast IP addresses for fast regional failover; and use serverless compute (AWS Lambda, Amazon API Gateway) to scale to zero and minimize idle compute expenses.

**Classification:** Global acceleration and compute service trade-off prompt.

### Q6. How will you scale while meeting your database and storage needs?

**Answer:** Use Amazon S3 Multi-Region Access Points for global object storage, Amazon DynamoDB Global Tables for multi-region active-active NoSQL replication, and Amazon Aurora Global Database for cross-region relational read scalability with sub-second replication latency.

**Classification:** Multi-region data scaling prompt.

### Q7. How do you ensure your customer latency requirements are met at scale?

**Answer:** Use Amazon CloudFront edge caching to serve content close to users, Amazon Route 53 Latency-Based Routing to direct users to the lowest-latency AWS Region, and in-memory caching (Amazon ElastiCache or DAX) to deliver sub-millisecond query responses.

**Classification:** Latency optimization architectural prompt.

### Q8. What if you have customers in three or more Regions around the world?

**Answer:** Use a multi-region active-active architecture: deploy regional compute tiers (ALB + Auto Scaling EC2 or ECS) in each geographic region, route end users via Route 53 Latency-based routing, and replicate data across regions using DynamoDB Global Tables or Aurora Global Database.

**Classification:** Multi-region deployment scenario.

### Q9. Given this architecture, what types of things can we do to improve scalability?

**Answer:** Use horizontal Auto Scaling with smaller, granular EC2 instance sizes, introduce Amazon CloudFront to absorb static asset requests, and deploy Amazon ElastiCache to cache hot database queries.

**Classification:** Scalability optimization prompt.

### Q10. What types of things did you come up with?

**Answer:** Use Amazon CloudFront for edge caching, Amazon ElastiCache for in-memory database query offloading, and fine-tuned Auto Scaling step/target-tracking policies with granular instance sizing.

**Classification:** Brainstorming review prompt for system scalability.

### Q11. Adding CloudFront?

**Answer:** Use Amazon CloudFront when serving web traffic globally to offload static and cacheable dynamic GET requests from origin ALBs/EC2 instances to hundreds of worldwide edge locations, dramatically lowering origin load and improving response times.

**Classification:** CloudFront caching scenario prompt.

### Q12. What about ElastiCache?

**Answer:** Use Amazon ElastiCache (Redis or Memcached) when relational database reads create high CPU contention, caching frequently queried data in memory with sub-millisecond latency to protect databases during traffic spikes.

**Classification:** Database caching scenario prompt.

### Q13. How might you build a global, highly scalable serverless solution?

**Answer:** Use Amazon S3 for static frontend hosting fronted by Amazon CloudFront, Amazon API Gateway and AWS Lambda for serverless backend business logic, and Amazon DynamoDB Global Tables for multi-region active-active data storage.

**Classification:** Serverless global architecture design prompt.

### Q14. Would Global Accelerator be useful here?

**Answer:** Yes. Use AWS Global Accelerator (or S3 Multi-Region Access Points powered by Global Accelerator) when routing internet client traffic over the congested public internet onto AWS's private global fiber network via static Anycast IPs to maximize upload/download speed and provide instant failover across regions.

**Classification:** Global Accelerator evaluation prompt.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
