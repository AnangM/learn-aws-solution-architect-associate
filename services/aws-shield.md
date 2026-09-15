# AWS Shield

## What the Service Is
AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.

## Description of the Service
AWS Shield provides real-time detection and automatic inline mitigation of DDoS attacks. It is available in two tiers: Standard and Advanced.

## Tiers Table

| Tier | Protection Scope | Cost | Key Features | When to Use It |
|---|---|---|---|---|
| **AWS Shield Standard** | Layer 3 and 4 DDoS attacks (SYN floods, UDP reflection attacks). | Free (automatic for all AWS customers). | Inspects all incoming traffic automatically; mitigates network/transport layer attacks at perimeter. | Use automatically for all AWS workloads without configuration. |
| **AWS Shield Advanced** | Layers 3, 4, and 7 attacks on CloudFront, Route 53, ALB, and Global Accelerator. | $3,000/month base + data transfer usage fees. | 24/7 access to AWS Shield Response Team (SRT), financial DDoS cost protection (service credits for scaling during attack), and bundled AWS WAF rules at no extra charge. | Use for mission-critical enterprise applications requiring 24/7 dedicated DDoS incident support and financial protection. |
