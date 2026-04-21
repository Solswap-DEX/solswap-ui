import mongoose, { Schema, Document, Model } from 'mongoose';
import { RadarToken } from '../types/radar.types';

export async function connectMongo(): Promise<void> {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('[RADAR] MongoDB connected ✓');
  } catch (err) {
    console.error('[RADAR ERROR] MongoDB connection failed:', err);
    process.exit(1);
  }
}

export async function disconnectMongo(): Promise<void> {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error('[RADAR ERROR] MongoDB disconnect failed:', err);
  }
}

const RadarTokenSchema = new Schema({
  mint: { type: String, required: true, unique: true },
  name: { type: String, default: 'Unknown' },
  symbol: { type: String, default: '???' },
  age_seconds: { type: Number, default: 0 },
  liquidity: { type: Number, default: 0 },
  volume_1m: { type: Number, default: 0 },
  volume_5m: { type: Number, default: 0 },
  holders: { type: Number, default: 0 },
  buys_1m: { type: Number, default: 0 },
  sells_1m: { type: Number, default: 0 },
  price_usd: { type: Number, default: 0 },
  alpha_score: { type: Number, default: 0 },
  alpha_label: {
    type: String,
    enum: ['HIGH ALPHA', 'WATCH', 'NEUTRAL', 'IGNORE'],
    default: 'IGNORE'
  },
  momentum_score: { type: Number, default: 0 },
  risk_score: { type: Number, default: 0 },
  risk_level: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'RUG PROBABLE'],
    default: 'HIGH'
  },
  wallet_concentration: { type: Number, default: 0 },
  lp_locked: { type: Boolean, default: false },
  mint_authority_active: { type: Boolean, default: true },
  rug_signals: [{ type: String }],
  detected_at: { type: Date, default: Date.now },
  last_update: { type: Date, default: Date.now }
}, {
  timestamps: false
});

RadarTokenSchema.index({ alpha_score: -1 });
RadarTokenSchema.index({ detected_at: -1 });
RadarTokenSchema.index({ risk_level: 1 });
RadarTokenSchema.index(
  { last_update: 1 },
  { expireAfterSeconds: 86400 }
);

export const RadarTokenModel = mongoose.model<RadarToken & Document>('pulse_tokens', RadarTokenSchema);

export async function upsertToken(token: RadarToken): Promise<void> {
  try {
    await RadarTokenModel.findOneAndUpdate(
      { mint: token.mint },
      { ...token, last_update: new Date() },
      { upsert: true, new: true }
    );
  } catch (err) {
    console.error('[RADAR ERROR] upsertToken:', err);
  }
}

export async function getTopAlpha(limit = 20): Promise<RadarToken[]> {
  try {
    return await RadarTokenModel
      .find({ risk_level: { $ne: 'RUG PROBABLE' } })
      .sort({ alpha_score: -1 })
      .limit(limit)
      .lean();
  } catch (err) {
    console.error('[RADAR ERROR] getTopAlpha:', err);
    return [];
  }
}

export async function getRecentTokens(sinceMinutes = 30): Promise<RadarToken[]> {
  try {
    const since = new Date(Date.now() - sinceMinutes * 60 * 1000);
    return await RadarTokenModel
      .find({ detected_at: { $gte: since } })
      .sort({ detected_at: -1 })
      .limit(50)
      .lean();
  } catch (err) {
    console.error('[RADAR ERROR] getRecentTokens:', err);
    return [];
  }
}

export async function getRugTokens(): Promise<RadarToken[]> {
  try {
    return await RadarTokenModel
      .find({ risk_level: 'RUG PROBABLE' })
      .sort({ last_update: -1 })
      .limit(20)
      .lean();
  } catch (err) {
    console.error('[RADAR ERROR] getRugTokens:', err);
    return [];
  }
}