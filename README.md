# Team Directory

A small internal directory app that lets you search and browse people by name, team, role, or skill.

Built as a take-home exercise (Option 6: Team Directory) with a ~60-minute time budget.

## Tech Stack

- Vite + React 19 + TypeScript
- No external UI libraries — plain CSS

## How to Run

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (typically `http://localhost:5173`).

## What It Does

- Displays a directory of people, each with a name, role, team, and list of skills.
- A single search box filters across all fields at once (name, team, role, skills) — no need to pick a field first.
- Shows a live result count and a clear "no matches" state when nothing fits the query.

## Assumptions

- Treated this as an early "v1" a teammate could extend, not a finished product — per the prompt's framing.
- Data is people at a company with a name, single team, single role, and a list of skills — no support for someone belonging to multiple teams or having a manager/reporting structure, since the prompt didn't ask for it.
- Search is a simple case-insensitive substring match, not fuzzy matching or relevance ranking.

## Deliberate Tradeoffs

- **Mock data instead of an API/DB.** The prompt didn't require a backend for this option, and I judged that spending the time budget on search UX and accessibility was more valuable than standing up an API for a small, static-shaped dataset. In a real version, this would become a `GET /api/people?search=` call — the component's data-fetching and rendering are already separated enough that swapping the source wouldn't require restructuring the UI logic, just adding loading/error states around it.
- **Client-side filtering.** Fine at this dataset size (10 people); wouldn't scale to a large org without moving search server-side and adding pagination.
- **Search matches all fields combined**, rather than separate filters per field (e.g., a team dropdown + skill tags). Simpler UX and faster to build; the tradeoff is you can't isolate "show only Payments team," since a name match would also surface.
- **System font stack, not a custom web font.** Avoids load delay and layout shift; looks native on each OS.
- **`rem`-based sizing throughout**, not fixed `px` — respects a user's browser-level font-size settings rather than ignoring them.

## Accessibility Notes

- Search input has a real `<label>`, not just a placeholder.
- Result count uses `aria-live="polite"` so screen reader users hear the updated count after typing, without needing to navigate to the list.
- Semantic list markup (`<ul>`/`<li>`) throughout, rather than generic `<div>`s.

## If I Had Another Day

- **Search highlighting** — highlight the matched substring within each result (e.g., wrapping it in `<mark>`) so it's visually obvious *why* something matched. Deliberately left out of the initial build since it adds real complexity (safely escaping the query for regex, splitting matched text into segments per field, handling overlapping/edge-case matches) that felt like a better use of "next iteration" time than initial build time.
- **max length guard** to prevent pathological input.
- **Debounced, server-side search** once backed by a real API, instead of client-side filtering on every keystroke.
- **API integration** — replace the static `people.ts` import with a real endpoint, plus loading and error states.
- **Pagination or virtualization** for large directories.
- **Automated tests** (React Testing Library) — typing filters the list correctly, empty state renders, result count updates.