# Domain 1.2 — Design secure workloads and applications

**Source transcript:** [`skillbuilder/domain-1.2.md`](../skillbuilder/domain-1.2.md)

## What this sub-domain is about

Design network isolation, private connectivity, application protection, identity, secrets, and sensitive-data discovery.

### Learning objectives

- A VPC is regional; a subnet belongs to one Availability Zone.
- Security groups are stateful resource-level allow lists; NACLs are stateless ordered subnet-level rules.
- Gateway endpoints serve supported AWS services; interface endpoints use PrivateLink.
- Macie discovers sensitive S3 data; WAF filters HTTP(S); Shield addresses DDoS; Secrets Manager is for secrets and rotation.

## AWS services mentioned in the transcript

- **Amazon VPC**
- **Security groups**
- **Network ACLs**
- **Route tables**
- **NAT gateways**
- **VPC endpoints**
- **AWS PrivateLink**
- **VPC peering**
- **AWS Transit Gateway**
- **AWS Site-to-Site VPN**
- **AWS Client VPN**
- **AWS Direct Connect**
- **Amazon Macie**
- **Amazon Cognito**
- **Amazon GuardDuty**
- **AWS WAF**
- **AWS Shield**
- **IAM Identity Center**
- **AWS Secrets Manager**
- **Systems Manager Parameter Store**
- **API Gateway**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Network Firewall**
- **AWS Firewall Manager**
- **Amazon Inspector**
- **AWS Certificate Manager**
- **AWS Verified Access**
- **Amazon Detective**

## Detailed study material

### Study point 1

A VPC is regional; a subnet belongs to one Availability Zone.

### Study point 2

Security groups are stateful resource-level allow lists; NACLs are stateless ordered subnet-level rules.

### Study point 3

Gateway endpoints serve supported AWS services; interface endpoints use PrivateLink.

### Study point 4

Macie discovers sensitive S3 data; WAF filters HTTP(S); Shield addresses DDoS; Secrets Manager is for secrets and rotation.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Private service exposure | PrivateLink vs VPC peering | PrivateLink exposes one service without broad network exposure. |
| Secret storage | Secrets Manager vs Parameter Store | Secrets Manager fits rotation; Parameter Store fits simpler configuration. |
| Application filtering | WAF/Shield vs security group | Layer-7 and DDoS controls solve problems security groups do not. |

## Host questions and answers

**Question inventory:** 14 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Is an Amazon VPC a zonal, regional, or global service?

**Answer:** A VPC is regional; it spans Availability Zones within one Region and account.

**Classification:** Direct knowledge check, scenario prompt, or rhetorical prompt depending on context.

### Q2. Back to our fundamentals, what is a subnet?

**Answer:** A subnet is a segmented range of IP addresses (defined by a CIDR block) within a VPC tied to a specific Availability Zone. Use public subnets (routed to an Internet Gateway) for public-facing components like load balancers, and use private subnets (routed through NAT gateways, VPNs, or VPC endpoints) for backend compute and data stores to enforce defense-in-depth isolation.

**Classification:** Fundamental networking concept check.

### Q3. What resiliency do subnets have?

**Answer:** Subnets are zonal. Use multiple subnets deployed across distinct Availability Zones within an AWS Region when architecting for high availability and multi-AZ fault tolerance.

**Classification:** Direct knowledge check on subnet resiliency.

### Q4. Are they zonal, regional or global?

**Answer:** Subnets are strictly zonal (confined to a single Availability Zone); in contrast, the parent Amazon VPC is regional (spanning all Availability Zones in that Region).

**Classification:** Direct knowledge check on AWS resource scoping.

### Q5. For example, if you needed to allow specific types of traffic to access your application servers, but the traffic was going to be coming from your on premises location, traversing a VPN and your application servers were in a private subnet, how would you set that up?

**Answer:** Use an AWS Site-to-Site VPN terminated on a Virtual Private Gateway (or Transit Gateway), configure the private subnet's route table with a target route directing on-premises CIDR traffic to the gateway, and configure the application servers' Security Group to permit inbound connections exclusively from the on-premises IP range on the required application ports.

