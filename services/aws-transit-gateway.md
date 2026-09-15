# AWS Transit Gateway

## What the Service Is
AWS Transit Gateway connects Amazon VPCs and on-premises networks through a central hub, acting as a cloud router.

## Description of the Service
As networks grow, connecting dozens or hundreds of VPCs using point-to-point VPC Peering creates an unmanageable mesh of `N*(N-1)/2` connections. Transit Gateway simplifies this into a hub-and-spoke topology where each VPC, VPN, or Direct Connect attaches once to the Transit Gateway. It supports route domains via multiple route tables, multicast routing, and inter-region peering.

## When to Use the Service
- Use AWS Transit Gateway when connecting tens to thousands of VPCs across multiple accounts and regions in a hub-and-spoke topology.
- Use AWS Transit Gateway to centralize egress traffic through a dedicated inspection/security VPC (e.g., with AWS Network Firewall).
- Use AWS Transit Gateway to attach both Site-to-Site VPNs and Direct Connect connections to multiple VPCs simultaneously.
