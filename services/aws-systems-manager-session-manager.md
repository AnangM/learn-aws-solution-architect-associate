# AWS Systems Manager Session Manager

## What It Is
AWS Systems Manager Session Manager is a fully managed AWS Systems Manager capability that lets you manage your Amazon EC2 instances, on-premises instances, and virtual machines (VMs) through an interactive one-click browser-based shell or via the AWS CLI.

> See canonical file: [aws-systems-manager.md](file:///home/aoki/Learn/aws-solution-architect/services/aws-systems-manager.md)

## Description
Session Manager provides secure and auditable instance management without the need to open inbound ports (no port 22 for SSH or port 3389 for RDP), maintain bastion/jump hosts, or manage SSH keys. All communication between the administrator and the instance is channeled outbound over TLS via the SSM Agent to the Systems Manager endpoint. Sessions can be logged, recorded, and audited via Amazon S3 and Amazon CloudWatch Logs, and access is governed strictly by AWS IAM.

## When to Use
- Connecting to Linux or Windows EC2 instances in private subnets with zero inbound open ports in Security Groups.
- Eliminating the cost, maintenance, and security surface of dedicated bastion/jump hosts.
- Enforcing strict corporate compliance where every terminal keystroke and session command must be logged and archived to immutable S3 buckets.
- Restricting terminal shell access using IAM policies, Multi-Factor Authentication (MFA), and AWS KMS session encryption.

## Comparison: EC2 Remote Access Mechanisms

| Access Mechanism | Inbound Ports Needed | Bastion Required? | Key Management | Audit & Logging | When to Use |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AWS Systems Manager Session Manager** | **None** (Outbound 443 to SSM endpoints) | **No** | **None** (IAM authenticated) | Full session logs in S3 and CloudWatch Logs; API calls in CloudTrail | **Recommended default for all enterprise workloads.** Highly secure, zero inbound ports, full audit trail. |
| **EC2 Instance Connect** | Inbound TCP port 22 (from AWS EC2 Instance Connect IP ranges) | Optional | Temporary SSH key pushed via IMDS (valid 60s) | SSH connection logged in CloudTrail, but session keystrokes are not recorded | Use when existing native SSH client workflows and tools (e.g. SCP, rsync, native SSH tunnels) are strictly required. |
| **Traditional SSH / RDP via Bastion Host** | Inbound TCP 22 (SSH) or 3389 (RDP) | **Yes** (Bastion host in public subnet) | Long-lived SSH key pairs or local OS passwords | Bastion host logs must be manually configured and forwarded | Use only for legacy environments where SSM Agent cannot be installed or outbound HTTPS traffic is restricted. |
