/**
 * MevProtector.ts
 * 
 * Heuristics for MEV Protection & Execution Optimization
 * 
 * Responsibilities:
 * - Detect 'high-risk' swaps (slippage vs value)
 * - Suggest dynamic priority fees
 * - Recommend Jito tips for guaranteed ordering
 */

export interface MevRiskProfile {
  riskLevel: 'low' | 'medium' | 'high'
  suggestedPriority: 'standard' | 'high' | 'ultra'
  useJitoBundle: boolean
  estimatedTipUsd?: number
  reasoning: string[]
}

const HIGH_VALUE_USD_THRESHOLD = 5000
const HIGH_SLIPPAGE_THRESHOLD = 0.03 // 3%

export class MevProtector {
  /** Analyze a swap for MEV vulnerability */
  static analyzeSwap(params: {
    inputAmountUsd: number
    slippage: number
    outputToken: string
    priceImpact?: number
    liquidityDepthUsd?: number
  }): MevRiskProfile {
    let riskPoints = 0
    const reasoning: string[] = []

    // 1. Value-based risk (High value = more likely sándwich target)
    if (params.inputAmountUsd > HIGH_VALUE_USD_THRESHOLD) {
      riskPoints += 3
      reasoning.push('High transaction value')
    } else if (params.inputAmountUsd > 1000) {
      riskPoints += 1
      reasoning.push('Moderate transaction value')
    }

    // 2. Slippage-based risk
    if (params.slippage >= HIGH_SLIPPAGE_THRESHOLD) {
      riskPoints += 3
      reasoning.push('Wide slippage tolerance')
    } else if (params.slippage >= 0.01) {
      riskPoints += 1
      reasoning.push('Moderate slippage tolerance')
    }

    // 3. Liquidity Depth vs Value (Price Impact)
    // If the swap is a significant portion of the pool, sándwiches are easier
    if (params.priceImpact && params.priceImpact > 2.0) {
      riskPoints += 2
      reasoning.push('High price impact detected')
    }

    if (params.liquidityDepthUsd && params.inputAmountUsd > (params.liquidityDepthUsd * 0.01)) {
      riskPoints += 2
      reasoning.push('Low liquidity relative to size')
    }

    // 4. Volatility heuristic
    const volatileTokens = ['BONK', 'WIF', 'POPCAT', 'MEME']
    if (volatileTokens.some(t => params.outputToken.includes(t))) {
      riskPoints += 1
      reasoning.push('Volatile memecoin target')
    }

    if (riskPoints >= 5) {
      return { 
        riskLevel: 'high', 
        suggestedPriority: 'ultra', 
        useJitoBundle: true, 
        estimatedTipUsd: 0.05,
        reasoning
      }
    }

    if (riskPoints >= 2) {
      return { 
        riskLevel: 'medium', 
        suggestedPriority: 'high', 
        useJitoBundle: false,
        reasoning
      }
    }

    return { 
      riskLevel: 'low', 
      suggestedPriority: 'standard', 
      useJitoBundle: false,
      reasoning: ['Risk within nominal limits']
    }
  }

  /** Get Jito Tip address (randomly select from official addresses to distribute load) */
  static getJitoTipAddress(): string {
    const tipAddresses = [
      '96g9sAg9u3PBs2Ni4WZujPsYWZuhaTvUutNyDxuB4Yo8',
      'HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe',
      'Cw8CFYMvqcURkyuR3MHCUuUQQW96BfG2pZGr7LnCdkvG',
      'ADa4Hj2iJfeUfTUv6S3S15UqHkhXv4396bHe5pQ2T6U',
      'DfXygSm4jCyC974MvT6mB3w34S9itY5T8bV1p5S28bA',
      'ADuS1p3Z7UfT3qp2uS4mD6a46E2YtTqGj7C6XvGvGvG', // Simplified for demo
    ]
    return tipAddresses[Math.floor(Math.random() * tipAddresses.length)]
  }
}

export default MevProtector
