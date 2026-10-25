// Each row is: question | answer | decision cue. Source links are derived from the exam task.
const groups = [
  ["1.1", "Secure access", `
An app in Account A must read one S3 bucket in Account B. What is the clean access pattern?|Assume a role or use a narrowly scoped bucket policy across accounts.|Grant only the needed actions and resources; avoid long-lived shared keys.
What controls can prevent a member account from using a service even when IAM allows it?|An AWS Organizations service control policy.|SCPs set the maximum available permissions; they do not grant permissions.
Who can change an IAM policy attached to a role?|A principal whose effective permissions allow the IAM change.|Check identity policies, boundaries, SCPs, and any explicit deny.
Your workforce signs in to multiple AWS accounts. Which identity service fits?|IAM Identity Center with a federated identity source.|Centralize workforce access with permission sets instead of IAM users in each account.
An EC2 instance needs DynamoDB access. How should it get credentials?|Attach an IAM role through an instance profile.|Temporary role credentials avoid distributing static keys.
A Lambda function in one account needs an S3 object in another. What must authorize it?|The caller's effective permissions and the target resource policy or role trust path.|Cross-account access requires permission on both sides of the boundary.
An AWS account root user is rarely needed. What baseline controls apply?|Enable MFA, protect credentials, and avoid routine root use.|Root has broad power and cannot be constrained like an ordinary IAM principal.
When would you use a permissions boundary?|To cap the permissions an IAM role or user can receive.|It limits effective permissions; it does not grant access by itself.
What wins when one applicable policy explicitly denies an action?|The explicit deny.|An allow elsewhere cannot override an explicit deny.
An application needs temporary access for a signed-in user. Which service issues temporary AWS credentials?|AWS Security Token Service through an assumed role or federation.|Temporary credentials reduce the risk of permanent secrets.
How can a vendor access your account without receiving an IAM user's access key?|Create a cross-account role with a restricted trust policy.|The vendor assumes the role and receives temporary credentials.
What is the shared-responsibility boundary for an EC2 guest OS?|The customer patches and configures the guest OS.|AWS manages the underlying infrastructure, while the guest workload remains yours.
`],
  ["1.2", "Secure networking and workloads", `
Are VPCs regional or zonal?|A VPC is regional; each subnet belongs to one Availability Zone.|Place subnets in multiple AZs for zone resilience.
What makes a subnet public?|Its route table has a route to an internet gateway and the resource has a usable public address.|A subnet name or tag does not determine reachability.
Private EC2 instances need outbound internet access. Which component provides it?|A NAT gateway in a public subnet with the appropriate route.|NAT provides outbound connections; it does not accept unsolicited inbound connections.
What is the key behavior difference between security groups and network ACLs?|Security groups are stateful allow rules; network ACLs are stateless ordered allow and deny rules.|NACLs must permit return traffic explicitly, including ephemeral ports.
An ALB should reach app instances, but clients should not connect directly. What should the app security group allow?|Inbound application traffic from the ALB security group.|Referencing the source security group is tighter than opening a CIDR range.
Private instances need S3 without NAT. What connection should you consider?|An S3 gateway VPC endpoint.|Associate it with relevant route tables and enforce access with policies when needed.
Private instances need a supported AWS API without public routing. Which endpoint type fits?|An interface VPC endpoint powered by PrivateLink.|It creates private ENIs and usually has hourly and data processing charges.
You want to expose one service to another VPC without broad network access. Which pattern fits?|AWS PrivateLink endpoint service.|It exposes a service rather than peering whole VPC address spaces.
Can VPC peering provide transit routing through a middle VPC?|No.|Peering links are non-transitive; use an appropriate hub routing design for transit.
Do security groups support explicit deny rules?|No.|Use a network ACL or another network control when a deny rule is required.
An on-premises network connects over Site-to-Site VPN. What must be configured for private app access?|Routes in both directions and security rules for the required ports.|A VPN tunnel alone does not create an end-to-end reachable path.
Does Direct Connect encrypt traffic by default?|No.|Add encryption such as VPN over Direct Connect or application TLS when required.
What protects a public web application against SQL injection patterns at HTTP layer?|AWS WAF attached to a supported entry point.|Security groups filter network traffic but do not inspect HTTP requests.
What is the primary AWS service for DDoS protection?|AWS Shield.|Use WAF for application-layer filtering; Shield addresses DDoS protection.
How can you keep an RDS database inaccessible from the public internet?|Place it in private subnets, disable public access, and restrict its security group.|Layer subnet routing, resource settings, and least-privilege network rules.
An admin needs shell access without opening inbound SSH. What managed service fits?|AWS Systems Manager Session Manager.|It can remove bastion hosts and inbound administration ports when prerequisites are met.
What is the purpose of a VPC route table?|It selects where subnet traffic goes for matching destinations.|A route creates a path; it does not authorize traffic by itself.
What is the difference between Client VPN and Site-to-Site VPN?|Client VPN connects individual users; Site-to-Site VPN connects networks.|Choose based on the endpoint being connected.
When is a transit gateway more suitable than a mesh of VPC peering links?|When many VPCs need centrally managed transitive connectivity.|Account for attachment and data processing costs as well as operations.
How can you restrict S3 access to requests arriving through a particular VPC endpoint?|Use a bucket policy condition for the endpoint or VPC context.|Check service behavior before applying a blanket deny that could block AWS service access.
What allows private on-premises access to an interface endpoint through hybrid connectivity?|Routes and DNS resolution to the endpoint's private IPs.|The endpoint alone does not solve hybrid DNS or routing.
What should be checked when an NACL blocks return traffic from a server?|Ephemeral destination ports and the opposite-direction rule.|NACLs are stateless, so return flows need their own rules.
How do you reduce public exposure of an application tier behind an internet-facing ALB?|Put the app tier in private subnets and allow only ALB-to-app traffic.|Only the entry point needs public reachability.
Can a NAT gateway receive new inbound internet connections for private instances?|No.|It enables outbound initiated flows and their responses.
What does VPC Flow Logs record for network troubleshooting?|Metadata about accepted or rejected IP traffic.|It is not a packet capture or application request log.
How can a private workload access DynamoDB without traversing NAT?|Use a DynamoDB gateway VPC endpoint.|Gateway endpoints are supported for S3 and DynamoDB.
What is a common secure pattern for internet-facing APIs?|TLS at the public endpoint, WAF where supported, and least-privilege backend access.|Treat encryption, request filtering, and backend isolation as separate controls.
An application stores database credentials that rotate automatically. Which service fits?|AWS Secrets Manager.|It supports managed rotation workflows; plain configuration parameters do not imply rotation.
`],
  ["1.3", "Data security", `
What should protect data in transit to a public application?|TLS using a valid certificate, commonly managed with ACM on supported services.|A private network path alone does not replace application encryption requirements.
When would AWS KMS be preferable to CloudHSM?|When managed key integration and simpler operations meet the requirements.|CloudHSM fits specialized control or cryptographic requirements.
Can a KMS key policy be ignored when granting access through IAM?|No.|The key policy is a primary authorization boundary for KMS keys.
How can you protect S3 data from accidental deletion for a retention period?|Use S3 Object Lock in an appropriate retention mode.|Versioning alone lets you recover versions but does not enforce retention.
What distinguishes encryption at rest from encryption in transit?|At rest protects stored bytes; in transit protects data crossing a connection.|Most architectures need both.
Which service can identify sensitive data in S3?|Amazon Macie.|Macie focuses on S3 data discovery and classification.
How do you protect an EBS volume's data at rest?|Enable EBS encryption with a KMS key.|Snapshots of encrypted volumes remain encrypted.
What is the distinction between backup and replication?|Backup provides recoverable historical points; replication maintains another copy.|Replication can copy bad writes or deletions, so recovery goals still need backups.
What should you check before sharing encrypted data across accounts?|The data access policy and the KMS key permissions in the target account.|Data access alone is insufficient when decryption is required.
Why classify data before selecting protection controls?|Classification determines retention, encryption, access, and audit requirements.|Apply controls according to the data's sensitivity and obligations.
`],
  ["2.1", "Scale and loose coupling", `
An order API must respond quickly while workers process orders later. Which pattern fits?|Put work on SQS and process it asynchronously.|A queue decouples request latency from downstream processing.
One event must reach several independent consumers. Which service pattern fits?|Publish through SNS or EventBridge to separate targets.|Fan-out keeps consumers independent.
What does SQS visibility timeout control?|How long a received message stays hidden before it can be retried.|Set it longer than typical processing and extend it for long jobs.
Why must an SQS consumer be idempotent?|At-least-once delivery can result in duplicate processing.|A retry should not create a duplicate business effect.
What handles repeatedly failing queue messages?|A dead-letter queue with a suitable redrive policy.|Separate poison messages so healthy work can continue.
When is EventBridge a better fit than a direct service call?|When producers emit events and consumers route by event rules.|It reduces tight coupling and supports multiple targets.
What scales a stateless EC2 web tier as demand changes?|An Auto Scaling group behind a load balancer.|Keep session state external to the instances.
Why externalize session state from web instances?|Any healthy instance can then serve a request.|Instance replacement and scaling do not lose user sessions.
What makes an architecture loosely coupled?|Components communicate through stable interfaces or asynchronous buffers.|A component can fail or scale without forcing immediate changes elsewhere.
How can an API absorb brief request bursts while protecting a slower backend?|Buffer work in SQS or use suitable API throttling.|The backend processes at a sustainable rate.
What is the difference between SQS standard and FIFO queues?|FIFO supports ordered, deduplicated message groups; standard favors very high throughput with best-effort ordering.|Choose ordering only when the workflow requires it.
When should you use an ALB rather than an NLB?|Use ALB for HTTP-aware routing; use NLB for transport-level TCP or UDP needs.|Select on protocol and routing requirements.
What scaling risk does a shared database create for many microservices?|It couples deployments and concentrates load.|Define data ownership and choose scaling or caching per workload.
Why use a cache in front of a read-heavy data store?|To reduce repeated reads and response latency.|Plan for expiration and stale data behavior.
How does a queue help when a downstream service is temporarily unavailable?|It retains work for later retry within its retention settings.|Monitor backlog age and design for expiry or dead-letter handling.
`],
  ["2.2", "Availability and recovery", `
What protects a workload from one Availability Zone failing?|Deploy redundant components across multiple AZs.|A single subnet or instance remains a zonal dependency.
How does RDS Multi-AZ differ from a read replica?|Multi-AZ is primarily for availability and failover; read replicas scale reads.|A read replica is not the default synchronous failover mechanism.
What does RPO measure?|The maximum acceptable data loss measured in time.|It drives backup frequency and replication choices.
What does RTO measure?|The maximum acceptable time to restore service.|It drives failover automation and standby capacity.
Which disaster recovery pattern usually has the lowest standby cost and longest recovery?|Backup and restore.|You rebuild resources after failure rather than keeping them fully running.
Which disaster recovery pattern keeps core services running at reduced capacity?|Warm standby.|It trades ongoing cost for faster recovery.
What is the benefit of an active-active multi-Region design?|Both Regions serve traffic and can absorb a regional failure.|It adds significant complexity and cost, especially for data consistency.
What does Route 53 health-check-based failover provide?|DNS answers can shift toward healthy endpoints.|Account for DNS caching and the underlying application's readiness.
Why should critical backups be tested through restore exercises?|A stored backup does not prove you can meet recovery objectives.|Test integrity, permissions, and time to restore.
How can an ALB improve availability across AZs?|It sends traffic to healthy registered targets in enabled AZs.|Targets still need to be deployed redundantly.
What happens to instance store data when its instance is stopped or terminated?|It is ephemeral and can be lost.|Use durable storage for persistent data.
What protects against accidental S3 object overwrite?|Enable versioning and retain prior versions.|Versioning supports recovery from changed or deleted objects.
When should a workload use cross-Region replication?|When regional recovery or geographic data requirements justify it.|Replication creates cost and may not substitute for point-in-time backup.
Why should health checks test application readiness rather than only network reachability?|A reachable port may still serve failed requests.|Route traffic only to targets able to handle work.
What is a common single point of failure in a supposedly multi-AZ application?|A database, queue consumer, or NAT path deployed in only one AZ.|Trace every dependency, not just the web tier.
`],
  ["3.1", "Storage performance", `
A workload needs low-latency block storage for EC2. Which service fits?|Amazon EBS.|Choose volume type and provisioned performance for the I/O pattern.
Many Linux instances need shared file access. Which service fits?|Amazon EFS.|It provides managed shared NFS storage across instances.
Applications need durable object storage at scale. Which service fits?|Amazon S3.|It is object storage, not a mounted block device.
What metric matters when choosing EBS performance for small random I/O?|IOPS, along with throughput and latency requirements.|Large sequential I/O may be throughput bound instead.
What helps S3 users far from a bucket upload large objects over long distances?|S3 Transfer Acceleration when measured benefit justifies cost.|Test against direct transfer before paying the premium.
When is instance store suitable?|For disposable scratch data or caches that can be rebuilt.|Its data is tied to the instance lifecycle.
`],
  ["3.2", "Compute performance", `
Which EC2 family fits a CPU-heavy batch job?|A compute-optimized instance family after benchmarking.|Match instance family to the bottleneck, not the application label.
Which EC2 family fits a large in-memory working set?|A memory-optimized instance family.|Measure memory pressure and throughput before scaling.
When is Lambda a good fit?|Event-driven tasks that fit its runtime, duration, and resource limits.|It scales execution without managing servers.
When is EC2 Auto Scaling useful?|When instance capacity must follow changing load or replace unhealthy instances.|Choose metrics that track actual demand.
Why test Graviton instances for a compatible workload?|They may improve price performance.|Benchmark the real software and confirm architecture compatibility.
What helps global users reach an application with lower latency?|Use an appropriate edge service such as CloudFront or Global Accelerator.|CloudFront caches eligible content; Global Accelerator optimizes network entry for supported endpoints.
`],
  ["3.3", "Database performance", `
A relational app has heavy read traffic. What is a common first scaling choice?|Add read replicas and route read-only queries to them.|Replicas do not increase primary write capacity.
What is DynamoDB designed for?|Key-value and document access at scale using defined access patterns.|Design partition keys and queries before choosing a table model.
What can reduce repeated database reads for hot keys?|A cache such as ElastiCache.|Accept and manage cache invalidation or staleness.
Why can a poor DynamoDB partition key hurt performance?|It can concentrate requests on a hot partition.|Distribute access according to the workload pattern.
What service helps many short-lived Lambda connections reach RDS?|Amazon RDS Proxy.|It pools and manages database connections.
When does a relational database remain appropriate despite NoSQL scaling options?|When joins, transactions, or a relational model are central requirements.|Select on query and consistency needs, not a blanket speed claim.
`],
  ["3.4", "Network performance", `
Which load balancer supports host- and path-based HTTP routing?|Application Load Balancer.|It operates at the application layer.
Which load balancer fits very high-performance TCP or UDP forwarding?|Network Load Balancer.|It operates at the transport layer.
What is the purpose of CloudFront caching?|Serve cacheable content closer to users and reduce origin requests.|Set cache behavior and invalidation according to freshness needs.
When might Global Accelerator fit better than a CDN?|For global traffic acceleration to regional application endpoints without content caching.|It uses fixed anycast IPs and the AWS global network.
Why place application tiers in subnets across multiple AZs?|To preserve capacity and reachability during a zone failure.|A VPC spanning AZs does not automatically distribute workloads.
What may improve throughput for a large transfer over a dedicated hybrid path?|Direct Connect when sustained bandwidth and requirements justify it.|Validate end-to-end bottlenecks and compare setup and port costs.
`],
  ["3.5", "Ingestion and transformation", `
Which service fits real-time stream ingestion with multiple consumers?|Amazon Kinesis Data Streams.|Consumers can process records independently with retention and ordering per shard.
Which service delivers streaming data into destinations with minimal pipeline management?|Amazon Data Firehose.|It handles delivery and optional transformation to supported targets.
What fits a batch ETL workflow over data in S3?|AWS Glue when its managed ETL model fits.|Select based on transformation complexity and schedule.
What can decouple incoming events from a slower transformer?|An SQS queue or streaming buffer.|It absorbs bursts and supports retry.
Why partition analytical files by common filter fields?|Queries can scan less data.|Good partitioning reduces latency and scanned-data cost.
What should drive the choice between streaming and batch processing?|Required freshness, throughput, operational complexity, and cost.|Real-time processing is unnecessary when delayed results suffice.
`],
  ["4.1", "Storage cost", `
Objects have unpredictable access patterns. Which S3 option should you evaluate?|S3 Intelligent-Tiering.|Compare monitoring and automation charges with expected savings.
Objects become cold after a predictable number of days. What can automate the move?|An S3 Lifecycle rule.|Choose a class based on retrieval speed and minimum-duration charges.
What storage is suitable for rare archives with flexible retrieval time?|An appropriate S3 Glacier class.|Compare storage, retrieval, and minimum-duration costs.
What cost risk comes with tiny objects in archival tiers?|Metadata and minimum billable size or duration can dominate.|Model actual object size and retention, not only price per GB.
How do you find which teams own S3 spending?|Activate cost allocation tags and analyze billing data.|Consistent tagging is needed before meaningful allocation.
When can S3 Requester Pays change who pays data requests?|When the requester can accept request and transfer charges.|The bucket owner still pays storage costs.
Why should EBS volumes be right-sized?|Over-provisioned capacity or performance increases recurring cost.|Measure utilization before reducing size or provisioned throughput.
What happens to costs when unused EBS snapshots accumulate?|Snapshot storage continues to accrue charges.|Use retention rules and verify restore obligations first.
What can lower S3 request and origin transfer demand for popular public content?|CloudFront caching.|Account for CDN requests and transfer pricing in the comparison.
Why compare EFS and S3 before storing shared files?|They offer different access models and cost structures.|Do not pay for shared POSIX file semantics when object access is enough.
`],
  ["4.2", "Compute cost", `
An interruptible batch job seeks minimum EC2 cost. Which purchase option fits?|Spot Instances.|The workload must tolerate interruption and retry.
Steady compute usage spans EC2, Fargate, and Lambda. Which discount model offers broad flexibility?|Compute Savings Plans.|Compare commitment level and coverage with actual usage.
A predictable EC2 workload needs a discount with instance-specific commitment. What should you compare?|EC2 Instance Savings Plans and Reserved Instances.|Choose based on flexibility, Region, family, and term requirements.
What is the first step before buying a compute commitment?|Measure a stable baseline of usage.|Overcommitting can erase expected savings.
What reduces cost when an EC2 service is idle at night?|Schedule or scale down capacity when business requirements permit.|Do not keep unused instances running by default.
Why use Auto Scaling for a variable workload?|Capacity follows demand, reducing idle spend.|Set sensible minimums and validate scaling signals.
What should determine EC2 instance size?|Observed CPU, memory, network, and storage usage plus headroom.|Choose based on measured bottlenecks rather than initial guesses.
When can Lambda cost less than always-on servers?|For intermittent, short-lived event processing.|Compare invocations, duration, memory, and operational needs.
What can reduce both latency and compute cost for repeat reads?|A cache or CDN where content freshness permits.|Cache hits avoid repeated origin work.
How can AWS Compute Optimizer help?|It recommends rightsizing based on utilization data.|Review recommendations against performance and business constraints.
`],
  ["4.3", "Database cost", `
When might DynamoDB on-demand capacity be cost-effective?|When traffic is unpredictable or varies sharply.|Compare actual request patterns with provisioned capacity and autoscaling.
When might DynamoDB provisioned capacity be cheaper?|When demand is predictable and utilization stays high.|Manage capacity and peaks so throttling does not occur.
Why remove unused RDS read replicas?|They incur instance and storage charges even with little read traffic.|Keep replicas only for measured scale or recovery needs.
What is a cost tradeoff of RDS Multi-AZ?|Higher ongoing cost in exchange for availability and failover.|Do not remove resilience required by the workload.
When could Aurora Serverless be suitable?|For variable or intermittent compatible database demand.|Compare minimum capacity, scaling behavior, and workload fit.
Why choose the right database engine for the workload?|A specialized access model can reduce infrastructure and operations cost.|Migration effort and feature needs also matter.
What cost risk comes from over-provisioned database instances?|Idle CPU and memory still incur instance charges.|Right-size from metrics and peak requirements.
How can a cache lower database cost?|It reduces repeated read load and may defer database scaling.|Account for cache cost and consistency behavior.
What should be included when comparing database options?|Instance or capacity, storage, I/O, backups, replication, and operations.|A low base instance price may hide workload-dependent charges.
Why review old database snapshots?|Retained backup storage can continue to cost money.|Keep snapshots required for recovery or compliance.
`],
  ["4.4", "Network cost", `
Private instances send heavy S3 traffic through NAT. What should you evaluate first?|An S3 gateway endpoint.|Compare routing and access policy needs; it can avoid NAT processing for S3 traffic.
What charges commonly make NAT gateways expensive?|Hourly gateway charges and per-GB processing, plus applicable data transfer.|Count gateways and traffic in each AZ.
When can interface endpoints cost more than NAT?|When many endpoints have low traffic but accrue hourly endpoint charges.|Compare endpoint hours, data processing, and NAT traffic together.
Two VPCs need a direct connection. When might peering cost less than Transit Gateway?|For a small, simple topology with suitable routing.|Transit Gateway adds attachment and processing charges but simplifies larger networks.
Many VPCs need centralized connectivity. What cost question accompanies Transit Gateway?|Whether hub management benefits justify attachment and data processing charges.|Model both traffic paths and operational complexity.
An on-premises link needs inexpensive standby for Direct Connect. What can fit?|Site-to-Site VPN as a failover path.|Verify its bandwidth and recovery characteristics meet the requirement.
Why place chatty services in the same AZ when resilience permits?|It can reduce cross-AZ data transfer charges and latency.|Balance savings against fault isolation requirements.
Why use CloudFront for frequently requested global content?|Caching can reduce origin transfer and repeated origin work.|Compare CDN transfer and request charges for the actual geography.
What hidden cost should be checked when moving data between Regions?|Inter-Region data transfer and any replication or service charges.|Price the whole data path, not only storage or compute.
How can Session Manager affect network administration cost?|It can remove bastion hosts and public inbound paths.|Account for any required private endpoints and logging charges.
`]
];

export const cards = groups.flatMap(([section, topic, block]) =>
  block.trim().split("\n").filter(Boolean).map((line, index) => {
    const [question, answer, cue] = line.split("|");
    return {
      id: `${section}-${String(index + 1).padStart(2, "0")}`,
      domain: Number(section[0]), section, topic, question, answer, cue,
      source: `https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03-domain${section[0]}.html`,
      guide: `https://github.com/AnangM/learn-aws-solution-architect-associate/blob/master/study-guides/domain-${section}.md`
    };
  })
);
