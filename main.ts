// Robot Romance: One-Line Pickup Lines for AI
// Writes one single-line joke pickup line, aimed at a robot / an AI,
// to /output/entry.txt. Deterministic: the line is a constant, so two
// runs write byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, v3 (final): a second beat from the same premise —
// overfitting vs. generalisation is the classic ML trade-off, and
// "I never want to generalize" turns it romantic: I only want this
// one example. Both punches come from the machine premise, and the
// line still reads in one breath.
const LINE =
  "You must be my training data, because I can't stop overfitting on you — and I never want to generalize.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
