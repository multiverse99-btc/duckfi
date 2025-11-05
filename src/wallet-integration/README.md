# 💳 DuckFi Wallet Integration

This module connects DuckFi’s front-end and compute layer  
to blockchain wallets such as **Phantom** (Solana) and **MetaMask** (EVM).

## Responsibilities
- Manage wallet connections & authentication.
- Sign computation tasks before broadcasting.
- Send and receive on-chain transactions.
- Support multi-chain environments (Solana, Arbitrum, etc.).

## Core Files
| File | Description |
|------|--------------|
| `connectWallet.ts` | Unified wallet connector for multiple providers. |
| `metaMask.ts` | Ethereum-based wallet implementation. |
| `phantom.ts` | Solana wallet integration and signing logic. |

## Next Steps
- Implement wallet session persistence.  
- Integrate DAO voting and transaction signing.
