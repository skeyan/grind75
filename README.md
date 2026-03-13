# Grind 75

DSA practice — solutions, notes, and tests for [Grind 75](https://www.techinterviewhandbook.org/grind75) problems.

## Structure

```
problems/<slug>/
  solution.js   — solution
  notes.md      — approach, complexity, key insights
  solution.test.js — tests (optional)
```

`problems.json` is the generated index used by `index.html`.

## Build

Requires **Node 20+** (no external dependencies).

```bash
# rebuild problems.json from notes.md metadata
npm run build

# run tests
npm test

# run tests in watch mode
npm run test:watch

# run local server
npx serve
```

