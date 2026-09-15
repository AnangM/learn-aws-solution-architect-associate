# AWS Direct Connect

## What the Service Is
AWS Direct Connect is a dedicated cloud service that links your on-premises network directly to AWS over a private, physical fiber-optic connection, bypassing the public internet.

## Description of the Service
Direct Connect delivers consistent network performance, lower latency, and reduced data egress costs compared to internet-based connections. Port speeds range from 1 Gbps, 10 Gbps, to 100 Gbps (or 50 Mbps - 500 Mbps via Direct Connect Partners). It uses Virtual Interfaces (VIFs): Public VIF for public AWS services, Private VIF for VPCs, and Transit VIF for AWS Transit Gateway.

## When to Use the Service
- Use AWS Direct Connect for workloads transferring massive datasets regularly between on-premises and AWS (e.g., hybrid data lakes, daily multi-terabyte backups).
- Use AWS Direct Connect when applications demand dedicated bandwidth, predictable network latency, or strict regulatory compliance prohibiting internet traversal.
- Use Direct Connect Gateway to connect a single Direct Connect link to multiple VPCs across different AWS Regions.
