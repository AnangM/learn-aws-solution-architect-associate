# AWS Snow Family

## What the Service Is
The AWS Snow Family is a set of physical, ruggedized, secure edge-computing and data migration devices designed to move massive volumes of data into and out of AWS and run compute at the edge.

## Description of the Service
When uploading petabytes of data over internet connections is constrained by network bandwidth, latency, or cost, AWS ships physical Snow devices to your site. You load data onto the device using local high-speed network connections and ship it back to AWS, where the data is imported into Amazon S3.

## When to Use the Service
- Use the AWS Snow Family when network transfers of large datasets (>10 TB to multiple Petabytes) would take more than several days or weeks over existing internet connections.
- Use Snow devices for local data collection, processing, and machine learning inference in remote, disconnected, or harsh industrial edge environments.

## Family Members Table

| Member Device | Usable Capacity | Compute Capabilities | When to Use It |
|---|---|---|---|
| **AWS Snowcone** | 8 TB (HDD) or 14 TB (SSD) | 2 vCPUs, 4 GB RAM (EC2 / IoT Greengrass) | Use for lightweight data collection and transfer in space-constrained, tactical, or mobile environments; supports AWS DataSync. |
| **AWS Snowball Edge Storage Optimized** | 80 TB or 210 TB NVMe | 24-104 vCPUs, 32-416 GB RAM | Use for large-scale data migration (tens to hundreds of terabytes) and local storage-intensive edge computing. |
| **AWS Snowball Edge Compute Optimized** | 28 TB NVMe SSD or 42 TB | 104 vCPUs, 416 GB RAM, optional NVIDIA GPU | Use for intensive edge computing, video processing, advanced machine learning inference, and local virtualization in disconnected locations. |
| **AWS Snowmobile** | Up to 100 PB per truck | 45-foot ruggedized shipping container truck | Use for massive multi-petabyte to exabyte-scale data migrations (e.g., complete data center shutdowns). |
