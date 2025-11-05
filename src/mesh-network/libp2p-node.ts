// 🌐 DuckFi P2P Node Setup
import { createLibp2p } from 'libp2p';
import { webRTC } from '@libp2p/webrtc';

export async function startMeshNode() {
  const node = await createLibp2p({
    transports: [webRTC()],
  });
  console.log('[DuckFi] Mesh node started.');
  return node;
}
