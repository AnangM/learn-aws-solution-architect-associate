# Amazon Elastic Compute Cloud (Amazon EC2)

## What the Service Is
Amazon EC2 is a foundational AWS compute service providing secure, resizable, and on-demand virtual computing capacity (instances) in the cloud. It allows you to run applications on customizable virtual servers with full administrative control over the operating system, networking, and storage.

## Description of the Service
Amazon EC2 eliminates the need to invest in on-premises hardware upfront, enabling you to build and run applications faster. Instances can be launched across multiple Availability Zones with custom AMI operating systems, network interfaces (ENIs), and storage volumes (EBS or ephemeral instance store). EC2 instances are categorized into specialized families optimized for different workload bottlenecks (compute, memory, storage, graphics/accelerated, or general balance).

## When to Use the Service
- Use Amazon EC2 when you require full administrative root/administrator access to the underlying operating system and environment.
- Use Amazon EC2 when workloads require custom kernel configurations, legacy monoliths, proprietary licensed software (BYOL), or specialized network protocols not supported by managed container/serverless services.
- Use Amazon EC2 when applications require continuous, predictable, steady-state processing with persistent local storage or specialized GPU/accelerator hardware.

## Instance Families and Classes

| Family Category | Instance Series | What the Class Is About | When to Use It |
|---|---|---|---|
| **General Purpose** | `M6g, M6i, M7g, T4g, T3` | Balanced compute, memory, and networking resources. `T` series offers burstable CPU using CPU credits. | Use for standard web and application servers, microservices, small-to-medium relational databases, and test/dev environments. |
| **Compute Optimized** | `C6g, C6i, C7g` | High ratio of compute power (vCPUs) relative to memory, powered by top-frequency processors. | Use for compute-bound workloads: batch processing, media transcoding, scientific modeling, gaming dedicated servers, and high-traffic web servers. |
| **Memory Optimized** | `R6g, R6i, R7g, X2gd, z1d` | High memory-to-vCPU ratio designed for memory-intensive workloads. | Use for large in-memory enterprise databases (SAP HANA), distributed memory caches (Redis, Memcached), and real-time big data analytics (Apache Spark). |
| **Storage Optimized** | `I3, I3en, I4i, D3, D3en` | Direct-attached high-throughput, low-latency NVMe SSD storage or high-density HDDs. | Use for high-frequency NoSQL databases (Cassandra, MongoDB), distributed file systems, data warehousing, and log analytics engines. |
| **Accelerated Computing** | `P4, P5, G4dn, G5, Inf2, Trn1` | Hardware accelerators including NVIDIA GPUs and AWS Trainium/Inferentia ASICs. | Use for machine learning model training/inference, 3D graphics rendering, computer vision, video processing, and seismic analysis. |

## Pricing Models & Purchase Options

| Pricing Model | Description | When to Use It |
|---|---|---|
| **On-Demand Instances** | Pay for compute capacity by the second or hour with no upfront payment or long-term commitment. | Use for short-term, irregular, or unpredictable workloads that cannot be interrupted, or during initial application development and testing. |
| **Reserved Instances (Standard)** | Commit to a 1- or 3-year term for specific instance attributes in exchange for up to 72% discount. | Use for steady-state workloads with known, unchanging instance configurations and long-term predictable capacity needs. |
| **Reserved Instances (Convertible)** | Commit to a 1- or 3-year term with the ability to exchange for different instance families or OS, offering up to 54% discount. | Use for steady-state workloads requiring multi-year commitments where instance family or OS flexibility is needed. |
| **Savings Plans (Compute)** | Flexible commitment to a consistent hourly spend ($/hr) for 1 or 3 years, offering up to 66% discount across EC2, Fargate, and Lambda. | Use for steady-state baseline usage across evolving instance types, regions, or serverless compute without operational reservation management. |
| **Savings Plans (EC2 Instance)** | Commitment to consistent hourly spend on an individual instance family in a specific region, offering up to 72% discount. | Use for steady-state workloads tied to a fixed instance family (e.g., C6g in us-east-1) over 1 to 3 years. |
| **Spot Instances** | Bid on spare AWS compute capacity with up to 90% discount off On-Demand rates; AWS can reclaim with 2-minute interruption warning. | Use for fault-tolerant, stateless, containerized, or checkpointed batch workloads that can handle sudden termination. |
| **Dedicated Hosts** | Physical EC2 server dedicated entirely for your use, supporting socket/core-level compliance and server-bound licenses. | Use when regulatory compliance forbids multi-tenancy or when BYOL enterprise software licenses require physical core tracking. |
| **Dedicated Instances** | Instances that run on single-tenant hardware dedicated to an AWS account at the host hardware level. | Use when compliance mandates physical hardware isolation from other AWS customers without requiring host-level control. |
