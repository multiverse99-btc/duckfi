

<h1 align="center">🦆 DuckFi — Decentralized Analytics Infrastructure</h1>

<p align="center">
  <b>DeCloud Your Analytics.</b>  
  <br>
  Run, share, and reward local-first analytical workloads powered by <a href="https://duckdb.org">DuckDB</a> &amp; <a href="https://github.com/duckdb/duckdb-wasm">DuckDB-Wasm</a>.
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" /></a>
  <a href="#"><img src="https://img.shields.io/badge/build-passing-brightgreen" /></a>
  <a href="#"><img src="https://img.shields.io/badge/version-v0.1-lightgrey" /></a>
</p>

---

## 🧭 Overview
**DuckFi** is an open-source network for decentralized analytics.  
Instead of sending data to a centralized cloud warehouse, DuckFi runs analytical queries **locally** in the browser or on edge devices using DuckDB-Wasm, and connects peers through a **libp2p** mesh for cooperative compute.  
Participants who provide compute, storage, or verified connectors earn **DuckFi Coin (DFC)**.

---

## ✨ Key Features
- 🧮 **In-Browser OLAP:** query Parquet/CSV/JSON instantly without backend.  
- 🔒 **Privacy-Preserving:** your data never leaves your device.  
- 🌐 **P2P Query Mesh:** connect to nearby nodes and share workloads.  
- 💰 **Tokenized Incentives:** earn DFC for compute or verified data contributions.  
- 🗳 **DAO Governance:** community controls upgrades, emissions, and grants.

---

## 🧩 Technology Stack
| Layer | Technology |
|-------|-------------|
| Query Engine | DuckDB / DuckDB-Wasm |
| Networking | libp2p / WebRTC |
| Wallet | Phantom (Solana) / MetaMask (EVM) |
| Smart Contracts | Solana / Arbitrum |
| Front-End | SvelteKit + TypeScript |
| License | MIT |

---

## 📘 Whitepaper
Read the full technical and economic overview here:  
➡️ [`whitepaper/DuckFi_Whitepaper_v0.1.md`](whitepaper/DuckFi_Whitepaper_v0.1.md)

---

## 🛠 Quick Start
```bash
git clone https://github.com/yourusername/duckfi.git
cd duckfi
npm install
npm run dev
```
Then open http://localhost:5173 to launch the DuckFi WASM node demo.


## 🗺 Roadmap
Phase	Target	Milestone
P1	Q1 2026	Browser MVP + wallet integration
P2	Q2 2026	Mesh federation prototype
P3	Q3 2026	Token launch + DAO portal
P4	Q4 2026	Plugin marketplace & analytics studio
P5	2027+	ZK-verified compute & enterprise SDK

## 👥 Team & Community

DuckFi Labs is a collective of open-source engineers, data scientists, and distributed-systems researchers across Europe & SEA.
We maintain the reference implementation and support community contributors building connectors, dashboards, and educational resources.

# 📬 Join us:

Discussions: GitHub Discussions

Twitter: @duckfi_network

Discord: (coming soon)

## 🤝 Contributing

We welcome contributions!
Fork the repo, check CONTRIBUTING.md, and send a PR.
Bug reports and feature proposals are always appreciated.

## 🧱 Project Structure
duckfi/
├── README.md
├── whitepaper/
│   └── DuckFi_Whitepaper_v0.1.md
├── docs/
│   ├── architecture.md
│   ├── tokenomics.md
│   └── roadmap.md
└── src/
    ├── wasm-node/
    ├── mesh-network/
    └── wallet-integration/

## 📜 License

MIT © 2025 DuckFi Labs
All software is released under the MIT license — free to use, modify, and distribute.

<p align="center"> <img src="https://raw.githubusercontent.com/yourusername/duckfi/main/assets/footer.png" width="180" alt="DuckFi Footer Logo"> </p> ```
