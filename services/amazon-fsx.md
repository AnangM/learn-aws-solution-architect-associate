# Amazon FSx

## What the Service Is
Amazon FSx is a family of fully managed, high-performance third-party and open-source file storage services optimized for specific operating systems and workloads.

## Description of the Service
Rather than running and managing self-hosted file servers on EC2, Amazon FSx provides fully managed file systems backed by SSD or HDD storage, complete with automated backups, multi-AZ high availability, and native enterprise features (Active Directory, deduplication, snapshots).

## When to Use the Service
- Use Amazon FSx when applications require specialized, high-performance file systems native to Windows (SMB) or high-performance compute Linux (Lustre, NetApp ONTAP, OpenZFS).

## Family Members Table

| Member Service | Supported Protocol | Underlying Engine | When to Use It |
|---|---|---|---|
| **Amazon FSx for Windows File Server** | SMB (v2.0 to v3.1.1) | Native Windows Server NTFS | Use for Windows-based applications, Active Directory integration, DFS namespaces, SQL Server High Availability (FCI), and enterprise home shares. |
| **Amazon FSx for Lustre** | POSIX | Lustre parallel file system | Use for compute-intensive High-Performance Computing (HPC), machine learning training, media rendering, and financial modeling linked directly to Amazon S3. |
| **Amazon FSx for NetApp ONTAP** | NFS, SMB, iSCSI | NetApp ONTAP | Use for enterprise hybrid migrations of existing NetApp workloads, multi-protocol file access, snapshot cloning, and cross-region replication. |
| **Amazon FSx for OpenZFS** | NFS (v3, v4, v4.1, v4.2) | OpenZFS | Use for Linux applications requiring ultra-low latency (hundreds of microseconds) and high throughput without NetApp enterprise licensing. |
