# AWS Database Migration Service (AWS DMS)

## What It Is
AWS Database Migration Service (AWS DMS) is a cloud service that makes it easy to migrate relational databases, data warehouses, NoSQL databases, and other types of data stores to AWS or between combinations of cloud and on-premises setups.

> See canonical file: [aws-database-migration-service.md](file:///home/aoki/Learn/aws-solution-architect/services/aws-database-migration-service.md)

## Description
AWS DMS helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. It can migrate data to and from most widely used commercial and open-source databases (homogeneous or heterogeneous migrations). When combined with the AWS Schema Conversion Tool (SCT), it converts database schemas, stored procedures, and triggers between different engines.

## When to Use
- Migrating on-premises databases (Oracle, SQL Server, MySQL, PostgreSQL) to AWS RDS or Aurora with near-zero application downtime.
- Continuous ongoing data replication (Change Data Capture - CDC) from operational databases into analytical data stores (Amazon Redshift, S3 Data Lake, OpenSearch).
- Heterogeneous migrations (e.g., Oracle to Amazon Aurora PostgreSQL) paired with AWS Schema Conversion Tool (SCT).
- Consolidating multiple database shards into a centralized database or data lake.

## Migration Types & Replication Tasks

| Migration Task Type | Description | When to Use |
| :--- | :--- | :--- |
| **Full Load (Migrate existing data)** | Migrates all selected tables and data from source to target in a single batch snapshot. | Use for one-time migrations where downtime is acceptable or source data is static. |
| **Full Load + Ongoing CDC** | Performs initial full load while capturing transaction log changes, then applies changes continuously. | Use for production database migrations where minimal or near-zero application downtime is required. |
| **Replicate Data Changes Only (CDC)** | Replicates only ongoing incremental data changes (inserts, updates, deletes) starting from a specific log sequence number (LSN). | Use when initial data was pre-loaded using native engine tools (e.g., Percona XtraBackup, pg_dump, RMAN) to save time/bandwidth. |
