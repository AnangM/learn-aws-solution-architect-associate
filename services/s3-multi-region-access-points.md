# Amazon S3 Multi-Region Access Points

## What the Service Is
Amazon S3 Multi-Region Access Points (MRAP) provide a global endpoint that routes client requests to the closest S3 bucket across multiple AWS Regions over the AWS global network.

## Description of the Service
MRAP leverages AWS Global Accelerator to route client traffic over AWS's private global fiber network to the bucket with lowest latency. It supports automatic multi-region failover and active-passive routing controls.

## When to Use the Service
- Use S3 Multi-Region Access Points for global applications uploading or downloading data from multiple worldwide geographic locations to maximize transfer speeds and achieve multi-region disaster resiliency.
