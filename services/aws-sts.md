# AWS Security Token Service (AWS STS)

## What It Is
AWS Security Token Service (AWS STS) is a web service that enables you to request temporary, limited-privilege credentials for AWS Identity and Access Management (IAM) users or for users that you authenticate (federated users).

> See canonical file: [aws-security-token-service.md](file:///home/aoki/Learn/aws-solution-architect/services/aws-security-token-service.md)

## Description
AWS STS provides short-lived authentication credentials consisting of an Access Key ID, a Secret Access Key, and a Security Token that expires automatically after a configurable duration (from 15 minutes up to 36 hours, default 1 hour). It is the underlying identity delegation engine for IAM Roles, EC2 Instance Profiles, cross-account access, and identity federation via SAML 2.0 or OpenID Connect (OIDC).

## When to Use
- Granting cross-account access to trusted third parties, partners, or internal multi-account environments without sharing static credentials.
- Authenticating mobile, web, or external users via enterprise identity providers (IdPs like Okta, Azure AD, Ping) using SAML 2.0 federation.
- Authenticating web identity users via social identity providers (Google, Apple, Facebook, Amazon Cognito) via OpenID Connect (OIDC).
- Temporary credential generation for AWS services running workloads (EC2 instance metadata service IMDS, Lambda execution roles, ECS task roles).

## Common STS API Operations

| STS API Action | Description | When to Use |
| :--- | :--- | :--- |
| `AssumeRole` | Returns temporary security credentials to access AWS resources across accounts or assume specific IAM roles. | Use for cross-account delegation, service-to-service delegation, or temporary privilege elevation. |
| `AssumeRoleWithSAML` | Authenticates users against an external SAML 2.0 compliant enterprise IdP (e.g., Okta, Active Directory) and returns AWS temporary credentials. | Use for enterprise corporate single sign-on (SSO) into the AWS Management Console or AWS CLI. |
| `AssumeRoleWithWebIdentity` | Authenticates users against OpenID Connect (OIDC) identity providers (Google, Apple, Cognito) to assume an IAM role. | Use for mobile apps, public web apps, or GitHub Actions CI/CD workflows connecting to AWS without long-term AWS secrets. |
| `GetSessionToken` | Returns temporary credentials for an IAM user, often used in multi-factor authentication (MFA) enforcement. | Use when requiring MFA before executing sensitive CLI operations or API calls. |
| `GetFederationToken` | Returns temporary credentials for a federated user using custom identity broker mechanisms. | Use when building a custom authentication broker for legacy directories without SAML/OIDC. |
