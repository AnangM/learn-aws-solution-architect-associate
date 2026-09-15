# Amazon S3 Bucket Policies

## What the Service Is
Amazon S3 Bucket Policies are JSON-based resource policies attached directly to an S3 bucket to specify which principals (users, accounts, services) can access the bucket and its objects.

## Description of the Service
Bucket policies enforce access rules at the resource boundary. Common patterns include enforcing SSL/TLS in transit (`aws:SecureTransport: true`), denying unencrypted object uploads (`s3:x-amz-server-side-encryption`), restricting access to a specific VPC (`aws:sourceVpc`), or granting cross-account read access.

## When to Use the Service
- Use S3 Bucket Policies to enforce organizational security guardrails (SSL-only access, encryption headers) and grant cross-account access to bucket data.
