/**
 * CLI utilities for enhanced console output
 */

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
};

const symbols = {
  success: '✓',
  error: '✗',
  warning: '⚠',
  info: 'ℹ',
  arrow: '→',
  dot: '•',
  star: '★',
  rocket: '🚀',
  box: '📦',
};

function pad(str, len) {
  const s = String(str);
  if (s.length >= len) return s;
  return s + ' '.repeat(len - s.length);
}

function drawBox(title, rows, width = 60) {
  const safeWidth = Math.max(width, title.length + 6);
  const top = `┌ ${title} ${'─'.repeat(Math.max(0, safeWidth - title.length - 4))}┐`;
  const bottom = `└${'─'.repeat(safeWidth - 2)}┘`;
  const keyWidth = 12;

  console.log(top);
  rows.forEach(([key, value]) => {
    const lineContent = `${pad(key + ':', keyWidth)} ${value}`;
    const padding = Math.max(0, safeWidth - 2 - lineContent.length);
    console.log(`│ ${lineContent}${' '.repeat(padding)}│`);
  });
  console.log(bottom);
}

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logSection(title) {
  console.log('');
  log(`${symbols.star} ${title}`, 'cyan');
  log('─'.repeat(50), 'gray');
}

function logSuccess(message) {
  log(`${symbols.success} ${message}`, 'green');
}

function logError(message) {
  log(`${symbols.error} ${message}`, 'red');
}

function logWarning(message) {
  log(`${symbols.warning} ${message}`, 'yellow');
}

function logInfo(message) {
  log(`${symbols.info} ${message}`, 'blue');
}

function logStep(step, description) {
  log(`${colors.bright}[${step}]${colors.reset} ${description}`, 'cyan');
}

function logDone(message) {
  log(`${symbols.success} ${colors.bright}${message}${colors.reset}`, 'green');
}

module.exports = {
  log,
  logSection,
  logSuccess,
  logError,
  logWarning,
  logInfo,
  logStep,
  logDone,
  colors,
  symbols,
  drawBox,
};
