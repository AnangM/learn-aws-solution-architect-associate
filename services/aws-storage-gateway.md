# AWS Storage Gateway

## What the Service Is
AWS Storage Gateway is a hybrid cloud storage service that connects an on-premises software appliance with cloud-based storage to provide seamless, secure integration between on-premises environments and the AWS storage infrastructure.

## Description of the Service
Storage Gateway deploys as a virtual machine (VMware ESXi, Hyper-V, KVM) or physical hardware appliance in your on-premises data center. It provides local protocol support (NFS, SMB, iSCSI, iSCSI-VTL) with local caching to maintain low-latency access to frequently used data while persisting primary data or backups in Amazon S3, EBS, and Glacier.

## When to Use the Service
- Use AWS Storage Gateway when on-premises applications require hybrid access to virtually unlimited AWS cloud storage without changing application code.
- Use AWS Storage Gateway for hybrid backup, cloud archiving, disaster recovery, and tiered storage.

## Family Members Table

| Gateway Type | Protocol Presented | AWS Backend Storage | When to Use It |
|---|---|---|---|
| **Amazon S3 File Gateway** | NFS, SMB | Amazon S3 (all classes) | Use when on-premises applications need file-based access to objects stored directly in S3 with local read caching. |
| **Amazon FSx File Gateway** | SMB | Amazon FSx for Windows File Server | Use for low-latency local caching of Windows file shares stored in AWS FSx for Windows File Server. |
| **Volume Gateway (Cached)** | iSCSI block storage | Amazon S3 (cached locally on-premises) | Use when on-premises servers need low-latency block storage while retaining primary data in S3; local disk caches hot data. |
| **Volume Gateway (Stored)** | iSCSI block storage | Local on-premises disks (backed up to S3 as EBS snapshots) | Use when on-premises applications require full local dataset retention on-site with asynchronous cloud snapshot backups. |
| **Tape Gateway (VTL)** | iSCSI-VTL | S3, Glacier Flexible Recovery, Glacier Deep Archive | Use to replace physical tape backup infrastructure without modifying existing enterprise backup software workflows. |
