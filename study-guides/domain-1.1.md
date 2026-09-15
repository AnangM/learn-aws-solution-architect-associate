# Domain 1.1 — Design secure access to AWS resources

**Source transcript:** [`skillbuilder/domain-1.1.md`](../skillbuilder/domain-1.1.md)

## What this sub-domain is about

Control who and what can call AWS APIs, what resources they can reach, and how access is audited across accounts.

### Learning objectives

- Protect the root user with MFA and avoid routine use.
- Prefer federation, IAM roles, and temporary STS credentials over long-lived keys.
- An explicit deny overrides an allow; SCPs limit but do not grant permissions.
- Use CloudTrail, Access Analyzer, CloudWatch, and EventBridge for traceability and response.

## AWS services mentioned in the transcript

- **IAM**
- **AWS STS**
- **AWS Organizations**
- **AWS Control Tower**
- **AWS CloudTrail**
- **S3 bucket policies**
- **VPC endpoint policies**
- **KMS key policies**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **IAM Identity Center**
- **AWS Access Analyzer**
- **Amazon Cognito**
- **AWS Config**
- **Amazon GuardDuty**

## Detailed study material

### Study point 1

Protect the root user with MFA and avoid routine use.

### Study point 2

Prefer federation, IAM roles, and temporary STS credentials over long-lived keys.

### Study point 3

An explicit deny overrides an allow; SCPs limit but do not grant permissions.

### Study point 4

Use CloudTrail, Access Analyzer, CloudWatch, and EventBridge for traceability and response.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| People access | Federation/IAM Identity Center vs IAM users | Central lifecycle and short-lived sessions are usually safer. |
| Workload access | IAM role + STS vs embedded key | Roles avoid distributing long-lived secrets. |
| Account guardrail | SCP vs IAM policy | SCPs set account/OU ceilings; IAM policies grant permissions. |

## Host questions and answers

**Question inventory:** 12 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. What level of service is AWS IAM?

**Answer:** Global. IAM is not scoped to one Availability Zone or AWS Region; its identities and policies are used across the account’s Regions.

**Classification:** Direct knowledge check. The following transcript fragment supplies the choices “zonal, regional or global?” and is treated as part of this question.

### Q2. So why is this a risk to use the account root user?

**Answer:** The root user has unrestricted account-level authority and cannot be limited by an IAM policy. If its credentials are compromised, the entire account is exposed. Protect it with MFA, avoid routine use, and delegate daily work to least-privilege identities.

**Classification:** Direct knowledge check.

### Q4. But what else could we implement to secure our AWS account?

**Answer:** Use AWS IAM Identity Center (or dedicated IAM users with least-privilege permissions) and mandatory Multi-Factor Authentication (MFA) when delegating everyday operational access, keeping the root account credentials securely locked away and reserved exclusively for tasks that strictly require root privileges.

**Classification:** Direct knowledge check / best-practice prompt for account security.

### Q5. How about adding another user with more limited permissions instead of using the account root user?

**Answer:** Use individual, least-privilege IAM users or IAM Identity Center permission sets when provisioning administrative or developer access, ensuring that no single compromised identity possesses unlimited account authority.

**Classification:** Scenario prompt on identity separation and least privilege.

### Q6. What level of permissions do new IAM users have in your AWS account?

**Answer:** New IAM identities have zero permissions by default (implicit deny) until explicit permissions are granted through attached identity-based policies or group memberships.

**Classification:** Direct knowledge check on IAM default behavior.

### Q7. How do you create IAM users, groups, and roles?

**Answer:** Use Infrastructure as Code (AWS CloudFormation or Terraform), the AWS Management Console, or the AWS CLI/SDKs to provision IAM identities: define IAM users for distinct identities, IAM groups to bundle permission policies across users, and IAM roles configured with trust policies to issue short-lived credentials via AWS Security Token Service (STS).

**Classification:** Implementation prompt for IAM resource creation.

### Q8. What are their strengths and limitations?

**Answer:** Use IAM Groups when you need simple, centralized permission management for human operators (noting that groups cannot be designated as Principals in resource policies); use IAM Roles when you need secure, temporary credentials with automatic rotation for applications, compute resources (EC2, Lambda, ECS), and cross-account access, eliminating the vulnerability of long-lived access keys.

**Classification:** Comparative analysis prompt of IAM entities.

### Q9. And what scenarios would dictate possibly switching between the various user group and role-based permissions?

**Answer:** Use IAM Roles instead of long-term IAM user credentials whenever workloads run on AWS compute resources, when executing cross-account management, or when integrating corporate identity providers (SAML 2.0 / OIDC); use group-based assignments primarily for assigning shared role permission sets to teams within IAM Identity Center.

**Classification:** Scenario prompt for transitioning from static users to roles.

### Q10. Do you know how to design and configure active directory to federation access to AWS IAM roles or users?

**Answer:** Use AWS IAM Identity Center connected to AWS Directory Service (or an external SAML 2.0 identity provider) when federating corporate Active Directory users, mapping AD groups to IAM roles so enterprise users authenticate via single sign-on (SSO) and receive temporary STS credentials without creating static IAM users in AWS.

**Classification:** Architectural implementation prompt for enterprise identity federation.

### Q11. When should you hard code credentials into your application?

**Answer:** Never hard-code credentials into application code or config files. Use IAM Roles (EC2 instance profiles, ECS task roles, or Lambda execution roles) when applications run on AWS, and use AWS Secrets Manager or AWS Systems Manager Parameter Store when applications need database passwords or third-party API tokens.

**Classification:** Rhetorical prompt highlighting credential security anti-patterns.

### Q12. What is a policy?

**Answer:** A policy is a JSON document that defines permissions in AWS. Use Identity-Based Policies attached to users, groups, or roles to specify what actions that identity can perform on AWS resources; use Resource-Based Policies attached directly to resources (such as S3 buckets, KMS keys, or SQS queues) to specify which Principals are allowed access and under what conditions.

**Classification:** Fundamental concept check comparing identity vs. resource policies.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
