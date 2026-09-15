# AWS Identity and Access Management (AWS IAM)

## What the Service Is
AWS IAM is a foundational, global security service that enables you to manage access to AWS services and resources securely using fine-grained authentication and authorization.

## Description of the Service
IAM allows you to create and manage AWS users, user groups, and roles, and use permissions policies (JSON documents) to allow or deny their access to AWS resources. IAM is a free, global service where data is replicated worldwide. It supports Multi-Factor Authentication (MFA), temporary security credentials via AWS STS, and federated identity integration.

## When to Use the Service
- Use AWS IAM to establish identity boundaries, manage authentication, and enforce least-privilege authorization across your AWS account.
- Use IAM Roles for AWS service-to-service access (e.g., EC2 instance profiles, Lambda execution roles, ECS task roles).
- Use IAM Roles for cross-account resource access without sharing credentials.

## IAM Entities and Components

| Entity / Component | Description | When to Use It |
|---|---|---|
| **Root User** | Account owner created with the AWS account; complete, unrestricted authority over all account resources. Cannot be restricted by IAM policies. | Use strictly for account creation, payment method changes, closing the account, and root-only recovery tasks. Lock with MFA; avoid routine use. |
| **IAM User** | An identity within your AWS account with specific credentials (console password or long-term access keys). | Use for legacy single-user human access or automated scripts outside AWS; modern best practice is IAM Identity Center. |
| **IAM Group** | A collection of IAM users; used to attach common permission policies to multiple users at once. | Use to manage permissions collectively by department or job function (e.g., Developers, Admins). Note: Groups cannot be Principals in resource policies. |
| **IAM Role** | An identity with specific permissions that is assumed temporarily by a trusted principal (user, application, or AWS service). Issues short-lived STS credentials. | Use for workloads running on AWS compute (EC2, ECS, Lambda), cross-account access, and federated corporate directory users. |
| **Identity-Based Policy** | JSON policy attached to a user, group, or role defining what that identity can do (Actions, Resources, Conditions). | Use to control the permissions of specific IAM principals. |
| **Resource-Based Policy** | JSON policy attached directly to a resource (e.g., S3 Bucket Policy, KMS Key Policy, SQS Queue Policy) specifying who (Principal) can access it. | Use when granting cross-account access or defining resource-level access boundaries directly on the resource. |
| **Permission Boundary** | An advanced feature that sets the maximum permissions an identity-based policy can grant to an IAM entity. | Use to delegate administrative user creation to developers while preventing privilege escalation. |
| **Service Control Policy (SCP)** | AWS Organizations policy that defines maximum allowable permissions across accounts or Organizational Units (OUs). | Use to establish central guardrails that even account root users cannot override. |
