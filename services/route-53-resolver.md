# Route 53 Resolver

## What the Service Is
Route 53 Resolver (formerly Amazon VPC DNS or .2 resolver) is the recursive DNS service running on the VPC network reserve IP (`168.63.129.16` or VPC base + 2).

## Description of the Service
Route 53 Resolver resolves DNS queries for local VPC domain names, Private Hosted Zones, and public internet domains. Route 53 Resolver Endpoints enable hybrid DNS integration between on-premises networks and AWS VPCs without maintaining self-managed BIND DNS servers.

## When to Use the Service
- Use Route 53 Resolver Endpoints for hybrid cloud architectures requiring bi-directional DNS resolution between on-premises Active Directory/DNS and AWS Private Hosted Zones.

## Resolver Endpoints Table

| Endpoint Type | Traffic Direction | When to Use It |
|---|---|---|
| **Inbound Resolver Endpoint** | On-premises DNS -> AWS VPC | Use when on-premises servers need to resolve private AWS domains (e.g., `*.ec2.internal`, Private Hosted Zones). |
| **Outbound Resolver Endpoint** | AWS VPC -> On-premises DNS | Use when EC2 instances need to resolve on-premises corporate domain names (e.g., `corp.example.com`) based on Resolver Rules. |
