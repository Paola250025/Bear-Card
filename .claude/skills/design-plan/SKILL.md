---
name: design-plan
description: Use this skill right after the user approves a spec (typically one produced by the design-spec skill) and it's time to turn that approved spec into a concrete implementation plan. Trigger this on the user's approval itself — "approved", "looks good, let's build it", "yes, go ahead" following a spec review — not on a separate explicit request to "make a plan." Do NOT use this before the spec is approved; a plan built on an unapproved spec inherits all of that spec's open questions. Produces a single markdown file at docs/plans/yyyy-mm-dd-title.md with four fixed sections (Objective, Problem Context, Reference Spec, and a detailed task list), meant to be handed straight to implementation.
---

# Design Plan

## Why this exists

An approved spec says *what* should exist and *why*, from the user's point of view. It deliberately doesn't say how to build it. This skill is the bridge: it takes an already-agreed-upon spec and breaks it into the concrete, ordered work that implementation will actually follow. It should never be run on a spec that hasn't been approved yet — if the spec's scope or behavior is still being negotiated, a plan just locks in premature detail on top of a moving target.

## Step 1 — Confirm the spec is actually approved

Before drafting anything, make sure there's a real spec behind this and that it was actually approved, not just written. If the spec came from the design-spec skill, it lives at `doc/yyyy-mm-dd-title.md`; find it and read the whole thing, not just the overview. If there's no written spec at all but the user clearly approved a plan of action in conversation, that conversation is your reference spec — summarize it accurately in Step 4 rather than skipping the section because no file exists.

If you can't tell whether the spec was actually approved (vs. just discussed), ask before proceeding rather than assuming — this skill exists specifically because unapproved specs shouldn't turn into plans yet.

## Step 2 — Filename and location

- Path: `docs/plans/yyyy-mm-dd-title.md`, relative to the current working directory (the project or workspace you're operating in).
- `yyyy-mm-dd` is today's date — check it (e.g. `date +%F`) rather than assuming.
- `title` should match the slug used in the spec's filename where one exists, so the spec and its plan are easy to pair up at a glance (spec at `doc/2026-07-11-inline-comments.md` → plan at `docs/plans/2026-07-11-inline-comments.md`).
- Create the `docs/plans/` directory if it doesn't exist yet.

## Step 3 — The four sections — always use this exact structure

```markdown
# [Feature / Decision Title] — Implementation Plan

## 1. Objective

## 2. Problem Context

## 3. Reference Spec

## 4. Tasks
```

Guidance for each section:

**1. Objective** — What this plan sets out to build, in one or two sentences. This is the plan's version of the spec's overview — pulled from the spec, not reinvented, so the two documents don't drift into saying subtly different things about the same feature.

**2. Problem Context** — A short pull-through of why this is being built, summarized from the spec's problem context rather than copy-pasted wholesale. Enough for someone reading only the plan (not the spec) to understand the motivation without switching documents.

**3. Reference Spec** — A direct link/path to the spec file this plan implements (e.g. `See doc/2026-07-11-inline-comments.md`). If there's no standalone spec file, summarize the agreed-upon scope and expected behavior here in a few sentences so the plan is still traceable to something concrete. This section is what keeps the plan honest to what was actually approved — if a task later doesn't map back to something in this section, that's a sign of scope creep.

**4. Tasks** — The actual list of implementation tasks, with enough detail that someone (or Claude, in a later session) could pick up any single task and know what to do without re-reading the whole spec. For each task, include:
- What needs to change (files/areas of the codebase if known, or the component/layer if not yet explored).
- What "done" looks like for that specific task — a concrete, checkable outcome, not just a verb phrase.
- Ordering/dependencies, where they matter — call out explicitly if task 3 can't start before task 1 finishes.

Order tasks the way they'd actually get built — foundational/backend pieces before the UI that depends on them, for instance — rather than in the order they occurred to you. Break work down enough that no single task is a vague multi-day blob; if a task feels like it's hiding five smaller tasks, split it.

## Step 4 — Show the plan, don't just save it

Once drafted, show the user the plan (or its content) before treating it as the thing implementation will follow. Plans are more likely than specs to need reordering or splitting once someone looks at the task breakdown with fresh eyes — invite that adjustment rather than assuming the first pass nailed the sequencing. This doesn't need the same formal approval loop as the spec (the user already signed off on the "what" — this is refining the "how"), but a quick "does this breakdown make sense before I start?" catches sequencing mistakes early, when they're cheap to fix.
