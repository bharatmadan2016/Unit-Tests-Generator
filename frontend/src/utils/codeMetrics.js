export function countLines(value) { return value ? value.split('\n').length : 0; }
export function estimateTests(code) { const patterns = [/def\s+\w+/g, /function\s+\w+/g, /\w+\s*\(/g, /public\s+\w+\s+\w+\s*\(/g]; const matches = patterns.flatMap(pattern => code.match(pattern) || []); return Math.max(3, Math.min(matches.length * 3, 20)); }