**Classification:** Hybrid network configuration scenario.

### Q6. What could you do to make sure that the application servers were safe from access coming from the public internet, but also that there wouldn't be any issues at the VPC, subnet or instant levels for the requests coming in from the on premises that's connected by a VPN in your VPC?

**Answer:** Use private subnets without an Internet Gateway route (ensuring no routable public internet path), attach Security Groups to application instances that whitelist only the on-premises VPN CIDR (or ALB security group), and configure Network ACLs on the private subnet to allow the required inbound and ephemeral return ports while denying unneeded traffic.

**Classification:** Multi-layer security architecture scenario.

### Q7. Again, fundamentals, what is an endpoint service?

**Answer:** Use VPC Endpoints (Interface Endpoints powered by AWS PrivateLink, or Gateway Endpoints for S3 and DynamoDB) when private subnet workloads need to privately communicate with AWS services or third-party SaaS services over the internal AWS network backbone without requiring an Internet Gateway, NAT Gateway, or public IP addresses.

**Classification:** Direct knowledge check on VPC endpoint capabilities.

### Q8. Well, now you're using the internet and your application is exposed, so how can you secure this application?

**Answer:** Use AWS PrivateLink (VPC Endpoint Service) when you need to securely expose an internal service to hundreds of consumer VPCs across accounts without traversing the public internet, avoiding complex VPC Peering meshes and overlapping CIDR block conflicts.

**Classification:** Scenario prompt for secure inter-VPC service sharing.

### Q9. How do you build in security to your networking tiers?

**Answer:** Use a multi-tier VPC subnet design (public tier for ALBs, private tier for application servers, isolated private tier for databases): place AWS WAF on the ALB, configure tier-specific Security Groups that only permit traffic from the immediately preceding tier, and implement Network ACLs as a stateless perimeter boundary around subnets.

**Classification:** Architectural framework prompt for multi-tier isolation.

### Q10. How do you secure application use across these tiers?

**Answer:** Use Security Group chaining/referencing (allowing inbound traffic where the source is the Security Group ID of the upstream tier rather than CIDR blocks) and enforce in-transit encryption (TLS/HTTPS) along with IAM database authentication or service-to-service mutual authentication.

**Classification:** Implementation prompt for inter-tier access controls.

### Q11. And what does the management of those security components look like?

**Answer:** Use AWS Firewall Manager to centrally configure and audit Security Groups, AWS Network Firewall rules, and AWS WAF rules across accounts in AWS Organizations; use AWS Security Hub and AWS Config to continuously monitor for drift and enforce security baseline compliance.

**Classification:** Governance and operations prompt for multi-account security.

### Q12. For the exam, you could get a question asking, for which AWS service helps to secure personally identifiable information or PII?

**Answer:** Amazon Macie uses machine learning and pattern matching to discover, classify, and protect sensitive data (such as PII, credit card numbers, and credentials) stored in Amazon S3 buckets.

**Classification:** Direct knowledge check on data classification services.

### Q13. For example, if you are storing a secret and need high volume access with automatic credential rotation, what would you choose?

**Answer:** Use AWS Secrets Manager when you need native, automated credential rotation (with built-in Lambda functions for RDS, Redshift, and DocumentDB) and fine-grained IAM access policies; use Systems Manager Parameter Store when storing standard configuration data or static secrets that do not require managed rotation.

**Classification:** Tool selection prompt comparing Secrets Manager and Parameter Store.

### Q14. AWS Secrets Manager or AWS Systems Manager Parameter Store?

**Answer:** Use AWS Secrets Manager for sensitive credentials that require automated rotation, cross-account sharing, and secret generation; use AWS Systems Manager Parameter Store (Standard or Advanced) when managing hierarchical, plain-text or KMS-encrypted application configuration strings at lower cost without automatic rotation.

**Classification:** Direct comparison prompt between Secrets Manager and Parameter Store.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
