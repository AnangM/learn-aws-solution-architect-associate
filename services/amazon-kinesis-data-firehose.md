# Amazon Data Firehose (formerly Kinesis Data Firehose)

## What the Service Is
Amazon Data Firehose is the easiest way to reliably load real-time streaming data into data lakes, data stores, and analytics services.

## Description of the Service
Firehose is completely serverless and requires zero shard management. It captures streaming data, batches it based on buffer size (MB) or buffer interval (seconds), optionally transforms data using inline AWS Lambda functions, converts formats to Apache Parquet/ORC, and delivers it automatically to destinations (S3, Redshift, OpenSearch, Splunk, HTTP endpoints).

## When to Use the Service
- Use Amazon Data Firehose when you need an automated, managed ingestion pipeline to batch, transform, and load streaming logs into Amazon S3, Redshift, or OpenSearch with zero consumer management.
