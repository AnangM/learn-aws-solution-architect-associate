# DynamoDB Accelerator (DAX)

## What It Is
Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache purpose-built for Amazon DynamoDB that delivers up to a 10x performance improvement—from milliseconds to microseconds.

> See canonical file: [dynamodb-accelerator-dax.md](file:///home/aoki/Learn/aws-solution-architect/services/dynamodb-accelerator-dax.md)

## Description
DAX is an inline (read-through / write-through) caching tier placed in front of your DynamoDB tables inside a VPC. Because DAX is API-compatible with DynamoDB, you do not need to rewrite your application logic—simply point your existing DynamoDB SDK calls to the DAX cluster endpoint. DAX manages item caches and query caches automatically, reducing read load on DynamoDB tables and optimizing provisioned read capacity units (RCU).

## When to Use
- Applications requiring microsecond latency response times for read-heavy workloads (e.g., real-time bidding, gaming leaderboards, e-commerce product catalogs).
- Read-intensive tables experiencing repeated read requests on a small subset of popular keys ("hot partition" problem).
- Reducing DynamoDB provisioned RCU costs by serving repetitive queries directly from memory.

## Caching Behavior & Comparison

| Feature / Pattern | DAX Behavior | Alternative (ElastiCache) | When to Use DAX |
| :--- | :--- | :--- | :--- |
| **Integration Architecture** | Inline (read-through / write-through). No application code changes needed. | Side-cache (cache-aside). Application must explicitly manage cache misses and invalidations. | Use DAX for seamless, zero-code refactor caching on DynamoDB. |
| **Latency** | Microsecond response times for cached reads (`GetItem`, `BatchGetItem`, `Query`). | Sub-millisecond response times. | Use DAX when sub-millisecond is not fast enough and microsecond reads are mandatory. |
| **Item vs Query Cache** | Caches both primary key item lookups (`GetItem`) and collection queries (`Query`, `Scan`). | Caches arbitrary objects or query result sets. | Use DAX when needing transparent caching of complex DynamoDB query result sets. |
