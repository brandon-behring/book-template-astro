/**
 * src/content.config.ts — Content Collections for the Agentic Coding book.
 *
 * defineBookSchemas returns the tools-profile chapter schema +
 * sources/changelog/patterns collections (auto-registered when their
 * backing files exist).
 */
import { defineBookSchemas } from '@brandon_m_behring/book-scaffold-astro/schemas';

export const { collections } = defineBookSchemas();
