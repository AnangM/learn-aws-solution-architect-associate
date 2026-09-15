# Amazon VPC Peering

## What the Service Is
A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 or IPv6 addresses.

## Description of the Service
VPC Peering works across accounts and across AWS Regions. It has no single point of failure and does not traverse the public internet. However, it does NOT support transitive routing (if A is peered with B, and B with C, A cannot talk to C through B).

## When to Use the Service
- Use VPC Peering when connecting a small number of VPCs (point-to-point) with no overlapping CIDR blocks where cost minimization is prioritized over hub-and-spoke management.
