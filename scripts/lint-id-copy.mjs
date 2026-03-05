import fs from 'node:fs'
import path from 'node:path'

const TARGET_FILES = [
  'src/data/incoterms.js',
  'src/data/scenarios.js',
  'src/i18n/translations.js',
]

// Hard fail phrases: consistently awkward machine-translation artifacts.
const FORBIDDEN_PHRASES = [
  'barang bening',
  'pengaturan pengaturan',
  'yang mana hal ini',
  'di pihak mereka',
  'tindakan yang salah',
  'pemanggang',
  'saluran abu-abu',
]

// ALL-CAPS words to ignore (common acronyms/terms in freight/customs context).
const UPPERCASE_ALLOWLIST = new Set([
  'LARTAS',
  'BTKI',
  'KLHK',
  'INSW',
  'NDPBM',
  'ISPS',
  'FORM',
  'ATIGA',
  'ASEAN',
  'CY',
  'CFS',
  'LCL',
  'FCL',
  'API',
  'NIB',
  'PPJK',
  'PEB',
  'NPE',
  'PIB',
  'SPPB',
  'CEISA',
  'HS',
  'DG',
  'FTZ',
  'CPO',
  'B3',
  'GMP',
  'BPOM',
  'ECC',
  'USD',
  'IDR',
  'FOB',
  'FCA',
  'FAS',
  'CFR',
  'CIF',
  'CPT',
  'CIP',
  'DAP',
  'DPU',
  'DDP',
  'EXW',
  'BM',
  'PPN',
  'PPh',
  'PPnBM',
  'ICC',
])

const root = process.cwd()

function indexToLine(text, index) {
  let line = 1
  for (let i = 0; i < index; i += 1) {
    if (text[i] === '\n') line += 1
  }
  return line
}

function collectIdStrings(content) {
  const matches = []
  const re = /"id"\s*:\s*"((?:[^"\\]|\\.)*)"/g
  let match
  while ((match = re.exec(content)) !== null) {
    matches.push({
      value: match[1],
      line: indexToLine(content, match.index),
    })
  }
  return matches
}

function findDuplicateWords(text) {
  const issues = []
  const re = /\b([\p{L}\d]+)\s+\1\b/giu
  let match
  while ((match = re.exec(text)) !== null) {
    issues.push(match[0])
  }
  return issues
}

let blockingIssues = []
let warningIssues = []

for (const relPath of TARGET_FILES) {
  const filePath = path.join(root, relPath)
  const content = fs.readFileSync(filePath, 'utf8')
  const idEntries = collectIdStrings(content)

  for (const entry of idEntries) {
    const normalized = entry.value.toLowerCase()

    for (const phrase of FORBIDDEN_PHRASES) {
      if (normalized.includes(phrase)) {
        blockingIssues.push({
          file: relPath,
          line: entry.line,
          reason: `Forbidden phrase: "${phrase}"`,
          sample: entry.value,
        })
      }
    }

    const duplicates = findDuplicateWords(entry.value)
    for (const dup of duplicates) {
      blockingIssues.push({
        file: relPath,
        line: entry.line,
        reason: `Repeated adjacent word: "${dup}"`,
        sample: entry.value,
      })
    }

    const capsWords = entry.value.match(/\b[A-Z]{4,}\b/g) || []
    for (const cap of capsWords) {
      if (!UPPERCASE_ALLOWLIST.has(cap)) {
        warningIssues.push({
          file: relPath,
          line: entry.line,
          reason: `All-caps emphasis word: "${cap}"`,
          sample: entry.value,
        })
      }
    }
  }
}

if (blockingIssues.length) {
  console.error('\n[lint-id-copy] Blocking issues found:\n')
  for (const issue of blockingIssues) {
    console.error(`- ${issue.file}:${issue.line} | ${issue.reason}`)
    console.error(`  ${issue.sample}`)
  }
}

if (warningIssues.length) {
  console.error('\n[lint-id-copy] Warnings (strict mode, treated as failures):\n')
  for (const issue of warningIssues.slice(0, 40)) {
    console.error(`- ${issue.file}:${issue.line} | ${issue.reason}`)
  }
  if (warningIssues.length > 40) {
    console.error(`- ... ${warningIssues.length - 40} additional warnings omitted`)
  }
}

if (!blockingIssues.length && !warningIssues.length) {
  console.log('[lint-id-copy] OK: no blocking copy issues found.')
}

process.exit(blockingIssues.length || warningIssues.length ? 1 : 0)
