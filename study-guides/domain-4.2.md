# Domain 4.2 — Design cost-optimized compute solutions

**Source transcript:** [`skillbuilder/domain-4.2.md`](../skillbuilder/domain-4.2.md)

## What this sub-domain is about

Right-size compute, select managed services and instance families, use EC2 pricing models, and reduce transfer and licensing costs.

### Learning objectives

- On-Demand maximizes flexibility; Savings Plans and Reserved Instances reward committed usage.
- Spot is discounted interruptible capacity for checkpointed, stateless, batch, HPC, or distributed work.
- Managed/serverless compute may reduce operations and idle capacity, but compare unit pricing and constraints.
- CloudFront can reduce origin transfer; database engine selection affects licensing and operations.

## AWS services mentioned in the transcript

- **Amazon EC2**
- **On-Demand Instances**
- **Savings Plans**
- **Reserved Instances**
- **Spot Instances**
- **AWS Lambda**
- **Amazon ECS**
- **AWS Fargate**
- **Amazon CloudFront**
- **Amazon Aurora**
- **Amazon RDS**
- **AWS Auto Scaling**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Compute Optimizer**
- **AWS Batch**
- **Amazon EKS**
- **AWS Graviton**
- **AWS Cost Explorer**
- **AWS Budgets**

## Detailed study material

### Study point 1

On-Demand maximizes flexibility; Savings Plans and Reserved Instances reward committed usage.

### Study point 2

Spot is discounted interruptible capacity for checkpointed, stateless, batch, HPC, or distributed work.

### Study point 3

Managed/serverless compute may reduce operations and idle capacity, but compare unit pricing and constraints.

### Study point 4

CloudFront can reduce origin transfer; database engine selection affects licensing and operations.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Baseline | Savings Plans vs On-Demand | Commitments save money only when utilization is predictable. |
| Interruptible | Spot vs On-Demand | Spot needs retries, checkpoints, and capacity diversification. |
| Operations | Fargate/Lambda vs EC2 | Managed options reduce operations; EC2 may win for steady specialized workloads. |

## Host questions and answers

**Question inventory:** 6 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Do you need a solution that is more compute optimized for some type of batch processing?

**Answer:** Use Amazon EC2 C-family (Compute Optimized) instances when your workload requires high processing power per core relative to memory (such as compute-bound batch processing, media transcoding, gaming servers, or scientific modeling); use R-family (Memory Optimized) when workloads require large in-memory caches or in-memory analytics.

**Classification:** Instance family selection scenario.

### Q2. What about hybrid compute options?

**Answer:** Use AWS Outposts when you need AWS compute and storage infrastructure deployed directly within your on-premises data center for ultra-low latency or local data residency requirements; use AWS Local Zones or Wavelength when low-latency edge delivery is needed without hosting physical hardware on-site.

**Classification:** Hybrid compute architectural decision prompt.

### Q3. For example, Outpost and Snowball Edge?

**Answer:** Use AWS Snowball Edge Compute Optimized when you need local storage and compute execution (EC2 instances or Lambda functions) in disconnected, harsh, or mobile edge environments with subsequent physical transport back to AWS; use AWS Outposts when you require a permanent, continuously connected AWS cloud environment on-premises.

**Classification:** Scenario prompt comparing Outposts and Snowball Edge.

### Q4. How do you ensure you're right sizing this compute service?

**Answer:** Use AWS Compute Optimizer alongside Amazon CloudWatch performance metrics (CPU, RAM, network, and disk I/O utilization) and AWS Cost Explorer to analyze workload trends and downsize underutilized instances to the lowest-cost tier that still satisfies peak performance requirements before applying commitment discounts.

**Classification:** Implementation and operational monitoring prompt.

### Q5. For example, which plan would you choose if you had a batch processing job that was designed to handle interruptions and you wanted to minimize your cost?

**Answer:** Use Amazon EC2 Spot Instances when your batch processing jobs are stateless, containerized, or checkpointed so they can tolerate involuntary instance reclamation, providing the deepest cost savings (up to 90% discount off On-Demand pricing).

**Classification:** Scenario prompt for EC2 pricing model selection.

### Q6. What option would you choose if you couldn't handle interruptions, but you wanted to save as much as possible, and wanted to have the flexibility of using EC2, Fargate or Lambda for your compute needs?

**Answer:** Use AWS Compute Savings Plans when you have steady-state compute requirements that cannot tolerate interruptions and need maximum architectural flexibility to apply discounted rates automatically across EC2 instance families, regions, AWS Fargate, and AWS Lambda in exchange for a 1- or 3-year consistent hourly spend commitment.

**Classification:** Scenario prompt for Savings Plans vs. Reserved Instances.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
