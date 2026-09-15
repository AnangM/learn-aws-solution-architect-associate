# AWS CloudTrail

## What the Service Is
AWS CloudTrail is an auditing, compliance monitoring, and governance service that records all AWS account activity and API calls.

## Description of the Service
CloudTrail logs who did what, from where, and when across your AWS environment. Every action taken by a user, role, or AWS service via the Console, CLI, or SDKs is recorded as an immutable event. An Organization Trail centralizes logs from all accounts into an encrypted S3 bucket.

## When to Use the Service
- Use AWS CloudTrail for security auditing, forensic analysis, compliance governance, and operational troubleshooting.
- Use CloudTrail Insights to automatically detect unusual API activity (e.g., spike in failed authorization calls or resource terminations).

## Event Types Table

| Event Type | What It Tracks | When to Use It |
|---|---|---|
| **Management Events** | Control-plane operations (e.g., `CreateBucket`, `RunInstances`, `AttachPolicy`). Included free for 90 days. | Use to track infrastructure changes, user logins, and administrative actions. |
| **Data Events** | High-volume data-plane operations (e.g., S3 `GetObject`/`PutObject`, Lambda `Invoke`, DynamoDB item APIs). Opt-in, paid. | Use when security compliance requires auditing individual object or database item access. |
| **Insights Events** | Machine learning analysis flagging anomalies in write API call rates or error codes. | Use to detect credential compromise, malicious scripts, or misconfigured automated deployments. |
