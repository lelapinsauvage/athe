/* ══════════════════════════════════════════════════
   ATHENA — Smooth Motion Engine
   Lenis smooth scroll + lerped scroll-driven animations
   ══════════════════════════════════════════════════ */

/* ── Lenis smooth scroll ── */
const lenis = new Lenis({
  duration: 1.4,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  syncTouch: false,
});

/* ── Lerp utility ── */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* ── Easing ── */
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/* ── DOM refs ── */
const wrapper = document.querySelector('.services-wrapper');
const track = document.querySelector('.services-track');
const serviceBlocks = document.querySelectorAll('.service-block');
const totalBlocks = serviceBlocks.length;
const imgSection = document.querySelector('.image-separator');
const imgEl = imgSection ? imgSection.querySelector('img') : null;
const statsWrapper = document.querySelector('.stats-wrapper');
const statsPanels = document.querySelectorAll('.stats-panel');
const totalPanels = statsPanels.length;
const numTransitions = totalPanels - 1;
const panelInners = Array.from(statsPanels).map(p =>
  Array.from(p.querySelectorAll('.reveal-inner'))
);

/* ── Lerped state ── */
const SMOOTH = 0.065;

let currentX = 0;
let targetX = 0;
let currentScale = 1.15;
let targetScale = 1.15;
let currentStatsProgress = 0;
let targetStatsProgress = 0;

/* ── Target updaters (read from DOM) ── */
function updateTargets() {
  // Horizontal scroll
  if (window.innerWidth > 1024) {
    const rect = wrapper.getBoundingClientRect();
    const scrollDist = wrapper.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
    targetX = progress * ((totalBlocks * 50) - 100);
  }

  // Image parallax
  if (imgEl) {
    const rect = imgSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
    targetScale = 1.15 - progress * 0.15;
  }

  // Stats progress
  const statsRect = statsWrapper.getBoundingClientRect();
  const statsScrollDist = statsWrapper.offsetHeight - window.innerHeight;
  targetStatsProgress = Math.min(Math.max(-statsRect.top / statsScrollDist, 0), 1);
}

/* ── Stats renderer ── */
function setPanelState(index, yPercent, opacity) {
  panelInners[index].forEach(el => {
    el.style.opacity = String(opacity);
    el.style.transform = `translate3d(0, ${yPercent}%, 0)`;
  });
}

function renderStats(progress) {
  const holdSize = 0.10;
  const transSize = 0.20;
  const timeline = [];
  for (let i = 0; i < totalPanels; i++) {
    if (i === 0) timeline.push({ type: 'hold', panel: i, start: 0, end: holdSize });
    if (i < numTransitions) {
      const prevEnd = timeline[timeline.length - 1].end;
      timeline.push({ type: 'transition', from: i, to: i + 1, start: prevEnd, end: prevEnd + transSize });
      timeline.push({ type: 'hold', panel: i + 1, start: prevEnd + transSize, end: prevEnd + transSize + holdSize });
    }
  }
  timeline[timeline.length - 1].end = 1;

  let segment = timeline[timeline.length - 1];
  for (const s of timeline) {
    if (progress >= s.start && progress < s.end) { segment = s; break; }
  }

  for (let i = 0; i < totalPanels; i++) setPanelState(i, 110, 0);

  if (segment.type === 'hold') {
    setPanelState(segment.panel, 0, 1);
  } else {
    const t = (progress - segment.start) / (segment.end - segment.start);
    if (t <= 0.5) {
      const exitT = easeInOutQuad(t / 0.5);
      setPanelState(segment.from, -exitT * 110, 1 - exitT);
      setPanelState(segment.to, 110, 0);
    } else {
      const enterT = easeInOutQuad((t - 0.5) / 0.5);
      setPanelState(segment.from, -110, 0);
      setPanelState(segment.to, (1 - enterT) * 110, enterT);
    }
  }
}

/* ── Service block in-view detection ── */
const revealedBlocks = new Set();
function checkServiceBlocks() {
  serviceBlocks.forEach(block => {
    if (revealedBlocks.has(block)) return;
    const rect = block.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    if (cx > 0 && cx < window.innerWidth) {
      block.classList.add('in-view');
      revealedBlocks.add(block);
    }
  });
}

/* ══════════════════════════════════════════════════
   MAIN ANIMATION LOOP — single rAF, all lerped
   ══════════════════════════════════════════════════ */
function animate(time) {
  lenis.raf(time);
  updateTargets();

  // Lerp horizontal scroll
  if (window.innerWidth > 1024) {
    currentX = lerp(currentX, targetX, SMOOTH);
    track.style.transform = `translate3d(-${currentX}vw, 0, 0)`;
  }

  // Lerp image parallax
  if (imgEl) {
    currentScale = lerp(currentScale, targetScale, SMOOTH);
    imgEl.style.transform = `scale(${currentScale})`;
  }

  // Lerp stats
  currentStatsProgress = lerp(currentStatsProgress, targetStatsProgress, SMOOTH);
  renderStats(currentStatsProgress);

  // Service block reveals
  checkServiceBlocks();

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

/* ── Team Carousel ── */
(function () {
  const slideEls = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.arrow-left');
  const nextBtn = document.querySelector('.arrow-right');
  const total = slideEls.length;
  let current = 0;

  slideEls[0].classList.add('active');

  function goTo(index) {
    if (index === current) return;
    slideEls[current].classList.remove('active');
    current = (index + total) % total;
    slideEls[current].classList.add('active');
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
  nextBtn.addEventListener('click', () => goTo((current + 1) % total));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
})();

/* ── FAQ accordion ── */
(function () {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });
})();

/* ══════════════════════════════════════════════════
   Page Reveal Animations
   ══════════════════════════════════════════════════ */
(function () {
  function splitLines(el) {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    el.innerHTML = words.map(w => `<span>${w} </span>`).join('');

    const spans = el.querySelectorAll('span');
    const lines = [];
    let currentLine = [];
    let lastTop = -Infinity;

    spans.forEach(span => {
      const top = Math.round(span.getBoundingClientRect().top);
      if (lastTop > -Infinity && top !== lastTop) {
        lines.push(currentLine.join(' '));
        currentLine = [];
      }
      currentLine.push(span.textContent.trim());
      lastTop = top;
    });
    if (currentLine.length) lines.push(currentLine.join(' '));

    el.innerHTML = lines
      .map(
        (line, i) =>
          `<span class="line-mask"><span class="line-inner" style="transition-delay:${i * 0.1}s">${line}</span></span>`
      )
      .join('');

    return el.querySelectorAll('.line-inner');
  }

  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    const heroLines = splitLines(heroText);
    setTimeout(() => heroLines.forEach(l => l.classList.add('is-visible')), 400);
  }

  const teamTitle = document.querySelector('.team-title');
  const faqTitle = document.querySelector('.faq-title');
  if (teamTitle) splitLines(teamTitle);
  if (faqTitle) splitLines(faqTitle);

  const revealObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll('.line-inner').forEach(l => l.classList.add('is-visible'));
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  if (teamTitle) revealObserver.observe(teamTitle);
  if (faqTitle) revealObserver.observe(faqTitle);

  document.querySelectorAll('.faq-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.12}s, ${i * 0.12}s, 0s`;
    revealObserver.observe(item);
  });

  const footerBtn = document.querySelector('.footer-btn');
  const footerBlock = document.querySelector('.footer-block');
  if (footerBtn) revealObserver.observe(footerBtn);
  if (footerBlock) revealObserver.observe(footerBlock);
})();
