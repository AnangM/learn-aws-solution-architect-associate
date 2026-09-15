# Amazon Kinesis

## What the Service Is
Amazon Kinesis is a suite of fully managed services for collecting, processing, and analyzing real-time streaming data at any scale.

## Description of the Service
Kinesis enables the real-time ingestion of application logs, IoT telemetry, clickstream data, financial transactions, and video streams, allowing applications to react instantly to data in motion.

## When to Use the Service
- Use Amazon Kinesis when processing continuous high-volume data streams with sub-second processing latency.

## Family Members Table

| Member Service | Primary Function | Data Retention | Target Destinations | When to Use It |
|---|---|---|---|---|
| **Amazon Kinesis Data Streams (KDS)** | Ingestion and real-time custom stream processing. | 24 hours (default) up to 365 days. | Custom consumers (Lambda, KCL, EC2, Flink). | Use when you need custom consumer logic, sub-second latency, multiple independent consumers, and data replayability. |
| **Amazon Data Firehose (formerly Kinesis Firehose)** | Simple, automated delivery pipeline that batches and loads streaming data. | Ephemeral (buffering only, no long-term storage). | Amazon S3, Redshift, OpenSearch, Splunk, HTTP endpoints. | Use when you want a zero-administration delivery pipeline to batch, transform (via Lambda), and load data directly into destinations. |
| **Amazon Managed Service for Apache Flink (formerly Kinesis Data Analytics)** | Real-time stream analytics using SQL, Java, or Scala on streaming data. | N/A (processes in-flight data). | Kinesis Data Streams, Firehose, S3, OpenSearch. | Use to execute complex event processing, sliding window aggregations, and real-time anomaly detection on streaming data. |
| **Amazon Kinesis Video Streams (KVS)** | Securely streams video and audio from connected devices to AWS for analytics. | Configurable per stream. | Machine learning models (Rekognition Video, SageMaker), playback. | Use for capturing, processing, and storing live video feeds from cameras, drones, and IoT sensors. |
