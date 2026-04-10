export const log = (message: string): void => {
  console.log(`[Shared-${new Date().toISOString()}] ${message}`)
}
