# AWS Security Token Service (AWS STS)

## What the Service Is
AWS STS is a web service that enables you to request temporary, limited-privilege credentials for AWS IAM users or federated users.

## Description of the Service
STS issues short-lived security credentials consisting of an Access Key ID, Secret Access Key, and a Session Token. Credentials expire automatically after a configurable duration (from 15 minutes up to 36 hours), eliminating the risk of lost or leaked long-term static access keys. Key API actions include `AssumeRole`, `AssumeRoleWithSAML`, and `AssumeRoleWithWebIdentity`.

## When to Use the Service
- Use AWS STS when EC2 instances, containers, or Lambda functions assume IAM roles to interact with AWS APIs.
- Use AWS STS for cross-account access, allowing trusted identities in Account A to assume roles in Account B.
- Use AWS STS for web identity federation (Cognito, Google, Facebook, Apple, OIDC) allowing mobile/web apps to acquire temporary scoped AWS credentials.
