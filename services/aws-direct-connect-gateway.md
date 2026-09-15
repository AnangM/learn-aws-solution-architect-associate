# AWS Direct Connect Gateway

## What the Service Is
AWS Direct Connect Gateway is a globally available network grouping resource that enables you to connect a single AWS Direct Connect connection to multiple VPCs across multiple AWS Regions within the same or different accounts.

## Description of the Service
Instead of establishing separate private virtual interfaces (VIFs) and dedicated circuits to every individual region, a Direct Connect Gateway acts as a central aggregator. It associates with Virtual Private Gateways (VGWs) in any commercial AWS region or attaches to an AWS Transit Gateway using a Transit VIF.

## When to Use the Service
- Use AWS Direct Connect Gateway when you need to access VPCs in multiple AWS Regions over a single physical Direct Connect connection.
- Use AWS Direct Connect Gateway attached to an AWS Transit Gateway (via Transit VIF) to connect on-premises data centers to hundreds of multi-region VPCs.
