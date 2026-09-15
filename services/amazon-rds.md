# Amazon Relational Database Service (Amazon RDS)

## What the Service Is
Amazon RDS is a managed relational database service that makes it easy to set up, operate, and scale a relational database in the cloud.

## Description of the Service
Amazon RDS automates routine database administrative tasks including hardware provisioning, database setup, software patching, automated backups (point-in-time recovery up to 35 days), and failure detection. It supports Multi-AZ deployments for high availability and Read Replicas for horizontal read scaling.

## When to Use the Service
- Use Amazon RDS when applications require traditional relational database engines with ACID transaction guarantees, complex multi-table joins, and foreign key constraints.
- Use Amazon RDS when you want to minimize administrative overhead while preserving compatibility with standard SQL engines.

## Supported Database Engines

| Engine | Characteristics | When to Use It |
|---|---|---|
| **Amazon Aurora** | Cloud-native, high-performance MySQL/PostgreSQL compatible engine. | Use for high-scale, mission-critical enterprise relational workloads requiring maximum throughput and fast failover. |
| **PostgreSQL** | Open-source object-relational database with strong JSON and GIS support. | Use for applications requiring complex analytics, PostGIS geospatial queries, and open-source standards. |
| **MySQL** | Widely used open-source relational database engine. | Use for web applications, LAMP stacks, content management systems, and e-commerce platforms. |
| **MariaDB** | Community-developed fork of MySQL. | Use as an alternative to MySQL with enhanced storage engines. |
| **Oracle** | Enterprise relational database with Bring Your Own License (BYOL) and License Included options. | Use for legacy enterprise applications, proprietary Oracle packages (PL/SQL), and corporate Oracle environments. |
| **Microsoft SQL Server** | Enterprise relational engine with Windows authentication and .NET integration. | Use for Windows enterprise applications, legacy .NET software, and enterprise SQL Server reporting. |

## Resiliency & Scaling Architecture

| Feature | What It Is | When to Use It |
|---|---|---|
| **RDS Multi-AZ** | Synchronous standby replica in a second AZ; automated DNS failover in 60-120 seconds. | Use for production environments requiring high availability, automated failover, and zero data loss. |
| **RDS Read Replicas** | Asynchronous read-only replicas (up to 5 or 15 depending on engine); can be cross-region or promoted to standalone. | Use to scale read-heavy query throughput horizontally or support cross-region disaster recovery. |
| **Storage Auto Scaling** | Dynamically scales allocated storage up to a configured threshold as data grows. | Use for unpredictable data growth to prevent database storage-full outages. |
