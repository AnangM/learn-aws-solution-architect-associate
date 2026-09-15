# Network Access Control Lists (NACLs)

## What the Service Is
A Network Access Control List (NACL) is an optional, stateless subnet-level firewall that controls traffic entering and exiting one or more subnets.

## Description of the Service
NACLs process numbered rules in chronological order (starting with lowest number). They support both ALLOW and DENY rules. Because they are stateless, separate rules must explicitly permit both inbound traffic and ephemeral return ports (1024-65535).

## When to Use the Service
- Use Network ACLs as a secondary defense boundary to explicitly deny specific malicious IP addresses or CIDR blocks at the subnet perimeter.
