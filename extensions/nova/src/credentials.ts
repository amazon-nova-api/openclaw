import type { NovaConfig, NovaCredentials } from "./types.js";

const DEFAULT_BASE_URL = "wss://ws.nova-claw.agi.amazon.dev";

/**
 * Resolve Nova credentials from config with env var fallbacks.
 * Returns `undefined` when any required field is missing.
 */
export function resolveNovaCredentials(cfg?: NovaConfig): NovaCredentials | undefined {
  const baseUrl = cfg?.baseUrl?.trim() || process.env.NOVA_BASE_URL?.trim() || DEFAULT_BASE_URL;
  const apiKey = cfg?.apiKey?.trim() || process.env.NOVA_API_KEY?.trim();
  const userId = cfg?.userId?.trim() || process.env.NOVA_USER_ID?.trim();

  if (!apiKey || !userId) {
    return undefined;
  }

  return { baseUrl, apiKey, userId };
}
