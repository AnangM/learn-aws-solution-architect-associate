# Amazon RDS Proxy

## What the Service Is
Amazon RDS Proxy is a fully managed, highly available database proxy for Amazon RDS and Amazon Aurora that pools and shares database connections to make applications more scalable, resilient, and secure.

## Description of the Service
Serverless architectures (such as AWS Lambda) can open hundreds or thousands of database connections during traffic bursts, exhausting database memory and CPU. RDS Proxy maintains a pool of established connections, allowing applications to multiplex connections efficiently. It also intercepts database failovers, reducing failover downtime by up to 66%, and integrates with AWS Secrets Manager and IAM for secure credential handling.

## When to Use the Service
- Use Amazon RDS Proxy when serverless applications (AWS Lambda functions) or microservices open frequent, short-lived connections to RDS or Aurora.
- Use Amazon RDS Proxy to reduce database failover times and maintain application availability during multi-AZ failovers.
- Use Amazon RDS Proxy to enforce IAM database authentication and centrally manage credentials via Secrets Manager.
