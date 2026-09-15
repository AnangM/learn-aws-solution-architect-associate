# AWS Secrets Manager

## What the Service Is
AWS Secrets Manager is a fully managed service that helps you protect secrets needed to access your applications, services, and IT resources.

## Description of the Service
Secrets Manager securely encrypts and stores database credentials, API keys, OAuth tokens, and arbitrary secrets using AWS KMS. Its standout feature is native automated secret rotation, which uses built-in AWS Lambda rotation templates to update database passwords (RDS, Aurora, DocumentDB, Redshift) and application configs in sync without application downtime.

## When to Use the Service
- Use AWS Secrets Manager for sensitive credentials that require automated, managed rotation on a regular schedule (e.g., every 30, 60, or 90 days).
- Use AWS Secrets Manager for cross-account sharing of secrets with fine-grained IAM resource policies.
- Use AWS Secrets Manager with client-side caching to reduce API costs and improve application latency.
