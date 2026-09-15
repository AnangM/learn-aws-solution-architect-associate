# Domain 2.1 — Design scalable and loosely coupled architectures

**Source transcript:** [`skillbuilder/domain-2.1.md`](../skillbuilder/domain-2.1.md)

## What this sub-domain is about

Use elasticity, containers, serverless, queues, events, APIs, caching, and service boundaries so components scale and fail independently.

### Learning objectives

- Vertical scaling changes resource size; horizontal scaling adds/removes resources; elasticity automates the latter.
- SQS absorbs bursts and enables asynchronous independent scaling; EventBridge routes events by rules.
- EC2 maximizes host control; Fargate removes node management; Lambda is event-driven with runtime and concurrency limits.
- CloudFront caches edge content, ElastiCache caches application data, and DAX accelerates DynamoDB reads.

## AWS services mentioned in the transcript

- **Amazon EC2**
- **EC2 Auto Scaling**
- **AWS Auto Scaling**
- **Amazon ECS**
- **Amazon EKS**
- **AWS Fargate**
- **AWS Lambda**
- **Amazon API Gateway**
- **Amazon SQS**
- **Amazon EventBridge**
- **Elastic Load Balancing**
- **Amazon CloudFront**
- **Amazon Route 53**
- **AWS Global Accelerator**
- **Amazon ElastiCache**
- **DynamoDB Accelerator**
- **Amazon RDS Proxy**
- **AWS Transfer Family**
- **Amazon DynamoDB**
- **Amazon Aurora**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Step Functions**
- **Amazon SNS**
- **Amazon MQ**
- **AWS App Runner**
- **AWS Batch**
- **AWS PrivateLink**

## Detailed study material

### Study point 1

Vertical scaling changes resource size; horizontal scaling adds/removes resources; elasticity automates the latter.

### Study point 2

SQS absorbs bursts and enables asynchronous independent scaling; EventBridge routes events by rules.

### Study point 3

EC2 maximizes host control; Fargate removes node management; Lambda is event-driven with runtime and concurrency limits.

### Study point 4

CloudFront caches edge content, ElastiCache caches application data, and DAX accelerates DynamoDB reads.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Containers | Fargate vs EC2-backed ECS | Fargate reduces node operations; EC2 provides host control. |
| Integration | SQS vs synchronous API | SQS absorbs bursts; synchronous APIs suit immediate responses. |
| Events | EventBridge vs SQS | EventBridge routes events; SQS is a durable work queue. |

## Host questions and answers

**Question inventory:** 11 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Still under fundamentals, what is elasticity?

**Answer:** Elasticity is automated capacity adjustment as demand changes.

**Classification:** Direct knowledge check, scenario prompt, or rhetorical prompt depending on context.

### Q2. For example, what are the capabilities of AWS Auto Scaling and Amazon EC2 Auto Scaling?

**Answer:** Use Amazon EC2 Auto Scaling to maintain EC2 fleet health and dynamically scale instance counts based on demand metrics; use AWS Auto Scaling when you require a unified scaling plan across diverse resource types simultaneously (EC2 Auto Scaling groups, ECS tasks, DynamoDB tables, and Aurora Read Replicas).

**Classification:** Service differentiation prompt between EC2 Auto Scaling and unified AWS Auto Scaling.

### Q3. What are the different types of scaling policies you can use with Amazon EC2 Auto Scaling?

**Answer:** Use Target Tracking Scaling policies when you want Auto Scaling to automatically adjust instance capacity to maintain a specific target metric (such as 50% average CPU utilization or ALB request count per target); use Step Scaling for rapid, stepped responses to dynamic CloudWatch alarm breaches; and use Scheduled Scaling when traffic spikes occur on a predictable calendar schedule.

**Classification:** Direct knowledge check on Auto Scaling policy types.

### Q4. Containers, serverless, and virtual instances in EC2, but when does it make more sense to use one over the other?

**Answer:** Use AWS Lambda (serverless) for short-lived (up to 15 min), event-driven tasks that benefit from zero infrastructure management; use containers (ECS/EKS with AWS Fargate) when microservices require consistent packaging, custom runtimes, or cross-environment portability without host management; and use Amazon EC2 when applications require specialized hardware, persistent local storage, custom kernel extensions, or full OS-level control.

**Classification:** Architectural compute model selection prompt.

### Q5. What are the benefits and limitations of the different service options?

**Answer:** Use Serverless (Lambda) to benefit from automatic scaling and pay-per-use execution, noting execution time limits and cold starts; use Containers (Fargate) to benefit from standard containerization and rapid task scaling without node management; and use Virtual Machines (EC2) to benefit from complete OS control and sustained heavy compute capability at the expense of manual OS patching and configuration maintenance.

**Classification:** Comparative trade-off analysis prompt.

### Q6. How can you handle scaling with the AWS database services?

**Answer:** Use Read Replicas (with Amazon RDS or Aurora) and in-memory caches (Amazon ElastiCache or DAX) to scale read-heavy workloads horizontally; use Amazon Aurora Serverless v2 to automatically scale compute capacity in fine-grained increments; and use Amazon DynamoDB with Auto Scaling or on-demand mode to scale NoSQL reads and writes seamlessly without downtime.

**Classification:** Database scaling architecture prompt.

### Q7. For resiliency in RDS, would you use Read Replicas or a Multi-AZ design?

**Answer:** Use RDS Multi-AZ for high availability and automated synchronous failover across zones; use Read Replicas when you need to horizontally scale asynchronous read throughput across instances or regions.

**Classification:** Resiliency vs. performance pattern comparison.

### Q8. What if you need to design a file transfer where you do not have to host and manage your own file transfer service?

**Answer:** Use AWS Transfer Family when your business partners require standard file transfer protocols (SFTP, FTPS, FTP, or AS2) to exchange files directly with Amazon S3 or Amazon EFS without you having to provision, configure, patch, or maintain dedicated file transfer servers.

**Classification:** Scenario prompt for serverless file transfer architecture.

### Q9. What do you do?

**Answer:** Use AWS Transfer Family deployed in a multi-AZ VPC configuration backed by Amazon S3 storage, native IAM authentication (or corporate IdP integration), and AWS KMS encryption to achieve an automated, highly available, and compliant file exchange workflow with zero infrastructure overhead.

**Classification:** Direct solution prompt following scenario Q8.

### Q10. How can we achieve independent scaling of application components as needed?

**Answer:** Use Amazon SQS message queues or Amazon EventBridge event buses to decouple frontend ingestion from backend processing asynchronously, allowing each tier to scale out or in independently using Auto Scaling policies driven by queue depth (`ApproximateNumberOfMessagesVisible`) rather than synchronous web traffic.

**Classification:** Asynchronous decoupling and independent scaling pattern prompt.

### Q11. What are the ways you can deploy SQS, API Gateway, DynamoDB, and many other services within the serverless toolkit?

**Answer:** Use AWS Serverless Application Model (AWS SAM), the AWS Cloud Development Kit (AWS CDK), or AWS CloudFormation templates to define, test, and deploy serverless architectures (API Gateway endpoints, Lambda functions, SQS queues, and DynamoDB tables) as declarative, version-controlled Infrastructure as Code.

**Classification:** Serverless orchestration and IaC deployment prompt.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
