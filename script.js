/* ══════════════════════════════════════════════════
   ATHENA — Smooth Motion Engine
   Lenis smooth scroll + lerped scroll-driven animations
   ══════════════════════════════════════════════════ */

/* ── Lenis smooth scroll ── */
const isMobile = window.matchMedia('(max-width: 768px)').matches;

let lenis;
try {
  lenis = new Lenis({
    duration: isMobile ? 1.0 : 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: !isMobile,
    syncTouch: false,
    touchMultiplier: 1.5,
  });
} catch (e) {
  lenis = { raf() {} };
}

/* ── Lerp utility ── */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* ── Easing ── */
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/* ── Reduced motion preference ── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

/* ── Lerped state (separate factors for each animation) ── */
const LERP_HSCROLL = 0.10;
const LERP_PARALLAX = 0.06;
const LERP_STATS = 0.08;

let currentX = 0;
let targetX = 0;
let currentScale = 1.15;
let targetScale = 1.15;
let currentStatsProgress = 0;
let targetStatsProgress = 0;

/* ── Target updaters (read from DOM) ── */
function updateTargets() {
  // Horizontal scroll
  if (wrapper && window.innerWidth > 1024) {
    const rect = wrapper.getBoundingClientRect();
    const scrollDist = wrapper.offsetHeight - window.innerHeight;
    if (scrollDist > 0) {
      const progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
      const maxScroll = Math.max(0, (totalBlocks * 50) - 100);
      targetX = progress * maxScroll;
    }
  }

  // Image parallax
  if (imgEl && imgSection) {
    const rect = imgSection.getBoundingClientRect();
    const vh = window.innerHeight;
    const rawProgress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);
    const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
    targetScale = 1.15 - easedProgress * 0.15;
  }

  // Stats progress
  if (statsWrapper) {
    const statsRect = statsWrapper.getBoundingClientRect();
    const statsScrollDist = statsWrapper.offsetHeight - window.innerHeight;
    if (statsScrollDist > 0) {
      targetStatsProgress = Math.min(Math.max(-statsRect.top / statsScrollDist, 0), 1);
    }
  }
}

/* ── Stats renderer ── */
function setPanelState(index, yPercent, opacity) {
  panelInners[index].forEach((el, i) => {
    const staggerOffset = i * 15;
    el.style.opacity = String(opacity);
    el.style.transform = `translate3d(0, ${yPercent + (1 - opacity) * staggerOffset}%, 0)`;
  });
}

function renderStats(progress) {
  if (totalPanels === 0) return;

  const holdSize = 0.16;
  const transSize = 0.12;
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
    // Overlapping exit/enter to prevent blank screen flash
    const exitT = easeInOutQuad(Math.min(t / 0.6, 1));
    const enterT = easeInOutQuad(Math.max((t - 0.4) / 0.6, 0));
    setPanelState(segment.from, -exitT * 110, 1 - exitT);
    setPanelState(segment.to, (1 - enterT) * 110, enterT);
  }
}

/* ── Service block in-view detection ── */
const revealedBlocks = new Set();
function checkServiceBlocks() {
  serviceBlocks.forEach(block => {
    if (revealedBlocks.has(block)) return;
    const rect = block.getBoundingClientRect();
    if (window.innerWidth > 1024) {
      // Desktop: horizontal scroll — trigger when 25% of block has entered
      if (rect.left < window.innerWidth * 0.75) {
        block.classList.add('in-view');
        revealedBlocks.add(block);
      }
    } else {
      // Tablet/mobile: vertical stack — check vertical center
      const cy = rect.top + rect.height / 2;
      if (cy > 0 && cy < window.innerHeight) {
        block.classList.add('in-view');
        revealedBlocks.add(block);
      }
    }
  });
}

/* ══════════════════════════════════════════════════
   MAIN ANIMATION LOOP — single rAF, all lerped
   ══════════════════════════════════════════════════ */
