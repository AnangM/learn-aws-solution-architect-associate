# Domain 1.3 — Determine appropriate data security controls

**Source transcript:** [`skillbuilder/domain-1.3.md`](../skillbuilder/domain-1.3.md)

## What this sub-domain is about

Protect data at rest and in transit, manage keys and certificates, classify and retain data, and recover it.

### Learning objectives

- Encryption at rest protects stored data; TLS protects data in transit.
- KMS is the managed default for AWS-integrated keys; CloudHSM gives more direct HSM control with more operations.
- S3 client-side encryption occurs before upload; server-side encryption occurs in S3.
- Choose backup/restore, pilot light, warm standby, or active/active from RTO and RPO.
- Lifecycle rules use known conditions; Intelligent-Tiering automates tier movement for uncertain access.

## AWS services mentioned in the transcript

- **AWS KMS**
- **AWS CloudHSM**
- **AWS Certificate Manager**
- **Amazon S3**
- **Amazon EBS**
- **Amazon RDS**
- **AWS Artifact**
- **AWS Backup**
- **AWS Storage Gateway**
- **Amazon EFS**
- **Amazon DynamoDB**
- **Amazon Aurora**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **AWS Secrets Manager**
- **Amazon Macie**
- **AWS Config**
- **AWS Audit Manager**
- **S3 Object Lock**
- **S3 Replication**

## Detailed study material

### Study point 1

Encryption at rest protects stored data; TLS protects data in transit.

### Study point 2

KMS is the managed default for AWS-integrated keys; CloudHSM gives more direct HSM control with more operations.

### Study point 3

S3 client-side encryption occurs before upload; server-side encryption occurs in S3.

### Study point 4

Choose backup/restore, pilot light, warm standby, or active/active from RTO and RPO.

### Study point 5

Lifecycle rules use known conditions; Intelligent-Tiering automates tier movement for uncertain access.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Key control | KMS vs CloudHSM | KMS integrates broadly; CloudHSM provides dedicated HSM control. |
| Persistent data | Encrypted EBS vs encrypted S3 | Use EBS for attached block data; S3 for durable independent objects and lifecycle. |
| Lifecycle | S3 Lifecycle vs Intelligent-Tiering | Use deterministic rules when access is known; automatic tiers when it is not. |

## Host questions and answers

**Question inventory:** 26 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Do you know how to design and implement the principle of lease privilege to ensure only those who need access have the only the degree of access that they need?

**Answer:** Use IAM policies scoped to explicit action verbs, specific resource ARNs, and stringent condition keys (e.g., `aws:PrincipalOrgID`, `aws:SourceVpc`, `aws:SecureTransport`) alongside IAM Permission Boundaries to ensure principals obtain only the minimum permissions required for their tasks.

**Classification:** Direct knowledge check / least-privilege implementation prompt.

### Q2. Diving deeper, do you also know how to design and implement securing access to your encryption keys?

**Answer:** Use AWS KMS Key Policies as the primary authorization barrier—combined with IAM policies, condition keys (e.g., `kms:ViaService`), and grant tokens—strictly segregating key administrators from cryptographic key users to prevent unauthorized decryption.

**Classification:** Direct knowledge check on KMS key security.

### Q3. What methods are available to secure your data at rest?

**Answer:** Use AWS KMS Customer Managed Keys (CMKs) with server-side encryption (SSE-KMS) across AWS storage services (EBS, S3, RDS, DynamoDB) when you need auditing and customer-controlled rotation; use client-side encryption when data must be encrypted before leaving the client application.

**Classification:** Direct knowledge check on encryption at rest mechanisms.

### Q4. For example, why would you use AWS KMS instead of AWS Cloud HSM for managing your data encryption keys or how can you use those two services together?

**Answer:** Use AWS KMS when you want a fully managed, highly available, multi-tenant key management service that natively integrates across AWS services; use AWS CloudHSM when corporate compliance mandates dedicated, single-tenant FIPS 140-2 Level 3 hardware security modules, or combine them by using CloudHSM as a custom key store for KMS.

**Classification:** Service comparison prompt between KMS and CloudHSM.

### Q5. How do you manage encryption keys across regions?

