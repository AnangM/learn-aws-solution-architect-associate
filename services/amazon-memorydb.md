# Amazon MemoryDB

## What the Service Is
Amazon MemoryDB is a Redis-compatible, durable, in-memory database service built for ultra-fast performance with Multi-AZ transactional durability.

## Description of the Service
Unlike ElastiCache (where data is primarily cached in memory and can be lost during cluster crashes if not replicated), MemoryDB uses a distributed transactional commit log to guarantee durability, making it suitable as a primary database.

## When to Use the Service
- Use Amazon MemoryDB when you need Redis-level microsecond read and single-digit millisecond write performance combined with primary database transactional durability.
