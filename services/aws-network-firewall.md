# AWS Network Firewall

## What the Service Is
AWS Network Firewall is a stateful, fully managed network firewall and intrusion detection and prevention service (IDS/IPS) for Amazon VPC.

## Description of the Service
AWS Network Firewall provides deep packet inspection, stateful inspection, application protocol detection (e.g., HTTP/HTTPS domain filtering), and Snort-compatible IPS rule evaluation for incoming and outgoing VPC traffic. It scales automatically with network traffic without requiring firewall infrastructure management.

## When to Use the Service
- Use AWS Network Firewall when enterprise security policies mandate deep packet inspection, egress domain allowlisting/denylisting, and intrusion prevention across all VPC boundaries.
- Use AWS Network Firewall deployed in a centralized inspection VPC alongside AWS Transit Gateway to inspect all north-south (internet) and east-west (inter-VPC) traffic.
