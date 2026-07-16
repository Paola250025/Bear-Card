---
name: design-spec
description: Use this skill once a problem and its solution direction are already clear (from a conversation, brainstorm, or discussion) and it's time to turn that shared understanding into a written specification document. Trigger this whenever the user asks to "write a spec", "create a design doc", "spec this out", "document this feature/decision", or wants to formalize what was just discussed before building it — even if they don't say the word "spec" explicitly. Do NOT use this while the problem is still fuzzy or being explored; that's a discussion, not a spec. Produces a single markdown file at doc/yyyy-mm-dd-title.md with six fixed sections (Overview, Target User, Problem Context, V1 Scope, Expected Behavior, Risks & Mitigations), written from the end user's point of view rather than as an internal engineering doc. Ends with an explicit approval gate — the spec is iterated on until the user approves it, and only an approved spec hands off to the design-plan skill for implementation planning.
---

# Design Spec

## Purpose

This skill turns a problem that's already understood into a durable, shareable artifact: a spec file. It assumes the thinking has largely happened already — in conversation, in a brainstorm, in a prior design skill — and the job now is to write it down clearly, from the point of view of the person who will use whatever gets built, not from the point of view of the code that will build it.

If the problem or the shape of the solution is still genuinely undecided, say so and suggest resolving that first (a quick discussion, or the `brainstorming` skill if available) rather than drafting a spec around guesses. A spec written on top of an unclear problem just documents the confusion instead of resolving it.

## Before writing: confirm you have enough to write from

Check that you can answer these, either from the conversation so far or by asking:

- What problem is this solving, and for whom, specifically?
- Why does it matter now — what prompted this?
- What does v1 actually need to do, and what's explicitly out of scope for now?
- How should it behave, concretely, from the user's side of the experience?

If one of these is genuinely missing, ask a short, targeted question before drafting. Don't pad the doc with vague filler to cover a gap — an honest "TBD, needs input on X" is more useful than invented specificity.

## Writing the document

### Filename and location

- Path: `doc/yyyy-mm-dd-title.md`, relative to the current working directory (the project or workspace you're operating in).
- `yyyy-mm-dd` is today's date — check it (e.g. `date +%F`) rather than assuming.
- `title` is a short, lowercase, hyphenated slug of the feature or decision (e.g. `2026-07-11-inline-comment-threads.md`), not the literal word "title".
- Create the `doc/` directory if it doesn't exist yet.

### The six sections — always use this exact structure

Use exactly these headings, in this order, every time. Consistency is what makes specs skimmable across a project — someone should be able to jump between ten different spec files and know exactly where to look for the risk list or the scope line.

```markdown
# [Feature / Decision Title]

## 1. Overview

## 2. Target User

## 3. Problem Context

## 4. V1 Scope

## 5. Expected Behavior

## 6. Risks & Mitigations
```

Guidance for what goes in each section:

**1. Overview** — Two to four sentences: what is being built and why, in plain language a non-technical stakeholder could read and understand. This is the section people skim first; don't bury the point.

**2. Target User** — Who this is actually for. Be specific — a role, a context, a situation — not "all users." If there are multiple user types with different needs, name each one and what they need differently. A spec that can't say who it's for usually means the problem isn't clear enough yet.

**3. Problem Context** — What's broken, missing, or painful today, and why now. This is the "why we're doing this" section — include the trigger (a complaint, a metric, a support pattern, a strategic bet) so future readers understand the motivation without having to ask the author.

**4. V1 Scope** — An explicit list of what v1 includes and what is explicitly deferred. Two short lists ("In scope" / "Out of scope for v1") work better than prose here — this section exists specifically to prevent scope creep and mismatched expectations, so make the boundary impossible to misread.

**5. Expected Behavior** — Written from the user's point of view: walk through what the user does, sees, and gets, step by step, in the situations that matter most (including the unhappy paths — what happens when something goes wrong or input is missing). Avoid describing implementation ("the backend calls X service") — describe experience ("the user sees a confirmation within 2 seconds"). If it helps, write it as a short numbered flow or a couple of concrete scenarios.

**6. Risks & Mitigations** — What could go wrong (technical, UX, adoption, edge cases) and what you'd do about each one. A short table or list of risk → mitigation pairs. It's fine to have unresolved risks — write "no mitigation yet, needs a decision on X" rather than inventing a fix that isn't real.

### Tone

Write the whole document from the user's point of view, not as an internal engineering design doc. That means: describe outcomes and experience over architecture, use plain language over jargon, and favor "the user can now do X" phrasing over "the system implements Y." Technical details belong in a separate implementation doc if one is needed — this spec is about what changes for the person using it and why.

## After drafting: the approval gate

A spec isn't done when it's written — it's done when the user agrees it's right. Don't treat writing the file as the finish line; treat the user's explicit approval as the finish line, and loop until you get it.

1. Show the user the file (or its content) and walk through it section by section if it's the first pass — don't assume the first draft is final, especially the scope boundary and the risk list, which are the two sections most likely to need the user's judgment rather than inference.
2. Ask directly: does this look right, or does something need to change? Make it easy for the user to say either "iterate" or "approved" — don't bury the ask at the end of a long message.
3. **If the user asks for changes:** update the same file in place (don't create a second file for the same feature/decision), then show it again and re-ask. Keep looping through revise → show → ask until there's nothing left to change.
4. **If the user approves:** say so explicitly back to them (e.g. "spec approved — moving to the implementation plan"), and treat that approval as the signal to hand off to the `design-plan` skill next, if it's available, to turn this approved spec into an implementation plan. Don't start implementation directly off of an unapproved spec, and don't silently skip straight to planning without the user actually having said yes — an assumed approval defeats the point of the gate.

Approval doesn't need to be formal — "yeah looks good," "ship it," "approved," or simply moving on to ask for the plan all count. What doesn't count is silence or a vague non-answer; if the user's response doesn't clearly signal approval or a specific change, ask again rather than guessing which one it was.
