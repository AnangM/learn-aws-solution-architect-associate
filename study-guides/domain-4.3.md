# Domain 4.3 — Design cost-optimized database solutions

**Source transcript:** [`skillbuilder/domain-4.3.md`](../skillbuilder/domain-4.3.md)

## What this sub-domain is about

Choose stores from access patterns and growth, move unsuitable data out of expensive relational systems, and balance operations with performance and availability.

### Learning objectives

- Relational systems fit transactions, joins, and constraints but are not ideal for every data type.
- Store large objects in S3 with database metadata; use DynamoDB for fitting key-value access and caches for hot reads.
- Managed databases reduce provisioning, patching, replication, and backup work but still incur capacity, request, storage, and transfer costs.
- Check schema, SQL features, transaction boundaries, consistency, and latency before migration.

## AWS services mentioned in the transcript

- **Amazon RDS**
- **Amazon Aurora**
- **Amazon DynamoDB**
- **Amazon S3**
- **Amazon ElastiCache**
- **Amazon Redshift**
- **Amazon Athena**
- **AWS Database Migration Service**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **Amazon DocumentDB**
- **Amazon Neptune**
- **Amazon Timestream**
- **Amazon OpenSearch Service**
- **Amazon MemoryDB**
- **AWS Glue**

## Detailed study material

### Study point 1

Relational systems fit transactions, joins, and constraints but are not ideal for every data type.

### Study point 2

Store large objects in S3 with database metadata; use DynamoDB for fitting key-value access and caches for hot reads.

### Study point 3

Managed databases reduce provisioning, patching, replication, and backup work but still incur capacity, request, storage, and transfer costs.

### Study point 4

Check schema, SQL features, transaction boundaries, consistency, and latency before migration.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Large objects | S3 + metadata vs RDS BLOBs | S3 scales and supports lifecycle; BLOBs co-locate transactionally. |
| Key-value scale | DynamoDB vs relational | DynamoDB reduces operations when joins are not required. |
| Hot reads | ElastiCache vs larger DB | Caching reduces repeated work but adds invalidation design. |

## Host questions and answers

**Question inventory:** 5 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. So how do you choose the right data store for your data?

**Answer:** Use workload access patterns, growth rate, schema structure, and query complexity to choose your data store: use Amazon S3 for large binary objects (BLOBs) and static assets, use Amazon DynamoDB for high-throughput key-value lookups with flexible schemas, and use Amazon RDS/Aurora when relational ACID compliance, structured schemas, or multi-table joins are required.

**Classification:** Architectural decision framework prompt.

### Q2. Dive deeper into other considerations such as does the processing and storing of this data use database specific features?

**Answer:** Use Amazon RDS (or self-managed database engines on EC2) when your application requires proprietary or database-specific features like stored procedures, user-defined functions, triggers, or custom DB extensions; use managed AWS purpose-built databases (like DynamoDB or Aurora) when workloads can adhere to cloud-native, decoupled design patterns.

**Classification:** Technical requirement prompt for database engine selection.

### Q3. Are table and entity definitions in your database schema going to remain fixed as your application evolves?

**Answer:** Use Amazon RDS or Aurora when table schemas are structured, consistent, and rely on rigid entity definitions; use Amazon DynamoDB when schema definitions evolve continuously or entities have varied, semi-structured attributes that benefit from a schema-less NoSQL model.

**Classification:** Data-modeling prompt comparing relational vs. NoSQL schemas.

### Q4. Would you like to enforce constraints across different tables in your data model while storing the data?

**Answer:** Use Amazon RDS/Aurora when you must enforce referential integrity, foreign key constraints, and multi-table ACID transactions directly at the database layer; use Amazon DynamoDB when data can be denormalized or partitioned so that relationship integrity is managed in the application layer.

**Classification:** Data integrity prompt for relational constraints.

### Q5. What if we can move a subset of data to a no SQL data store such as DynamoDB?

**Answer:** Use Amazon DynamoDB when you want to offload operational overhead (hardware provisioning, replication, cluster scaling, and software patching) and lower total cost of ownership by moving semi-structured or high-volume key-value datasets out of expensive relational database instances.

**Classification:** Cost-optimization migration prompt.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
