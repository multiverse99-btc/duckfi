// 🦆 DuckFi WASM Node Initialization
import DuckDB from '@duckdb/duckdb-wasm';

export async function initWasmNode() {
  const db = await DuckDB.instantiate();
  console.log('[DuckFi] WASM node initialized.');
  return db;
}
