# Amazon DynamoDB Accelerator (DAX)

## What the Service Is
Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available in-memory cache purpose-built for Amazon DynamoDB that delivers up to a 10x performance improvement—from milliseconds to microseconds.

## Description of the Service
DAX provides write-through and read-through caching. It is API-compatible with DynamoDB, meaning applications do not need custom cache management logic or rewrite of database queries—developers simply swap the DynamoDB SDK client with the DAX client.

## When to Use the Service
- Use DynamoDB Accelerator (DAX) for read-heavy, latency-sensitive applications (e.g., real-time bidding, gaming leaderboards, e-commerce promotions) that require microsecond response times.
