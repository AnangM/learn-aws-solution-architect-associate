# Amazon S3 Object Lock

## What the Service Is
Amazon S3 Object Lock is a data protection feature that enables Write Once, Read Many (WORM) storage to prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely.

## Description of the Service
Object Lock can be configured in Governance Mode (users with specific IAM permissions can alter retention or delete) or Compliance Mode (no user, including the root account, can delete objects or shorten retention). It also supports Legal Holds.

## When to Use the Service
- Use S3 Object Lock to satisfy regulatory compliance standards (SEC Rule 17a-4, FINRA, CFTC) and protect critical data against ransomware or accidental deletion.
