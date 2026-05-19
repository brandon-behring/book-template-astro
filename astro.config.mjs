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
});
