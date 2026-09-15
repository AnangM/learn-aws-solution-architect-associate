# AWS Transfer Family

## What the Service Is
AWS Transfer Family is a fully managed, serverless file transfer service that enables the transfer of files directly into and out of Amazon S3 and Amazon EFS using standard file transfer protocols.

## Description of the Service
AWS Transfer Family provides managed endpoints supporting SFTP, FTPS, FTP, and AS2 protocols. It integrates with corporate identity providers (Active Directory, Okta, IAM Identity Center), enforces custom domain names via Route 53, and automatically triggers post-transfer file processing workflows.

## When to Use the Service
- Use AWS Transfer Family when external clients or business partners require SFTP/FTPS/AS2 protocols to exchange files without you managing dedicated SFTP servers or patching host infrastructure.
- Use AWS Transfer Family to ingest partner data directly into S3 data lakes or EFS shared file systems.
