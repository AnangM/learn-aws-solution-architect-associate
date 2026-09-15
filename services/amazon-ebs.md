# Amazon Elastic Block Store (Amazon EBS)

## What the Service Is
Amazon EBS provides high-performance, persistent block-level storage volumes designed for use with Amazon EC2 instances.

## Description of the Service
EBS volumes act like raw, unformatted hard drives or flash drives that attach to EC2 instances over a dedicated storage network. Each volume is automatically replicated within its Availability Zone to protect against component failure. EBS supports live configuration changes (Elastic Volumes), encryption at rest using AWS KMS, and point-in-time incremental crash-consistent snapshots to Amazon S3.

## When to Use the Service
- Use Amazon EBS for primary boot volumes and operating system storage for Amazon EC2 instances.
- Use Amazon EBS for relational and NoSQL databases (MySQL, PostgreSQL, Oracle, SQL Server, MongoDB) requiring low latency and consistent IOPS.
- Use Amazon EBS when applications require filesystem-level persistence that remains intact after instance termination.

## EBS Volume Types and Classes

| Volume Category | Volume Type | Characteristics & IOPS | When to Use It |
|---|---|---|---|
| **General Purpose SSD** | **gp3** | Baseline 3,000 IOPS and 125 MB/s throughput included; scales up to 16,000 IOPS and 1,000 MB/s independently of storage size. 20% cheaper than gp2. | Use as the recommended default for most workloads: boot volumes, virtual desktops, medium databases, and dev/test environments. |
| **General Purpose SSD** | **gp2** | IOPS scale linearly with volume size (3 IOPS per GB up to 16,000 IOPS); burstable to 3,000 IOPS. | Use for legacy environments; generally migrate to gp3 for independent IOPS/size scaling and lower cost. |
| **Provisioned IOPS SSD** | **io2 Block Express** | Sub-millisecond latency; 99.999% durability; up to 256,000 IOPS and 4,000 MB/s throughput per volume; up to 1,000 IOPS per GB. | Use for mission-critical, high-throughput, latency-sensitive database workloads (Oracle, SAP HANA, Microsoft SQL Server). |
| **Provisioned IOPS SSD** | **io1** | Up to 64,000 IOPS and 1,000 MB/s throughput with up to 50 IOPS per GB. | Use for sustained I/O intensive databases; supersede with io2 for higher durability and performance. |
| **Throughput Optimized HDD** | **st1** | Low-cost magnetic storage; throughput up to 500 MB/s; cannot be used as boot volume. | Use for frequently accessed, throughput-intensive large sequential workloads: big data, data warehousing, and log processing. |
| **Cold HDD** | **sc1** | Lowest-cost magnetic storage; throughput up to 250 MB/s; cannot be used as boot volume. | Use for infrequently accessed, large sequential datasets where low storage cost is prioritized over performance. |

## Key Features
- **EBS Elastic Volumes:** Live adjustment of volume size, IOPS, and volume type on running instances without downtime or detaching.
- **EBS Multi-Attach:** Allows attaching a single Provisioned IOPS (io1/io2) volume to up to 16 Nitro-based EC2 instances within the same AZ for cluster-aware file systems.
