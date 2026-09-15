# Amazon Aurora Global Database

## What the Service Is
Amazon Aurora Global Database is a feature of Amazon Aurora that spans multiple AWS Regions, enabling low-latency global reads and fast disaster recovery for relational databases.

## Description of the Service
Aurora Global Database uses dedicated storage-level replication across regions rather than traditional database engine binlog replication. Replication latency between the primary region and up to five secondary regions is typically under 1 second. In the event of a regional disaster, a secondary region can be promoted to full read/write workload within under 1 minute (RTO < 1 min, RPO < 1s).

## When to Use the Service
- Use Amazon Aurora Global Database for globally distributed applications requiring fast local read performance in multiple geographic locations.
- Use Amazon Aurora Global Database for mission-critical relational databases requiring cross-region disaster recovery with near-zero data loss.
