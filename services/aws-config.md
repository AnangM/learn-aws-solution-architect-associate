# AWS Config

## What the Service Is
AWS Config is a policy-driven auditing service that assesses, audits, and evaluates the configurations of your AWS resources.

## Description of the Service
AWS Config continuously monitors and records AWS resource configurations and changes. It evaluates recorded configurations against desired baselines using Config Rules (managed or custom Lambda rules) and provides automated remediation actions via AWS Systems Manager Automation documents.

## When to Use the Service
- Use AWS Config to track configuration history and resource relationship timelines (e.g., "What security group was attached to this instance last Tuesday?").
- Use AWS Config to enforce compliance guardrails (e.g., ensuring all S3 buckets are encrypted, all EBS volumes are encrypted, and no security groups allow open SSH port 22).
