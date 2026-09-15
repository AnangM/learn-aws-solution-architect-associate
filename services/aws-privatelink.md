# AWS PrivateLink

## What the Service Is
AWS PrivateLink provides private, secure connectivity between VPCs, supported AWS services, and on-premises networks without exposing traffic to the public internet.

## Description of the Service
PrivateLink powers VPC Interface Endpoints by placing an Elastic Network Interface (ENI) with a private IP address from your subnet directly inside your VPC. Traffic never leaves the AWS private network backbone, eliminates the need for Internet Gateways or NAT Gateways, and prevents overlapping CIDR block issues across peered networks.

## When to Use the Service
- Use AWS PrivateLink when private VPC instances need to access AWS services (SQS, SNS, Kinesis, Secrets Manager) privately without routing to the internet.
- Use AWS PrivateLink (VPC Endpoint Services) to securely share an internal application or SaaS service hosted behind a Network Load Balancer with hundreds of external consumer VPCs across different accounts.
