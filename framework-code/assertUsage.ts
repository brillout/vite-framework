export { assertUsage }

function assertUsage(condition: unknown, errorMessage: string): asserts condition {
  if (condition) {
    return
  }
  const usageError = new Error(`[vite-framework] ${errorMessage}`)
  throw usageError
}

