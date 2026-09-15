# AWS Site-to-Site VPN

## What the Service Is
AWS Site-to-Site VPN creates a secure, encrypted IPsec connection between your remote on-premises network and your Amazon VPC over the public internet.

## Description of the Service
Each AWS Site-to-Site VPN connection consists of two redundant VPN tunnels terminating on a Virtual Private Gateway (VGW) or AWS Transit Gateway on the AWS side, and a Customer Gateway (CGW) device on the on-premises side. It supports automated failover between the two tunnels using BGP dynamic routing.

## When to Use the Service
- Use AWS Site-to-Site VPN for fast, low-cost hybrid connectivity between on-premises networks and AWS.
- Use AWS Site-to-Site VPN as a cost-effective backup or failover connection for an primary AWS Direct Connect circuit.
