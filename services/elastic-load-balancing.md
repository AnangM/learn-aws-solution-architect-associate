# Elastic Load Balancing (ELB)

## What the Service Is
Elastic Load Balancing automatically distributes incoming application or network traffic across multiple targets (such as EC2 instances, containers, IP addresses, and Lambda functions) in one or more Availability Zones.

## Description of the Service
ELB scales automatically to meet fluctuating traffic demands, monitors the health of registered targets, and routes traffic only to healthy targets. It supports SSL/TLS termination, integration with AWS WAF, sticky sessions, access logs, and integration with Amazon EC2 Auto Scaling groups.

## When to Use the Service
- Use Elastic Load Balancing to achieve high availability, fault tolerance, and seamless traffic distribution across multiple targets and Availability Zones.
- Use Elastic Load Balancing to expose public or internal web applications with integrated health checks and SSL offloading.

## Family Members Table

| Member | OSI Layer | Supported Protocols | Key Features | When to Use It |
|---|---|---|---|---|
| **Application Load Balancer (ALB)** | Layer 7 (Application) | HTTP, HTTPS, gRPC, WebSocket | Path-based routing, host-based routing, query-string routing, redirect/fixed-response actions, AWS WAF integration, native target support for AWS Lambda. | Use for modern web applications, microservices, containerized workloads (ECS/EKS), and REST APIs requiring advanced content-based routing and SSL termination. |
| **Network Load Balancer (NLB)** | Layer 4 (Transport) | TCP, UDP, TLS | Extreme performance (millions of requests/sec), ultra-low latency, static IP addresses per AZ, Elastic IP assignment, client IP preservation. | Use for high-throughput, low-latency applications, non-HTTP protocols, gaming, financial trading platforms, and PrivateLink endpoints. |
| **Gateway Load Balancer (GWLB)** | Layer 3 (Gateway + L4) | GENEVE encapsulation (IP packets) | Deploys, scales, and manages fleets of third-party virtual appliances (firewalls, deep packet inspection, IDS/IPS). | Use when transparently inserting inline third-party security appliances into the VPC traffic path. |
| **Classic Load Balancer (CLB)** | Layer 4 / 7 (Legacy) | HTTP, HTTPS, TCP, SSL | Basic load balancing across EC2 instances. | Legacy option; deprecated in favor of ALB and NLB for all new architectures. |
