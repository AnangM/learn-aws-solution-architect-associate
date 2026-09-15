# AWS Certificate Manager (ACM)

## What the Service Is
AWS Certificate Manager (ACM) is a managed service that lets you easily provision, manage, and deploy public and private Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services and internal connected resources.

## Description of the Service
ACM removes the time-consuming manual process of purchasing, uploading, and renewing SSL/TLS certificates. Public certificates provisioned through ACM are free of charge and automatically renew before expiration when DNS validation (CNAME record in Route 53) or email validation is used. Private certificates can be issued via ACM Private CA for internal microservices.

## When to Use the Service
- Use AWS Certificate Manager to secure public web endpoints with SSL/TLS certificates on Amazon CloudFront, Application Load Balancers, Network Load Balancers (TLS listeners), and Amazon API Gateway custom domains.
- Use ACM for automated zero-maintenance certificate lifecycle renewal.

## Public vs. Private Certificates

| Certificate Type | Issuing Authority | Scope & Cost | When to Use It |
|---|---|---|---|
| **ACM Public Certificates** | Amazon Trust Services (public CA) | Free; bound to AWS integrated services only; private keys cannot be exported. | Use for public internet-facing web apps fronted by CloudFront, ALB, or API Gateway. |
| **AWS Private Certificate Authority (Private CA)** | Private subordinate CA managed by customer | Monthly CA fee + per-certificate fee; private keys can be exported for on-prem/EC2. | Use for internal corporate microservices, internal VPC services, and IoT device mutual TLS authentication. |
