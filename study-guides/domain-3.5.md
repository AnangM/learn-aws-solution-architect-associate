# Domain 3.5 — Determine high-performing data ingestion and transformation solutions

**Source transcript:** [`skillbuilder/domain-3.5.md`](../skillbuilder/domain-3.5.md)

## What this sub-domain is about

Select batch and streaming ingestion, ETL, data lakes, migration paths, formats, governance, and secure data movement.

### Learning objectives

- Data Streams supports custom real-time consumers; Firehose buffers and delivers to supported destinations.
- Glue catalogs and transforms; EMR gives distributed processing control; Athena queries S3 without a cluster.
- Snow suits large offline transfer; DataSync automates online transfers; Transfer Family provides managed file protocols; DMS migrates databases.
- Use IAM, bucket policies, KMS, versioning, Object Lock, and replication for governed lakes.

## AWS services mentioned in the transcript

- **Amazon Kinesis Data Streams**
- **Amazon Kinesis Data Firehose**
- **Amazon Kinesis Data Analytics**
- **Amazon Kinesis Video Streams**
- **Amazon MSK**
- **Amazon EMR**
- **AWS Glue**
- **AWS Lake Formation**
- **Amazon Athena**
- **Amazon QuickSight**
- **Amazon S3**
- **AWS Snow Family**
- **AWS DataSync**
- **AWS Transfer Family**
- **AWS Storage Gateway**
- **AWS Direct Connect**
- **AWS Database Migration Service**
- **AWS KMS**
- **Amazon API Gateway**
- **Amazon Cognito**

## Related AWS services

These are enrichment for comparison and completeness; they are not claimed to be named in the transcript.
- **Amazon Managed Workflows for Apache Airflow**
- **Amazon Redshift**
- **Amazon OpenSearch Service**
- **Amazon SageMaker**
- **AWS Clean Rooms**
- **Amazon EventBridge**

## Detailed study material

### Study point 1

Data Streams supports custom real-time consumers; Firehose buffers and delivers to supported destinations.

### Study point 2

Glue catalogs and transforms; EMR gives distributed processing control; Athena queries S3 without a cluster.

### Study point 3

Snow suits large offline transfer; DataSync automates online transfers; Transfer Family provides managed file protocols; DMS migrates databases.

### Study point 4

Use IAM, bucket policies, KMS, versioning, Object Lock, and replication for governed lakes.

## Which service is better for which case?

| Requirement | Candidates | Decision guidance |
|---|---|---|
| Streaming | Data Streams vs Firehose | Streams gives custom low-latency control; Firehose minimizes delivery operations. |
| Migration | Snow vs DataSync | Snow fits very large offline movement; DataSync fits online automated transfer. |
| ETL | Glue vs EMR | Glue is managed ETL/cataloging; EMR gives more distributed-processing control. |

## Host questions and answers

**Question inventory:** 10 explicit question-mark prompts retained from the transcript after normalization. Compound and rhetorical prompts are answered with their assumptions.

### Q1. Why would you choose Kinesis data streams instead of Kinesis Data Fire Hose?

**Answer:** Use Amazon Kinesis Data Streams when you require real-time processing (sub-second latency), multi-consumer reading, custom processing logic via Kinesis Client Library (KCL) or Lambda, message replayability (data retention up to 365 days), and manual partition shard control; use Amazon Data Firehose when you need a simple, fully managed ingestion pipeline to batch, transform, and load streaming data automatically into S3, Redshift, OpenSearch, or Splunk with zero shard management.

**Classification:** Streaming ingestion service comparison prompt.

### Q2. Which Kinesis solution includes basic data transformation options?

**Answer:** Use Amazon Data Firehose (configured with an inline AWS Lambda transformation function or built-in JSON-to-Parquet/ORC conversion) for stream transformations during ingestion; use Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics) when executing complex SQL or stateful streaming analytics on data in motion.

**Classification:** Direct knowledge check on streaming transformation capabilities.

