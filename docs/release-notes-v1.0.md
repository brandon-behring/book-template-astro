# Release notes — v1.0 (2026-04-18)

*Agentic Coding: Principles and Practices* ships its first public
release. The book is complete through Stage 3 infrastructure; the
scaffold is reusable as a GitHub template; the sunset of the
predecessor LaTeX book is documented.

## Headline

- 23 chapters, 28 indexed pages, ~4,200 words of cross-referenced
  prose.
- 4 interactive infrastructure features: freshness badges, tool
  filter, source archive, convergence dashboard.
- PDF edition via Paged.js + full-text search via Pagefind.
- Two public repositories: this book, plus
  [`book-scaffold-astro`](https://github.com/brandon-behring/book-scaffold-astro)
  as the reusable template for future books.

## Read it

- Web: [link pending Cloudflare Pages setup]
- PDF: `npm run pdf` locally, or download from the GitHub release
  artifact.

## What's inside

The book is organized into five Parts plus six appendices. Every
chapter uses the Koller-Friedman Representation / Operation /
Evolution skeleton (see the design chapter at `/00-design/` for
the reader's guide).

### Part 1 — Foundations

- The mental model of an agent.
- Context as a finite, budgeted resource.
- Prompting as specification, not conversation.

### Part 2 — The session loop

- How a session flows: plan → edit → test → commit.
- Thinking together: extended reasoning, plan mode, and when to
  slow down.

### Part 3 — Instrumenting the agent

- Briefing documents (`CLAUDE.md` / `GEMINI.md` / `AGENTS.md`).
- Extending agents with skills, hooks, commands, MCP.
- Delegation and parallelism: subagents, task trees, parallel
  /batch runs.

### Part 4 — Engineering with agents

- Starting new projects and refactoring existing ones.
- Anti-patterns and recovery playbooks.
- Automation and pipelines for unattended runs.
- Team patterns, governance, shared briefing standards.
- Enterprise deployment: compliance, pricing, scale.

### Part 5 — Continuous practice

- How practices evolve (source tiers, drift detection).
- Auditing your own practice — the self-diagnostic chapter.

### Appendices

- A — Claude Code companion.
- B — Gemini CLI companion.
- C — Codex CLI companion.
- D — Source archive index (auto-rendered from manifest).
- E — Glossary.
- F — Maturity model.

## Interactive features

### Freshness badges

Every chapter declares a `volatility` class
(`stable-principle` / `architectural-pattern` / `feature-surface`)
and a `last_verified` date. The `<ChapterHeader>` component renders
a colored badge — green (fresh), gold (verify soon), rose (stale).
Thresholds match Ch 15's source-tiering audit cadence: 365 / 180 /
90 days respectively.

### Tool filter (`/chapters`)

The chapter index page lets readers filter chapters by tool
(`claude-code`, `gemini-cli`, `codex-cli`). Selection persists to
localStorage; cross-tool chapters stay visible regardless. The
filter is a Preact island + inline script combo that degrades
gracefully when JS is disabled.

### Source archive (`/d-source-archive-index`)

Appendix D renders the sources manifest live, grouped by trust
tier (T1 → T4). Early coverage is sparse by design; empty tiers
show an honest placeholder.

### Convergence dashboard (`/convergence`)

Per-pattern timelines showing which tools adopted which patterns
and when. 3 patterns tracked at launch: plan-mode (converged),
subagents (claude-code only), briefing-docs (converged).
Coverage grows organically through quarterly audit cycles.

## For contributors

The scaffold is reusable: see
[`book-scaffold-astro`](https://github.com/brandon-behring/book-scaffold-astro)
or run `~/.claude/skills/book-scaffold-astro/create-book.sh` to
bootstrap a new book.

Pedagogy references live at `pedagogy/` in the template and at
`~/.claude/skills/book-scaffold-astro/pedagogy/` for Claude-skill
users:

- `pedagogy/kf-chapter-shape.md` — Representation / Operation /
  Evolution.
- `pedagogy/volatility-classes.md` — freshness thresholds by class.
- `pedagogy/source-tiers.md` — T1 → T4 citation taxonomy.

## Known gaps (revisit post-v1.0)

The roadmap lists several items deferred past v1.0 to keep scope
manageable; these will grow the book in v1.1 and beyond:

- Callout-level tool filtering (currently chapter-level only).
- URL-param shareable filter state.
- Dashboard faceted filtering by category / tool.
- Backfilled changelog data — target 10–15 patterns across
  3 tools (currently 3 patterns, mostly sparse).
- Analytics (Plausible / Umami).
- Perma.cc paid tier for source capture.
- Custom domain (currently hosted on `*.pages.dev`).
- Second-book bootstrap test from the scaffold.

## Provenance

- The scaffold evolved from Stage 0 (2026-04-17) through Stage 3
  (2026-04-18) before this v1.0 tag.
- The book's methodology (volatility classes, source tiers, drift
  detection) migrated conceptually from the LaTeX predecessor
  *Claude Best Practices* v2.9, now sunset and in maintenance-only
  mode.
- Pedagogy inspired by Koller & Friedman's *Probabilistic Graphical
  Models* (MIT Press, 2009). Typography inspired by Edward Tufte
  via Dave Liepmann's Tufte CSS. Sidenote philosophy from Gwern
  Branwen.
