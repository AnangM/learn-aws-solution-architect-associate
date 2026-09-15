# AWS Fargate

## What the Service Is
AWS Fargate is a serverless, pay-as-you-go compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

## Description of the Service
With AWS Fargate, you no longer have to provision, configure, patch, or scale clusters of virtual machines to run containers. You simply package your application in containers, specify CPU and memory requirements, define networking and IAM policies, and Fargate manages the underlying compute infrastructure. Each Fargate task runs in its own isolated kernel environment.

## When to Use the Service
- Use AWS Fargate when you want to deploy containerized microservices without the operational overhead of managing EC2 host instances.
- Use AWS Fargate for bursty, sporadic, or auto-scaling container workloads that need to scale rapidly without waiting for EC2 cluster node provisioning.
- Use AWS Fargate when strict workload isolation is required, as each task runs on dedicated single-tenant virtualized compute.
- Choose EC2 launch type instead of Fargate when you require custom kernel modules, root OS access, specialized GPU hardware, or long-running containers that maximize steady-state reserved EC2 capacity savings.
