# Amazon Simple Storage Service (Amazon S3)

## What the Service Is
Amazon S3 is an industry-leading object storage service offering industry-leading scalability, data availability, security, and performance. It stores unstructured data as objects within buckets.

## Description of the Service
Amazon S3 stores arbitrary amounts of data with 99.999999999% (11 9s) of data durability. Data in S3 is stored as key-value objects up to 5 TB in size, organized in user-created buckets. It natively provides server-side and client-side encryption, versioning, automated lifecycle management, cross-region replication, fine-grained access control via bucket and IAM policies, and integrated analytics tools.

## When to Use the Service
- Use Amazon S3 for storing unstructured objects: images, videos, backups, archives, big data analytics datasets, and machine learning training corpora.
- Use Amazon S3 for static website hosting (HTML, CSS, JS, client-side frameworks).
- Use Amazon S3 as the central storage repository for cloud data lakes (integrated with AWS Lake Formation, Athena, Glue, and EMR).

## Storage Classes and Tiering

| Storage Class | What the Class Is About | When to Use It |
|---|---|---|
| **S3 Standard** | High durability (11 9s), high availability across >=3 AZs, low latency, and high throughput. | Use for frequently accessed, active data, dynamic websites, cloud applications, and content distribution. |
| **S3 Intelligent-Tiering** | Automatically moves objects between 3 access tiers (frequent, infrequent, archive instant) and 2 optional asynchronous archive tiers based on access frequency with zero retrieval fees. | Use for data with unknown, changing, or unpredictable access patterns to optimize costs automatically. |
| **S3 Standard-Infrequent Access (Standard-IA)** | Lower storage price than Standard, rapid millisecond access, with a per-GB retrieval fee. >=3 AZs. | Use for data that is accessed less frequently but requires immediate millisecond retrieval when needed (e.g., disaster recovery copies, older backups). |
| **S3 One Zone-Infrequent Access (One Zone-IA)** | Stores data in a single Availability Zone at 20% lower cost than Standard-IA. | Use for secondary, easily re-creatable backups or non-critical infrequently accessed data that does not require multi-AZ resilience. |
| **S3 Glacier Instant Retrieval** | Lowest-cost archive storage with immediate millisecond retrieval. >=3 AZs. | Use for medical records, regulatory archives, or news media that are rarely accessed (once a quarter) but require instantaneous access upon request. |
| **S3 Glacier Flexible Recovery** | Low-cost archive storage with retrieval options: Expedited (1-5 min), Standard (3-5 hours), Bulk (5-12 hours, free). | Use for compliance archives, long-term backups, and disaster recovery data where minutes to hours of retrieval time is acceptable. |
| **S3 Glacier Deep Archive** | Lowest-cost storage class in the cloud; retrieval options: Standard (12 hours) and Bulk (48 hours). | Use for regulatory data retention (7-10+ years), healthcare compliance, and financial records accessed once or twice a year. |
| **S3 Express One Zone** | High-performance, single-AZ storage class delivering single-digit millisecond data access and 10x faster request speed than S3 Standard. | Use for latency-sensitive applications, machine learning model training iterations, and intensive real-time analytics. |

## S3 Intelligent-Tiering Access Tiers

| Tier Name | Trigger Condition | Cost Impact |
|---|---|---|
| **Frequent Access Tier** | Default landing tier for new objects. | Standard S3 storage price; no retrieval fee. |
| **Infrequent Access Tier** | Automatically entered after 30 consecutive days without access. | ~40% lower storage cost than Frequent tier; no retrieval fee. |
| **Archive Instant Access Tier** | Automatically entered after 90 consecutive days without access. | ~68% lower storage cost than Frequent tier; millisecond retrieval; no retrieval fee. |
| **Archive Access Tier (Optional)** | Opt-in; entered after 90-730 days without access. | Lowest cost similar to Glacier Flexible; async retrieval (3-5 hours). |
| **Deep Archive Access Tier (Optional)** | Opt-in; entered after 180-730 days without access. | Lowest cost similar to Glacier Deep Archive; async retrieval (12 hours). |

## Core S3 Architectural Features

| Feature | Description | When to Use It |
|---|---|---|
| **S3 Lifecycle Configuration** | Automated rules to transition objects between classes based on age or expire/delete them. | Use when object access patterns follow a predictable calendar timeline. |
| **S3 Object Lock** | Write Once, Read Many (WORM) storage preventing deletion or overwrite during retention periods. | Use for strict financial/legal compliance (SEC Rule 17a-4, FINRA). |
| **S3 Replication (SRR / CRR)** | Automatic, asynchronous replication of objects between buckets in the same or different AWS regions. | Use for cross-region disaster recovery, compliance, and reduced latency for global users. |
| **S3 Multi-Region Access Points** | Global endpoints routing S3 requests across multiple buckets in different regions via AWS Global Accelerator. | Use to optimize application upload/download routing across multi-region architectures. |
| **S3 Transfer Acceleration** | Routes client uploads/downloads through AWS CloudFront globally distributed Edge Locations. | Use for long-distance file transfers across continents into a centralized bucket. |
| **S3 Storage Lens** | Organization-wide visibility into object storage usage, activity trends, and cost-optimization recommendations. | Use to discover unattached storage, audit encryption coverage, and optimize spending across hundreds of accounts. |
