# Domain 3.1 — Determine high-performing and/or scalable storage solutions

**Source transcript:** [`skillbuilder/domain-3.1.md`](../skillbuilder/domain-3.1.md)

## What this sub-domain is about

Choose object, block, or file storage using access pattern, latency, throughput, capacity growth, durability, availability, and cost.

### Learning objectives

- Object storage is API-oriented; block storage provides volumes; file storage provides shared hierarchical access.
- EBS is persistent and modifiable; instance store is local and ephemeral.
- Multipart upload helps large-object transfer; CloudFront accelerates repeated reads; Transfer Acceleration can improve long-distance uploads.
- EFS provides shared NFS capacity; FSx for Windows supports SMB/NTFS; FSx for Lustre targets high-performance processing.

## AWS services mentioned in the transcript

- **Amazon EBS**
- **Amazon EC2 instance store**
- **Amazon S3**
- **Amazon EFS**
- **Amazon FSx for Windows File Server**
- **Amazon FSx for Lustre**
- **AWS Storage Gateway**
- **Amazon CloudFront**
- **S3 Transfer Acceleration**
- **AWS DataSync**
- **AWS Direct Connect**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **S3 Intelligent-Tiering**
- **S3 Glacier storage classes**
- **AWS Backup**
- **Amazon File Cache**
- **Amazon S3 Express One Zone**

## Detailed study material

### Study point 1

Object storage is API-oriented; block storage provides volumes; file storage provides shared hierarchical access.

### Study point 2

EBS is persistent and modifiable; instance store is local and ephemeral.

### Study point 3

Multipart upload helps large-object transfer; CloudFront accelerates repeated reads; Transfer Acceleration can improve long-distance uploads.

### Study point 4

EFS provides shared NFS capacity; FSx for Windows supports SMB/NTFS; FSx for Lustre targets high-performance processing.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Shared files | EFS vs EBS | EFS shares and scales elastically; EBS provides low-latency block semantics. |
| Temporary data | Instance store vs EBS | Instance store is cheap but ephemeral; EBS persists independently. |
| Large transfer | Multipart upload vs single PUT | Multipart improves parallelism and recovery for large objects. |

## Host questions and answers

**Question inventory:** 5 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. How do you do this?

**Answer:** Use Amazon EBS Elastic Volumes to dynamically increase volume size, adjust provisioned IOPS, or change volume type (e.g., gp2 to gp3) in production without detaching the volume or restarting the EC2 instance, then resize the file system at the operating system level.

**Classification:** Direct knowledge check / operational maintenance prompt for EBS.

### Q2. If you are hosting a file system on EFS and anticipate that you will need to vertically scale the storage at one time or another, how can you scale the storage?

**Answer:** EFS scales elastically and automatically as files are added or removed, requiring no manual capacity planning or volume reconfiguration.

**Classification:** Direct knowledge check on EFS elasticity.

### Q3. Is it a task that you need to carry out similar to EBS?

**Answer:** No. Use Amazon EFS when you require fully managed, automatic capacity scaling with zero administrative intervention; use Amazon EBS when raw block-level performance is needed, but note that EBS requires manual volume modifications to increase capacity.

**Classification:** Comparative maintenance prompt between EFS and EBS.

### Q4. What level of resiliency is S3?

**Answer:** Amazon S3 is a regional service engineered with multi-AZ resilience, automatically distributing object data across a minimum of three geographically separated Availability Zones within an AWS Region to deliver 99.999999999% (11 9s) of data durability.

**Classification:** Direct knowledge check on AWS service resilience.

### Q5. For example, when designing solutions using Amazon S3, you may be asked to consider how could you improve the performance of data uploads and data retrievals?

**Answer:** Use S3 Multipart Upload (recommended for objects >100 MB) and Amazon S3 Transfer Acceleration (routing over AWS edge locations) to maximize upload throughput; use Amazon CloudFront caching or S3 Byte-Range Fetches to accelerate download latency and parallelize retrievals.

**Classification:** Performance optimization prompt for S3.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
