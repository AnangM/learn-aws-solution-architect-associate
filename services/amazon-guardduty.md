# Amazon GuardDuty

## What the Service Is
Amazon GuardDuty is an intelligent threat detection service that continuously monitors your AWS accounts and workloads for malicious activity and unauthorized behavior.

## Description of the Service
GuardDuty uses machine learning, anomaly detection, and integrated threat intelligence (from AWS, CrowdStrike, and Proofpoint) to identify threats such as compromised EC2 instances, crypto-mining malware, exposed IAM credentials, and compromised S3 buckets. It analyzes foundational data sources without installing agents: VPC Flow Logs, CloudTrail Management and Data Events, DNS query logs, EKS audit logs, and RDS login activity.

## When to Use the Service
- Use Amazon GuardDuty for continuous, automated threat detection and security monitoring across all AWS accounts.
- Use Amazon GuardDuty findings integrated with Amazon EventBridge to automate security remediation (e.g., quarantine an infected instance or isolate compromised IAM credentials).
