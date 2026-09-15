# Domain 3.2 — Design high-performing and elastic compute solutions

**Source transcript:** [`skillbuilder/domain-3.2.md`](../skillbuilder/domain-3.2.md)

## What this sub-domain is about

Select and scale EC2 instances, containers, and Lambda while using metrics and load balancing to meet performance requirements.

### Learning objectives

- Compute-optimized, memory-optimized, storage-optimized, and accelerated families fit different bottlenecks.
- ECS is AWS-native orchestration; EKS is managed Kubernetes; Fargate removes worker-node management.
- Lambda scales by concurrency but has execution, packaging, and downstream limits.
- CloudWatch supplies service metrics, alarms, dashboards, and custom metrics; EC2 memory is not a default metric.

## AWS services mentioned in the transcript

- **Amazon EC2**
- **Amazon ECS**
- **Amazon EKS**
- **AWS Fargate**
- **AWS Lambda**
- **Elastic Load Balancing**
- **Amazon SQS**
- **Amazon CloudWatch**
- **EC2 Auto Scaling**
- **Lambda@Edge**
- **Amazon CloudFront**
- **AWS Step Functions**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Batch**
- **AWS App Runner**
- **Amazon EventBridge**
- **AWS Compute Optimizer**
- **Amazon Inspector**

## Detailed study material

### Study point 1

Compute-optimized, memory-optimized, storage-optimized, and accelerated families fit different bottlenecks.

### Study point 2

ECS is AWS-native orchestration; EKS is managed Kubernetes; Fargate removes worker-node management.

### Study point 3

Lambda scales by concurrency but has execution, packaging, and downstream limits.

### Study point 4

CloudWatch supplies service metrics, alarms, dashboards, and custom metrics; EC2 memory is not a default metric.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Compute | EC2 vs Lambda | EC2 suits host control and long-running work; Lambda suits event-driven variable work. |
| Containers | Fargate vs EC2-backed | Fargate reduces operations; EC2 supports specialized capacity and control. |
| Scaling signal | CPU vs queue/latency | Choose the metric that represents user pressure, not a convenient but weak proxy. |

## Host questions and answers

**Question inventory:** 3 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. The first thing to consider when beginning to architect solutions using Amazon EC2 is what EC2 type will you use?

**Answer:** Use the dominant resource bottleneck of the application to select the instance family: use General Purpose (M-family or T-family burstable) for balanced compute, memory, and networking; use Compute Optimized (C-family) when CPU bound; use Memory Optimized (R-family or X-family) for high RAM footprints; use Storage Optimized (I-family) for high IOPS direct NVMe storage; and use Accelerated Computing (P/G-family) for GPU/machine learning workloads.

**Classification:** Instance family selection framework prompt.

### Q2. For the exam, if there are questions around choosing an instance type, it's likely the the stem will provide some context around application needs, so given the application resource needs for compute, storage, and networking requirements, can you choose the appropriate instance family for the EC2 instance?

**Answer:** Use C-family instances when tasks require heavy mathematical calculations, video encoding, or compute-intensive batch jobs; use R-family instances when hosting in-memory caches (e.g., Redis/Memcached) or high-volume transactional databases; use I-family instances when local NVMe SSD storage is required for distributed NoSQL databases or data warehousing; and use M-family instances for multi-tier enterprise applications with balanced requirements.

**Classification:** Scenario-based instance mapping prompt.

### Q3. What type of architecture would be a scalable solution for this workload?

**Answer:** Use an Application Load Balancer (ALB) distributing traffic across an Amazon EC2 Auto Scaling group deployed across multiple Availability Zones, configured with target tracking scaling policies (such as ALB request count per target or average CPU utilization) to scale EC2 instance counts dynamically in response to daily usage variations.

**Classification:** End-to-end scalable compute architecture scenario.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
