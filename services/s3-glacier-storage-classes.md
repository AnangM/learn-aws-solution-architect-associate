# Amazon S3 Glacier Storage Classes

## What the Service Is
Amazon S3 Glacier storage classes provide low-cost, highly durable cloud archive storage designed specifically for data archiving and long-term backup.

## Description of the Service
All Glacier storage classes deliver 99.999999999% (11 9s) of durability across multiple Availability Zones, offering distinct tradeoffs between storage cost and retrieval speed.

## Glacier Storage Classes Comparison Table

| Storage Class | Minimum Storage Duration | Retrieval Speed | Retrieval Cost | When to Use It |
|---|---|---|---|---|
| **S3 Glacier Instant Retrieval** | 90 days | Milliseconds | Higher per-GB retrieval fee. | Rarely accessed data (once a quarter) requiring instantaneous millisecond access (e.g., medical records, news archives). |
| **S3 Glacier Flexible Recovery** | 90 days | Expedited (1-5 min), Standard (3-5 hours), Bulk (5-12 hours, free). | Low per-GB fee (free for Bulk). | Regulatory archives, disaster recovery copies, and long-term backups where hours of retrieval delay is acceptable. |
| **S3 Glacier Deep Archive** | 180 days | Standard (12 hours), Bulk (48 hours). | Lowest cost storage class in the cloud. | Long-term compliance archives (7-10+ years), healthcare and financial regulatory records accessed once or twice a year. |
