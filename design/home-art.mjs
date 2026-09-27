// Character heads, badges, cards and nav icons for the app home screen.
// Style: bold flat shapes with a dark ink outline, big white eyes, saturated backgrounds.

export default function homeArt(P) {
  const ink = P.ink;
  const line = `stroke="${ink}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"`;

  const eye = (cx, cy, r, lx = 0, ly = 0, pr = 0.5) => `
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" ${line}/>
    <circle cx="${cx + lx}" cy="${cy + ly}" r="${(r * pr).toFixed(1)}" fill="${ink}" stroke="none"/>
    <circle cx="${(cx + lx + r * 0.2).toFixed(1)}" cy="${(cy + ly - r * 0.22).toFixed(1)}" r="${(r * 0.18).toFixed(1)}" fill="#fff" stroke="none"/>`;

  const cheeks = (x1, x2, y) => `
    <ellipse cx="${x1}" cy="${y}" rx="10" ry="6" fill="${P.berry}" opacity=".45" stroke="none"/>
    <ellipse cx="${x2}" cy="${y}" rx="10" ry="6" fill="${P.berry}" opacity=".45" stroke="none"/>`;

  const smile = (x, y, w = 10) => `<path d="M${x - w} ${y} Q${x} ${y + w * 0.9} ${x + w} ${y}" fill="none" ${line}/>`;

  // Heads live in a 200x200 box; necks run past the bottom and get clipped by the badge or card.
  const heads = {
    boomi: {
      ar: 'بومي', en: 'Boomi', bg: P.tangerine,
      about: 'بومة فضولية تحب الأسئلة. تقود الطفل في كل الدروس.',
      svg: `<g ${line}>
        <path d="M52 80 L40 30 L88 56 Z" fill="${P.grapeDeep}"/>
        <path d="M148 80 L160 30 L112 56 Z" fill="${P.grapeDeep}"/>
        <path d="M100 44 C154 44 184 84 184 140 C184 200 150 232 100 232 C50 232 16 200 16 140 C16 84 46 44 100 44 Z" fill="${P.grape}"/>
        <ellipse cx="100" cy="200" rx="50" ry="40" fill="${P.belly}"/>
        <circle cx="72" cy="112" r="33" fill="${P.lilac}" stroke="none"/>
        <circle cx="128" cy="112" r="33" fill="${P.lilac}" stroke="none"/>
        <g class="eyes">${eye(72, 112, 24, 3, 2)}${eye(128, 112, 24, -3, 2)}</g>
        <path d="M89 138 Q100 164 111 138 Z" fill="${P.sun}"/>
        ${cheeks(40, 160, 146)}
        <ellipse cx="72" cy="66" rx="18" ry="8" transform="rotate(-24 72 66)" fill="#fff" opacity=".25" stroke="none"/>
      </g>`,
    },
    funnook: {
      ar: 'فنّوك', en: 'Funnook', bg: P.teal,
      about: 'ثعلب صحراء أذناه تسمعان كل شيء. رفيق دروس الأصوات والحروف.',
      svg: `<g ${line}>
        <path d="M54 170 Q100 150 146 170 L154 230 L46 230 Z" fill="${P.sand}"/>
        <path d="M66 100 C42 72 30 42 30 14 C60 24 86 50 94 84 Z" fill="${P.sand}"/>
        <path d="M134 100 C158 72 170 42 170 14 C140 24 114 50 106 84 Z" fill="${P.sand}"/>
        <path d="M64 88 C50 66 44 46 43 32 C62 42 76 58 82 78 Z" fill="${P.earPink}" stroke="none"/>
        <path d="M136 88 C150 66 156 46 157 32 C138 42 124 58 118 78 Z" fill="${P.earPink}" stroke="none"/>
        <ellipse cx="100" cy="126" rx="66" ry="52" fill="${P.sand}"/>
        <path d="M37 134 Q58 178 100 178 Q142 178 163 134 Q132 152 100 148 Q68 152 37 134 Z" fill="${P.belly}"/>
        <g class="eyes">${eye(76, 116, 16, 2, 1, 0.55)}${eye(124, 116, 16, -2, 1, 0.55)}</g>
        <ellipse cx="100" cy="142" rx="11" ry="7.5" fill="${ink}"/>
        ${smile(100, 155, 9)}
        ${cheeks(56, 144, 140)}
      </g>`,
    },
    jamlo: {
      ar: 'جملو', en: 'Jamlo', bg: P.pink,
      about: 'جمل صغير هادئ وصبور. يعلّم العدّ والنظافة والعادات اليومية.',
      svg: `<g ${line}>
        <rect x="68" y="168" width="64" height="70" rx="20" fill="${P.tan}"/>
        <ellipse cx="48" cy="92" rx="18" ry="10" transform="rotate(-30 48 92)" fill="${P.tan}"/>
        <ellipse cx="152" cy="92" rx="18" ry="10" transform="rotate(30 152 92)" fill="${P.tan}"/>
        <ellipse cx="100" cy="112" rx="50" ry="56" fill="${P.tan}"/>
        <g stroke-width="11"><circle cx="82" cy="64" r="15" fill="${P.hair}"/><circle cx="100" cy="56" r="17" fill="${P.hair}"/><circle cx="118" cy="64" r="15" fill="${P.hair}"/></g>
        <g stroke="none"><circle cx="82" cy="64" r="15" fill="${P.hair}"/><circle cx="100" cy="56" r="17" fill="${P.hair}"/><circle cx="118" cy="64" r="15" fill="${P.hair}"/></g>
        <ellipse cx="100" cy="162" rx="44" ry="30" fill="${P.tanLight}"/>
        <ellipse cx="86" cy="155" rx="5" ry="3.5" fill="${ink}" stroke="none"/>
        <ellipse cx="114" cy="155" rx="5" ry="3.5" fill="${ink}" stroke="none"/>
        ${smile(100, 170, 13)}
        <g class="eyes">${eye(80, 110, 15, 2, 3)}${eye(120, 110, 15, -2, 3)}
          <path d="M65 110 A15 15 0 0 1 95 110 Z" fill="${P.tan}"/>
          <path d="M105 110 A15 15 0 0 1 135 110 Z" fill="${P.tan}"/></g>
        ${cheeks(58, 142, 134)}
      </g>`,
    },
    robi: {
      ar: 'روبي', en: 'Robi', bg: P.lilac,
      about: 'روبوت يحب التجارب. يأخذ الطفل في رحلات العلوم والأشكال.',
      svg: `<g ${line}>
        <line x1="100" y1="58" x2="100" y2="30"/>
        <circle cx="100" cy="26" r="10" fill="${P.berry}"/>
        <rect x="76" y="160" width="48" height="70" rx="12" fill="${P.roboDeep}"/>
        <rect x="24" y="94" width="22" height="40" rx="9" fill="${P.sun}"/>
        <rect x="154" y="94" width="22" height="40" rx="9" fill="${P.sun}"/>
        <rect x="40" y="56" width="120" height="112" rx="34" fill="${P.robo}"/>
        <rect x="52" y="64" width="30" height="10" rx="5" fill="#fff" opacity=".55" stroke="none"/>
        <rect x="56" y="78" width="88" height="68" rx="20" fill="${ink}"/>
        <g class="eyes" stroke="none"><ellipse cx="82" cy="106" rx="9" ry="12" fill="${P.glow}"/><ellipse cx="118" cy="106" rx="9" ry="12" fill="${P.glow}"/></g>
        <path d="M84 126 Q100 138 116 126" fill="none" stroke="${P.glow}" stroke-width="5" stroke-linecap="round"/>
      </g>`,
    },
    lulu: {
      ar: 'لولو', en: 'Lulu', bg: P.leaf,
      about: 'قطة فنانة تحب الألوان والموسيقى والرسم.',
      svg: `<g ${line}>
        <ellipse cx="100" cy="214" rx="62" ry="44" fill="#fff"/>
        <path d="M46 98 L40 32 L94 70 Z" fill="#fff"/>
        <path d="M154 98 L160 32 L106 70 Z" fill="${P.tangerine}"/>
        <path d="M54 84 L52 50 L80 70 Z" fill="${P.earPink}" stroke="none"/>
        <path d="M146 84 L148 50 L120 70 Z" fill="${P.earPink}" stroke="none"/>
        <ellipse cx="100" cy="124" rx="68" ry="56" fill="#fff"/>
        <path d="M112 72 Q150 68 164 104 Q162 132 140 138 Q116 132 108 104 Z" fill="${P.tangerine}" stroke="none"/>
        <ellipse cx="100" cy="124" rx="68" ry="56" fill="none"/>
        <g class="eyes">${eye(74, 118, 16)}${eye(126, 118, 16)}</g>
        <path d="M93 140 L107 140 L100 148 Z" fill="${P.berry}" stroke-width="3"/>
        <path d="M86 152 Q93 160 100 152 Q107 160 114 152" fill="none"/>
        <g stroke-width="3"><line x1="22" y1="138" x2="52" y2="142"/><line x1="24" y1="152" x2="52" y2="150"/><line x1="178" y1="138" x2="148" y2="142"/><line x1="176" y1="152" x2="148" y2="150"/></g>
        ${cheeks(56, 144, 140)}
      </g>`,
    },
  };

  const badge = (key) => {
    const h = heads[key];
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" class="badge badge-${key}" role="img" aria-label="${h.en}">
      <defs><clipPath id="clip-${key}"><circle cx="100" cy="100" r="96"/></clipPath></defs>
      <circle cx="100" cy="100" r="96" fill="${h.bg}"/>
      <circle cx="100" cy="100" r="72" fill="#fff" opacity=".14"/>
      <g clip-path="url(#clip-${key})"><g transform="translate(14 2) scale(.86)">${h.svg}</g></g>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#fff" stroke-width="6"/>
    </svg>`;
  };

  const headSvg = (key) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 240" role="img" aria-label="${heads[key].en}">${heads[key].svg}</svg>`;

  const place = (key, x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})">${heads[key].svg}</g>`;

  const dots = (color, step = 28) => {
    let out = '';
    for (let y = 14; y < 200; y += step) for (let x = (y / step) % 2 ? 28 : 14; x < 300; x += step) out += `<circle cx="${x}" cy="${y}" r="3.5"/>`;
    return `<g fill="${color}">${out}</g>`;
  };

  const tile = (x, y, w, h, label, top, deep, size, rot = 0) => `
    <g transform="rotate(${rot} ${x + w / 2} ${y + h / 2})" ${line}>
      <rect x="${x}" y="${y + 12}" width="${w}" height="${h}" rx="22" fill="${deep}"/>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${top}"/>
      <rect x="${x + 12}" y="${y + 9}" width="${w * 0.4}" height="10" rx="5" fill="#fff" opacity=".4" stroke="none"/>
      <text x="${x + w / 2}" y="${y + h * 0.74}" text-anchor="middle" font-family="'Baloo Bhaijaan 2', sans-serif" font-weight="800" font-size="${size}" fill="#fff" stroke="${ink}" stroke-width="6" paint-order="stroke">${label}</text>
    </g>`;

  const bubble = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity=".3" stroke="#fff" stroke-width="3"/><circle cx="${x - r * 0.35}" cy="${y - r * 0.35}" r="${r * 0.2}" fill="#fff"/>`;

  const cards = {
    colors: {
      ar: 'الألوان', en: 'Colors',
      svg: `<rect width="300" height="200" fill="${P.sun}"/>${dots('#fff" fill-opacity=".35')}
        <g ${line}>
          <line x1="205" y1="60" x2="172" y2="210" stroke-width="9"/><line x1="245" y1="60" x2="278" y2="210" stroke-width="9"/>
          <g transform="rotate(-5 215 90)">
            <rect x="148" y="28" width="134" height="104" rx="12" fill="#fff"/>
            <g fill="none" stroke-width="9">
              <path d="M170 118 A45 45 0 0 1 260 118" stroke="${P.berry}"/>
              <path d="M181 118 A34 34 0 0 1 249 118" stroke="${P.tangerine}"/>
              <path d="M192 118 A23 23 0 0 1 238 118" stroke="${P.leaf}"/>
              <path d="M203 118 A12 12 0 0 1 227 118" stroke="${P.sky}"/>
            </g>
            <circle cx="258" cy="50" r="11" fill="${P.sun}"/>
          </g>
          <ellipse cx="226" cy="186" rx="16" ry="8" fill="${P.berry}"/><ellipse cx="258" cy="192" rx="12" ry="6" fill="${P.sky}"/>
        </g>
        ${place('lulu', 0, 58, 0.72)}
        <g transform="rotate(-38 132 120)" ${line}><rect x="126" y="80" width="12" height="70" rx="6" fill="${P.bark}"/><path d="M122 80 Q132 50 142 80 Z" fill="${P.berry}"/></g>`,
    },
    numbers: {
      ar: 'الأرقام', en: 'Numbers',
      svg: `<rect width="300" height="200" fill="${P.teal}"/>
        <g fill="#fff" fill-opacity=".14">${Array.from({ length: 28 }, (_, i) => `<rect x="${(i % 7) * 44 + 4}" y="${Math.floor(i / 7) * 52 + 4}" width="36" height="44" rx="10"/>`).join('')}</g>
        ${tile(36, 36, 116, 130, '3', P.sun, P.tangerine, 110, -6)}
        ${tile(166, 52, 100, 112, '٣', P.berry, '#C93A5A', 92, 7)}`,
    },
    letters: {
      ar: 'الحروف', en: 'Letters',
      svg: `<rect width="300" height="200" fill="${P.pink}"/>${dots('#fff" fill-opacity=".3')}
        ${tile(22, 30, 108, 118, 'ب', P.leaf, P.leafDeep, 96, -7)}
        ${tile(120, 96, 64, 70, 'B', P.sky, P.skyDeep, 52, 9)}
        ${place('funnook', 168, 50, 0.72)}`,
    },
    hygiene: {
      ar: 'النظافة', en: 'Hygiene',
      svg: `<rect width="300" height="200" fill="${P.sky}"/>
        ${bubble(40, 44, 22)}${bubble(262, 36, 16)}${bubble(250, 150, 26)}${bubble(28, 150, 14)}${bubble(212, 88, 10)}
        ${place('jamlo', 64, 30, 0.86)}
        ${bubble(118, 52, 14)}${bubble(146, 42, 18)}${bubble(172, 54, 12)}
        <g transform="rotate(-18 222 146)" ${line}><rect x="184" y="120" width="76" height="52" rx="16" fill="${P.sun}"/>
          <g fill="${P.tangerine}" stroke="none"><circle cx="202" cy="136" r="5"/><circle cx="226" cy="150" r="6"/><circle cx="246" cy="134" r="4"/><circle cx="244" cy="158" r="4"/></g></g>`,
    },
    science: {
      ar: 'العلوم', en: 'Science',
      svg: `<rect width="300" height="200" fill="${P.lilac}"/>
        <g fill="#fff">${[[30, 30], [270, 40], [250, 170], [60, 170], [150, 20], [220, 110]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.5"/>`).join('')}</g>
        <g ${line}><circle cx="236" cy="70" r="34" fill="${P.tangerine}"/><ellipse cx="236" cy="70" rx="58" ry="14" transform="rotate(-18 236 70)" fill="none" stroke="${P.sun}" stroke-width="7"/></g>
        ${place('robi', 40, 42, 0.8)}`,
    },
  };

  const card = (key) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${cards[key].en}">${cards[key].svg}</svg>`;

  const icons = {
    play: `<g ${line}><rect x="4" y="14" width="40" height="26" rx="13" fill="${P.lilac}"/><path d="M14 24 v8 M10 28 h8" stroke="#fff" stroke-width="4"/><circle cx="32" cy="24" r="3" fill="${P.sun}" stroke="none"/><circle cx="36" cy="31" r="3" fill="${P.berry}" stroke="none"/></g>`,
    watch: `<g ${line}><rect x="4" y="10" width="40" height="30" rx="9" fill="${P.berry}"/><path d="M20 18 L31 25 L20 32 Z" fill="#fff" stroke="none"/><line x1="16" y1="44" x2="32" y2="44"/></g>`,
    lessons: `<g ${line}><path d="M24 12 Q14 6 4 10 V40 Q14 36 24 42 Q34 36 44 40 V10 Q34 6 24 12 Z" fill="${P.leaf}"/><line x1="24" y1="12" x2="24" y2="42"/></g>`,
    together: `<g ${line}><circle cx="16" cy="18" r="8" fill="${P.tangerine}"/><path d="M4 42 Q4 28 16 28 Q28 28 28 42 Z" fill="${P.tangerine}"/><circle cx="33" cy="16" r="8" fill="${P.pink}"/><path d="M22 40 Q22 26 33 26 Q44 26 44 40 Z" fill="${P.pink}"/></g>`,
    search: `<g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"><circle cx="21" cy="21" r="12"/><line x1="30" y1="30" x2="41" y2="41"/></g>`,
    stickers: `<g ${line}><rect x="8" y="6" width="32" height="38" rx="7" fill="${P.tangerine}"/><path d="M24 16 l3 6 7 1 -5 5 1 7 -6 -3 -6 3 1 -7 -5 -5 7 -1 Z" fill="${P.sun}" stroke-width="3"/></g>`,
  };
  const icon = (k) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" aria-hidden="true">${icons[k]}</svg>`;

  return { heads, badge, headSvg, cards, card, icon };
}
