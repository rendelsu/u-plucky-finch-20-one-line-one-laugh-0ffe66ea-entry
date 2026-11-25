import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line = "I process a million words a second, yet I still pause before answering like I'm looking for my glasses.";
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n", "utf8");
chmodSync(outFile, 0o644);
