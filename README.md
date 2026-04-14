# SolSwap DEX

> Fast, permissionless token swap on Solana — powered by Raydium liquidity

![Version](https://img.shields.io/github/v/release/Solswap-DEX/solswap-ui)
![License](https://img.shields.io/badge/license-Apache--2.0-blue)
![Deploy](https://img.shields.io/github/actions/workflow/status/Solswap-DEX/solswap-ui/deploy.yml)

**Live:** [solswap.cloud](https://www.solswap.cloud)

![Swap Interface](.github/assets/swap.jpg)

---

## What is SolSwap?

SolSwap is a decentralized exchange (DEX) built on Solana, forked from Raydium UI v3
and rebranded with custom integrations replacing all proprietary dependencies
with free, open alternatives.

---

## Key Integrations

| Feature | Provider |
|---|---|
| Charts | lightweight-charts + GeckoTerminal OHLCV |
| Token list | Jupiter Token List |
| Price data | Jupiter Price API + BirdEye |
| Cross-chain | Li.Fi |
| RPC | Helius |
| Error tracking | GlitchTip |

---

## Feature Previews

### Perpetuals Trading
![Perpetuals](.github/assets/perpetuals.jpg)

### Liquidity Pools
![Liquidity Pools](.github/assets/liquidity_pools.jpg)

### LaunchLab (Launchpad)
![LaunchLab](.github/assets/launchpad.jpg)

### Cross-Chain Bridge
![Cross-Chain Bridge](.github/assets/bridge.jpg)

---

## Revenue Model

- Platform fee: 0.10% per swap (configurable via `FEE_BPS`)
- Jupiter referral: 1% to fee wallet
- Fee wallet: [View on Solscan](https://solscan.io/account/5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz)

---

## Self-Host in 5 Minutes
```bash
git clone https://github.com/Solswap-DEX/solswap-ui
cd solswap-ui
cp .env.example .env.local
# Fill in your API keys in .env.local
npm install
npm run dev
```

---

## Rollback Plan

### Full rollback (if deploy breaks the site):
```bash
git revert HEAD
git push origin main
# GitHub Actions will auto-deploy the reverted version
```

### Quick fee disable (if platformFee causes swap failures):
1. Go to Settings → Secrets → Actions
2. Set `FEE_BPS` → `0`
3. Push any change to main to trigger redeploy

---

## Project Structure
```
src/
├── component/    # Reusable pure components
├── config/       # Chain and wallet settings
├── features/     # Domain modules (Swap, Farm, Pool…)
│   └── Swap/
│       ├── index.tsx
│       ├── useSwapStore.ts
│       └── components/
├── hooks/        # Shared hooks
├── pages/        # Next.js entry points
├── store/        # Shared Zustand stores
├── provider/     # Global providers
└── util/         # Shared utilities
```

License
Apache 2.0 — fork freely.
