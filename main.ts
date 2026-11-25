import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line joke about a meeting that should have been an email.
// Written to /output/entry.txt as a single line, no trailing newline.
const joke =
  "We spent an hour in a meeting deciding it should have been an email, then scheduled a follow-up meeting to write the email.";

if (joke.length < 1 || joke.length > 200) {
  throw new Error(`entry length out of bounds: ${joke.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");

// Round-trip self-check: read the file back and verify it is byte-identical
// to the joke. Fail loudly if the write was truncated or altered.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== joke) {
  throw new Error("round-trip check failed: /output/entry.txt does not match the joke");
}
console.log(`wrote /output/entry.txt (${written.length} chars), round-trip check passed`);
