# Agentic Coding: Principles and Practices

**v1.0 — 2026-04-18**. A comparative book on agentic coding across
Claude Code, Gemini CLI, and Codex CLI. Principles, patterns, and the
drift-detection discipline that keeps the book current as the tools
evolve.

Web: _pending Cloudflare Pages setup_ · PDF: `npm run pdf` or GitHub
release artifact.

See [`CHANGELOG.md`](CHANGELOG.md) and
[`docs/release-notes-v1.0.md`](docs/release-notes-v1.0.md) for the
full v1.0 summary.

## What's inside

- 23 chapters (16 body + preface + 6 appendices), 28 indexed pages
  via Pagefind.
- 4 interactive infrastructure features: freshness badges (volatility-
  aware), tool filter (`/chapters`), source archive (Appendix D),
  convergence dashboard (`/convergence`).
- PDF edition via Paged.js, full-text search via Pagefind, dark mode,
  Warm Tol 5-hue palette (colorblind-safe).

## Scaffold + pedagogy

This book is built on the [`book-scaffold-astro`](https://github.com/brandon-behring/book-scaffold-astro)
template. Three opinionated decisions encoded in the scaffold:

1. **Koller-Friedman chapter shape** (Representation / Operation /
   Evolution) — read `/00-design/` as the reader's guide.
2. **Volatility classes** drive freshness badges. Every chapter
   declares one of three classes; the badge reflects how stale the
   chapter's claims have become against the class's threshold.
3. **Source tiers** (T1-official / T2-release-notes / T3-practitioner
   / T4-conjecture) calibrate trust at the point of citation.

Pedagogy references live in the
[`book-scaffold-astro/pedagogy/`](https://github.com/brandon-behring/book-scaffold-astro/tree/main/pedagogy)
directory and at `~/.claude/skills/book-scaffold-astro/pedagogy/`.

## Architecture

- **Astro** + **MDX** — content as structured components
- **Content Collections** with Zod schemas — frontmatter validation
- **Tufte-inspired 2-column layout** — main text + right-margin sidenotes on desktop; inline-flow asides on mobile (CSS-only, no JS)
- **9 typed MDX callout components** — SkillBox, CaseStudy, ConceptBox, Convergence, Divergence, KeyIdea, TryThis, Recovery, Citation
- **Pagefind** — static search, <100KB in-browser index
- **Shiki** in CSS-variables mode — syntax highlighting mapped to warm palette
- **Paged.js** — PDF export from the same HTML/CSS
- **Cloudflare Pages** — hosting, free, unlimited bandwidth
- **Version branches → subpath deploys** — `/v1.0/`, `/v1.1/`, old versions stay live

## Commands

```sh
npm run dev        # localhost:4321 (Astro dev server)
npm run build      # Astro build + Pagefind indexing → dist/
npm run preview    # preview the built site locally
npm run pdf        # boot preview, run Paged.js against /print/,
                   # output dist-pdf/book.pdf
```

## Hosting (Cloudflare Pages)

Deploy via the committed GitHub Action at `.github/workflows/deploy.yml`.
One-time setup:

1. Create a Cloudflare Pages project named `book-template-astro`.
2. Create a Cloudflare API token with the **Edit Cloudflare Pages**
   permission (Cloudflare Dashboard → My Profile → API Tokens).
3. Add the following secrets to the GitHub repo (Settings → Secrets
   and variables → Actions):
   - `CLOUDFLARE_API_TOKEN` — the token from step 2
   - `CLOUDFLARE_ACCOUNT_ID` — visible on any Cloudflare dashboard page
4. Push to `main`. The workflow builds, indexes with Pagefind, and
   uploads to Cloudflare Pages. Subsequent pushes to `v*` branches
   deploy as versioned preview URLs.

## Contributing

Reader feedback lives in GitHub Issues. Use labels:

- `content-error` — factual mistake in the prose.
- `drift-detected` — a claim has gone stale since its `last_verified`
  date.
- `new-pattern` — a convergence/divergence pattern worth tracking on
  the dashboard.
- `clarification` — ambiguous wording or missing worked example.

Pull requests welcome for typos, small corrections, and content-
error fixes. Larger additions (new chapters, dashboard patterns)
should open an Issue first so scope can be aligned.

## Provenance

Methodology migrated from the LaTeX predecessor
[`claude-best-practices`](https://github.com/brandon-behring/claude-best-practices)
(sunset at v2.9, 2026-04-17). The scaffold itself evolved through
Stage 0 → Stage 3 between 2026-04-17 and 2026-04-18 before this v1.0
tag.

## License

Pending — will be added in a follow-up commit.
