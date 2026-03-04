import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const ORIGINAL = 'https://1project.co';
const REBUILD  = 'https://1projectco-site.vercel.app';
const VIEWPORT = { width: 1440, height: 900 };

const PAGES = [
  { slug: 'homepage',           path: '/' },
  { slug: 'services',           path: '/services/' },
  { slug: 'about-us',           path: '/about-us/' },
  { slug: 'case-studies-index', path: '/case-studies/' },
  { slug: 'amazon',             path: '/case-studies/amazon/' },
  { slug: 'tata-consumer',      path: '/case-studies/eight-o-clock-coffee/' },
  { slug: 'bmo',                path: '/case-studies/bmo-small-business/' },
  { slug: 'nad-electronics',    path: '/case-studies/nad-electronics/' },
  { slug: 'pentair',            path: '/case-studies/manitowoc-ice/' },
  { slug: 'core',               path: '/case-studies/core-equipment-co/' },
];

const EXTRACT_FN = `(async () => {
  // Scroll to trigger lazy content
  const totalH = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  for (let y = 0; y < totalH; y += 200) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); }
  await new Promise(r => setTimeout(r, 2000));
  window.scrollTo(0, 0);
  await new Promise(r => setTimeout(r, 500));

  function hex(rgb) {
    if (!rgb || rgb === 'transparent' || rgb === 'rgba(0, 0, 0, 0)') return null;
    const m = rgb.match(/\\d+/g);
    if (!m || m.length < 3) return rgb;
    if (m.length === 4 && Number(m[3]) === 0) return null;
    return '#' + m.slice(0,3).map(x => Number(x).toString(16).padStart(2,'0')).join('');
  }

  const main = document.querySelector('main') || document.body;
  const secs = [];
  for (const ch of main.children) {
    const rect = ch.getBoundingClientRect();
    if (rect.height < 10) continue;
    const cs = window.getComputedStyle(ch);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') continue;

    const hs = Array.from(ch.querySelectorAll('h1,h2,h3,h4,h5,h6')).map(h => {
      const s = window.getComputedStyle(h);
      return { lv: h.tagName, txt: h.textContent.trim().substring(0, 200), f: s.fontSize+'/'+s.fontWeight, col: hex(s.color), fam: s.fontFamily.split(',')[0].replace(/["']/g,'').trim(), align: s.textAlign, italic: s.fontStyle === 'italic' };
    });
    const ps = Array.from(ch.querySelectorAll('p')).map(p => {
      const s = window.getComputedStyle(p);
      return { txt: p.textContent.trim().substring(0, 300), f: s.fontSize+'/'+s.fontWeight, col: hex(s.color), fam: s.fontFamily.split(',')[0].replace(/["']/g,'').trim() };
    }).filter(p => p.txt);
    const imgs = Array.from(ch.querySelectorAll('img')).filter(i => { const r = i.getBoundingClientRect(); return r.width > 5 && r.height > 5; })
      .map(i => ({ src: i.src?.substring(0, 200), alt: i.alt, w: Math.round(i.getBoundingClientRect().width), h: Math.round(i.getBoundingClientRect().height) }));
    const ifs = Array.from(ch.querySelectorAll('iframe')).map(i => ({ src: i.src?.substring(0, 250), w: Math.round(i.getBoundingClientRect().width), h: Math.round(i.getBoundingClientRect().height) }));
    const vids = Array.from(ch.querySelectorAll('video')).map(v => ({ src: (v.currentSrc||v.src||'').substring(0, 200), w: Math.round(v.getBoundingClientRect().width), h: Math.round(v.getBoundingClientRect().height), autoplay: v.autoplay, loop: v.loop }));
    const btns = Array.from(ch.querySelectorAll('button')).map(b => {
      const s = window.getComputedStyle(b);
      return { txt: b.textContent.trim().substring(0, 100), f: s.fontSize+'/'+s.fontWeight, bg: hex(s.backgroundColor), col: hex(s.color), border: s.borderWidth !== '0px' ? s.borderWidth+' '+s.borderStyle+' '+hex(s.borderColor) : null };
    });
    const links = Array.from(ch.querySelectorAll('a')).map(a => {
      const s = window.getComputedStyle(a);
      return { txt: a.textContent.trim().substring(0, 80), href: a.href?.substring(0, 150), f: s.fontSize+'/'+s.fontWeight, col: hex(s.color) };
    }).filter(l => l.txt);

    const layout = { display: cs.display, flexDir: cs.flexDirection, justifyContent: cs.justifyContent, alignItems: cs.alignItems, gap: cs.gap, padding: cs.padding, bg: hex(cs.backgroundColor), bgImg: cs.backgroundImage !== 'none' ? cs.backgroundImage.substring(0, 200) : null };

    secs.push({ tag: ch.tagName.toLowerCase(), cls: (ch.className?.toString()||'').substring(0, 150), w: Math.round(rect.width), h: Math.round(rect.height), layout, hs, ps, imgs, ifs, vids, btns, links });
  }

  // Global media inventory
  const media = [];
  document.querySelectorAll('img').forEach(img => { const r = img.getBoundingClientRect(); if (r.width > 5) media.push({ type: 'img', src: img.src?.substring(0, 300), alt: img.alt, w: Math.round(r.width), h: Math.round(r.height) }); });
  document.querySelectorAll('iframe').forEach(f => { const r = f.getBoundingClientRect(); media.push({ type: 'iframe', src: f.src?.substring(0, 300), w: Math.round(r.width), h: Math.round(r.height) }); });
  document.querySelectorAll('video').forEach(v => { const r = v.getBoundingClientRect(); media.push({ type: 'video', src: (v.currentSrc||v.src||'').substring(0, 300), w: Math.round(r.width), h: Math.round(r.height), autoplay: v.autoplay, loop: v.loop, muted: v.muted }); });

  // Nav
  const navEl = document.querySelector('header') || document.querySelector('nav');
  let nav = null;
  if (navEl) {
    const ncs = window.getComputedStyle(navEl);
    const nr = navEl.getBoundingClientRect();
    nav = { position: ncs.position, bg: hex(ncs.backgroundColor) || ncs.backgroundColor, zIndex: ncs.zIndex, w: Math.round(nr.width), h: Math.round(nr.height),
      links: Array.from(navEl.querySelectorAll('a')).map(a => ({ txt: a.textContent.trim(), href: a.href?.substring(0, 100) })).filter(l => l.txt),
      startProjectBtn: (() => { const btn = navEl.querySelector('a[href*="contact"], a[href*="project"], .elementor-button'); if (!btn) return null; const bs = window.getComputedStyle(btn); return { txt: btn.textContent.trim(), bg: hex(bs.backgroundColor) || bs.backgroundColor, col: hex(bs.color), border: bs.borderWidth !== '0px' ? bs.borderWidth+' '+bs.borderStyle+' '+hex(bs.borderColor) : null }; })()
    };
  }

  // Footer
  const footerEl = document.querySelector('footer');
  let footer = null;
  if (footerEl) {
    const fcs = window.getComputedStyle(footerEl);
    footer = { h: Math.round(footerEl.getBoundingClientRect().height),
      links: Array.from(footerEl.querySelectorAll('a')).map(a => { const as = window.getComputedStyle(a); return { txt: a.textContent.trim().substring(0, 50), href: a.href?.substring(0, 100), f: as.fontSize+'/'+as.fontWeight, col: hex(as.color), stroke: as.webkitTextStroke || as.webkitTextStrokeWidth || null }; }).filter(l => l.txt),
      layout: fcs.display + (fcs.flexDirection !== 'row' ? ' '+fcs.flexDirection : '') };
  }

  return {
    meta: { title: document.title, url: location.href, scrollH: document.documentElement.scrollHeight, elCount: document.querySelectorAll('*').length, ts: new Date().toISOString() },
    nav, secs, media, footer
  };
})()`;

