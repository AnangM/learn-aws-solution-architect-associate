# AWS Graviton

## What the Service Is
AWS Graviton is a family of custom, 64-bit ARM-based processors designed by AWS (Annapurna Labs) to deliver the best price-performance for cloud workloads running in Amazon EC2.

## Description of the Service
Graviton processors (Graviton2, Graviton3, Graviton4) power compute instances ending in `g` (e.g., C7g, M7g, R7g) as well as managed services like RDS, Aurora, ElastiCache, OpenSearch, and Lambda. They provide up to 40% better price-performance compared to comparable x86-based processors while consuming significantly less energy.

## When to Use the Service
- Use AWS Graviton instances when running Linux-based workloads that can be compiled for ARM64 architecture (Python, Java, Node.js, Go, PHP, containerized microservices).
- Use AWS Graviton on managed services (RDS, Aurora, ElastiCache, Fargate) where architecture switching requires only a configuration change with zero application rewrite.
