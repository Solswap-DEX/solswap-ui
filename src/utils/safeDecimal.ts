import Decimal from 'decimal.js'

/**
 * Safely create a Decimal instance from any input.
 * Returns fallback (default 0) if the input is invalid, NaN, undefined, or empty.
 * 
 * This prevents React white-screen crashes from malformed user inputs
 * reaching `new Decimal()` which throws on invalid strings.
 * 
 * @param value - The value to convert
 * @param fallback - Fallback value if conversion fails (default: '0')
 * @returns A valid Decimal instance
 */
export function safeDecimal(value: string | number | undefined | null, fallback: string | number = '0'): Decimal {
  if (value === undefined || value === null || value === '') {
    return new Decimal(fallback)
  }

  try {
    const d = new Decimal(value)
    if (d.isNaN()) return new Decimal(fallback)
    return d
  } catch {
    return new Decimal(fallback)
  }
}

export default safeDecimal