// --- Diff logic ---
function diffPage(slug, orig, rebuild) {
  const issues = [];
  const o = orig, r = rebuild;

  // Page height
  const hPct = Math.round(Math.abs(o.meta.scrollH - r.meta.scrollH) / o.meta.scrollH * 100);
  if (hPct > 15) issues.push({ sev: hPct > 30 ? 'HIGH' : 'MED', msg: `Page height off by ${hPct}%: orig ${o.meta.scrollH}px vs rebuild ${r.meta.scrollH}px` });

  // Nav
  if (o.nav && r.nav) {
    if (o.nav.position !== r.nav.position) issues.push({ sev: 'MED', msg: `Nav position: orig "${o.nav.position}" vs rebuild "${r.nav.position}"` });
    const ob = o.nav.startProjectBtn, rb = r.nav.startProjectBtn;
    if (ob && rb) {
      if (ob.bg !== rb.bg) issues.push({ sev: 'HIGH', msg: `"Start a Project" bg: orig "${ob.bg}" vs rebuild "${rb.bg}" | border: orig "${ob.border}" vs rebuild "${rb.border}"` });
    }
  }

  // Section count
  if (o.secs.length !== r.secs.length) issues.push({ sev: 'HIGH', msg: `Section count: orig ${o.secs.length} vs rebuild ${r.secs.length}` });

  // Flatten all headings for comparison
  const oHeadings = o.secs.flatMap(s => s.hs);
  const rHeadings = r.secs.flatMap(s => s.hs);

  // Compare heading-by-heading where text roughly matches
  for (const oh of oHeadings) {
    const cleanO = oh.txt.replace(/\s+/g, ' ').trim().toLowerCase();
    const match = rHeadings.find(rh => {
      const cleanR = rh.txt.replace(/\s+/g, ' ').trim().toLowerCase();
      return cleanR === cleanO || cleanR.includes(cleanO) || cleanO.includes(cleanR);
    });
    if (!match) {
      if (oh.txt.length > 3) issues.push({ sev: 'MED', msg: `Heading missing in rebuild: "${oh.txt.substring(0,60)}" [${oh.lv} ${oh.f}]` });
      continue;
    }
    if (oh.f !== match.f) issues.push({ sev: 'HIGH', msg: `Heading "${oh.txt.substring(0,40)}": font orig ${oh.f} vs rebuild ${match.f}` });
    if (oh.lv !== match.lv) issues.push({ sev: 'MED', msg: `Heading "${oh.txt.substring(0,40)}": tag orig ${oh.lv} vs rebuild ${match.lv}` });
    if (oh.col !== match.col && oh.col && match.col) issues.push({ sev: 'LOW', msg: `Heading "${oh.txt.substring(0,40)}": color orig ${oh.col} vs rebuild ${match.col}` });
    if (oh.align !== match.align && oh.align && match.align) issues.push({ sev: 'MED', msg: `Heading "${oh.txt.substring(0,40)}": align orig "${oh.align}" vs rebuild "${match.align}"` });
  }

  // Compare paragraph styles (sample first few)
  const oPs = o.secs.flatMap(s => s.ps).slice(0, 10);
  const rPs = r.secs.flatMap(s => s.ps).slice(0, 10);
  if (oPs.length && rPs.length) {
    if (oPs[0].f !== rPs[0].f) issues.push({ sev: 'MED', msg: `Body text font: orig ${oPs[0].f} vs rebuild ${rPs[0].f}` });
    if (oPs[0].col !== rPs[0].col) issues.push({ sev: 'LOW', msg: `Body text color: orig ${oPs[0].col} vs rebuild ${rPs[0].col}` });
  }

  // Compare buttons (accordion titles etc)
  const oBtns = o.secs.flatMap(s => s.btns).filter(b => b.txt);
  const rBtns = r.secs.flatMap(s => s.btns).filter(b => b.txt);
  for (const ob of oBtns) {
    const match = rBtns.find(rb => rb.txt.toLowerCase() === ob.txt.toLowerCase());
    if (match && ob.f !== match.f) issues.push({ sev: 'HIGH', msg: `Button "${ob.txt.substring(0,30)}": font orig ${ob.f} vs rebuild ${match.f}` });
  }

  // Image sizing comparison (match by alt or filename)
  const oImgs = o.secs.flatMap(s => s.imgs);
  const rImgs = r.secs.flatMap(s => s.imgs);
  for (const oi of oImgs) {
    const fname = oi.src?.split('/').pop()?.split('?')[0];
    const altMatch = rImgs.find(ri => (ri.alt && ri.alt === oi.alt) || (fname && ri.src?.includes(fname)));
    if (altMatch) {
      const wDiff = Math.abs(oi.w - altMatch.w);
      const hDiff = Math.abs(oi.h - altMatch.h);
      if (wDiff > 50 || hDiff > 50) {
        issues.push({ sev: wDiff > 150 ? 'HIGH' : 'MED', msg: `Image "${oi.alt || fname}": orig ${oi.w}x${oi.h} vs rebuild ${altMatch.w}x${altMatch.h}` });
      }
    }
  }

  // Iframe/video count and sizing
  const oIfs = o.media.filter(m => m.type === 'iframe' && m.w > 0);
  const rIfs = r.media.filter(m => m.type === 'iframe' && m.w > 0);
  if (oIfs.length !== rIfs.length) issues.push({ sev: 'MED', msg: `Visible iframe count: orig ${oIfs.length} vs rebuild ${rIfs.length}` });
  for (let i = 0; i < Math.min(oIfs.length, rIfs.length); i++) {
    const ow = oIfs[i].w, oh2 = oIfs[i].h, rw = rIfs[i].w, rh = rIfs[i].h;
    if (Math.abs(ow - rw) > 100 || Math.abs(oh2 - rh) > 100) {
      issues.push({ sev: 'HIGH', msg: `Iframe ${i+1} size: orig ${ow}x${oh2} vs rebuild ${rw}x${rh} | src: ${rIfs[i].src?.substring(0, 80)}` });
    }
  }

  // Total media counts
  const oImgCount = o.media.filter(m => m.type === 'img').length;
  const rImgCount = r.media.filter(m => m.type === 'img').length;
  if (Math.abs(oImgCount - rImgCount) > 2) issues.push({ sev: 'MED', msg: `Total image count: orig ${oImgCount} vs rebuild ${rImgCount}` });

  // Footer
  if (o.footer && r.footer) {
    if (Math.abs(o.footer.h - r.footer.h) > 50) issues.push({ sev: 'LOW', msg: `Footer height: orig ${o.footer.h}px vs rebuild ${r.footer.h}px` });
  }

  return issues;
}

