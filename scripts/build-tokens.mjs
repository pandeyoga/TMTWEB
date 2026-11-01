// Compiles design/tokens.json (exported from the Triyasa Design System) into src/styles/tokens.css.
import { readFileSync, writeFileSync } from 'node:fs'

const t = JSON.parse(readFileSync(new URL('../design/tokens.json', import.meta.url), 'utf8'))
const themes = t.color.themes.map((x) => x.id)
const val = (tok, th) => {
  let v = typeof tok.value === 'string' ? tok.value : tok.value[th] ?? tok.value[themes[0]]
  const m = /^\{(.+)\}$/.exec(v)
  return m ? `var(--${m[1]})` : v
}
const block = (sel, th) =>
  `${sel} {\n` +
  [...t.color.tokens, ...(t.shadow?.tokens ?? [])].map((x) => `  --${x.name}: ${val(x, th)};`).join('\n') +
  (th !== themes[0] ? '\n  color-scheme: dark;' : '') +
  '\n}\n'

let css = '/* Triyasa — generated from design/tokens.json. Run `pnpm tokens` after changing tokens. */\n'
css += block(`:root, [data-theme="${themes[0]}"]`, themes[0])
for (const th of themes.slice(1)) css += block(`[data-theme="${th}"]`, th)
const other = ['spacing', 'radius', 'duration', 'easing', 'distance'].flatMap((f) => t[f]?.tokens ?? [])
css += ':root {\n' + other.map((x) => `  --${x.name}: ${x.value};`).join('\n') + '\n'
css += Object.entries(t.type.families).map(([k, v]) => `  --font-${k}: ${v};`).join('\n') + '\n}\n'
for (const g of t.type.groups)
  for (const s of g.styles) {
    const fam = s.family ?? g.family
    css += `.${s.name} { font-family: var(--font-${fam}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight};${s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : ''} }\n`
  }
for (const f of t.type.fonts)
  css += `@font-face { font-family: "${f.family}"; src: url("/fonts/${f.file.split('/').pop()}") format("woff2"); font-weight: ${f.weight}; font-style: ${f.style ?? 'normal'}; font-display: swap; }\n`

writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), css)
console.log('tokens.css written')
