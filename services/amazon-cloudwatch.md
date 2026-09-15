# Amazon CloudWatch

## What the Service Is
Amazon CloudWatch is a monitoring and observability service built for DevOps engineers, developers, site reliability engineers (SREs), and IT managers.

## Description of the Service
CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. It provides automated dashboards, composite and metric alarms, anomaly detection, and automated scaling triggers for EC2 Auto Scaling. Key components include CloudWatch Metrics (with 1-minute basic and 1-second detailed monitoring), CloudWatch Alarms, CloudWatch Logs (and Logs Insights SQL querying), and CloudWatch Synthetics (canary testing).

## When to Use the Service
- Use Amazon CloudWatch to monitor resource utilization (CPU, disk I/O, network packets) across AWS services.
- Use Amazon CloudWatch unified agent when EC2 instances must report OS-level metrics (RAM/memory utilization, disk space used) that are not tracked by default.
- Use CloudWatch Alarms to trigger Auto Scaling actions, EC2 reboot/recover actions, or SNS notifications.

## CloudWatch Components Table

| Component | What It Does | When to Use It |
|---|---|---|
| **CloudWatch Metrics** | Gathers numeric performance metrics from AWS services and custom applications. | Use to track latency, error rates, CPU, and throughput trends over time. |
| **CloudWatch Alarms** | Watches a single metric (or math expression) and triggers automated actions when thresholds breach. | Use to automate EC2 Auto Scaling, stop/terminate idle instances, or trigger SNS alerts. |
| **CloudWatch Logs** | Ingests, stores, and analyzes log files from EC2, Lambda, VPC Flow Logs, Route 53, and CloudTrail. | Use for centralized log aggregation, real-time error searching, and compliance archiving. |
| **CloudWatch Synthetics** | Runs configurable canaries (Node.js/Python scripts) that simulate user traffic 24/7. | Use to proactively monitor REST APIs and web application UI availability before customers encounter issues. |
