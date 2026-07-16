---
name: verify-after-changes
description: Use this skill the moment Claude believes an implementation plan or feature is finished and is about to report it as done — that belief is itself the trigger, before it turns into a "done!" message to the user. Trigger on internal signals like "I've implemented X", "the changes are complete", "this should work now", finishing the last item on a todo list, or reaching the end of a plan — even if the user hasn't asked for testing explicitly. Do NOT skip this just because the code looks correct on read-through; the whole point is catching what only shows up at runtime. Skip only for changes with no runtime surface at all (docs, comments, config nobody exercises this session). This skill starts the server, drives 5 important test cases directly in a real browser, compares the results against the implementation plan and any spec docs, and either fixes what falls short and re-tests, or gives an explicit green light before declaring the work done.
---

# Verify After Changes

## Why this exists

"I implemented it" and "I verified it works" are different claims. It's easy to slide from one to the other without noticing — the code reads correctly, the logic seems sound, so it must work. This skill is the forcing function that turns the first claim into the second before it reaches the user. Reading source code back to yourself is not verification; it just confirms you wrote what you meant to write, not that it behaves correctly when actually run.

Treat "I think this is done" as the trigger condition itself, not a decision point about whether to run this skill. If that thought occurs, this skill runs before any message reporting completion.

## Step 1 — Ground the definition of "done"

Before touching anything, figure out what you're actually verifying against:

- Find the plan you were implementing from — a todo list, a design-spec doc (e.g. `doc/*.md`), a written plan, or the original task description if nothing else was written down.
- If a spec doc exists, read its scope and expected-behavior sections specifically (for example, the "V1 Scope" and "Expected Behavior" sections if it came from a design-spec-style doc) — that's what defines what must work and what's deliberately out of scope. Testing against scope you never committed to just produces noise and false alarms.
- If nothing was written down, reconstruct intent from the conversation: what did the user actually ask for, and what did you say you'd build?

## Step 2 — Start the server

- Find the real start command for this project (package.json scripts, README, Makefile, docker-compose, etc.) instead of guessing a generic one.
- Start it in the background and confirm it's actually serving — check the port responds, or logs show it's ready — before moving on. Testing against a server that's still booting produces failures that aren't real failures.
- Note the URL you'll be testing against.

## Step 3 — Choose 5 important test cases

Five, not fifty — the goal is targeted confidence about what changed, not exhaustive coverage of the whole app. Write the list down explicitly (even a short bulleted list) before testing, so the comparison in Step 5 is concrete instead of a vibe. Good places to draw the 5 from, roughly in priority order:

1. The core happy path — the single most central thing the feature you just built needs to do.
2. A major variant or branch, if the feature has more than one mode (logged-in vs logged-out, empty vs populated, different roles/permissions).
3. An edge case the spec's risk section (or your own read of what could go wrong) already flagged.
4. Something adjacent that could plausibly have regressed — a nearby feature, a shared component, the flow into or out of the area you touched.
5. An invalid-input or failure case — what happens when the user does the wrong thing.

Not every case fits every change — use judgment on which 5 actually matter here rather than forcing all five categories when a change is narrow.

## Step 4 — Run each case in a real browser

Drive the running app the way a person would: load pages, click, type, navigate. Use whatever browser-driving tool is available in this environment (for instance, Claude in Chrome's navigation and page-reading tools). For each of the 5 cases, capture what actually happened — what rendered, what state the app ended up in, any console or network errors — and note whether it matched expectations.

If no browser-driving tool is available at all, say so explicitly rather than quietly skipping runtime testing, and fall back to the closest real alternative — hitting the API directly (curl/HTTP calls), running existing automated tests, or asking the user to check — so "verification" doesn't silently become "I read the code again."

## Step 5 — Compare, then fix or clear

Judge each of the 5 cases against the plan/spec from Step 1 — against what was actually asked for, not against what your implementation intended to do. Those can quietly diverge, and that gap is exactly what this step exists to catch.

- **Everything passes:** give an explicit green light. State clearly that you tested it, list the 5 cases and their outcomes, and confirm the work is done. Don't let this happen silently — the user should see that verification occurred and what it covered, not just receive a bare "looks good."
- **Something fails or falls short:** do not report completion. Fix the specific gap, then re-run at minimum the case that failed plus anything downstream of the fix. Repeat Steps 4-5 until the cases genuinely pass. If you hit a real blocker — a decision only the user can make, missing credentials, an environment limitation — say so plainly instead of declaring victory anyway.

## Reporting back

Whatever the outcome, tell the user what you tested, how (server + browser, or the fallback you used), and the result for each of the 5 cases — not just "it works" or "fixed it." The specifics are what make the green light trustworthy instead of a formality.
