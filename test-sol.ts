import { PublicKey } from '@solana/web3.js';
import { SOL_INFO, WSOLMint, SOLMint } from '@raydium-io/raydium-sdk-v2';
console.log("PublicKey.default: ", PublicKey.default.toBase58());
console.log("SOL_INFO.address: ", SOL_INFO.address);
console.log("WSOLMint: ", WSOLMint.toBase58());
console.log("SOLMint: ", SOLMint.toBase58());
