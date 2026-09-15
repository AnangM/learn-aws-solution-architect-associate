# Amazon EC2 Instance Store

## What the Service Is
Amazon EC2 Instance Store is temporary (ephemeral) block-level storage physically attached to the host computer hosting your EC2 instance.

## Description of the Service
Instance store volumes provide very high disk I/O performance, high IOPS, and low latency because the physical disks (typically NVMe SSDs or HDDs) reside inside the physical server. However, instance store storage is ephemeral: all data is permanently lost when the instance is stopped, terminated, or suffers underlying hardware failure. Data survives operating system reboots only.

## When to Use the Service
- Use Amazon EC2 Instance Store when workloads require ultra-fast, local scratch space, temporary buffers, caching tiers, or session states.
- Use Amazon EC2 Instance Store for distributed databases (e.g., Apache Cassandra, Elasticsearch, Hadoop HDFS) that implement application-level data replication across multiple independent nodes.
- Do NOT use Instance Store for persistent databases, boot volumes requiring stop/start capability, or data that cannot be recovered from another source.

## Comparison: Instance Store vs. Amazon EBS

| Dimension | Amazon EC2 Instance Store | Amazon EBS |
|---|---|---|
| **Persistence** | Ephemeral: data is lost upon instance stop or termination. | Persistent: data persists independently of instance lifecycle. |
| **Attachment** | Pre-configured at launch, physically attached to host server. | Network-attached block device, can be detached and moved. |
| **Backups** | Manual backup copy to S3 or EBS required. | Native, point-in-time automated snapshots to Amazon S3. |
| **Cost** | Included in instance hourly run rate. | Billed separately based on provisioned GB and IOPS. |
| **Performance** | Maximum IOPS and lowest latency (direct bus NVMe). | High performance bounded by EBS network bandwidth limits. |
