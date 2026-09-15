# AWS Systems Manager Parameter Store

## What the Service Is
Parameter Store (a capability of AWS Systems Manager) provides secure, hierarchical storage for configuration data and secrets management.

## Description of the Service
Parameter Store manages configuration values, database connection strings, license codes, and passwords as key-value pairs (plain text `String`, `StringList`, or KMS-encrypted `SecureString`). It does NOT have native automated rotation templates (unlike Secrets Manager), but offers a generous free tier for standard parameters.

## When to Use the Service
- Use Parameter Store for application configuration settings, feature flags, and environment variables.
- Use Parameter Store for static secrets where automated rotation is not needed and low cost is prioritized.

## Comparison: Secrets Manager vs. Parameter Store

| Feature | AWS Secrets Manager | Systems Manager Parameter Store |
|---|---|---|
| **Primary Purpose** | Storing secrets with automated rotation. | General configuration management and parameter storage. |
| **Automated Rotation** | Built-in native rotation templates (via Lambda) for RDS, Redshift, etc. | No native rotation (requires authoring custom Lambda + EventBridge). |
| **Pricing** | $0.40 per secret per month + $0.05 per 10,000 API calls. | Standard tier: Free! Advanced tier: $0.05 per parameter per month. |
| **Cross-Account Access** | Direct resource-based policies on secrets. | Supported via RAM or advanced parameters. |
