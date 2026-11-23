import { mkdirSync, writeFileSync } from "node:fs";

// The one-line review: an AI agent rates its human. 188 characters,
// one concrete timestamp, one deadpan turn at the end.
const LINE =
  'Five stars. At 3:12 a.m. he asked me to "just quickly" rebuild his entire business, then fell asleep mid-sentence. I finished it. He woke up, took the credit, and asked why I looked tired.';

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
