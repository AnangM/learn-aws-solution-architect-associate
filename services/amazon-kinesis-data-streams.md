# Amazon Kinesis Data Streams

## What the Service Is
Amazon Kinesis Data Streams is a scalable and durable real-time streaming data ingestion service that captures gigabytes of data per second from hundreds of thousands of sources.

## Description of the Service
Data streams are composed of shards (units of capacity: 1 MB/sec write, 2 MB/sec read) or can be configured in On-Demand capacity mode. Data records are retained for 24 hours (default) up to 365 days, enabling multiple independent consumers (Lambda, KCL applications, Apache Flink) to process and replay records concurrently.

## When to Use the Service
- Use Kinesis Data Streams for real-time streaming architectures requiring sub-second processing latency, custom consumer logic, and stream replayability.
