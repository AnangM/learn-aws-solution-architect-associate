# VPC Endpoint Policies

## What It Is
A VPC Endpoint Policy is an IAM resource policy that you attach to an interface or gateway VPC endpoint to control which AWS principals can access which AWS resources through that specific endpoint.

> See canonical file: [vpc-endpoints.md](file:///home/aoki/Learn/aws-solution-architect/services/vpc-endpoints.md)

## Description
By default, VPC endpoints allow full access to any service resource in any AWS account (`*` action on `*` resource by `*` principal). A VPC Endpoint Policy restricts traffic passing through the endpoint, acting as a network perimeter guardrail. It prevents data exfiltration by ensuring that compute resources inside your private VPC can only communicate with approved AWS resources (such as specific internal S3 buckets) and cannot upload data to unauthorized external or personal AWS accounts.

## When to Use
- Preventing data exfiltration from private EC2 instances or Lambda functions to unauthorized S3 buckets or external AWS accounts.
- Enforcing that private VPC endpoints only permit read-only actions or access to corporate-owned resources.
- Complying with PCI-DSS, HIPAA, or strict financial security standards by locking down all VPC egress channels.

## Defense-in-Depth Comparison

| Policy Type | Attached To | Purpose | Evaluated Against |
| :--- | :--- | :--- | :--- |
| **VPC Endpoint Policy** | Gateway or Interface Endpoint | Controls what actions/principals/resources can transit across the endpoint. | Enforces perimeter-level resource and account boundaries. |
| **IAM Policy (Identity-based)** | IAM User, Group, or Role | Defines what permissions the authenticated caller has across AWS. | Enforces caller permissions regardless of network path. |
| **Resource Policy (e.g., S3 Bucket Policy)** | AWS Resource (S3 Bucket, KMS Key, SQS Queue) | Controls who can access this specific resource, and from which VPC or IP. | Enforces access restrictions on the target data store. |
