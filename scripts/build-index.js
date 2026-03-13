import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const PROBLEMS_DIR = join(import.meta.dirname, "..", "problems");
const OUTPUT = join(import.meta.dirname, "..", "problems.json");

async function extractMeta(slug) {
  const md = await readFile(join(PROBLEMS_DIR, slug, "notes.md"), "utf-8");

  const title = md.match(/^#\s+(.+)$/m)?.[1] ?? slug;
  const difficulty = md.match(/\*\*Difficulty:\*\*\s*(.+)/)?.[1]?.trim() ?? "";
  const topics =
    md
      .match(/\*\*Topics:\*\*\s*(.+)/)?.[1]
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean) ?? [];
  const leetcode =
    md.match(/\*\*LeetCode:\*\*\s*\[.*?\]\((https?:\/\/[^)]+)\)/)?.[1] ?? "";
  const number = parseInt(leetcode.match(/problems\//)?.[0] ? md.match(/\[(\d+)\./)?.[1] : "", 10) || 0;

  return { slug, title, number, difficulty, topics, leetcode };
}

const entries = await readdir(PROBLEMS_DIR, { withFileTypes: true });
const slugs = entries
  .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
  .map((e) => e.name)
  .sort();

const problems = await Promise.all(slugs.map(extractMeta));
problems.sort((a, b) => a.number - b.number);

await writeFile(OUTPUT, JSON.stringify(problems, null, 2) + "\n");
console.log(`Built problems.json — ${problems.length} problems`);
