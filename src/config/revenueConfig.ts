export const REVENUE_CONFIG = {
  // Referral wallet — receives 1% on all swaps via SolSwap protocol referral system
  referrerWallet: process.env.NEXT_PUBLIC_REFERRER_WALLET || '5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz',

  // Fee collector — receives 0.10% on all swaps via platform fee
  feeCollector: process.env.NEXT_PUBLIC_FEE_COLLECTOR || '5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz',

  // Fee in basis points (10 bps = 0.10%)
  feeBps: Number(process.env.NEXT_PUBLIC_FEE_BPS || '10'),

  // Combined display percentage for UI
  displayFee: '0.10%',
}
