import { useEffect, useRef } from 'react'

/**
 * useInterval — Dan Abramov pattern for safe intervals in React.
 * 
 * Automatically cleans up on unmount, preventing memory leaks.
 * Passing `null` as delay pauses the interval.
 * 
 * @param callback - Function to call on each tick
 * @param delay - Interval in ms, or null to pause
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef<() => void>(callback)

  // Remember the latest callback without re-registering the interval
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
  useEffect(() => {
    if (delay === null) return

    const tick = () => savedCallback.current()
    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay])
}

export default useInterval
