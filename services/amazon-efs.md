# Amazon Elastic File System (Amazon EFS)

## What the Service Is
Amazon EFS is a serverless, fully elastic file storage service that makes it simple to set up and run shared file systems in the AWS Cloud.

## Description of the Service
Amazon EFS supports the Network File System (NFSv4.1 and NFSv4.0) protocol, allowing thousands of EC2 instances, ECS/EKS containers, and AWS Lambda functions to access a shared file system concurrently. It scales automatically from zero to petabytes on demand without disrupting applications. It is available in Multi-AZ and Single-AZ configurations.

## When to Use the Service
- Use Amazon EFS when multiple compute instances, containers, or Lambda functions require concurrent read and write access to a shared POSIX-compliant file system.
- Use Amazon EFS for content management systems (WordPress, Drupal), development environments, media processing pipelines, and enterprise application home directories.

## Storage Classes & Tiering

| Storage Class | What the Class Is About | When to Use It |
|---|---|---|
| **EFS Standard** | Multi-AZ redundant storage designed for active, frequently accessed file data with low latency. | Use for active application files, shared web directories, and high-frequency read/write data. |
| **EFS Infrequent Access (EFS IA)** | Lower storage cost (~92% reduction) with a per-GB read/write fee for files accessed less frequently. | Use for files not accessed for 7 to 90 days, managed automatically by EFS Lifecycle Management. |
| **EFS Archive** | Lowest-cost tier for rarely accessed files, optimizing long-term retention. | Use for archival files accessed only a few times a year. |
| **EFS One Zone** | Single-AZ deployment delivering 47% lower storage cost than Multi-AZ Standard. | Use for development, non-critical workloads, or data with independent backup strategies. |

## Performance and Throughput Modes

| Mode Category | Modes Available | When to Use Which |
|---|---|---|
| **Performance Modes** | **General Purpose** vs. **Max I/O** | Use **General Purpose** for latency-sensitive operations (web servers, dev tools). Use **Max I/O** when hundreds or thousands of instances access the file system simultaneously with high aggregate throughput. |
| **Throughput Modes** | **Elastic** vs. **Provisioned** vs. **Bursting** | Use **Elastic** (recommended) for unpredictable workloads that scale throughput automatically. Use **Provisioned** when high throughput is needed regardless of stored data volume. Use **Bursting** for baseline throughput that scales with storage size. |
