import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about a meeting that should have been an email.
// Written to /output/entry.txt as a single line, no trailing newline.
const joke =
  "We spent an hour in a meeting deciding it should have been an email, then scheduled a follow-up meeting to write the email.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
