# AWS NAT Gateways

## What the Service Is
AWS NAT Gateway is a fully managed Network Address Translation (NAT) service that allows instances in a private subnet to connect to the internet while preventing external hosts from initiating connections.

## Description of the Service
NAT Gateways are deployed in public subnets with an Elastic IP address. They scale automatically up to 45 Gbps. For high availability, deploy a separate NAT Gateway in each Availability Zone where private subnets reside.

## When to Use the Service
- Use NAT Gateways when private subnet EC2 instances or containers require outbound internet connectivity (for OS software updates, external API calls) without public internet exposure.
