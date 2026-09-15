# Amazon VPC Endpoints

## What the Service Is
VPC Endpoints enable private connections between your VPC and supported AWS services without requiring an Internet Gateway, NAT Gateway, VPN, or Direct Connect connection.

## Endpoint Types Table

| Endpoint Type | Implementation | Supported Services | Pricing | When to Use It |
|---|---|---|---|---|
| **Gateway Endpoints** | Route table target entry. | Amazon S3 and Amazon DynamoDB only. | Free of charge. | Use when private subnets need private access to S3 or DynamoDB in the same Region. |
| **Interface Endpoints (PrivateLink)** | Elastic Network Interface (ENI) with private IP inside your subnet. | Most AWS services, SaaS apps, custom services. | Hourly ENI charge + per-GB data processing fee. | Use for private access to all other AWS services (KMS, SQS, Secrets Manager, etc.) or cross-account internal APIs. |
