# AWS KMS Key Policies

## What the Service Is
A KMS Key Policy is a resource-based policy attached directly to an AWS KMS Customer Master Key (CMK) that defines who has permissions to use and manage the key.

## When to Use the Service
- Every KMS key must have a key policy; it is the primary authorization mechanism for AWS KMS.
- Use KMS Key Policies to enforce strict separation of duties between key administrators (who manage the key) and key users (who encrypt/decrypt data).
