const wrapper = document.querySelector('.services-wrapper');
const track = document.querySelector('.services-track');
const blocks = document.querySelectorAll('.service-block');
const totalBlocks = blocks.length;

function updateHorizontalScroll() {
  const rect = wrapper.getBoundingClientRect();
  const scrollDistance = wrapper.offsetHeight - window.innerHeight;
  const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
  const maxTranslate = (totalBlocks * 50) - 100; // total vw minus one viewport
  const translateX = progress * maxTranslate;
  track.style.transform = `translateX(-${translateX}vw)`;
}

window.addEventListener('scroll', updateHorizontalScroll, { passive: true });
window.addEventListener('resize', updateHorizontalScroll);
updateHorizontalScroll();

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

/* ── Stats sticky scroll ── */
(function () {
  const statsWrapper = document.querySelector('.stats-wrapper');
  const panels = document.querySelectorAll('.stats-panel');
  const totalPanels = panels.length;
  const numTransitions = totalPanels - 1;

  const panelInners = Array.from(panels).map(panel =>
    Array.from(panel.querySelectorAll('.reveal-inner'))
  );

  function ease(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  function setPanelState(index, yPercent, opacity) {
    panelInners[index].forEach(el => {
      el.style.opacity = String(opacity);
      el.style.transform = `translate3d(0, ${yPercent}%, 0)`;
    });
  }

  function updateStats() {
    const rect = statsWrapper.getBoundingClientRect();
    const scrollDistance = statsWrapper.offsetHeight - window.innerHeight;
    const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);

    const holdSize = 0.10;
    const transSize = 0.20;
    const timeline = [];
    for (let i = 0; i < totalPanels; i++) {
      if (i === 0) {
        timeline.push({ type: 'hold', panel: i, start: 0, end: holdSize });
      }
      if (i < numTransitions) {
        const prevEnd = timeline[timeline.length - 1].end;
        timeline.push({ type: 'transition', from: i, to: i + 1, start: prevEnd, end: prevEnd + transSize });
        timeline.push({ type: 'hold', panel: i + 1, start: prevEnd + transSize, end: prevEnd + transSize + holdSize });
      }
    }
    timeline[timeline.length - 1].end = 1;

    let segment = timeline[timeline.length - 1];
    for (const s of timeline) {
      if (progress >= s.start && progress < s.end) {
        segment = s;
        break;
      }
    }

    for (let i = 0; i < totalPanels; i++) {
      setPanelState(i, 110, 0);
    }

    if (segment.type === 'hold') {
      setPanelState(segment.panel, 0, 1);
    } else {
      const t = (progress - segment.start) / (segment.end - segment.start);
      if (t <= 0.5) {
        const exitT = ease(t / 0.5);
        setPanelState(segment.from, -exitT * 110, 1 - exitT);
        setPanelState(segment.to, 110, 0);
      } else {
        const enterT = ease((t - 0.5) / 0.5);
        setPanelState(segment.from, -110, 0);
        setPanelState(segment.to, (1 - enterT) * 110, enterT);
      }
    }
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateStats();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  updateStats();
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
