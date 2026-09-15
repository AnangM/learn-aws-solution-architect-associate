# Amazon Cognito

## What the Service Is
Amazon Cognito provides customer identity and access management (CIAM), letting you easily add user sign-up, sign-in, and access control to your web and mobile applications.

## Description of the Service
Cognito scales to millions of users and supports sign-in with social identity providers (Google, Facebook, Amazon, Apple) and enterprise providers (SAML 2.0 and OIDC). It consists of two primary components: User Pools and Identity Pools.

## When to Use the Service
- Use Amazon Cognito when building public consumer-facing web or mobile apps that require user authentication, registration, password recovery, and secure access to backend AWS APIs.

## Cognito Pools Table

| Pool Type | Primary Purpose | Returned Tokens | When to Use It |
|---|---|---|---|
| **Cognito User Pools (CUP)** | User directory for authentication (who the user is). | JSON Web Tokens (ID, Access, Refresh tokens). | Use for user sign-up, login, multi-factor authentication (MFA), password resets, and federated social login for apps. |
| **Cognito Identity Pools (Federated Identities)** | Authorization engine providing temporary AWS credentials (what the user can access). | Temporary AWS STS credentials. | Use to grant authenticated or guest/anonymous users direct access to AWS resources (e.g., uploading photos directly to S3 or querying DynamoDB). |
