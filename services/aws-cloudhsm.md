# AWS CloudHSM

## What the Service Is
AWS CloudHSM is a cloud-based Hardware Security Module (HSM) that enables you to easily generate and use your own encryption keys on dedicated physical hardware inside your VPC.

## Description of the Service
CloudHSM provides dedicated, single-tenant, FIPS 140-2 Level 3 validated physical HSM appliances under your exclusive administrative control. AWS provisions the hardware inside your VPC, but has zero access to your cryptographic keys. You manage the HSM users, keys, and cryptographic operations using standard PKCS#11, JCE, and Microsoft CNG APIs.

## When to Use the Service
- Use AWS CloudHSM when corporate, contractual, or government regulatory compliance strictly mandates single-tenant FIPS 140-2 Level 3 hardware security modules.
- Use AWS CloudHSM when workloads require legacy cryptographic APIs (PKCS#11, CNG) not supported by AWS KMS.
- Use AWS CloudHSM as a Custom Key Store for AWS KMS.
