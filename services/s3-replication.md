# Amazon S3 Replication (SRR & CRR)

## What the Service Is
Amazon S3 Replication automatically, asynchronously copies objects across Amazon S3 buckets in the same or different AWS Regions.

## Description of the Service
- **Cross-Region Replication (CRR):** Replicates objects between buckets in different AWS Regions for disaster recovery, compliance, and reduced access latency.
- **Same-Region Replication (SRR):** Replicates objects between buckets in the same Region for log aggregation or environment separation (dev/prod).
- Requires S3 Versioning enabled on both source and destination buckets.

## When to Use the Service
- Use S3 CRR for geographic compliance mandates and cross-region disaster recovery.
