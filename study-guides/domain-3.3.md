# Domain 3.3 — Determine high-performing database solutions

**Source transcript:** [`skillbuilder/domain-3.3.md`](../skillbuilder/domain-3.3.md)

## What this sub-domain is about

Choose purpose-built databases and configure replicas, caches, proxies, storage, and capacity for latency, throughput, consistency, availability, and scale.

### Learning objectives

- Relational databases fit joins and transactions; DynamoDB fits managed key-value/document access; caches fit hot repeated reads.
- RDS read replicas scale reads; Multi-AZ is managed failover, not direct read scaling.
- Aurora uses shared cluster storage and replicas; Aurora Global Database addresses cross-Region needs.
- RDS Proxy pools connections; Aurora Serverless adjusts capacity for variable workloads.

## AWS services mentioned in the transcript

- **Amazon RDS**
- **Amazon Aurora**
- **Amazon DynamoDB**
- **Amazon ElastiCache**
- **DynamoDB Accelerator (DAX)**
- **Amazon RDS Proxy**
- **Aurora Serverless**
- **Amazon CloudWatch**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **Amazon Neptune**
- **Amazon DocumentDB**
- **Amazon Timestream**
- **Amazon Keyspaces**
- **Amazon Redshift**
- **Amazon MemoryDB**
- **AWS DMS**

## Detailed study material

### Study point 1

Relational databases fit joins and transactions; DynamoDB fits managed key-value/document access; caches fit hot repeated reads.

### Study point 2

RDS read replicas scale reads; Multi-AZ is managed failover, not direct read scaling.

### Study point 3

Aurora uses shared cluster storage and replicas; Aurora Global Database addresses cross-Region needs.

### Study point 4

RDS Proxy pools connections; Aurora Serverless adjusts capacity for variable workloads.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Relational reads | Read replica vs Multi-AZ | Replicas scale reads; Multi-AZ provides failover. |
| Caching | DAX vs ElastiCache | DAX is DynamoDB-aware; ElastiCache is a general application cache. |
| Variable load | Aurora Serverless vs provisioned | Serverless suits intermittent demand; provisioned suits steady controlled workloads. |

## Host questions and answers

**Question inventory:** 12 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Dive deeper and know how these services work and operate to be able to answer questions that go beyond, do I need a relational database?

**Answer:** Use purpose-built databases based on specific workload access patterns: use Amazon DynamoDB for high-velocity key-value/document reads; use Amazon Aurora/RDS for relational ACID transactions and complex joins; use Amazon Neptune for graph relationship traversal; use Amazon Timestream for IoT time-series telemetry; and use Amazon ElastiCache for sub-millisecond in-memory caching.

**Classification:** Database architecture selection framework prompt.

### Q2. How do you maximize the performance of your relational database engines?

**Answer:** Use Amazon Aurora instead of standard RDS engines to gain up to 5x throughput improvements via distributed, striping NVMe storage; deploy Read Replicas to offload read-heavy query traffic, place Amazon ElastiCache in front of the database to cache frequent queries, and implement Amazon RDS Proxy to pool connections from transient compute services.

**Classification:** Relational database performance optimization prompt.

### Q3. What if a significant portion of your traffic is from read operations on the database?

**Answer:** Use RDS or Aurora Read Replicas (up to 15 replicas in Aurora) configured behind a cluster reader endpoint to scale read capacity horizontally across availability zones, combined with Amazon ElastiCache to serve repetitive static queries from in-memory cache.

**Classification:** Read-scaling architecture scenario.

### Q4. Would PostgreSQL be more suited for a scenario question or a use case on MySQL?

**Answer:** Use RDS/Aurora PostgreSQL when applications require complex analytical queries, geospatial data handling (PostGIS), custom procedures, or JSON indexing; use RDS/Aurora MySQL when applications leverage standard web stacks (LAMP) prioritized for fast, straightforward transactional reads and writes.

**Classification:** Database engine evaluation prompt.

### Q5. If you're dealing with an application that needs consistent single-digit millisecond performance and extremely high volumes, does it make more sense to choose DynamoDB or Aurora?

**Answer:** Use Amazon DynamoDB when predictable single-digit millisecond latency at massive request volumes is mandatory for key-value or document access without query tuning; choose Amazon Aurora only if relational joins, multi-table transactions, or complex SQL filtering are non-negotiable requirements.

**Classification:** High-throughput performance comparison prompt.

### Q6. What if you need a relational database solution with a regional failover?

**Answer:** Use Amazon Aurora Global Database when you require managed cross-region disaster recovery for relational databases, providing sub-second replication latency and fast cross-region failover with zero impact on primary database performance.

**Classification:** Cross-region relational resiliency prompt.

### Q7. Would you choose RDS MySQL or Aurora MySQL?

**Answer:** Use Aurora MySQL (with Aurora Global Database) when automated, rapid cross-region failover and minimal replication lag are required; standard RDS MySQL cross-region read replicas involve asynchronous replication lag, manual promotion steps, and manual connection string updates.

**Classification:** Scenario prompt comparing RDS and Aurora cross-region capabilities.

### Q8. Should you use caching such as ElastiCache or DynamoDB Accelerator?

**Answer:** Yes. Use an in-memory caching layer when workloads experience heavy read contention, repetitive queries, or require sub-millisecond response times to protect database instances from saturation.

**Classification:** Caching layer requirement prompt.

### Q9. And if so, why?

**Answer:** Use Amazon ElastiCache (Redis or Memcached) to cache relational database queries, manage user sessions, or rank real-time leaderboards; use DynamoDB Accelerator (DAX) specifically for DynamoDB tables when microsecond in-memory response times are required with zero application-code query rewrite.

**Classification:** In-memory caching engine comparison prompt.

### Q10. Can we use RDS Proxy to manage our connections more efficiently?

**Answer:** Yes. Use Amazon RDS Proxy when microservices or serverless applications (such as AWS Lambda functions) open frequent, transient database connections, pooling and multiplexing connections to prevent database exhaustion while accelerating failover recovery times by up to 66%.

**Classification:** Connection pooling and scalability prompt.

### Q11. What about RDS instance auto-scaling?

**Answer:** Use Aurora Serverless v2 to automatically scale database compute and memory up and down in fractional capacity increments based on real-time load; for standard RDS, scale read replicas automatically or resize the instance type during maintenance windows.

**Classification:** Compute autoscaling mechanisms for databases.

### Q12. If your workload is unpredictable, can you turn on storage auto-scaling for an RDS database instance?

**Answer:** Yes. Use Amazon RDS Storage Auto Scaling when data growth is unpredictable, allowing RDS to automatically add storage capacity dynamically without downtime up to a configured maximum threshold.

**Classification:** Direct knowledge check on storage auto-scaling.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
