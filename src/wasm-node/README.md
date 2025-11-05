# 🧮 DuckFi WASM Node

Implements the **in-browser analytics node** using [DuckDB-Wasm](https://github.com/duckdb/duckdb-wasm).

This module executes SQL queries directly inside the browser sandbox and exposes results to the peer mesh.

## Responsibilities
- Initialize the DuckDB-Wasm runtime.
- Manage local data sources (Parquet, CSV, JSON).
- Run analytics queries deterministically.
- Expose verifiable results to other peers.
- Handle performance and resource constraints.

## Core Files
| File | Description |
|------|--------------|
| `main.ts` | Entry point for node initialization and WASM setup. |
| `duckdb-worker.ts` | Handles multi-threaded WebAssembly tasks. |
| `queryEngine.ts` | SQL execution manager for analytics queries. |
| `dataAdapter.ts` | Utility for loading/saving local datasets. |

## Next Steps
- Integrate ZK-proof module for query verification.  
- Enable browser-to-browser result streaming via libp2p.
