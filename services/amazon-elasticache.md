# Amazon ElastiCache

## What the Service Is
Amazon ElastiCache is a fully managed in-memory data store and cache service that accelerates application performance by retrieving data from fast, managed in-memory systems instead of relying solely on slower disk-based databases.

## Description of the Service
ElastiCache automates management, monitoring, patching, failure detection, and recovery of in-memory cache clusters. It supports sub-millisecond response times and can be deployed in Serverless or cluster-provisioned configurations.

## When to Use the Service
- Use Amazon ElastiCache to cache database query results, user session state, real-time leaderboards, and geospatial data.
- Use Amazon ElastiCache to offload read pressure from relational databases (RDS/Aurora) and improve response latency.

## Supported Engines Table

| Engine | Key Capabilities | When to Use It |
|---|---|---|
| **Redis (ElastiCache for Redis)** | Advanced data structures (strings, hashes, lists, sets, sorted sets), persistence, replication, Multi-AZ failover, pub/sub. | Use as the primary choice for complex caching, pub/sub messaging, geospatial queries, and session management. |
| **Memcached (ElastiCache for Memcached)** | Pure multithreaded in-memory key-value cache; simple architecture without persistence. | Use for simple object caching where multithreading provides maximum throughput per node and persistence is not required. |