**Answer:** Use AWS KMS Multi-Region Keys when you need to replicate primary keys across regions to encrypt and decrypt data without cross-region re-encryption (such as in active-active architectures or Aurora Global Databases); use distinct single-region KMS keys when you want to isolate blast radiuses between regions.

**Classification:** Multi-region architecture prompt for KMS.

### Q6. What types of keys are there, and what are the differences in their capabilities?

**Answer:** Use Symmetric Keys (AES-256) for general AWS service encryption and high-performance server-side data encryption; use Asymmetric Keys (RSA/ECC key pairs) when external parties must encrypt data with a public key or verify digital signatures outside AWS; use Customer Managed Keys (CMKs) when you require control over rotation policies and key deletion.

**Classification:** Direct knowledge check on cryptographic key types.

### Q7. How often can you rotate each type of key?

**Answer:** Use AWS KMS automatic key rotation to automatically rotate Customer Managed Keys once every year (or customized schedules from 90 days up to 1 year for CMKs); AWS-managed keys rotate automatically every year, while customer-imported key material must be rotated manually by creating a new key and pointing aliases to it.

**Classification:** Direct knowledge check on key rotation schedules.

### Q8. How do you design data protection when using a VPN over the internet, or over a private connection through AWS Direct Connect or connections between VPCs or for the transfer of your data between services such as Amazon S3 and your VPC?

**Answer:** Use IPsec encryption for Site-to-Site VPNs; use MACsec (or an IPsec VPN on top of Direct Connect) when encryption in transit is required across Direct Connect circuits; use VPC Gateway Endpoints with TLS and bucket policies enforcing `aws:SecureTransport` for private S3 transfers.

**Classification:** Network data protection design prompt.

### Q9. How do you protect the data in transit when reaching in users over the public internet?

**Answer:** Use AWS Certificate Manager (ACM) to provision and renew public SSL/TLS certificates on Amazon CloudFront distributions and Application Load Balancers, enforcing modern TLS (TLS 1.2 or 1.3) protocols and redirecting HTTP traffic to HTTPS.

**Classification:** Scenario prompt for public endpoint transit security.

### Q10. Also, how do the various data management and storage services handle data protection?

**Answer:** Use native encryption capabilities: enforce account-level EBS default encryption for all new volumes, configure S3 default bucket encryption and object versioning with MFA Delete, and enable at-rest KMS encryption when provisioning RDS instances and DynamoDB tables.

**Classification:** Architectural framework prompt for service-level data protection.

### Q11. For example, how will data management and storage differ when looking at S3 versus Amazon EBS?

**Answer:** Use Amazon S3 when managing object storage with granular lifecycle rules, cross-region replication, and S3 Object Lock (WORM compliance); use Amazon EBS when managing low-latency block-level volumes tied to EC2 instances where encryption occurs transparently at the hypervisor/Nitro layer.

**Classification:** Comparative storage architecture prompt.

### Q12. And does the use of those protections change the performance of the services?

**Answer:** Use AWS Nitro-based EC2 instances where hardware acceleration handles EBS encryption with zero performance or IOPS impact; use Amazon S3 Bucket Keys when enabling SSE-KMS on S3 to reduce KMS API call volume and avoid API throttling during heavy traffic spikes.

**Classification:** Performance evaluation prompt for encrypted storage.

### Q13. Would you want to store the data on an encrypted EBS volume or transfer the data to an encrypted S3 bucket?

**Answer:** Use an encrypted Amazon EBS volume (paired with automated snapshots) when you need the least operational effort to securely store and process data generated directly by an EC2 workload; use Amazon S3 when data must be shared across distributed systems or archived long-term.

**Classification:** Scenario prompt for operational effort vs. storage type.

### Q14. Another question to consider, will the use of encryption affect performance, and if so, how?

**Answer:** Modern AWS services offload cryptographic operations to specialized hardware (e.g., Nitro cards for EBS) resulting in negligible latency; however, high-frequency S3 PUT/GET workloads using SSE-KMS can encounter KMS API request rate limits unless S3 Bucket Keys are enabled to cache data keys.

**Classification:** Technical knowledge check on cryptographic performance tradeoffs.

### Q15. Are there managed services that can help you secure, evaluate, and audit the security of your data?

**Answer:** Use AWS KMS combined with AWS CloudTrail for auditing cryptographic operations, Amazon Macie for discovering and classifying sensitive PII, and AWS Security Hub with AWS Config to continuously evaluate data security compliance.

