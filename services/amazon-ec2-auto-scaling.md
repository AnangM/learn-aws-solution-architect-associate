# Amazon EC2 Auto Scaling

## What the Service Is
Amazon EC2 Auto Scaling is a managed compute availability service that automatically monitors your applications and dynamically adjusts the number of Amazon EC2 instances in an Auto Scaling group (ASG) to maintain performance and optimize costs.

## Description of the Service
EC2 Auto Scaling ensures your application has the right amount of compute capacity to handle current traffic demand. It automatically replaces degraded or unhealthy instances, distributes instances across multiple Availability Zones for high availability, and integrates seamlessly with Elastic Load Balancing (ALB/NLB) and CloudWatch metrics.

## When to Use the Service
- Use Amazon EC2 Auto Scaling when traffic patterns fluctuate predictably (scheduled) or unpredictably (dynamic scaling).
- Use Amazon EC2 Auto Scaling to achieve fault tolerance and self-healing by maintaining a minimum fleet capacity across multiple AZs.
- Use Amazon EC2 Auto Scaling with mixed instances policies (combining On-Demand and Spot instances) to minimize compute costs.

## Scaling Policies Table

| Scaling Policy Type | What the Policy Is About | When to Use It |
|---|---|---|
| **Target Tracking Scaling** | Automatically adjusts ASG capacity to keep a selected metric at or near a specified target value (e.g., average CPU at 50% or ALB request count per target). | Use as the recommended default for most dynamic workloads where you have a clear performance metric directly correlated to load. |
| **Step Scaling** | Adjusts capacity in progressive steps based on the size of the CloudWatch alarm breach (e.g., add 1 instance at 60% CPU, add 3 instances at 80% CPU). | Use when you need customized, proportional responses to large sudden traffic spikes or multi-tiered alarm thresholds. |
| **Simple Scaling** | Waits for a cooldown period before adjusting capacity based on a single CloudWatch metric alarm threshold. | Use for legacy setups; generally superseded by Step Scaling to prevent lag during rapid load shifts. |
| **Scheduled Scaling** | Scales capacity up or down at specific dates and times according to a recurring cron or one-time calendar event. | Use when traffic surges are completely predictable (e.g., daily business opening hours at 8 AM, recurring batch runs, or scheduled flash sales). |
| **Predictive Scaling** | Uses machine learning algorithms to forecast future daily and weekly traffic patterns and schedule proactive capacity additions. | Use for cyclical workloads with recurring weekly traffic curves where reactive scaling is too slow to handle ramp-up spikes. |