// --- Main ---
async function main() {
  const baseDir = join(process.cwd(), 'source-extraction');
  for (const d of ['original', 'rebuild', 'json'].map(x => join(baseDir, x))) {
    if (!existsSync(d)) mkdirSync(d, { recursive: true });
  }

  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: VIEWPORT });
  const page = await ctx.newPage();

  const results = {};

  try {
    for (const site of ['original', 'rebuild']) {
      const base = site === 'original' ? ORIGINAL : REBUILD;
      const isOrig = site === 'original';
      console.log(`\n=== ${site.toUpperCase()} ===\n`);

      for (const pg of PAGES) {
        const url = base + pg.path;
        console.log(`  [${pg.slug}] ${url}`);
        try {
          await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }).catch(() => console.log('    (timeout, continuing)'));
          await page.waitForTimeout(isOrig ? 8000 : 4000);

          if (isOrig) {
            await page.evaluate(() => { document.querySelectorAll('*').forEach(el => { if (parseInt(getComputedStyle(el).zIndex) > 100) el.style.display = 'none'; }); });
            await page.waitForTimeout(1000);
          }

          const data = await page.evaluate(EXTRACT_FN);
          if (!results[pg.slug]) results[pg.slug] = {};
          results[pg.slug][site] = data;

          writeFileSync(join(baseDir, 'json', `${site}-${pg.slug}.json`), JSON.stringify(data, null, 2));
          console.log(`    extracted (${data.secs.length} sections, ${data.media.length} media)`);
        } catch (err) {
          console.error(`    ERROR: ${err.message}`);
        }
      }
    }

    // --- Generate diff report ---
    let report = '# Round 12 DOM Extraction Diff Report\n';
    report += `Generated: ${new Date().toISOString()}\n\n`;

    let totalH = 0, totalM = 0, totalL = 0;
    const allIssues = {};

    for (const pg of PAGES) {
      const o = results[pg.slug]?.original;
      const r = results[pg.slug]?.rebuild;
      if (!o || !r) { report += `## ${pg.slug.toUpperCase()} - SKIPPED (missing data)\n\n`; continue; }

      const issues = diffPage(pg.slug, o, r);
      allIssues[pg.slug] = issues;
      const h = issues.filter(i => i.sev === 'HIGH').length;
      const m = issues.filter(i => i.sev === 'MED').length;
      const l = issues.filter(i => i.sev === 'LOW').length;
      totalH += h; totalM += m; totalL += l;

      report += `---\n## ${pg.slug.toUpperCase()} (${h}H / ${m}M / ${l}L)\n\n`;
      report += `Original: ${o.meta.scrollH}px tall, ${o.meta.elCount} elements, ${o.secs.length} sections\n`;
      report += `Rebuild:  ${r.meta.scrollH}px tall, ${r.meta.elCount} elements, ${r.secs.length} sections\n\n`;

      for (const sev of ['HIGH', 'MED', 'LOW']) {
        const items = issues.filter(i => i.sev === sev);
        if (!items.length) continue;
        for (const i of items) report += `**[${i.sev}]** ${i.msg}\n\n`;
      }
    }

    // Summary at top
    const summary = `## SUMMARY: ${totalH} HIGH | ${totalM} MEDIUM | ${totalL} LOW\n\n`;
    report = report.replace('Generated:', summary + 'Generated:');

    writeFileSync(join(baseDir, 'diff-report.md'), report);
    console.log(`\n=== DIFF REPORT ===`);
    console.log(report);
    console.log(`\nSaved to: source-extraction/diff-report.md`);

  } finally {
    await browser.close();
  }
}

main().catch(e => { console.error(e); process.exit(1); });