**Classification:** Managed service identification prompt.

### Q16. For example, how will data management and storage differ when looking at S3 versus Amazon EBS, and does the use of those protections change the performance of the services?

**Answer:** Use Amazon S3 when requiring global object availability, automated storage tiering, and S3 Bucket Keys to minimize latency; use Amazon EBS for single-instance block storage where dedicated Nitro hardware delivers full provisioned IOPS regardless of encryption status.

**Classification:** Comparative analysis prompt of EBS vs. S3 performance and data management.

### Q17. Another question to consider is will the use of encryption affect performance, and if so, how?

**Answer:** Computational encryption overhead on modern AWS compute is negligible; performance bottlenecks arise primarily from KMS API throttling quotas on large-scale parallel requests, which is mitigated by implementing S3 Bucket Keys or client-side envelope caching.

**Classification:** Direct knowledge check on encryption bottlenecks and scaling.

### Q18. Are there any managed services that can help you secure, evaluate, and audit the security of your data?

**Answer:** Use AWS CloudTrail to record all data and management events, Amazon GuardDuty to detect unauthorized or suspicious data access patterns, and Amazon Macie to continuously scan S3 storage for sensitive data exposure.

**Classification:** Direct knowledge check on security auditing and monitoring tools.

### Q19. What capabilities exist for automatically managing the data lifecycle?

**Answer:** Use Amazon S3 Lifecycle rules to automatically transition objects between storage classes or expire old versions; use Amazon Data Lifecycle Manager (DLM) to automate EBS snapshot lifecycles; and use AWS Backup to centrally govern backup policies and retention across all AWS data services.

**Classification:** Direct knowledge check on lifecycle management automation.

### Q20. For example, when would you use S3 lifecycle configurations instead of S3 intelligent tiering?

**Answer:** Use S3 Lifecycle Configurations when data access frequency follows a predictable age-based schedule (such as archiving compliance logs to Glacier after 90 days); use S3 Intelligent-Tiering when access patterns are unpredictable or fluctuating, allowing automatic cost optimization without retrieval fees.

**Classification:** Scenario prompt comparing S3 Lifecycle rules and Intelligent-Tiering.

### Q21. What is cloud storage?

**Answer:** Cloud storage is provider-managed storage accessed through network APIs or protocols.

**Classification:** Direct knowledge check, scenario prompt, or rhetorical prompt depending on context.

### Q22. How does it work?

**Answer:** Use AWS storage endpoints (REST APIs for S3, NFS for EFS, SMB for FSx, and block protocols for EBS) where the underlying provisioning, replication across availability zones, disk hardware maintenance, and physical security are fully managed by AWS.

**Classification:** Architectural concept check on cloud storage mechanisms.

### Q23. What are the benefits, requirements, and types?

**Answer:** Use Object Storage (Amazon S3) for highly durable, scalable unstructured data; use File Storage (Amazon EFS / FSx) for shared multi-instance POSIX/SMB file systems; and use Block Storage (Amazon EBS) for low-latency operating system volumes and databases.

**Classification:** Taxonomy prompt on cloud storage classifications.

### Q24. What options exist for different storage to protect data in the event of a disaster?

**Answer:** Use Amazon S3 Cross-Region Replication (CRR) with versioning for continuous asynchronous replication between regions; use AWS Backup to copy automated snapshots of EBS volumes, RDS instances, and DynamoDB tables to a secondary disaster recovery region.

**Classification:** Disaster recovery prompt for data storage resilience.

### Q25. What service can we use for hybrid environments?

**Answer:** Use AWS Storage Gateway (S3 File Gateway, Volume Gateway, or Tape Gateway) when connecting on-premises data centers to AWS cloud storage to support hybrid backups, cloud tiering, and low-latency local caching.

**Classification:** Hybrid storage service identification prompt.

### Q26. Well, what about AWS Storage Gateway?

**Answer:** Use AWS Storage Gateway S3 File Gateway when on-premises applications need seamless NFS/SMB file share access backed directly by S3; use Volume Gateway when on-premises infrastructure requires iSCSI block storage backed by automated AWS cloud snapshots.

**Classification:** Specific service application prompt for Storage Gateway.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
