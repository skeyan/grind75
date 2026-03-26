# Update journal for today’s new problems

Perform this workflow in the repo root. Do **not** add a separate Node script; edit the static HTML under `public/journal/` yourself.

## 1. Find slugs first added **today**

- Run:

  `git log --reverse --name-status --pretty=format:DATE:%ai -- problems/`

- Parse the log: each `DATE:…` line sets the **current** commit’s author date. Each following `A` line is an add. For paths matching `problems/<slug>/…`, record the **first** time each `slug` appears (ignore `_template`).
- **Today’s key** is `YYYY-MM-DD` = the first 10 characters of the author date on those `DATE:` lines (same convention as existing journal pages).
- Keep only slugs whose first add’s date key equals **today’s calendar date** (use the user’s local date when interpreting “today,” or the date they specify if they say otherwise).

If there are **no** such slugs, say so and stop (no file changes).

## 2. Update or create the day page

- Path: `public/journal/YYYY-MM-DD.html` for that date.
- **Reuse** the same document structure, `<head>`, fonts, and `./journal.css` link as an existing day file (e.g. `public/journal/2026-03-24.html`).
- **`<h1>`:** Full weekday + month + day + year (match the style of other journal pages).
- **Subtitle (`<p class="sub">`):** List `problems/<slug>/` in a sentence (“First commit under …” / “First commits under …”).
- **Entries:** For each slug for that day, append an `<article class="entry">` **unless** that slug is already present (same `#slug` in a link). Order entries by **first appearance** in the git log for that day.
  - **Title link:** `../index.html#<slug>` — link text = H1 title from `problems/<slug>/notes.md`.
  - **Blurb:** One or two sentences summarizing the `## Approach` / `## Approach: …` section from that `notes.md` (not raw bullets; plain language). Escape HTML in body text; use `<code>…</code>` only where appropriate (e.g. identifiers).
- Preserve existing `<nav class="top">` and `<footer class="nav-footer">` patterns from other day pages.

## 3. Update the journal index

- Edit `public/journal/index.html`.
- For this date, ensure there is a `<li class="day-item">` containing:
  - `<a class="date-link" href="./YYYY-MM-DD.html">YYYY-MM-DD</a>`
  - `<ul class="day-problems">` with one `<li><a href="../index.html#slug">Title from notes.md</a></li>` per problem on that day (same order as the day page).
- Do **not** use only a problem count; **list each problem title** as a link to the main app hash.
- Keep the day list sorted **newest date first** (same as current index).

## 4. Finish

- Give a short summary: which slugs were added or updated and which files you touched.
