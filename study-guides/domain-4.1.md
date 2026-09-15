# Domain 4.1 — Design cost-optimized storage solutions

**Source transcript:** [`skillbuilder/domain-4.1.md`](../skillbuilder/domain-4.1.md)

## What this sub-domain is about

Apply storage-model selection, right-sizing, lifecycle management, and performance/cost trade-offs to avoid unused capacity and features.

### Learning objectives

- Right-size capacity, IOPS, throughput, and snapshots, then measure and adjust.
- Instance store is inexpensive but not durable; EBS persists and costs separately.
- S3 classes trade storage cost, retrieval cost, and latency; lifecycle rules automate known transitions.
- Include request, retrieval, transfer, monitoring, and replication costs in total cost.

## AWS services mentioned in the transcript

- **Amazon S3**
- **Amazon EBS**
- **Amazon EFS**
- **Amazon EC2 instance store**
- **Amazon FSx**
- **AWS Storage Gateway**
- **AWS Backup**
- **Amazon CloudFront**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **S3 Intelligent-Tiering**
- **S3 Glacier storage classes**
- **AWS Compute Optimizer**
- **S3 Storage Lens**
- **Amazon File Cache**

## Detailed study material

### Study point 1

Right-size capacity, IOPS, throughput, and snapshots, then measure and adjust.

### Study point 2

Instance store is inexpensive but not durable; EBS persists and costs separately.

### Study point 3

S3 classes trade storage cost, retrieval cost, and latency; lifecycle rules automate known transitions.

### Study point 4

Include request, retrieval, transfer, monitoring, and replication costs in total cost.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Unknown access | Intelligent-Tiering vs manual lifecycle | Automatic tiers help when access is unpredictable. |
| Scratch | Instance store vs EBS | Instance store avoids volume cost but requires regeneration. |
| Block | General purpose EBS vs Provisioned IOPS | Provisioned IOPS needs sustained latency/IOPS justification. |

## Host questions and answers

**Question inventory:** 8 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. For example, how do you use cost allocation tags?

**Answer:** Use AWS Cost Allocation Tags when you need to categorize, track, and allocate cloud spend across business dimensions (such as cost center, application, department, or environment), enabling detailed filtering, grouping, and chargeback reporting in AWS Cost Explorer and AWS Budgets.

**Classification:** Direct knowledge check / operational governance prompt.

### Q2. For example, if you wanted high-level interactive financial reports, would you use Cost Explorer or the cost and usage report?

**Answer:** Use AWS Cost Explorer when you need high-level interactive visualizations, spending trends, and cost forecasting with filtering by dimensions and tags; use the AWS Cost and Usage Report (CUR) when you require granular, hourly line-item data delivered to S3 for deep SQL analytics (e.g., via Amazon Athena or Amazon QuickSight).

**Classification:** Tool selection prompt comparing Cost Explorer and CUR.

### Q3. Which S3 capability gives you the ability to automatically transition all objects in a bucket based on a period of time?

**Answer:** Use Amazon S3 Lifecycle Configuration when you have predictable, calendar- or age-based data access patterns and want to automatically transition objects to lower-cost tiers (e.g., to Standard-IA after 30 days, Glacier Flexible Recovery after 90 days) or expire/delete them permanently.

**Classification:** Direct knowledge check on S3 storage management.

### Q4. S3 Lifecycle Configuration or Intelligent Tiering?

**Answer:** Use S3 Lifecycle Configuration when your access schedule is predictable by calendar age; use S3 Intelligent-Tiering when access patterns are unknown, changing, or irregular, because it dynamically moves objects between access tiers based on monitored access rather than fixed time rules.

**Classification:** Scenario prompt comparing S3 Lifecycle rules vs. Intelligent-Tiering.

### Q5. Which S3 capability automatically will move each individual object to the most cost-effective access tier when access patterns change?

**Answer:** Use Amazon S3 Intelligent-Tiering when you want automated cost optimization for data with unknown or shifting access patterns without paying retrieval fees or managing manual lifecycle transition policies.

**Classification:** Direct knowledge check on S3 storage classes.

### Q6. Is it possible to configure an S3 bucket to have the requester pay the cost of the request and data download instead of the S3 bucket owner?

**Answer:** Yes. Use Amazon S3 Requester Pays configuration when sharing large datasets publicly or with external partners where authenticated requesters must pay for their own GET requests and data transfer out, leaving the bucket owner to pay only for storage.

**Classification:** Direct knowledge check / scenario prompt on S3 billing models.

### Q7. If your organization decides to move 250 terabytes of archived data from their internal servers to S3, what is the fastest and most cost-effective way to import the data to S3?

**Answer:** Use AWS Snowball devices when transferring tens to hundreds of terabytes (such as 250 TB) of data offline to bypass local internet bandwidth bottlenecks and avoid extended upload timelines and internet egress charges.

**Classification:** Scenario prompt for large-scale data migration.

### Q8. AWS Snowmobile, establish a Direct Connect connection to transfer the data to S3, order multiple Snowball devices, or upload it directly using their current dedicated line?

**Answer:** Use multiple AWS Snowball Edge devices when transferring 250 TB; AWS Snowmobile is reserved for massive multi-petabyte/exabyte migrations (typically >10 PB), while Direct Connect involves significant circuit provisioning lead times and costs that are unwarranted for a one-off 250 TB bulk transfer.

**Classification:** Multi-choice evaluation scenario for hybrid data transfer.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
