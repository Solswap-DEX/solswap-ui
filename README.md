# SolSwap DEX

> Fast, permissionless token swap on Solana — powered by Raydium liquidity

![Version](https://img.shields.io/github/v/release/Solswap-DEX/solswap-ui)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)

**Live:** [solswap.cloud](https://www.solswap.cloud)

## What is SolSwap?
SolSwap is a decentralized exchange (DEX) built on Solana, forked from
Raydium UI v3 and rebranded with custom integrations replacing all
proprietary dependencies with free, open alternatives.

## Key Integrations
| Feature | Provider |
|---|---|
| Charts | lightweight-charts + GeckoTerminal |
| Token list | Jupiter Token List |
| Price data | Jupiter Price API + BirdEye |
| On-ramp | Onramper |
| Cross-chain | Li.Fi |
| RPC | Helius |
| Error tracking | GlitchTip |

## Revenue Model
- Platform fee: 0.10% per swap (configurable via `FEE_BPS`)
- Jupiter referral: 1% to fee wallet
- Fee wallet: [View on Solscan](https://solscan.io/account/5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz)

## Self-Host in 5 Minutes
```bash
git clone https://github.com/Solswap-DEX/solswap-ui
cd solswap-ui
cp .env.example .env.local
# Fill in your API keys in .env.local
npm install && npm run dev
```

## Architecture
- `src/features/Swap`: Core Raydium integration
- `src/features/Chart`: TV-compatible charting
- `src/features/Onramper`: Fiat widget

## License
Apache 2.0 — fork freely.
