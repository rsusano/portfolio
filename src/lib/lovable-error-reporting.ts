/**
 * Generic error reporting utility.
 * Captures errors from React error boundaries for logging/monitoring.
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  // Log to console in development; wire up to a real service (Sentry, etc.) as needed.
  console.error("[ErrorBoundary]", { error, context });
}
