# Amazon Aurora

## What the Service Is
Amazon Aurora is a fully managed, cloud-native relational database engine compatible with MySQL and PostgreSQL, offering up to 5x the throughput of standard MySQL and 3x the throughput of standard PostgreSQL.

## Description of the Service
Aurora decouples compute and storage. Its distributed storage volume spans three Availability Zones, maintaining six copies of data with continuous, automatic replication to Amazon S3. Storage scales automatically from 10 GB up to 128 TB in 10 GB increments without downtime. Aurora provides self-healing storage, sub-30 second automated failover, and up to 15 read replicas.

## When to Use the Service
- Use Amazon Aurora for high-performance enterprise OLTP workloads requiring maximum throughput, sub-second replication, and rapid automated failover.
- Use Amazon Aurora for cross-region global disaster recovery and read scaling.

## Deployment Editions & Modes

| Edition / Feature | Description | When to Use It |
|---|---|---|
| **Aurora Provisioned** | Dedicated database instances provisioned by instance size (memory/compute). | Use for steady-state workloads with predictable capacity and sustained transaction volumes. |
| **Aurora Serverless v2** | Automatically scales compute capacity instantly in fine-grained increments (ACUs) based on real-time application demand. | Use for unpredictable, intermittent, or variable workloads; multi-tenant apps; and rapid scaling requirements. |
| **Aurora Global Database** | Dedicated storage-based replication across up to 5 secondary AWS Regions with typical latency <1 second. | Use for globally distributed applications requiring fast local read latency and rapid cross-region disaster recovery (RPO < 1s, RTO < 1 min). |
| **Aurora Multi-Master** | Multi-AZ active-active writes across multiple database instances in a single region. | Use when application requires continuous write availability with zero downtime during instance failures. |
| **Aurora I/O-Optimized** | Storage configuration delivering improved price-performance for I/O-intensive workloads by eliminating per-request I/O charges. | Use when I/O costs exceed 25% of total Aurora database spend. |
