// Generates the SVG art assets and the style board from one source of truth.
// Run: node design/build.mjs
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import homeArt from './home-art.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const P = JSON.parse(readFileSync(join(root, 'design/palette.json'), 'utf8')).colors;

// ---------- Boomi (the mascot owl), viewBox 240x240, built from named parts ----------

const boomiBase = () => `
  <ellipse cx="120" cy="224" rx="64" ry="9" fill="${P.ink}" opacity=".12"/>
  <g class="feet">
    <ellipse cx="96" cy="212" rx="17" ry="9" fill="${P.tangerine}"/>
    <ellipse cx="144" cy="212" rx="17" ry="9" fill="${P.tangerine}"/>
  </g>
  <g class="wing wing-l"><ellipse cx="44" cy="146" rx="19" ry="38" transform="rotate(16 44 146)" fill="${P.grapeDeep}"/></g>
  <g class="wing wing-r"><ellipse cx="196" cy="146" rx="19" ry="38" transform="rotate(-16 196 146)" fill="${P.grapeDeep}"/></g>
  <g class="tufts" fill="${P.grapeDeep}" stroke="${P.grapeDeep}" stroke-width="12" stroke-linejoin="round">
    <path d="M66 72 L56 34 L98 54 Z"/>
    <path d="M174 72 L184 34 L142 54 Z"/>
  </g>
  <path class="body" d="M120 42 C176 42 206 82 206 136 C206 186 170 216 120 216 C70 216 34 186 34 136 C34 82 64 42 120 42 Z" fill="${P.grape}"/>
  <ellipse cx="92" cy="74" rx="30" ry="15" transform="rotate(-22 92 74)" fill="#fff" opacity=".2"/>
  <ellipse cx="120" cy="164" rx="54" ry="46" fill="${P.belly}"/>
  <g fill="none" stroke="${P.bellyShade}" stroke-width="5" stroke-linecap="round">
    <path d="M100 160 q8 8 16 0"/><path d="M124 160 q8 8 16 0"/><path d="M112 180 q8 8 16 0"/>
  </g>
  <ellipse cx="68" cy="142" rx="11" ry="7" fill="${P.berry}" opacity=".5"/>
  <ellipse cx="172" cy="142" rx="11" ry="7" fill="${P.berry}" opacity=".5"/>`;

const openEyes = (pupil = 14, dx = 4) => `
  <g class="eyes">
    <circle cx="88" cy="108" r="30" fill="#fff"/>
    <circle cx="152" cy="108" r="30" fill="#fff"/>
    <circle cx="${88 + dx}" cy="112" r="${pupil}" fill="${P.ink}"/>
    <circle cx="${152 - dx}" cy="112" r="${pupil}" fill="${P.ink}"/>
    <circle cx="${88 + dx + pupil * 0.35}" cy="${112 - pupil * 0.4}" r="${Math.max(3, pupil * 0.36)}" fill="#fff"/>
    <circle cx="${152 - dx + pupil * 0.35}" cy="${112 - pupil * 0.4}" r="${Math.max(3, pupil * 0.36)}" fill="#fff"/>
  </g>`;

const beak = `<path d="M110 128 Q120 150 130 128 Z" fill="${P.sun}" stroke="${P.sun}" stroke-width="6" stroke-linejoin="round"/>`;

const expressions = {
  curious: openEyes(14, 4) + beak,
  joyful: `
    <g class="eyes" fill="none" stroke="${P.ink}" stroke-width="8" stroke-linecap="round">
      <path d="M68 114 Q88 92 108 114"/><path d="M132 114 Q152 92 172 114"/>
    </g>
    <path d="M108 128 Q120 156 132 128 Z" fill="${P.sun}" stroke="${P.sun}" stroke-width="6" stroke-linejoin="round"/>
    <ellipse cx="120" cy="140" rx="5" ry="4" fill="${P.berry}"/>`,
  wow: `
    <g fill="none" stroke="${P.grapeDeep}" stroke-width="7" stroke-linecap="round">
      <path d="M66 70 Q86 58 104 68"/><path d="M136 68 Q154 58 174 70"/>
    </g>
    ${openEyes(9, 0)}
    <path d="M112 126 Q120 136 128 126 Z" fill="${P.sun}" stroke="${P.sun}" stroke-width="6" stroke-linejoin="round"/>
    <ellipse cx="120" cy="146" rx="9" ry="11" fill="${P.ink}"/>
    <ellipse cx="120" cy="150" rx="5" ry="4" fill="${P.berry}"/>`,
};

const boomi = (expr) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" class="boomi boomi-${expr}" role="img" aria-label="Boomi ${expr}">${boomiBase()}<g class="face">${expressions[expr]}</g></svg>`;

// ---------- Items, viewBox 160x160: flat, no outlines, one soft highlight, tiny faces ----------

const shadow = (w = 46) => `<ellipse cx="80" cy="148" rx="${w}" ry="6" fill="${P.ink}" opacity=".12"/>`;
const tinyFace = (cx, cy, s = 1) => `
  <circle cx="${cx - 12 * s}" cy="${cy}" r="${4.5 * s}" fill="${P.ink}"/>
  <circle cx="${cx + 12 * s}" cy="${cy}" r="${4.5 * s}" fill="${P.ink}"/>
  <path d="M${cx - 7 * s} ${cy + 9 * s} q${7 * s} ${7 * s} ${14 * s} 0" fill="none" stroke="${P.ink}" stroke-width="${4 * s}" stroke-linecap="round"/>`;

const starPath = (cx, cy, R, r) => {
  const pts = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 ? r : R;
    pts.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return `M${pts.join(' L')} Z`;
};

