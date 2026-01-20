const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { logSection, logStep, logDone, logError, logInfo, logWarning, colors, symbols, drawBox } = require("./cli-utils");

const IS_PROD = process.env.NODE_ENV === "production";
const OUT_DIR = path.join(__dirname, "public", "js");
const OUT_FILE = path.join(OUT_DIR, "react_sample.js");

function run(command, label) {
  logStep(symbols.arrow, label);
  const start = Date.now();
  const result = spawnSync(command, { stdio: "inherit", shell: true, env: process.env });
  const duration = ((Date.now() - start) / 1000).toFixed(2);
  if (result.status !== 0) {
    logError(`✗ ${label} failed in ${duration}s`);
    process.exit(result.status || 1);
  }
  logDone(`✓ ${label} (${duration}s)`);
  return Number(duration);
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${bytes} B`;
}

function summarize() {
  try {
    const stats = fs.statSync(OUT_FILE);
    logInfo(`${symbols.box} Output: ${colors.bright}${path.relative(process.cwd(), OUT_FILE)}${colors.reset} (${formatSize(stats.size)})`);
    return stats.size;
  } catch (err) {
    logWarning("Could not read output size");
    return null;
  }
}

function main() {
  const buildStart = Date.now();
  logSection(IS_PROD ? "Production Build" : "Dev Build");
  logInfo(`Mode: ${IS_PROD ? "production" : "development"}`);

  logStep(symbols.dot, "Ensure output directory");
  fs.mkdirSync(OUT_DIR, { recursive: true });
  logDone("Ready");

  // Bundle & minify via browserify + uglify
  const cmd = "npx browserify src/react_sample.js | npx uglifyjs > public/js/react_sample.js";
  const bundleSeconds = run(cmd, "Bundle & minify");

  const size = summarize();
  const totalSeconds = ((Date.now() - buildStart) / 1000).toFixed(2);

  console.log("");
  drawBox("Build Dashboard", [
    ["Status", `${colors.green}Success${colors.reset}`],
    ["Mode", IS_PROD ? "production" : "development"],
    ["Total", `${totalSeconds}s`],
    ["Bundle", `${bundleSeconds.toFixed(2)}s`],
    ["Output", path.relative(process.cwd(), OUT_FILE)],
    ["Size", size ? formatSize(size) : "n/a"],
  ], 70);
  console.log("");
}

main();
