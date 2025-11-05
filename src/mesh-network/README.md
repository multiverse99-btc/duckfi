# 🌐 DuckFi Mesh Network

This module provides the **peer-to-peer layer** of the DuckFi protocol,  
built on top of [libp2p](https://libp2p.io/) and WebRTC.

## Responsibilities
- Peer discovery and handshake.
- Message passing between nodes.
- Synchronization of distributed query results.
- Cryptographic validation of peer responses.
- Optional federation of queries across multiple nodes.

## Core Files
| File | Description |
|------|--------------|
| `libp2p-node.ts` | Initializes the local libp2p node instance. |
| `peerDiscovery.ts` | Handles peer search and connection lifecycle. |
| `querySync.ts` | Synchronizes query fragments and partial results. |

## Next Steps
- Add peer reputation scoring.
- Implement encrypted data-chunk exchange.
- Integrate on-chain staking validation.
