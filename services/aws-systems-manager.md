# AWS Systems Manager (SSM)

## What the Service Is
AWS Systems Manager is an operations hub that gives you visibility and control of your infrastructure running on AWS and in hybrid cloud environments.

## Description of the Service
Systems Manager uses the SSM Agent to manage EC2 instances, on-premises servers, and virtual machines without requiring open inbound firewall ports or bastion jump hosts.

## When to Use the Service
- Use Systems Manager to automate operational tasks, patch operating systems, securely store configuration parameters, and connect to remote shells without SSH keys.

## Core SSM Capabilities Table

| Capability | Description | When to Use It |
|---|---|---|
| **Session Manager** | Secure, browser-based shell and CLI access to EC2 instances without open inbound ports (port 22/3389) or public IPs. | Use as the modern, zero-maintenance replacement for bastion hosts and SSH keys. |
| **Parameter Store** | Secure, hierarchical key-value storage for application configuration strings and passwords. | Use for application settings, secrets, and environment parameters. |
| **Run Command** | Remotely and securely runs shell scripts and commands across large fleets of managed instances. | Use for bulk configuration updates and operational troubleshooting at scale. |
| **Patch Manager** | Automates patching of operating systems (Linux/Windows) based on defined patch baselines and maintenance windows. | Use to keep instance fleets compliant with security operating system patches. |
| **Automation** | Executes automated maintenance and remediation workflows using declarative YAML/JSON playbooks. | Use to automate AMI creation, instance recovery, and AWS Config remediation actions. |
