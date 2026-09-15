# Domain 2.2 — Design highly available and/or fault-tolerant architectures

**Source transcript:** [`skillbuilder/domain-2.2.md`](../skillbuilder/domain-2.2.md)

## What this sub-domain is about

Remove single points of failure, continue service through failures, and select disaster recovery strategies from RTO and RPO.

### Learning objectives

- High availability minimizes interruption and may include brief downtime; fault tolerance continues through component failure.
- RTO is maximum restoration time; RPO is maximum acceptable data-loss window.
- Backup/restore is cheapest and slowest; pilot light, warm standby, and active/active progressively reduce recovery time at greater cost.
- Spread compute across AZs, use health-aware routing, database replication, monitoring, and tested runbooks.

## AWS services mentioned in the transcript

- **Amazon EC2**
- **EC2 Auto Scaling**
- **Elastic Load Balancing**
- **Amazon RDS Multi-AZ**
- **Amazon Aurora Global Database**
- **DynamoDB global tables**
- **Amazon S3**
- **Amazon EFS**
- **Amazon FSx**
- **AWS Elastic Disaster Recovery**
- **AWS Backup**
- **Amazon Route 53**
- **AWS Global Accelerator**
- **Amazon RDS Proxy**
- **Amazon CloudWatch**
- **AWS X-Ray**
- **Amazon EventBridge**
- **Amazon Inspector**
- **AWS CloudFormation**
- **Amazon ECS**
- **Amazon EKS**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Resilience Hub**
- **AWS Fault Injection Service**
- **AWS Elastic Beanstalk**
- **EC2 Image Builder**
- **AWS Network Firewall**

## Detailed study material

### Study point 1

High availability minimizes interruption and may include brief downtime; fault tolerance continues through component failure.

### Study point 2

RTO is maximum restoration time; RPO is maximum acceptable data-loss window.

### Study point 3

Backup/restore is cheapest and slowest; pilot light, warm standby, and active/active progressively reduce recovery time at greater cost.

### Study point 4

Spread compute across AZs, use health-aware routing, database replication, monitoring, and tested runbooks.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Database resilience | RDS Multi-AZ vs read replica | Multi-AZ is failover; replicas scale reads. |
| DR posture | Warm standby vs backup/restore | Warm standby lowers RTO but costs more continuously. |
| Global traffic | Route 53 vs Global Accelerator | Route 53 is DNS policy; Global Accelerator uses static anycast IPs. |

## Host questions and answers

**Question inventory:** 11 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. What is an example of high availability?

**Answer:** Use an active/standby deployment (or automated health check replacement via an Auto Scaling group) when high availability is required; the architecture minimizes downtime and quickly restores operations upon component failure, though a brief interruption during failover may be observed.

**Classification:** Architectural concept check on high availability.

### Q2. What do you think of when you think of fault tolerance?

**Answer:** Use an active/active multi-instance deployment distributed across multiple Availability Zones behind an Elastic Load Balancer when fault tolerance is required, ensuring zero downtime and continuous degradation-free operation even during an underlying hardware or zone failure.

**Classification:** Architectural concept check on fault tolerance vs. high availability.

### Q3. What happens when one of your web servers fail?

**Answer:** Use an Application Load Balancer with target group health checks combined with an EC2 Auto Scaling group across multiple AZs: when a web server fails, the ALB immediately stops sending requests to it and Auto Scaling terminates and launches a healthy replacement instance automatically.

**Classification:** Failure scenario prompt for the web tier.

### Q4. What do you do when one of the application servers go down?

**Answer:** Use an Auto Scaling group spanning multiple Availability Zones and decouple application processing with Amazon SQS queues: when an application worker crashes, in-flight messages become visible again after the visibility timeout and are processed by surviving instances without data loss.

**Classification:** Failure scenario prompt for the application tier.

### Q5. How about the database?

**Answer:** Use Amazon RDS Multi-AZ deployments or Amazon Aurora clusters: upon primary database failure, AWS automatically promotes the standby replica or Aurora reader to primary and updates the DNS CNAME endpoint, completing failover in 60-120 seconds (or under 30 seconds for Aurora) without manual intervention.

**Classification:** Failure scenario prompt for the database tier.

### Q6. How often does the data need to be backed up?

**Answer:** Use your Recovery Point Objective (RPO) to govern backup frequency: use continuous asynchronous replication (such as Aurora Global Database or S3 Cross-Region Replication) when RPO is near-zero (seconds); use automated hourly or daily snapshots via AWS Backup when the business can tolerate losing hours of data.

**Classification:** Disaster recovery planning prompt for RPO.

### Q7. What is the maximum time an application can be unavailable?

**Answer:** Use your Recovery Time Objective (RTO) to dictate failover automation: use Multi-Site Active/Active or Warm Standby architectures when RTO must be seconds to minutes; use Backup and Restore strategies when the workload can tolerate several hours or days of recovery time.

**Classification:** Disaster recovery planning prompt for RTO.

### Q8. What backup and recovery options exist for each of these services?

**Answer:** Use AWS Backup for centralized policy-driven snapshot management across EBS, RDS, Aurora, DynamoDB, and EFS; use S3 Cross-Region Replication with Versioning for object storage; and use AWS Elastic Disaster Recovery (DRS) for continuous block-level replication of on-premises or EC2 workloads into AWS.

**Classification:** Direct knowledge check on AWS backup and disaster recovery tools.

### Q9. What if you want to ensure an application can automatically fail over to other Regions around the world?

**Answer:** Use Amazon Route 53 with Failover Routing policies linked to Route 53 health checks (or AWS Global Accelerator with traffic dials and endpoint health monitoring) to automatically redirect global client traffic to a healthy secondary Region if the primary Region fails.

**Classification:** Global disaster recovery and failover routing scenario.

### Q10. What is a use case for Amazon Polly and high availability and fault tolerance?

**Answer:** Use Amazon Polly integrated with Amazon Connect and Amazon Comprehend when designing a highly available, self-service contact center or incident notification system that automatically converts dynamic text alert updates into clear spoken voice announcements for callers during major outages.

**Classification:** Scenario prompt for machine learning services in resilient communications.

### Q11. Well, how about if your organization deals with large volumes of IT service requests?

**Answer:** Use Amazon Comprehend to automatically classify and route incoming IT service tickets using natural language processing, combined with Amazon Polly and Amazon Connect to deliver conversational voice self-service, eliminating human categorization bottlenecks during high-volume support surges.

**Classification:** AI/ML operational efficiency scenario prompt.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
