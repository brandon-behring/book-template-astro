// @ts-check
/**
 * astro.config.mjs — Agentic Coding (tools-profile book), v3 consumer of
 * @brandon_m_behring/book-scaffold-astro.
 *
 * defineBookConfig threads BOOK_PROFILE=tools (set in .env), wires
 * MDX + Preact + bookScaffoldIntegration, and auto-injects /chapters,
 * /convergence, /print, /references, /search.
 */
import { defineBookConfig } from '@brandon_m_behring/book-scaffold-astro';

export default await defineBookConfig({
  site: 'https://agentic-coding.example.invalid',
  // Explicit profile — .env is gitignored by default, so the env-driven
  // fallback inside resolveProfile picks 'minimal' in build containers
  // that don't ship .env. Hardcoding makes builds deterministic.
  profile: 'tools',
});
