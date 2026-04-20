const fetch = require('node-fetch');
const USDC = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
const WSOL = 'So11111111111111111111111111111111111111112';

async function test() {
  const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${USDC}`);
  const data = await res.json();
  const pairs = data.pairs || [];
  console.log(`Total pairs returned for USDC: ${pairs.length}`);
  const solUsdcPairs = pairs.filter(p => 
    (p.baseToken.address === WSOL && p.quoteToken.address === USDC) ||
    (p.baseToken.address === USDC && p.quoteToken.address === WSOL)
  );
  console.log(`SOL/USDC pairs found: ${solUsdcPairs.length}`);
}
test();