function animate(time) {
  lenis.raf(time);

  if (!prefersReducedMotion) {
    updateTargets();

    // Lerp horizontal scroll
    if (track && window.innerWidth > 1024) {
      currentX = Math.abs(targetX - currentX) < 0.001 ? targetX : lerp(currentX, targetX, LERP_HSCROLL);
      track.style.transform = `translate3d(-${currentX}vw, 0, 0)`;
    }

    // Lerp image parallax
    if (imgEl) {
      currentScale = Math.abs(targetScale - currentScale) < 0.0001 ? targetScale : lerp(currentScale, targetScale, LERP_PARALLAX);
      imgEl.style.transform = `scale(${currentScale})`;
    }

    // Lerp stats
    currentStatsProgress = Math.abs(targetStatsProgress - currentStatsProgress) < 0.0001 ? targetStatsProgress : lerp(currentStatsProgress, targetStatsProgress, LERP_STATS);
    renderStats(currentStatsProgress);

    // Service block reveals — stop checking once all are revealed
    if (revealedBlocks.size < totalBlocks) {
      checkServiceBlocks();
    }
  }

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
  if (total === 0) return;

  let current = 0;

  slideEls[0].classList.add('active');
  dots.forEach((d, i) => d.classList.toggle('active', i === 0));

  // Hide non-active slides from screen readers
  slideEls.forEach((s, i) => {
    if (i !== 0) s.setAttribute('aria-hidden', 'true');
  });

  function goTo(index) {
    if (index === current) return;
    slideEls[current].classList.remove('active');
    slideEls[current].setAttribute('aria-hidden', 'true');
    current = (index + total) % total;
    slideEls[current].classList.add('active');
    slideEls[current].removeAttribute('aria-hidden');
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  if (prevBtn) prevBtn.addEventListener('click', () => goTo((current - 1 + total) % total));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo((current + 1) % total));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  // Touch swipe support
  const slidesContainer = document.querySelector('.carousel-content');
  if (slidesContainer) {
    let touchStartX = 0;
    slidesContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    slidesContainer.addEventListener('touchend', (e) => {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) goTo((current + 1) % total);
        else goTo((current - 1 + total) % total);
      }
    });
  }
})();

/* ── FAQ accordion ── */
(function () {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    function toggle() {
      const wasOpen = item.classList.contains('open');
      items.forEach(i => {
        i.classList.remove('open');
        i.setAttribute('aria-expanded', 'false');
      });
      if (!wasOpen) {
        item.classList.add('open');
        item.setAttribute('aria-expanded', 'true');
      }
    }
    item.addEventListener('click', toggle);
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
})();

/* ══════════════════════════════════════════════════
   Page Reveal Animations
   ══════════════════════════════════════════════════ */
(function () {
  if (prefersReducedMotion) {
    // Show everything immediately
    document.querySelectorAll('.service-block').forEach(b => b.classList.add('in-view'));
    document.querySelectorAll('.faq-item').forEach(i => i.classList.add('is-visible'));
    const fb = document.querySelector('.footer-btn');
    const fbl = document.querySelector('.footer-block');
    if (fb) fb.classList.add('is-visible');
    if (fbl) fbl.classList.add('is-visible');
    return;
  }

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
          `<span class="line-mask"><span class="line-inner" style="transition-delay:${i * 0.14}s">${line}</span></span>`
      )
      .join('');

    return el.querySelectorAll('.line-inner');
  }

  // Wait for fonts before splitting lines (avoids wrong line breaks)
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    document.fonts.ready.then(() => {
      const heroLines = splitLines(heroText);
      requestAnimationFrame(() => {
        setTimeout(() => {
          heroLines.forEach(l => l.classList.add('is-visible'));
          // Clean up will-change after animation completes
          setTimeout(() => {
            heroLines.forEach(l => { l.style.willChange = 'auto'; });
          }, 1600);
        }, 300);
      });
    });
  }

  const teamTitle = document.querySelector('.team-title');
  const faqTitle = document.querySelector('.faq-title');

  document.fonts.ready.then(() => {
    if (teamTitle) splitLines(teamTitle);
    if (faqTitle) splitLines(faqTitle);
  });

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

  document.fonts.ready.then(() => {
    if (teamTitle) revealObserver.observe(teamTitle);
    if (faqTitle) revealObserver.observe(faqTitle);
  });

  document.querySelectorAll('.faq-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.1}s, ${i * 0.1}s, 0s, 0s`;
    revealObserver.observe(item);
  });

  const footerBtn = document.querySelector('.footer-btn');
  const footerBlock = document.querySelector('.footer-block');
  if (footerBtn) revealObserver.observe(footerBtn);
  if (footerBlock) revealObserver.observe(footerBlock);
})();
