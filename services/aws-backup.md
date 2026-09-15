# AWS Backup

## What the Service Is
AWS Backup is a centralized, policy-driven backup management service that automates and consolidates data protection across AWS services and hybrid cloud environments.

## Description of the Service
AWS Backup eliminates the need for custom backup scripts and manual snapshot schedules. Through automated Backup Plans, it configures backup frequency, retention windows, lifecycle transitions to cold storage, and cross-region or cross-account backup replication. It supports AWS Backup Vault Lock for immutable, WORM-compliant backup retention.

## When to Use the Service
- Use AWS Backup to establish a centralized, auditable, and automated backup governance policy across multiple AWS accounts in AWS Organizations.
- Use AWS Backup to automatically copy backups across regions to satisfy disaster recovery and compliance mandates.
- Supported services: Amazon EBS, EC2, RDS, Aurora, DynamoDB, EFS, FSx, DocumentDB, Neptune, Storage Gateway, S3, and VMware workloads.
