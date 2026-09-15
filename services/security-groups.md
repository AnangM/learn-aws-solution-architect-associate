# Amazon EC2 Security Groups

## What the Service Is
A Security Group is a virtual, stateful firewall that controls inbound and outbound network traffic for Amazon EC2 instances and network interfaces (ENIs).

## Description of the Service
Security groups operate at the instance/ENI layer. They support allow rules only (implicit deny all else) and are stateful: return traffic for allowed inbound requests is automatically allowed outbound regardless of outbound rules. Security groups support security group chaining (referencing another security group ID as the source).

## When to Use the Service
- Use Security Groups as the first line of network defense for individual compute instances, load balancers, and database endpoints.