const sunRays = () =>
  Array.from({ length: 10 }, (_, i) =>
    `<rect x="75" y="6" width="10" height="22" rx="5" transform="rotate(${i * 36} 80 76)" fill="${P.tangerine}"/>`
  ).join('');

const items = {
  apple: `
    ${shadow(44)}
    <path d="M80 52 C60 36 26 44 26 86 C26 120 52 142 70 140 C76 139 78 136 80 136 C82 136 84 139 90 140 C108 142 134 120 134 86 C134 44 100 36 80 52 Z" fill="${P.berry}"/>
    <rect x="76" y="26" width="9" height="28" rx="4.5" transform="rotate(10 80 40)" fill="${P.bark}"/>
    <ellipse cx="102" cy="36" rx="18" ry="9" transform="rotate(-24 102 36)" fill="${P.leaf}"/>
    <ellipse cx="52" cy="76" rx="9" ry="16" transform="rotate(24 52 76)" fill="#fff" opacity=".35"/>
    ${tinyFace(80, 96)}`,
  star: `
    ${shadow(40)}
    <path d="${starPath(80, 82, 62, 30)}" fill="${P.sun}" stroke="${P.sun}" stroke-width="14" stroke-linejoin="round"/>
    <ellipse cx="60" cy="60" rx="7" ry="12" transform="rotate(35 60 60)" fill="#fff" opacity=".4"/>
    ${tinyFace(80, 86)}`,
  sun: `
    <g class="rays">${sunRays()}</g>
    <circle cx="80" cy="76" r="40" fill="${P.sun}"/>
    <ellipse cx="64" cy="58" rx="9" ry="13" transform="rotate(35 64 58)" fill="#fff" opacity=".4"/>
    <ellipse cx="58" cy="88" rx="7" ry="4.5" fill="${P.berry}" opacity=".45"/>
    <ellipse cx="102" cy="88" rx="7" ry="4.5" fill="${P.berry}" opacity=".45"/>
    ${tinyFace(80, 78)}`,
  cloud: `
    <path d="M40 116 C18 116 14 86 36 80 C34 56 64 46 76 62 C84 38 124 42 124 72 C146 72 150 116 124 116 Z" fill="${P.cloudShade}"/>
    <path d="M40 108 C18 108 14 80 36 74 C34 50 64 40 76 56 C84 32 124 36 124 66 C146 66 150 108 124 108 Z" fill="${P.cloud}"/>
    ${tinyFace(80, 84, 0.9)}`,
  letterAlif: `
    ${shadow(50)}
    <rect x="22" y="30" width="116" height="112" rx="30" fill="${P.leafDeep}"/>
    <rect x="22" y="20" width="116" height="112" rx="30" fill="${P.leaf}"/>
    <rect x="34" y="28" width="50" height="14" rx="7" fill="#fff" opacity=".3"/>
    <text x="80" y="108" text-anchor="middle" font-family="'Baloo Bhaijaan 2', 'Tajawal', sans-serif" font-weight="800" font-size="82" fill="#fff">أ</text>`,
  numberThree: `
    ${shadow(50)}
    <rect x="22" y="30" width="116" height="112" rx="30" fill="${P.skyDeep}"/>
    <rect x="22" y="20" width="116" height="112" rx="30" fill="${P.sky}"/>
    <rect x="34" y="28" width="50" height="14" rx="7" fill="#fff" opacity=".3"/>
    <text x="80" y="96" text-anchor="middle" font-family="'Baloo Bhaijaan 2', sans-serif" font-weight="800" font-size="66" fill="#fff">3</text>
    <circle cx="58" cy="114" r="6" fill="#fff"/><circle cx="80" cy="114" r="6" fill="#fff"/><circle cx="102" cy="114" r="6" fill="#fff"/>`,
};

const item = (name) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" class="item item-${name}" role="img" aria-label="${name}">${items[name]}</svg>`;

// ---------- Write assets ----------

const put = (rel, text) => {
  const p = join(root, rel);
  mkdirSync(dirname(p), { recursive: true });
  writeFileSync(p, text.replace(/\n\s*\n/g, '\n') + '\n');
};

const svgs = {};
for (const e of Object.keys(expressions)) {
  svgs[`boomi_${e}`] = boomi(e);
  put(`assets/svg/characters/boomi_${e}.svg`, svgs[`boomi_${e}`]);
}
for (const n of Object.keys(items)) {
  svgs[`item_${n}`] = item(n);
  put(`assets/svg/items/${n}.svg`, svgs[`item_${n}`]);
}

const H = homeArt(P);
for (const k of Object.keys(H.heads)) {
  put(`assets/svg/heads/${k}.svg`, H.headSvg(k));
  put(`assets/svg/badges/${k}.svg`, H.badge(k));
  svgs[`badge_${k}`] = H.badge(k);
}
for (const k of Object.keys(H.cards)) {
  put(`assets/svg/cards/${k}.svg`, H.card(k));
  svgs[`card_${k}`] = H.card(k);
}
for (const k of ['play', 'watch', 'lessons', 'together', 'search', 'stickers']) svgs[`icon_${k}`] = H.icon(k);

// ---------- Pages ----------

const render = (name) => {
  const tpl = readFileSync(join(root, `design/${name}.template.html`), 'utf8');
  const html = tpl
    .replace(/\{\{svg:(\w+)\}\}/g, (_, k) => {
      if (!svgs[k]) throw new Error(`unknown svg ${k}`);
      return svgs[k];
    })
    .replace(/\{\{color:(\w+)\}\}/g, (_, k) => P[k])
    .replace(/\{\{about:(\w+)\}\}/g, (_, k) => H.heads[k].about);
  writeFileSync(join(root, `design/${name}.html`), html);
};
render('style-board');
render('home');
console.log(`wrote ${Object.keys(svgs).length} svgs + design/style-board.html + design/home.html`);
