# Grind 75

DSA practice — solutions, notes, and tests for [Grind 75](https://www.techinterviewhandbook.org/grind75) problems.

## Structure

```
problems/<slug>/
  solution.js   — solution
  notes.md      — approach, complexity, key insights
  solution.test.js — tests (optional)
```

`problems.json` is the generated index used by the Vite app (see `src/`).

## Build

Requires **Node 20+**.

```bash
# install dependencies
npm install

# build problem index, copy to public/, and build Vite app → dist/
npm run build

# run tests
npm test

# run tests in watch mode
npm run test:watch

# dev server (rebuilds index + copies to public, then starts Vite)
npm run dev

# preview production build locally (with base /grind75/)
npm run preview
```

