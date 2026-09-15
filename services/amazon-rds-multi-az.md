# Amazon RDS Multi-AZ Deployments

## What the Service Is
Amazon RDS Multi-AZ is a high-availability deployment option that provides enhanced availability and durability for Amazon RDS database instances by synchronously replicating data to a standby instance in a different Availability Zone.

## Description of the Service
In an RDS Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous standby replica in a different AZ within the same Region. In the event of planned maintenance or unexpected instance failure, RDS automatically flips the database endpoint DNS CNAME to the standby instance within 60 to 120 seconds with zero data loss. The standby cannot be read directly.

## When to Use the Service
- Use RDS Multi-AZ for all production relational database instances where high availability, automated failover, and zero data loss are non-negotiable requirements.
- Note: Do NOT use Multi-AZ alone to scale read performance (use RDS Read Replicas instead).

## RDS Multi-AZ vs. Read Replicas

| Dimension | RDS Multi-AZ Standby | RDS Read Replicas |
|---|---|---|
| **Replication Type** | Synchronous (zero data loss). | Asynchronous (potential replication lag). |
| **Primary Purpose** | High availability and disaster recovery. | Horizontal read throughput scaling. |
| **Access** | Standby cannot be queried; inactive until failover. | Readers serve active read traffic via separate endpoints. |
| **Region Scope** | Same Region, different Availability Zone. | Same Region or cross-Region. |
