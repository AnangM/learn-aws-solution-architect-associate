# Amazon Virtual Private Cloud (Amazon VPC)

## What the Service Is
Amazon VPC is a logically isolated virtual network dedicated to your AWS account within a specific AWS Region. It gives you complete control over your virtual networking environment.

## Description of the Service
Amazon VPC allows you to select your own IPv4/IPv6 CIDR IP address range, create public and private subnets across multiple Availability Zones, configure route tables, and implement network security boundaries using security groups and network access control lists (NACLs). It supports internet access via Internet Gateways and NAT Gateways, hybrid connectivity via VPN and Direct Connect, and private communication via VPC Peering, Transit Gateway, and VPC Endpoints.

## When to Use the Service
- Use Amazon VPC as the foundational network foundation to securely host, isolate, and interconnect all AWS compute, container, and database resources.
- Use Amazon VPC when workloads require fine-grained network segmentation, multi-tier isolation, and secure connections to corporate data centers.

## Core VPC Components Table

| Component | What It Is | When to Use It |
|---|---|---|
| **Subnet (Public)** | A CIDR segment tied to 1 AZ whose route table has a direct route (`0.0.0.0/0`) targeting an Internet Gateway (IGW). | Use for public-facing components: Application Load Balancers, bastion hosts, and NAT Gateways. |
| **Subnet (Private)** | A CIDR segment tied to 1 AZ with no direct route to an IGW. Outbound internet egress routes through a NAT Gateway. | Use for backend application servers, microservices, and database instances. |
| **Internet Gateway (IGW)** | A horizontally scaled, redundant, highly available VPC component that enables communication between resources in your VPC and the internet. | Use to provide bidirectional IPv4/IPv6 internet connectivity for public subnets. |
| **NAT Gateway** | Managed AWS NAT service deployed in a public subnet providing outbound-only internet connectivity for private subnets. | Use when private instances need outbound internet access for OS patches/updates without accepting inbound internet connections. |
| **Route Table** | A set of rules (routes) that determines where network traffic from your subnet or gateway is directed. | Use to control packet routing within the VPC, to the internet, across VPNs/Direct Connect, and to VPC endpoints. |
| **Security Group** | A virtual stateful firewall that controls inbound and outbound traffic at the individual instance/ENI level. | Use as the primary defense to allow specific IP ranges, protocols, or chained security group IDs. |
| **Network ACL (NACL)** | An optional stateless firewall operating at the subnet boundary with numbered allow/deny rules evaluated in order. | Use as a secondary defense layer for blocking specific malicious IP addresses or subnets. |
| **VPC Flow Logs** | Captures IP traffic going to and from network interfaces in your VPC, published to CloudWatch Logs or S3. | Use for network monitoring, security anomaly detection, and troubleshooting connectivity issues. |
| **VPC Peering** | Direct point-to-point network connection between two VPCs (same or different accounts/regions) routing via private AWS IPs. | Use for low-to-medium numbers of VPCs where direct private communication is needed without gateway hourly fees. |
| **VPC Endpoints (Gateway)** | Free routing table targets for Amazon S3 and DynamoDB within the same region. | Use to access S3 or DynamoDB from private subnets without traversing internet gateways or NAT gateways. |
| **VPC Endpoints (Interface)** | Elastic Network Interfaces (ENIs) with private IPs powered by AWS PrivateLink. | Use to privately access AWS services, third-party SaaS, or internal services across accounts. |