### Q3. What services can we use to optimize processing?

**Answer:** Use AWS Glue for serverless Apache Spark ETL jobs and automatic schema discovery via Glue Crawlers; use Amazon EMR when requiring distributed big data frameworks (Hadoop, Presto, Spark) with granular control over cluster instances and spot pricing; and use Amazon Athena for ad-hoc serverless SQL queries directly against data stored in S3.

**Classification:** Big data processing service selection prompt.

### Q4. Would you use Amazon EMR, AWS Glue, AWS Lake Formation?

**Answer:** Use AWS Lake Formation when establishing centralized data lake security, governance, and fine-grained column/row-level access control on S3; use AWS Glue for serverless ETL data integration and cataloging; and use Amazon EMR when running heavy, custom distributed big data compute engines on managed EC2 clusters.

**Classification:** Architectural role comparison for data lake services.

### Q5. But what are other ways to optimize your data ingestion and transformation?

**Answer:** Use columnar file formats (such as Apache Parquet or ORC) with Snappy compression to optimize query performance and reduce storage; partition S3 datasets logically by date/time (e.g., year/month/day); and trigger event-driven AWS Lambda functions on S3 `ObjectCreated` events for lightweight, automated file validation and preprocessing.

**Classification:** Data lake optimization technique prompt.

### Q6. How would you handle data ingestion into your AWS Lake Formation data lake?

**Answer:** Use Amazon Data Firehose for real-time streaming data ingestion into S3, AWS Database Migration Service (DMS) for continuous relational database CDC replication, AWS DataSync for scheduled on-premises file/object synchronization, and AWS Glue ETL jobs to transform and catalog incoming data under Lake Formation security rules.

**Classification:** End-to-end data lake ingestion pattern prompt.

### Q7. What services can we use to transfer data from on premises environment to the cloud specifically?

**Answer:** Use AWS DataSync for high-speed online synchronization of file systems and object storage over the network; use the AWS Snow Family for secure, offline bulk data transfers; use AWS Transfer Family for SFTP/FTPS protocols; and use AWS Database Migration Service (DMS) over AWS Direct Connect or VPN for relational and non-relational database migration.

**Classification:** On-premises to cloud migration tool taxonomy.

### Q8. For example, when would it be more appropriate to use the Snow Family to transfer data from on premises to the cloud?

**Answer:** Use the AWS Snow Family (Snowball Edge or Snowmobile) when transferring tens of terabytes to petabytes of data from on-premises environments where network bandwidth is limited, costly, or where network transfer would take weeks to months.

**Classification:** Bulk data transfer decision prompt.

### Q9. When might you use Amazon Kinesis to transfer data into AWS?

**Answer:** Use Amazon Kinesis (Data Streams or Firehose) when ingesting continuous, high-volume streaming data generated in real time from thousands of distributed sources—such as IoT sensors, application logs, clickstream events, and financial transactions.

**Classification:** Real-time data streaming scenario prompt.

### Q10. In what ways can you use Glue?

**Answer:** Use AWS Glue Crawlers to discover schemas and populate the centralized AWS Glue Data Catalog; use AWS Glue ETL jobs to execute serverless, distributed data transformations and conversions into Parquet format; and use AWS Glue DataBrew for visual, code-free data cleansing.

**Classification:** Direct knowledge check on AWS Glue capabilities.

## Corrections and clarifications

- Read transcript artifacts such as “lease privilege,” “instant store,” and “Amazon Kubernetes Service” as **least privilege**, **instance store**, and **Amazon EKS** where context makes the intended term clear.
- Pricing, quotas, regional availability, and feature behavior change; official AWS documentation is authoritative for current facts.
- Ambiguous prompts depend on requirements. The answers above give the standard exam interpretation rather than silently inventing requirements.

## Official AWS references

- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [AWS pricing](https://aws.amazon.com/pricing/)

_References accessed 2026-09-13._
