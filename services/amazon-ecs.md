# Amazon Elastic Container Service (Amazon ECS)

## What the Service Is
Amazon ECS is a fully managed, AWS-native container orchestration service that makes it easy to deploy, manage, and scale containerized applications.

## Description of the Service
Amazon ECS integrates natively with AWS services including Application Load Balancer, Amazon ECR, AWS Secrets Manager, IAM roles for tasks, and CloudWatch Logs. It allows you to run containers using either AWS Fargate (serverless) or Amazon EC2 instances that you manage.

## When to Use the Service
- Use Amazon ECS when deploying Docker containers using an AWS-native, deeply integrated service without the operational complexity of managing Kubernetes.
- Use Amazon ECS for microservices architectures, web applications, and batch processing tasks.

## Launch Types Table

| Launch Type | Infrastructure Management | When to Use It |
|---|---|---|
| **AWS Fargate** | Fully serverless; AWS manages host provisioning, patching, and scaling; pay per vCPU/memory per second. | Use for most standard container workloads to eliminate EC2 server management and scale rapidly on demand. |
| **Amazon EC2** | You manage and maintain EC2 instances in an Auto Scaling group registered to the ECS cluster. | Use when requiring full OS-level control, specialized GPU hardware, persistent local storage, or maximizing cost savings with EC2 Reserved Instances / Savings Plans. |
