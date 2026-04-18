# Changelog

All notable changes to *Agentic Coding: Principles and Practices* are
documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/); versions
follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.0] — 2026-04-18

First public release. 23 chapters (16 body + preface + 6 appendices)
land with full Stage 3 infrastructure; the book is stable for reader
use and the scaffold is reusable as a GitHub template.

### Stage 3 infrastructure (4 features, 20 commits)

- **Freshness stamps**: every chapter renders a volatility-aware
  freshness badge (green / gold / rose) against a 365d / 180d / 90d
  threshold derived from its `volatility` class. Driven by
  `src/lib/freshness.ts` and integrated into `ChapterHeader.astro`
  and `/chapters/`.
- **Tool filter UI + /chapters index**: new `/chapters/` route
  groups every chapter by Part. A `ToolFilter` Preact island
  (mounted in `Base.astro`) persists the active selection to
  localStorage and dispatches a `CustomEvent` that non-island pages
  consume via inline script. Cross-tool chapters stay visible under
  any filter.
- **Source archive page**: Appendix D renders
  `sources/manifest.yaml` live via the new `<SourceArchive />`
  component, grouped by tier in descending authority (T1 → T4) with
  honest empty-state placeholders on unfilled tiers.
- **Convergence dashboard**: new `/convergence/` joins
  `changelog/patterns.yaml` with per-tool changelog files to render
  per-pattern adoption timelines across Claude Code, Gemini CLI,
  and Codex CLI.

### Stage 2: scaffold extracted as template

- `brandon-behring/book-scaffold-astro` (public, template flag set)
  ships the cleaned scaffold with `_example-chapter.mdx` exemplar,
  `TEMPLATE_README.md` bootstrap checklist, and `pedagogy/` reference
  docs.
- `~/.claude/skills/book-scaffold-astro/` Claude skill wraps
  `gh repo create --template` for fast bootstrap.

### Stage 4: release infrastructure

- `CHANGELOG.md` (this file), `docs/release-notes-v1.0.md`.
- `scripts/snapshot-pdf.sh` — freezes `dist-pdf/book.pdf` under
  `public/v{version}/` for subpath-versioned hosting.
- `.github/workflows/deploy.yml` deploys to Cloudflare Pages on
  push to `main` or a `v*` branch (existing from Stage 0).

### Content

- 16 body chapters covering the mental model of agents, context
  economics, prompting, the session loop, edit-test-commit, thinking
  together, briefing documents, extending agents, delegation +
  parallelism, starting + refactoring, anti-patterns + recovery,
  automation + pipelines, team patterns + governance, enterprise
  deployment, how practices evolve, auditing your own practice.
- 6 appendices: Claude Code companion, Gemini CLI companion, Codex
  CLI companion, source archive index (auto-rendered), glossary,
  maturity model.
- Front matter: design chapter (`00-design`) as the KF-pedagogy
  reference.

### Historical stage milestones

- `v0.1-stage0-complete` (2026-04-17): scaffold + design tokens + 9
  callouts + Content Collections with Zod schemas + Tufte layout +
  Paged.js + Pagefind + Cloudflare deploy workflow.
- `v0.2-stage3-complete` (2026-04-18): Stage 3 infrastructure
  landed (freshness, tool filter, source archive, convergence
  dashboard).
- `v0.3-stage2-complete` (2026-04-18): scaffold extracted as
  reusable template.

---

*See [book-scaffold-astro](https://github.com/brandon-behring/book-scaffold-astro) for the GitHub template used as this book's scaffold.*
*See [claude-best-practices](https://github.com/brandon-behring/claude-best-practices) for the superseded LaTeX-era predecessor, now in maintenance-only mode at v2.9.*
