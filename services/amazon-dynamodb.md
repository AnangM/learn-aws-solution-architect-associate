# Amazon DynamoDB

## What the Service Is
Amazon DynamoDB is a serverless, fully managed NoSQL key-value and document database that delivers single-digit millisecond performance at any scale.

## Description of the Service
DynamoDB provides automatic multi-AZ data replication, built-in security, automated backups with Point-in-Time Recovery (PITR), in-memory caching via DynamoDB Accelerator (DAX), and multi-region active-active replication via Global Tables. Data is indexed by Partition Key (HASH) and optional Sort Key (RANGE), supplemented by Local Secondary Indexes (LSI) and Global Secondary Indexes (GSI).

## When to Use the Service
- Use Amazon DynamoDB for massive-scale applications requiring predictable single-digit millisecond latency (e.g., mobile apps, gaming state, user profiles, shopping carts, session state, IoT telemetry).
- Use Amazon DynamoDB when schema requirements are flexible, denormalized, and do not require multi-table relational joins.

## Capacity Modes & Features

| Mode / Feature | What It Is | When to Use It |
|---|---|---|
| **On-Demand Capacity Mode** | Serves requests without capacity planning; automatically accommodates traffic spikes; pay per read/write request. | Use for unpredictable traffic, new applications with unknown volume, or bursty intermittent workloads. |
| **Provisioned Capacity Mode** | Specify Read Capacity Units (RCUs) and Write Capacity Units (WCUs); supports Auto Scaling and Reserved Capacity. | Use for predictable, steady-state workloads to minimize costs. |
| **DynamoDB Global Tables** | Multi-Region, multi-active fully managed replication across selected AWS regions. | Use for globally distributed applications requiring fast local read/write access and multi-region disaster resilience. |
| **DynamoDB Streams** | Time-ordered sequence of item-level modifications; retained for 24 hours. | Use to trigger event-driven AWS Lambda functions, replicate data, or synchronize search indexes. |
| **DynamoDB Accelerator (DAX)** | Fully managed, highly available in-memory write-through cache for DynamoDB. | Use to reduce DynamoDB response times from milliseconds to microseconds for read-heavy workloads. |
| **Time to Live (TTL)** | Automatically deletes expired items based on timestamp attribute without consuming write throughput. | Use for session data, temporary logs, and compliance data retention windows. |
