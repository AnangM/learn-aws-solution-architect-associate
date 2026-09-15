# Amazon S3 Intelligent-Tiering

## What the Service Is
Amazon S3 Intelligent-Tiering is a cloud storage class that automatically optimizes storage costs by moving data to the most cost-effective access tier when access patterns change, without performance impact or retrieval fees.

## Description of the Service
S3 Intelligent-Tiering monitors object access frequency and automatically shifts objects between three low-latency access tiers (Frequent, Infrequent, and Archive Instant) and two optional asynchronous archive tiers. It charges a small monthly monitoring fee per object (>128 KB) but charges zero data retrieval fees.

## Access Tiers Table

| Access Tier | Inactivity Trigger | Storage Cost vs. Frequent Tier | Retrieval Latency |
|---|---|---|---|
| **Frequent Access** | Default tier for new/accessed objects. | 100% (Standard S3 pricing). | Milliseconds |
| **Infrequent Access** | 30 consecutive days without access. | ~40% lower storage cost. | Milliseconds |
| **Archive Instant Access** | 90 consecutive days without access. | ~68% lower storage cost. | Milliseconds |
| **Archive Access (Optional)** | 90 to 730 days without access. | Low cost (Glacier Flexible level). | 3 to 5 hours |
| **Deep Archive Access (Optional)**| 180 to 730 days without access. | Lowest cost (Glacier Deep Archive level). | 12 hours |

## When to Use It
- Use S3 Intelligent-Tiering for data with unknown, unpredictable, or changing access patterns (e.g., data lakes, user-generated uploads, analytics datasets).
