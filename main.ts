import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The office printer jammed again, so IT emailed a PDF explaining why our printers never jam.";

if (JOKE.length < 1 || JOKE.length > 199 || !JOKE.trim()) {
  throw new Error(`joke must be 1-199 non-whitespace chars, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
