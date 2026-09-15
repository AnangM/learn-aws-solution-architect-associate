# Amazon Aurora Serverless (v2)

## What the Service Is
Amazon Aurora Serverless is an on-demand, auto-scaling configuration for Amazon Aurora that automatically adjusts database compute capacity in fine-grained increments based on real-time application load.

## Description of the Service
Aurora Serverless v2 scales compute and memory capacity in fractions of Aurora Capacity Units (ACUs, where 1 ACU = 2 GB RAM + corresponding CPU) in milliseconds without dropping connections or interrupting transactions. It supports all Aurora features including Multi-AZ, Read Replicas, and Global Database.

## When to Use the Service
- Use Aurora Serverless v2 for variable, intermittent, or unpredictable database workloads (e.g., e-commerce flash sales, enterprise reporting).
- Use Aurora Serverless v2 for SaaS multi-tenant environments with thousands of databases that experience fluctuating usage.
- Use Aurora Serverless v2 for development and test environments to pay only for exact capacity consumed during active testing.
