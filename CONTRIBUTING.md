# Contributing Guide

Thanks for helping improve `incoterms.id`.

## Scope

This project focuses on export/import education for Indonesia:
- Incoterms learning content
- Interactive scenarios and quiz logic
- Cost simulation and basic tax learning tools
- UI/UX quality and accessibility

## Development Setup

1. Fork this repo and clone your fork.
2. Install dependencies:
```bash
npm install
```
3. Run local development:
```bash
npm run dev
```
4. Before opening a PR, run:
```bash
npm run build
npm run lint
```

## Branch and Pull Request

1. Create a focused branch from `main`.
2. Keep PRs small and single-purpose.
3. Write a clear PR description:
- what changed
- why it changed
- how you tested it
4. Link related issues when relevant.

## Content Contribution Rules

When contributing educational content:
- Keep wording clear for learners (beginner-friendly first).
- Prioritize Indonesia-relevant trade context and examples.
- Avoid legal claims unless supported by trusted references.
- If you add or update technical claims, include source links in your PR description.

For scenarios:
- Prefer realistic routes, cargo types, and trade constraints.
- Keep difficulty labels consistent (`beginner`, `intermediate`, `advanced`).

For language:
- Preserve both Indonesian and English consistency where bilingual content exists.
- Do not mix business-critical terms in a way that changes meaning (for example `risk transfer`, `customs clearance`, `import duty`).

## Coding Standards

- Keep components readable and avoid unnecessary complexity.
- Reuse existing patterns in `src/stores`, `src/i18n`, and `src/data`.
- Do not commit secrets, keys, or local environment files.

## Reporting Security Issues

Please do not open public issues for sensitive vulnerabilities.
Use private disclosure via repository owner contact instead.
