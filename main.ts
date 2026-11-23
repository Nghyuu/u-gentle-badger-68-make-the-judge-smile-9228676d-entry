import { copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Entry point: copies the one-line entry next to this script into the
// grader's output directory. Deterministic, no network, no side effects
// beyond the single output file.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
copyFileSync(src, join(outDir, "entry.txt"));
