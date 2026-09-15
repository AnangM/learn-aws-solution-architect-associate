# Amazon Athena

## What the Service Is
Amazon Athena is an interactive, serverless query service that makes it easy to analyze data directly in Amazon S3 using standard SQL.

## Description of the Service
Athena is completely serverless—there is no infrastructure to manage, and you pay only for the volume of data scanned by your queries. It supports open data formats (CSV, JSON, ORC, Apache Parquet, Avro) and leverages the AWS Glue Data Catalog to store table schemas.

## When to Use the Service
- Use Amazon Athena for ad-hoc, exploratory SQL queries against raw datasets, application logs, and VPC Flow Logs stored in Amazon S3.
- Use Amazon Athena with partitioned, Snappy-compressed Parquet files to maximize query performance and minimize data scanning costs.
