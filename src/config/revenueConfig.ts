export const REVENUE_CONFIG = {
  // Referral wallet — receives 1% on all swaps via SolSwap protocol referral system
  referrerWallet: process.env.NEXT_PUBLIC_REFERRER_WALLET || '5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz',

  // Fee collector — receives 0.10% on all swaps via platform fee
  feeCollector: process.env.NEXT_PUBLIC_FEE_COLLECTOR || '5KUA4a4qFusTvJeSquKsBSEPvhiVedvaj8hE8pVp2vmz',

  // Fee in basis points (100 bps = 1.00%)
  feeBps: Number(process.env.NEXT_PUBLIC_FEE_BPS || '100'),

  // Combined display percentage for UI
  displayFee: '1.00%',
}
