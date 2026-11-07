/// <reference types="vite/client" />

/** Injected at build time by vite.config.ts from config.yml. */
declare const __SITE_YAML__: Record<string, string> | undefined;

interface ImportMetaEnv {
  readonly VITE_DISCORD_URL?: string;
  readonly VITE_CLIENT_PANEL_URL?: string;
  readonly VITE_GAME_PANEL_URL?: string;
  readonly VITE_BILLING_PANEL_URL?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_SITE_URL?: string;
}
