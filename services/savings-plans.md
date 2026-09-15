# AWS Savings Plans

## What the Service Is
AWS Savings Plans is a flexible pricing model offering low prices on EC2, Fargate, and Lambda usage in exchange for a commitment to a consistent amount of compute usage ($/hour) for a 1- or 3-year term.

## Savings Plans Types Table

| Savings Plan Type | Discount Level | Scope of Flexibility | When to Use It |
|---|---|---|---|
| **Compute Savings Plans** | Up to 66% discount | Automatically applies across EC2 instance families, sizes, OS, regions, AWS Fargate, and AWS Lambda. | Use for steady-state workloads across evolving architectures and serverless compute. |
| **EC2 Instance Savings Plans** | Up to 72% discount | Applies to a specific instance family in a chosen region (e.g., M7g in us-east-1), regardless of size, OS, or AZ. | Use when committed to a specific instance family in a specific region for 1 to 3 years. |
| **SageMaker Savings Plans** | Up to 64% discount | Applies to Amazon SageMaker machine learning compute instances. | Use for steady-state machine learning model training and hosting. |
