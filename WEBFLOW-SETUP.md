# ATHENA — Webflow Setup with HTMLtoFlow

Dead-simple 5-step guide. Import HTML as native Webflow elements, paste CSS + JS, done.

---

## Step 1: Install HTMLtoFlow + Upload Fonts

### HTMLtoFlow Plugin
1. Go to **Webflow Marketplace** > search **HTMLtoFlow**
2. Install the plugin
3. Open your Webflow project > open HTMLtoFlow from the Apps panel

### Upload Fonts
Upload these 6 GT Walsheim font files via **Project Settings > Fonts > Upload Custom Font**:

| File | Weight | Style |
|------|--------|-------|
| GT-Walsheim-Light-Trial.woff2 | 300 | Normal |
| GT-Walsheim-Regular-Trial.woff2 | 400 | Normal |
| GT-Walsheim-Regular-Oblique-Trial.woff2 | 400 | Oblique/Italic |
| GT-Walsheim-Medium-Trial.woff2 | 500 | Normal |
| GT-Walsheim-Bold-Trial.woff2 | 700 | Normal |
| GT-Walsheim-Black-Oblique-Trial.woff2 | 900 | Oblique/Italic |

Use **GT Walsheim** as the font family name for all.

If Webflow's font uploader doesn't work, upload the .woff2 files as **Assets** and use the `@font-face` block below in the Head CSS (replace the placeholder URLs with your actual Webflow asset URLs):

```css
/* ONLY needed if Webflow font upload doesn't work — replace URLs */
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Light-Trial.woff2') format('woff2'); font-weight: 300; font-style: normal; font-display: swap; }
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Regular-Trial.woff2') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Regular-Oblique-Trial.woff2') format('woff2'); font-weight: 400; font-style: oblique; font-display: swap; }
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Medium-Trial.woff2') format('woff2'); font-weight: 500; font-style: normal; font-display: swap; }
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Bold-Trial.woff2') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }
@font-face { font-family: 'GT Walsheim'; src: url('YOUR_ASSET_URL/GT-Walsheim-Black-Oblique-Trial.woff2') format('woff2'); font-weight: 900; font-style: oblique; font-display: swap; }
```

---

## Step 2: Import HTML Sections via HTMLtoFlow

Import these 7 snippets **one at a time** into HTMLtoFlow. Each becomes native, editable Webflow elements.

### Snippet 1 — Hero

```html
<section class="hero">
  <p class="hero-text">Die ATHENA Unternehmensgruppe ist ein Investment- und Projektmanager mit Sitz in München. Unser Fokus liegt auf der Wertschöpfung und Stabilisierung von Immobilien durch gezielte Investitionen, nachhaltige Projektentwicklung und effizientes Management. Sie übernimmt das ganzheitliche Management für Finanzierungs- und Immobilienprojekte.</p>
</section>
```

### Snippet 2 — Image Separator

```html
<section class="image-separator">
  <img src="https://placeholder.co/1920x1080" alt="Construction crane">
</section>
```

> After import, replace the placeholder image with your uploaded `crane.png` asset in Webflow.

### Snippet 3 — Services (Horizontal Scroll)

```html
<div class="services-wrapper">
  <section class="services">
    <div class="services-track">
      <div class="service-block block-1">
        <div class="block-header">
          <span class="block-number">1</span>
          <a href="#" class="block-btn btn-blue">ATHENA PROJEKTMANAGEMENT</a>
        </div>
        <p class="block-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
      </div>
      <div class="service-block block-2">
        <div class="block-header">
          <span class="block-number">2</span>
          <a href="#" class="block-btn btn-red">ATHENA FINANZIERUNGSMANAGEMENT</a>
        </div>
        <p class="block-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
      </div>
      <div class="service-block block-3">
        <div class="block-header">
          <span class="block-number">3</span>
          <a href="#" class="block-btn btn-blue">ATHENA IMMOBILIENMANAGEMENT</a>
        </div>
        <p class="block-text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea.</p>
      </div>
    </div>
  </section>
</div>
```

### Snippet 4 — Team Carousel

```html
<section class="team">
  <h2 class="team-title">WER WIR SIND</h2>
  <div class="carousel">
    <button class="carousel-arrow arrow-left" aria-label="Vorheriges Teammitglied">&#8592;</button>
    <div class="carousel-content">
      <div class="carousel-slides">
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Stefan Kozlevcar" class="person-img">
            <div class="person-info">
              <span class="person-name">Stefan Kozlevcar</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Projektmanagement</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Max Mustermann" class="person-img">
            <div class="person-info">
              <span class="person-name">Max Mustermann</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Finanzierung</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Anna Schmidt" class="person-img">
            <div class="person-info">
              <span class="person-name">Anna Schmidt</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Immobilien</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Thomas Weber" class="person-img">
            <div class="person-info">
              <span class="person-name">Thomas Weber</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Entwicklung</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Julia Fischer" class="person-img">
            <div class="person-info">
              <span class="person-name">Julia Fischer</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Vertrieb</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
        <div class="carousel-slide">
          <div class="slide-inner">
            <img src="https://placeholder.co/488x488" alt="Michael Braun" class="person-img">
            <div class="person-info">
              <span class="person-name">Michael Braun</span>
              <span class="person-title">Dipl. Ing Arch. Geschäftsführer</span>
              <span class="person-role">Leiter Marketing</span>
              <p class="person-desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-arrow arrow-right" aria-label="Nächstes Teammitglied">&#8594;</button>
  </div>
  <div class="carousel-dots">
    <button class="dot" aria-label="Slide 1"></button>
    <button class="dot" aria-label="Slide 2"></button>
    <button class="dot" aria-label="Slide 3"></button>
    <button class="dot" aria-label="Slide 4"></button>
    <button class="dot" aria-label="Slide 5"></button>
    <button class="dot" aria-label="Slide 6"></button>
  </div>
</section>
```

> After import, replace all placeholder images with your uploaded team photos.

### Snippet 5 — Stats

```html
<div class="stats-wrapper">
  <section class="stats">
    <div class="stats-panel" data-index="0">
      <div class="reveal-mask">
        <p class="stats-intro reveal-inner">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
      </div>
    </div>
    <div class="stats-panel" data-index="1">
      <div class="reveal-mask">
        <span class="stats-number reveal-inner">100.000 +</span>
      </div>
      <div class="reveal-mask">
        <p class="stats-label reveal-inner">Realisierte Projektentwicklungen<br>(qm BGF)</p>
      </div>
    </div>
    <div class="stats-panel" data-index="2">
      <div class="reveal-mask">
        <span class="stats-number reveal-inner">1 MRD. +</span>
      </div>
      <div class="reveal-mask">
        <p class="stats-label reveal-inner">Assets under Management<br>(EUR)</p>
      </div>
    </div>
    <div class="stats-panel" data-index="3">
      <div class="reveal-mask">
        <span class="stats-number reveal-inner">500 MIO. +</span>
      </div>
      <div class="reveal-mask">
        <p class="stats-label reveal-inner">Finanzierungsvolumen<br>(EUR)</p>
      </div>
    </div>
  </section>
</div>
```

### Snippet 6 — FAQ

```html
<section class="faq">
  <h2 class="faq-title">UNSERE ERFOLGSBAUSTEINE</h2>
  <div class="faq-list">
    <div class="faq-item" role="button" tabindex="0" aria-expanded="false">
      <div class="faq-left">
        <span class="faq-number">1.</span>
        <span class="faq-question">STARKE BEZIEHUNGEN &amp; MARKTKENNTNIS</span>
      </div>
      <div class="faq-right">
        <div class="faq-divider"></div>
        <p class="faq-text">Erfahrenes Risikomanagement: ATHENA hat ein fundiertes Verständnis für Risiken in Bau- und Entwicklungsprojekten.<br><br>Transparente Kommunikation: Regelmäßige Berichterstattung und Abstimmungen mit dem Konsortium sorgen für Transparenz und<br><br>Präzise Liquiditätsplanung und -überwachung gewährleisten eine optimale Mittelverwendung.</p>
      </div>
    </div>
    <div class="faq-item" role="button" tabindex="0" aria-expanded="false">
      <div class="faq-left">
        <span class="faq-number">2.</span>
        <span class="faq-question">EXPERTISE PROJEKTMANAGEMENT &amp; BAUCONTROLLING</span>
      </div>
      <div class="faq-right">
        <div class="faq-divider"></div>
        <p class="faq-text">Erfahrenes Risikomanagement: ATHENA hat ein fundiertes Verständnis für Risiken in Bau- und Entwicklungsprojekten.<br><br>Transparente Kommunikation: Regelmäßige Berichterstattung und Abstimmungen mit dem Konsortium sorgen für Transparenz und<br><br>Präzise Liquiditätsplanung und -überwachung gewährleisten eine optimale Mittelverwendung.</p>
      </div>
    </div>
    <div class="faq-item" role="button" tabindex="0" aria-expanded="false">
      <div class="faq-left">
        <span class="faq-number">3.</span>
        <span class="faq-question">RISIKO- &amp; BUDGETMANAGEMENT</span>
      </div>
      <div class="faq-right">
        <div class="faq-divider"></div>
        <p class="faq-text">Erfahrenes Risikomanagement: ATHENA hat ein fundiertes Verständnis für Risiken in Bau- und Entwicklungsprojekten.<br><br>Transparente Kommunikation: Regelmäßige Berichterstattung und Abstimmungen mit dem Konsortium sorgen für Transparenz und<br><br>Präzise Liquiditätsplanung und -überwachung gewährleisten eine optimale Mittelverwendung.</p>
      </div>
    </div>
    <div class="faq-item" role="button" tabindex="0" aria-expanded="false">
      <div class="faq-left">
        <span class="faq-number">4.</span>
        <span class="faq-question">RESTRUKTURIERUNGSERFAHRUNG</span>
      </div>
      <div class="faq-right">
        <div class="faq-divider"></div>
        <p class="faq-text">Erfahrenes Risikomanagement: ATHENA hat ein fundiertes Verständnis für Risiken in Bau- und Entwicklungsprojekten.<br><br>Transparente Kommunikation: Regelmäßige Berichterstattung und Abstimmungen mit dem Konsortium sorgen für Transparenz und<br><br>Präzise Liquiditätsplanung und -überwachung gewährleisten eine optimale Mittelverwendung.</p>
      </div>
    </div>
  </div>
</section>
```

### Snippet 7 — Footer

```html
<footer class="footer">
  <div class="footer-top">
    <a href="#" class="footer-btn">GET IN TOUCH</a>
  </div>
  <div class="footer-block">
    <div class="footer-left">
      <div class="footer-social">
        <span class="footer-social-title">FOLGT UNS!</span>
        <a href="#" class="footer-linkedin" aria-label="LinkedIn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#282828"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
      </div>
      <div class="footer-links">
        <a href="#" class="footer-link">IMPRESSUM</a>
        <a href="#" class="footer-link">DATENSCHUTZ</a>
        <a href="#" class="footer-link">AGB</a>
      </div>
    </div>
    <div class="footer-divider"></div>
    <div class="footer-right">
      <span class="footer-office-title">OFFICE MÜNCHEN</span>
      <p class="footer-address">ATHENA Projektmanagement GmbH<br>Amalienstr. 53, 80799 München</p>
      <span class="footer-copyright">&copy; 2024 ATHENA Projektmanagement GmbH</span>
    </div>
  </div>
</footer>
```

> The LinkedIn SVG must go in a Webflow **HTML Embed** element inside the `.footer-linkedin` link.

---

## Step 3: Paste CSS into Head Code

**Paste in: Project Settings > Custom Code > Head Code**

```html
<!-- Lenis Smooth Scroll CSS -->
<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.17/dist/lenis.css">

<!-- ATHENA Complete CSS -->
<style>
/* ═══════════════════════════════════════════════════════════
   ATHENA — Complete Stylesheet (Webflow)
   Base styles + Animations + Responsive

   Animation guard: .js-ready class (added by JS on published site)
   - Editor: JS doesn't run → .js-ready never added → all content visible
   - Published: JS runs → .js-ready added → animations work
   - Only the body curtain uses html:not(.w-editor) (must work before JS)
   ═══════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────
   RESET & BASE
   ───────────────────────────────────────────────── */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'GT Walsheim', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #282828;
  background: #EFE7E1;
  overflow-x: hidden;
}

/* ─────────────────────────────────────────────────
   WEBFLOW CSS OVERRIDES
   ───────────────────────────────────────────────── */
p {
  margin-top: 0;
  margin-bottom: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: inherit;
}

img {
  max-width: none;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

.w-embed::before,
.w-embed::after {
  display: none;
}

/* ─────────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────────── */
.hero {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5vw;
}

.hero-text {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 3.125vw;
  line-height: 3.59375vw;
  letter-spacing: 0px;
  color: #282828;
  text-align: left;
  opacity: 1;
}

/* ─────────────────────────────────────────────────
   IMAGE SEPARATOR
   ───────────────────────────────────────────────── */
.image-separator {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.image-separator img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  will-change: transform;
}

/* ─────────────────────────────────────────────────
   SERVICES HORIZONTAL SCROLL
   ───────────────────────────────────────────────── */
.services-wrapper {
  height: 300vh;
}

.services {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.services-track {
  display: flex;
  height: 100%;
  will-change: transform;
}

.service-block {
  position: relative;
  width: 50vw;
  height: 100vh;
  flex-shrink: 0;
  padding: 0;
}

.block-1 { background: #DBD3CD; }
.block-2 { background: #BFB5AE; }
.block-3 { background: #DBD3CD; }

.block-header {
  position: absolute;
  top: 4.1%;
  left: 5.1%;
  right: 4.7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.block-number {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  color: #282828;
}

.block-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.02vw;
  padding: 0 1.56vw;
  border-radius: 1.51vw;
  border: none;
  text-decoration: none;
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  letter-spacing: 0.4px;
  color: #282828;
  text-transform: uppercase;
  white-space: nowrap;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.block-btn:hover {
  transform: scale(1.05);
}

.btn-blue { background: #9ABDEF; }
.btn-red { background: #E8828A; }

.block-text {
  position: absolute;
  left: 10%;
  right: 34.8%;
  top: 42.7%;
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #282828;
  text-align: left;
}

/* ─────────────────────────────────────────────────
   TEAM / CAROUSEL
   ───────────────────────────────────────────────── */
.team {
  width: 100%;
  height: 100vh;
  background: #EFE7E1;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.team-title {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 3.646vw;
  line-height: 4.6875vw;
  letter-spacing: 1.4px;
  color: #282828;
  text-transform: uppercase;
  text-align: center;
  margin-top: 12.8vw;
}

.carousel {
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding-top: 12vh;
  width: 100%;
  position: relative;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2.5vw;
  color: #282828;
  cursor: pointer;
  z-index: 2;
  padding: 0;
  line-height: 1;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
              opacity 0.3s ease;
}

.carousel-arrow:hover {
  transform: translateY(-50%) scale(1.2);
  opacity: 0.6;
}

.arrow-left {
  left: 6.98vw;
}

.arrow-right {
  right: 6.98vw;
}

.carousel-content {
  width: 100%;
  overflow: hidden;
  padding: 0 13vw;
  position: relative;
}

.carousel-slides {
  position: relative;
  height: 25.4vw;
}

/* Carousel slides: hidden by default on published site */
.js-ready .carousel-slide {
  opacity: 0;
  pointer-events: none;
}

.carousel-slide {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity;
}

.js-ready .carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1;
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
}

.slide-inner {
  display: flex;
  align-items: flex-start;
  gap: 3.125vw;
  justify-content: center;
}

.person-img {
  width: 25.4vw;
  height: 25.4vw;
  object-fit: cover;
  flex-shrink: 0;
}

.person-info {
  display: flex;
  flex-direction: column;
  padding-top: 0.5vw;
}

.person-name {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #282828;
}

.person-title {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-style: oblique;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #282828;
}

.person-role {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #282828;
  margin-top: 2.6vw;
}

.person-desc {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 300;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #6C6C6C;
  margin-top: 3.6vw;
  max-width: 34.7vw;
}

.carousel-dots {
  display: flex;
  gap: 1.82vw;
  justify-content: center;
  padding-bottom: 4vh;
}

.dot {
  width: 0.625vw;
  height: 0.625vw;
  background: #6C6C6C;
  border-radius: 0;
  border: none;
  cursor: pointer;
  opacity: 0.4;
  padding: 0;
  transition: opacity 0.3s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dot.active {
  opacity: 1;
  transform: scale(1.3);
}

.dot:hover {
  opacity: 0.7;
}

/* ─────────────────────────────────────────────────
   STATS STICKY SECTION
   ───────────────────────────────────────────────── */
.stats-wrapper {
  height: 600vh;
}

.stats {
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: #EFE7E1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-panel {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.stats-panel.active {
  pointer-events: auto;
}

.reveal-mask {
  overflow: hidden;
  display: block;
}

.reveal-inner {
  display: block;
  will-change: transform, opacity;
}

.stats-intro {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.5625vw;
  line-height: 1.3;
  letter-spacing: 0px;
  color: #282828;
  text-align: center;
  max-width: 35.7vw;
}

.stats-number {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 900;
  font-style: oblique;
  font-size: 10.42vw;
  line-height: 1;
  letter-spacing: 0.2vw;
  color: #282828;
  text-transform: uppercase;
  text-align: center;
  padding: 0.05em 0;
}

.stats-label {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 3.125vw;
  line-height: 1.15;
  letter-spacing: 1.2px;
  color: #282828;
  text-align: center;
  margin-top: 5vw;
}

/* ─────────────────────────────────────────────────
   FAQ / ERFOLGSBAUSTEINE
   ───────────────────────────────────────────────── */
.faq {
  width: 100%;
  background: #EFE7E1;
  padding-top: 8vh;
  padding-bottom: 10vh;
}

.faq-title {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 3.646vw;
  line-height: 4.6875vw;
  letter-spacing: 1.4px;
  color: #282828;
  text-transform: uppercase;
  text-align: center;
  max-width: 50vw;
  margin: 0 auto 4.11vw;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  width: 100%;
  cursor: pointer;
  position: relative;
  min-height: 7.8125vw;
  display: flex;
  align-items: center;
  padding: 1.5625vw 4.11vw;
  overflow: hidden;
  transition: min-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
              padding-top 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.open {
  min-height: 18vw;
  padding-top: 2.5vw;
  align-items: flex-start;
  transition: min-height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              padding-top 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-item:nth-child(odd) {
  background: #DBD3CD;
}

.faq-item:nth-child(even) {
  background: #BFB5AE;
}

.faq-left {
  display: flex;
  align-items: flex-start;
  max-width: calc(50vw - 4.11vw);
}

.faq-number {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 1.5625vw;
  line-height: 1.3;
  letter-spacing: 0px;
  color: #282828;
  text-transform: uppercase;
  margin-right: 1vw;
  flex-shrink: 0;
}

.faq-question {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 1.5625vw;
  line-height: 1.3;
  letter-spacing: 0px;
  color: #282828;
  text-transform: uppercase;
}

/* FAQ answer: hidden on published site, visible in editor */
.js-ready .faq-right {
  opacity: 0;
  pointer-events: none;
}

.faq-right {
  position: absolute;
  left: 50vw;
  right: 4.11vw;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.15s ease;
}

.faq-item.open .faq-right {
  opacity: 1;
  pointer-events: auto;
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.2s;
}

.faq-divider {
  width: 3px;
  height: 12vw;
  background: #282828;
  flex-shrink: 0;
}

.faq-text {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 300;
  font-size: 1.04vw;
  line-height: 1.2vw;
  letter-spacing: 0px;
  color: #6C6C6C;
  max-width: 23.23vw;
}

/* ─────────────────────────────────────────────────
   FOOTER
   ───────────────────────────────────────────────── */
.footer {
  width: 100%;
  background: #EFE7E1;
}

.footer-top {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20.05vw;
  height: 3.33vw;
  border: 3px solid #171717;
  border-radius: 50px;
  text-decoration: none;
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.5625vw;
  line-height: 1.77vw;
  letter-spacing: 0px;
  color: #171717;
  text-transform: uppercase;
}

.footer-btn:hover {
  background: #171717;
  color: #EFE7E1;
}

.footer-block {
  position: relative;
  width: calc(100vw - 2 * 2.865vw);
  margin: 0 auto 2.865vw;
  background: #BFB5AE;
  height: 21.5625vw;
}

.footer-left {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.footer-social {
  position: absolute;
  left: 9.79vw;
  top: 6.25vw;
}

.footer-social-title {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.604vw;
  line-height: 2.97vw;
  letter-spacing: 0px;
  color: #282828;
  text-transform: uppercase;
}

.footer-linkedin {
  display: block;
  margin-top: 3.6vw;
}

.footer-linkedin svg {
  width: 2.08vw;
  height: 2.08vw;
}

.footer-links {
  position: absolute;
  left: 32.03vw;
  top: 6.67vw;
  bottom: 7.24vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer-link {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 0.78vw;
  line-height: 0.9375vw;
  letter-spacing: 0px;
  color: #282828;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
}

.footer-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #282828;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.footer-link:hover::after {
  transform: scaleX(1);
}

.footer-divider {
  position: absolute;
  left: 47.135vw;
  top: 4.22vw;
  height: 13.28vw;
  width: 3px;
  background: #282828;
}

.footer-right {
  position: absolute;
  right: 9.79vw;
  top: 6.25vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.footer-office-title {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 2.604vw;
  line-height: 2.97vw;
  letter-spacing: 0px;
  color: #282828;
  text-transform: uppercase;
  text-align: right;
}

.footer-address {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 1.04vw;
  line-height: 1.5;
  letter-spacing: 0px;
  color: #282828;
  text-align: right;
  margin-top: 1.51vw;
}

.footer-copyright {
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-style: oblique;
  font-size: 0.78125vw;
  line-height: 0.9375vw;
  letter-spacing: 0px;
  color: #7E7E7E;
  text-align: right;
  margin-top: 2.08vw;
}

/* ═══════════════════════════════════════════════════════════
   ANIMATIONS & MOTION
   .js-ready guard: JS adds this class on published site.
   In the editor, JS doesn't run → class absent → content visible.
   ═══════════════════════════════════════════════════════════ */

/* ── Page load curtain ──
   This is the ONLY rule that uses html:not(.w-editor).
   It must hide the body BEFORE JS loads to prevent FOUC. */
html:not(.w-editor) body {
  opacity: 0;
  animation: pageReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
}
@keyframes pageReveal {
  to { opacity: 1; }
}

/* ── Lenis overrides ── */
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}

/* ── Line Reveal System ── */
.line-mask {
  overflow: hidden;
  display: block;
  padding-bottom: 0.12em;
}
.js-ready .line-inner {
  display: block;
  transform: translateY(105%);
  opacity: 0;
  transition: transform 1.1s cubic-bezier(0.22, 1, 0.36, 1),
              opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}
.js-ready .line-inner.is-visible {
  transform: translateY(0);
  opacity: 1;
}

/* ── Service Block Content Reveal ── */
.js-ready .service-block .block-header {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
}
.js-ready .service-block .block-text {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}
.js-ready .service-block.in-view .block-header,
.js-ready .service-block.in-view .block-text {
  opacity: 1;
  transform: translateY(0);
}

/* ── Carousel Person Info Stagger ── */
.js-ready .carousel-slide .person-name,
.js-ready .carousel-slide .person-title,
.js-ready .carousel-slide .person-role,
.js-ready .carousel-slide .person-desc {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0s;
}
.js-ready .carousel-slide.active .person-name  { opacity: 1; transform: translateY(0); transition-delay: 0.25s; transition-duration: 0.7s; }
.js-ready .carousel-slide.active .person-title { opacity: 1; transform: translateY(0); transition-delay: 0.35s; transition-duration: 0.7s; }
.js-ready .carousel-slide.active .person-role  { opacity: 1; transform: translateY(0); transition-delay: 0.45s; transition-duration: 0.7s; }
.js-ready .carousel-slide.active .person-desc  { opacity: 1; transform: translateY(0); transition-delay: 0.55s; transition-duration: 0.7s; }

/* Carousel image zoom-settle */
.carousel-slide .person-img {
  transform: scale(1.05);
  transition: transform 0.3s ease-out;
}
.js-ready .carousel-slide.active .person-img {
  transform: scale(1);
  transition: transform 1.4s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
}

/* ── FAQ Items Scroll Reveal ── */
.js-ready .faq-item {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              min-height 0.35s cubic-bezier(0.4, 0, 0, 1),
              padding-top 0.35s cubic-bezier(0.4, 0, 0, 1);
}
.js-ready .faq-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}
.js-ready .faq-item.open {
  transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.8s cubic-bezier(0.22, 1, 0.36, 1),
              min-height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
              padding-top 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

/* FAQ divider grow */
.js-ready .faq-divider {
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
}
.faq-item.open .faq-divider {
  transform: scaleY(1);
}

/* ── Footer Reveals ── */
.js-ready .footer-btn {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
              background-color 0.4s ease,
              color 0.4s ease;
}
.js-ready .footer-btn.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.js-ready .footer-block {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s,
              transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s;
}
.js-ready .footer-block.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Footer internal staggers */
.js-ready .footer-block .footer-social,
.js-ready .footer-block .footer-links,
.js-ready .footer-block .footer-divider,
.js-ready .footer-block .footer-right {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.js-ready .footer-block.is-visible .footer-social  { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
.js-ready .footer-block.is-visible .footer-links   { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
.js-ready .footer-block.is-visible .footer-divider { opacity: 1; transform: translateY(0); transition-delay: 0.55s; }
.js-ready .footer-block.is-visible .footer-right   { opacity: 1; transform: translateY(0); transition-delay: 0.6s; }

/* ── Reduced Motion ── */
@media (prefers-reduced-motion: reduce) {
  body { animation: none; opacity: 1; }
  .line-inner { transition: none; transform: none; opacity: 1; }
  .carousel-slide, .carousel-slide.active { transition: none; }
  .carousel-slide .person-name,
  .carousel-slide .person-title,
  .carousel-slide .person-role,
  .carousel-slide .person-desc { transition: none; opacity: 1; transform: none; }
  .carousel-slide .person-img { transition: none; transform: none; }
  .faq-item { transition: none; opacity: 1; transform: none; }
  .faq-divider { transition: none; transform: none; }
  .footer-btn, .footer-block { transition: none; opacity: 1; transform: none; }
  .footer-block .footer-social,
  .footer-block .footer-links,
  .footer-block .footer-divider,
  .footer-block .footer-right { transition: none; opacity: 1; transform: none; }
  .service-block .block-header,
  .service-block .block-text { transition: none; opacity: 1; transform: none; }
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE — TABLET (max 1024px)
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 1024px) {

  /* ── Hero ── */
  .hero {
    padding: 0 6vw;
  }
  .hero-text {
    font-size: 4.8vw;
    line-height: 5.8vw;
  }

  /* ── Image Separator ── */
  .image-separator {
    height: 70vh;
  }

  /* ── Services — disable horizontal scroll, stack vertical ── */
  .services-wrapper {
    height: auto;
  }
  .services {
    position: relative;
    height: auto;
    overflow: visible;
  }
  .services-track {
    flex-direction: column;
    transform: none !important;
  }
  .service-block {
    width: 100%;
    height: 80vh;
    min-height: 500px;
  }
  .block-number {
    font-size: 1.8vw;
  }
  .block-btn {
    font-size: 1.6vw;
    height: 4.5vw;
    padding: 0 2.5vw;
    border-radius: 2.25vw;
  }
  .block-text {
    font-size: 2.2vw;
    line-height: 2.8vw;
    right: 15%;
  }

  /* ── Team Carousel ── */
  .team {
    height: auto;
    min-height: 100vh;
    padding-bottom: 5vh;
  }
  .team-title {
    font-size: 5.5vw;
    line-height: 6.5vw;
  }
  .carousel {
    padding-top: 6vh;
  }
  .carousel-content {
    padding: 0 10vw;
  }
  .carousel-slides {
    height: 36vw;
  }
  .person-img {
    width: 30vw;
    height: 30vw;
  }
  .person-name,
  .person-title,
  .person-role {
    font-size: 2.2vw;
    line-height: 2.8vw;
  }
  .person-role {
    margin-top: 1.5vw;
  }
  .person-desc {
    font-size: 2vw;
    line-height: 2.6vw;
    margin-top: 2vw;
  }
  .carousel-arrow {
    font-size: 3.5vw;
  }
  .arrow-left { left: 3vw; }
  .arrow-right { right: 3vw; }

  /* ── Stats ── */
  .stats-wrapper {
    height: 500vh;
  }
  .stats-number {
    font-size: 13vw;
  }
  .stats-label {
    font-size: 4vw;
  }
  .stats-intro {
    font-size: 2.5vw;
    max-width: 55vw;
  }

  /* ── FAQ ── */
  .faq-title {
    font-size: 5vw;
    line-height: 6.5vw;
    max-width: 70vw;
  }
  .faq-item {
    min-height: 10vw;
  }
  .faq-item.open {
    min-height: 22vw;
  }
  .faq-number,
  .faq-question {
    font-size: 2.2vw;
    line-height: 3.5vw;
  }
  .faq-text {
    font-size: 1.6vw;
    line-height: 2.2vw;
    width: auto;
    max-width: 38vw;
  }

  /* ── Footer ── */
  .footer-top {
    height: 40vh;
  }
  .footer-btn {
    font-size: 2.5vw;
    width: 30vw;
    height: 5.5vw;
  }

  /* Reset absolute positioning to flex layout */
  .footer-block {
    position: relative;
    height: auto;
    display: flex;
    align-items: stretch;
    padding: 5vw;
  }
  .footer-left {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    flex: 1;
    display: flex;
    align-items: flex-start;
    gap: 5vw;
  }
  .footer-social {
    position: relative;
    left: auto;
    top: auto;
  }
  .footer-social-title {
    font-size: 3.5vw;
    line-height: 1.3;
  }
  .footer-linkedin svg {
    width: 3vw;
    height: 3vw;
  }
  .footer-links {
    position: relative;
    left: auto;
    top: auto;
    bottom: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: stretch;
  }
  .footer-link {
    font-size: 1.4vw;
    line-height: 1.4;
  }
  .footer-divider {
    position: relative;
    left: auto;
    top: auto;
    height: auto;
    width: 1px;
    align-self: stretch;
    margin: 0 3vw;
  }
  .footer-right {
    position: relative;
    right: auto;
    top: auto;
    bottom: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
  .footer-office-title {
    font-size: 4vw;
    line-height: 1.2;
  }
  .footer-address {
    font-size: 1.6vw;
    margin-top: 0;
  }
  .footer-copyright {
    font-size: 1.2vw;
    margin-top: 0;
  }
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE — MOBILE (max 768px)
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 768px) {

  /* ── Hero ── */
  .hero {
    padding: 0 7vw;
  }
  .hero-text {
    font-size: 6vw;
    line-height: 8vw;
  }

  /* ── Image Separator ── */
  .image-separator {
    height: 60vh;
  }

  /* ── Services — vertical stack ── */
  .service-block {
    width: 100%;
    height: auto;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14vw 7vw;
    gap: 8vw;
  }
  .block-header {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
  }
  .block-text {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    font-size: 4.2vw;
    line-height: 5.6vw;
  }
  .block-number {
    font-size: 3.5vw;
  }
  .block-btn {
    font-size: 3vw;
    height: 9vw;
    padding: 0 4vw;
    border-radius: 4.5vw;
    white-space: normal;
    text-align: center;
  }

  /* ── Team Carousel ── */
  .team {
    height: auto;
    min-height: auto;
    padding-bottom: 5vh;
  }
  .team-title {
    font-size: 8vw;
    line-height: 10vw;
    margin-top: 8vh;
  }
  .carousel {
    padding-top: 4vh;
  }
  .carousel-content {
    padding: 0 4vw;
  }
  .carousel-slides {
    height: auto;
    min-height: 140vw;
  }
  .slide-inner {
    flex-direction: column;
    align-items: center;
    gap: 6vw;
  }
  .person-img {
    width: 60vw;
    height: 60vw;
  }
  .person-info {
    text-align: center;
    align-items: center;
    padding-top: 0;
  }
  .person-name {
    font-size: 5.5vw;
    line-height: 7vw;
  }
  .person-title {
    font-size: 4vw;
    line-height: 5.5vw;
  }
  .person-role {
    font-size: 4vw;
    line-height: 5.5vw;
    margin-top: 4vw;
  }
  .person-desc {
    font-size: 3.8vw;
    line-height: 5vw;
    max-width: 85vw;
    margin-top: 4vw;
  }
  .carousel-arrow {
    font-size: 7vw;
    top: 30vw;
    transform: none;
    background: rgba(239, 231, 225, 0.7);
    border-radius: 50%;
    width: 10vw;
    height: 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-arrow:hover {
    transform: none;
    opacity: 0.6;
  }
  .arrow-left { left: 2vw; }
  .arrow-right { right: 2vw; }
  .dot {
    width: 3vw;
    height: 3vw;
  }
  .carousel-dots {
    gap: 3vw;
    padding-bottom: 3vh;
  }

  /* ── Stats ── */
  .stats-wrapper {
    height: 400vh;
  }
  .stats-number {
    font-size: 16vw;
    letter-spacing: 0;
  }
  .stats-label {
    font-size: 5.5vw;
    margin-top: 4vw;
    line-height: 1.3;
  }
  .stats-intro {
    font-size: 5vw;
    line-height: 1.4;
    max-width: 80vw;
  }

  /* ── FAQ — full-width stacked layout ── */
  .faq {
    padding-top: 8vh;
    padding-bottom: 8vh;
  }
  .faq-title {
    font-size: 7.5vw;
    line-height: 9.5vw;
    max-width: 90vw;
    margin-bottom: 5vw;
  }
  .faq-item {
    flex-direction: column;
    align-items: flex-start;
    padding: 5vw 6vw;
    min-height: auto;
  }
  .faq-item.open {
    min-height: auto;
    align-items: flex-start;
    padding-top: 5vw;
  }
  .faq-left {
    max-width: 100%;
  }
  .faq-number {
    font-size: 4vw;
    line-height: 1.4;
  }
  .faq-question {
    font-size: 4vw;
    line-height: 1.4;
  }

  /* Mobile FAQ answer: animated with max-height */
  .js-ready .faq-right {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                margin-top 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
  .faq-right {
    position: relative;
    left: auto;
    top: auto;
    bottom: auto;
    width: 100%;
    margin-top: 0;
    flex-direction: column;
    gap: 4vw;
    display: flex;
  }
  .faq-item.open .faq-right {
    max-height: 80vw;
    opacity: 1;
    margin-top: 4vw;
    pointer-events: auto;
    transition: max-height 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.1s,
                margin-top 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .faq-divider {
    width: 100%;
    height: 2px;
    transform: none;
  }
  .faq-item.open .faq-divider {
    transform: none;
  }
  .faq-text {
    font-size: 4vw;
    line-height: 5.5vw;
    width: 100%;
  }

  /* ── Footer ── */
  .footer-top {
    height: 30vh;
  }
  .footer-btn {
    font-size: 4.5vw;
    width: 55vw;
    height: 12vw;
    border-radius: 6vw;
  }

  /* Stack footer block vertically */
  .footer-block {
    position: relative;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 8vw 7vw;
    gap: 8vw;
  }
  .footer-left {
    position: relative;
    top: auto;
    right: auto;
    bottom: auto;
    left: auto;
    display: flex;
    flex-direction: column;
    gap: 6vw;
  }
  .footer-social {
    position: relative;
    left: auto;
    top: auto;
  }
  .footer-social-title {
    font-size: 7vw;
    line-height: 1.2;
  }
  .footer-linkedin {
    margin-top: 2vw;
  }
  .footer-linkedin svg {
    width: 7vw;
    height: 7vw;
  }
  .footer-links {
    position: relative;
    left: auto;
    top: auto;
    bottom: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4vw;
  }
  .footer-link {
    font-size: 3.5vw;
    line-height: 1.4;
    padding: 1.5vw 0;
  }

  /* Horizontal divider on mobile */
  .footer-divider {
    position: relative;
    left: auto;
    top: auto;
    width: 100%;
    height: 1px;
    margin: 0;
    transform: none;
  }
  .footer-block.is-visible .footer-divider {
    transform: none;
  }
  .footer-right {
    position: relative;
    right: auto;
    top: auto;
    bottom: auto;
    align-items: flex-start;
    gap: 4vw;
  }
  .footer-office-title {
    font-size: 8vw;
    line-height: 1.2;
    text-align: left;
  }
  .footer-address {
    font-size: 3.8vw;
    text-align: left;
    margin-top: 0;
  }
  .footer-copyright {
    font-size: 3vw;
    text-align: left;
    margin-top: 0;
  }

  /* ── Mobile motion optimizations ── */
  .carousel-slide .person-img {
    transform: none;
    transition: none;
  }
  .carousel-slide.active .person-img {
    transform: none;
  }
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE — SMALL MOBILE (max 480px)
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 480px) {
  .hero-text {
    font-size: 7.5vw;
    line-height: 9.5vw;
  }

  .block-btn {
    font-size: 3.2vw;
    height: 10vw;
    padding: 0 4.5vw;
  }
  .block-text {
    font-size: 4.5vw;
    line-height: 6vw;
  }

  .person-img {
    width: 70vw;
    height: 70vw;
  }
  .carousel-slides {
    min-height: 160vw;
  }

  .stats-number {
    font-size: 18vw;
  }
  .stats-label {
    font-size: 6vw;
  }

  .line-inner {
    transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1),
                opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
}
</style>
```

---

## Step 4: Paste JS into Before `</body>`

**Paste in: Project Settings > Custom Code > Before `</body>` tag**

```html
<!-- Lenis Smooth Scroll Library -->
<script src="https://unpkg.com/lenis@1.3.17/dist/lenis.min.js"></script>

<!-- ATHENA Motion Engine -->
<script>
(function () {
  "use strict";

  /* ══════════════════════════════════════════════════
     WEBFLOW EDITOR GUARD
     Skip all custom JS when editing in Webflow Designer
     ══════════════════════════════════════════════════ */
  var isEditor = false;
  try {
    if (window.Webflow && Webflow.env && Webflow.env("editor") !== undefined) {
      isEditor = true;
    }
  } catch (e) {}
  if (document.querySelector("html.w-editor")) isEditor = true;
  if (isEditor) return;

  /* ── Mark page as JS-ready (activates animation CSS) ── */
  document.documentElement.classList.add("js-ready");

  /* ══════════════════════════════════════════════════
     LENIS SMOOTH SCROLL
     ══════════════════════════════════════════════════ */
  var isMobile = window.matchMedia("(max-width: 768px)").matches;
  var lenis;

  try {
    lenis = new Lenis({
      lerp: isMobile ? 0.12 : 0.1,
      wheelMultiplier: 0.7,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: !isMobile,
      syncTouch: false,
      normalizeWheel: false,
      autoRaf: false,
    });
    window.lenis = lenis;
  } catch (e) {
    lenis = { raf: function () {} };
  }

  /* ══════════════════════════════════════════════════
     UTILITIES
     ══════════════════════════════════════════════════ */
  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ══════════════════════════════════════════════════
     DOM REFS — All with null guards
     ══════════════════════════════════════════════════ */
  var wrapper = document.querySelector(".services-wrapper");
  var track = document.querySelector(".services-track");
  var serviceBlocks = document.querySelectorAll(".service-block");
  var totalBlocks = serviceBlocks.length;

  var imgSection = document.querySelector(".image-separator");
  var imgEl = imgSection ? imgSection.querySelector("img") : null;

  var statsWrapper = document.querySelector(".stats-wrapper");
  var statsPanels = document.querySelectorAll(".stats-panel");
  var totalPanels = statsPanels.length;
  var numTransitions = totalPanels - 1;
  var panelInners = [];
  for (var p = 0; p < statsPanels.length; p++) {
    var inners = statsPanels[p].querySelectorAll(".reveal-inner");
    panelInners.push(Array.prototype.slice.call(inners));
  }

  /* ══════════════════════════════════════════════════
     LERPED STATE
     ══════════════════════════════════════════════════ */
  var LERP_HSCROLL = 0.10;
  var LERP_PARALLAX = 0.06;
  var LERP_STATS = 0.08;

  var currentX = 0, targetX = 0;
  var currentScale = 1.15, targetScale = 1.15;
  var currentStatsProgress = 0, targetStatsProgress = 0;

  /* ══════════════════════════════════════════════════
     TARGET UPDATERS (read from DOM)
     ══════════════════════════════════════════════════ */
  function updateTargets() {
    /* Horizontal scroll */
    if (wrapper && window.innerWidth > 1024) {
      var rect = wrapper.getBoundingClientRect();
      var scrollDist = wrapper.offsetHeight - window.innerHeight;
      if (scrollDist > 0) {
        var progress = Math.min(Math.max(-rect.top / scrollDist, 0), 1);
        var maxScroll = Math.max(0, (totalBlocks * 50) - 100);
        targetX = progress * maxScroll;
      }
    }

    /* Image parallax */
    if (imgEl && imgSection) {
      var rect2 = imgSection.getBoundingClientRect();
      var vh = window.innerHeight;
      var rawProgress = Math.min(Math.max((vh - rect2.top) / (vh + rect2.height), 0), 1);
      var easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
      targetScale = 1.15 - easedProgress * 0.15;
    }

    /* Stats progress */
    if (statsWrapper) {
      var statsRect = statsWrapper.getBoundingClientRect();
      var statsScrollDist = statsWrapper.offsetHeight - window.innerHeight;
      if (statsScrollDist > 0) {
        targetStatsProgress = Math.min(Math.max(-statsRect.top / statsScrollDist, 0), 1);
      }
    }
  }

  /* ══════════════════════════════════════════════════
     STATS RENDERER
     ══════════════════════════════════════════════════ */
  function setPanelState(index, yPercent, opacity) {
    var els = panelInners[index];
    for (var i = 0; i < els.length; i++) {
      var staggerOffset = i * 15;
      els[i].style.opacity = String(opacity);
      els[i].style.transform = "translate3d(0, " + (yPercent + (1 - opacity) * staggerOffset) + "%, 0)";
    }
  }

  function renderStats(progress) {
    if (totalPanels === 0) return;

    var holdSize = 0.16;
    var transSize = 0.12;
    var timeline = [];
    var i;

    for (i = 0; i < totalPanels; i++) {
      if (i === 0) timeline.push({ type: "hold", panel: i, start: 0, end: holdSize });
      if (i < numTransitions) {
        var prevEnd = timeline[timeline.length - 1].end;
        timeline.push({ type: "transition", from: i, to: i + 1, start: prevEnd, end: prevEnd + transSize });
        timeline.push({ type: "hold", panel: i + 1, start: prevEnd + transSize, end: prevEnd + transSize + holdSize });
      }
    }
    timeline[timeline.length - 1].end = 1;

    var segment = timeline[timeline.length - 1];
    for (i = 0; i < timeline.length; i++) {
      if (progress >= timeline[i].start && progress < timeline[i].end) {
        segment = timeline[i];
        break;
      }
    }

    for (i = 0; i < totalPanels; i++) setPanelState(i, 110, 0);

    if (segment.type === "hold") {
      setPanelState(segment.panel, 0, 1);
    } else {
      var t = (progress - segment.start) / (segment.end - segment.start);
      var exitT = easeInOutQuad(Math.min(t / 0.6, 1));
      var enterT = easeInOutQuad(Math.max((t - 0.4) / 0.6, 0));
      setPanelState(segment.from, -exitT * 110, 1 - exitT);
      setPanelState(segment.to, (1 - enterT) * 110, enterT);
    }
  }

  /* ══════════════════════════════════════════════════
     SERVICE BLOCK IN-VIEW DETECTION
     ══════════════════════════════════════════════════ */
  var revealedBlocks = {};
  var revealedCount = 0;

  function checkServiceBlocks() {
    for (var i = 0; i < serviceBlocks.length; i++) {
      if (revealedBlocks[i]) continue;
      var rect = serviceBlocks[i].getBoundingClientRect();
      var shouldReveal = false;

      if (window.innerWidth > 1024) {
        /* Desktop: horizontal scroll */
        if (rect.left < window.innerWidth * 0.75) shouldReveal = true;
      } else {
        /* Tablet/mobile: vertical stack */
        var cy = rect.top + rect.height / 2;
        if (cy > 0 && cy < window.innerHeight) shouldReveal = true;
      }

      if (shouldReveal) {
        serviceBlocks[i].classList.add("in-view");
        revealedBlocks[i] = true;
        revealedCount++;
      }
    }
  }

  /* ══════════════════════════════════════════════════
     MAIN ANIMATION LOOP — single rAF
     ══════════════════════════════════════════════════ */
  function animate(time) {
    lenis.raf(time);

    if (!prefersReducedMotion) {
      updateTargets();

      /* Lerp horizontal scroll */
      if (track && window.innerWidth > 1024) {
        currentX = Math.abs(targetX - currentX) < 0.001 ? targetX : lerp(currentX, targetX, LERP_HSCROLL);
        track.style.transform = "translate3d(-" + currentX + "vw, 0, 0)";
      }

      /* Lerp image parallax */
      if (imgEl) {
        currentScale = Math.abs(targetScale - currentScale) < 0.0001 ? targetScale : lerp(currentScale, targetScale, LERP_PARALLAX);
        imgEl.style.transform = "scale(" + currentScale + ")";
      }

      /* Lerp stats */
      currentStatsProgress = Math.abs(targetStatsProgress - currentStatsProgress) < 0.0001
        ? targetStatsProgress
        : lerp(currentStatsProgress, targetStatsProgress, LERP_STATS);
      renderStats(currentStatsProgress);

      /* Service block reveals */
      if (revealedCount < totalBlocks) {
        checkServiceBlocks();
      }
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  /* ══════════════════════════════════════════════════
     TEAM CAROUSEL
     ══════════════════════════════════════════════════ */
  var slideEls = document.querySelectorAll(".carousel-slide");
  var dots = document.querySelectorAll(".dot");
  var prevBtn = document.querySelector(".arrow-left");
  var nextBtn = document.querySelector(".arrow-right");
  var totalSlides = slideEls.length;

  if (totalSlides > 0) {
    var currentSlide = 0;

    slideEls[0].classList.add("active");
    for (var d = 0; d < dots.length; d++) {
      dots[d].classList.toggle("active", d === 0);
    }

    /* Hide non-active slides from screen readers */
    for (var s = 1; s < slideEls.length; s++) {
      slideEls[s].setAttribute("aria-hidden", "true");
    }

    function goToSlide(index) {
      if (index === currentSlide) return;
      slideEls[currentSlide].classList.remove("active");
      slideEls[currentSlide].setAttribute("aria-hidden", "true");
      currentSlide = (index + totalSlides) % totalSlides;
      slideEls[currentSlide].classList.add("active");
      slideEls[currentSlide].removeAttribute("aria-hidden");
      for (var d = 0; d < dots.length; d++) {
        dots[d].classList.toggle("active", d === currentSlide);
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        goToSlide((currentSlide + 1) % totalSlides);
      });
    }
    for (var di = 0; di < dots.length; di++) {
      (function (idx) {
        dots[idx].addEventListener("click", function () {
          goToSlide(idx);
        });
      })(di);
    }

    /* Touch swipe support */
    var slidesContainer = document.querySelector(".carousel-content");
    if (slidesContainer) {
      var touchStartX = 0;
      slidesContainer.addEventListener("touchstart", function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      slidesContainer.addEventListener("touchend", function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) goToSlide((currentSlide + 1) % totalSlides);
          else goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
        }
      });
    }
  }

  /* ══════════════════════════════════════════════════
     FAQ ACCORDION
     ══════════════════════════════════════════════════ */
  var faqItems = document.querySelectorAll(".faq-item");

  for (var fi = 0; fi < faqItems.length; fi++) {
    (function (item) {
      function toggleFaq() {
        var wasOpen = item.classList.contains("open");
        /* Close all */
        for (var j = 0; j < faqItems.length; j++) {
          faqItems[j].classList.remove("open");
          faqItems[j].setAttribute("aria-expanded", "false");
        }
        /* Open clicked if it was closed */
        if (!wasOpen) {
          item.classList.add("open");
          item.setAttribute("aria-expanded", "true");
        }
      }

      item.addEventListener("click", toggleFaq);
      item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleFaq();
        }
      });
    })(faqItems[fi]);
  }

  /* ══════════════════════════════════════════════════
     PAGE REVEAL ANIMATIONS
     ══════════════════════════════════════════════════ */
  if (prefersReducedMotion) {
    /* Show everything immediately */
    for (var ri = 0; ri < serviceBlocks.length; ri++) serviceBlocks[ri].classList.add("in-view");
    for (var rj = 0; rj < faqItems.length; rj++) faqItems[rj].classList.add("is-visible");
    var fb = document.querySelector(".footer-btn");
    var fbl = document.querySelector(".footer-block");
    if (fb) fb.classList.add("is-visible");
    if (fbl) fbl.classList.add("is-visible");
    return;
  }

  /* ── Line splitter ── */
  function splitLines(el) {
    var text = el.textContent.trim();
    var words = text.split(/\s+/);
    el.innerHTML = words.map(function (w) { return "<span>" + w + " </span>"; }).join("");

    var spans = el.querySelectorAll("span");
    var lines = [];
    var currentLine = [];
    var lastTop = -Infinity;

    for (var i = 0; i < spans.length; i++) {
      var top = Math.round(spans[i].getBoundingClientRect().top);
      if (lastTop > -Infinity && top !== lastTop) {
        lines.push(currentLine.join(" "));
        currentLine = [];
      }
      currentLine.push(spans[i].textContent.trim());
      lastTop = top;
    }
    if (currentLine.length) lines.push(currentLine.join(" "));

    el.innerHTML = lines
      .map(function (line, i) {
        return '<span class="line-mask"><span class="line-inner" style="transition-delay:' + (i * 0.14) + 's">' + line + '</span></span>';
      })
      .join("");

    return el.querySelectorAll(".line-inner");
  }

  /* ── IntersectionObserver for scroll reveals ── */
  var revealObserver = new IntersectionObserver(
    function (entries, obs) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting) continue;
        var target = entries[i].target;
        var lineInners = target.querySelectorAll(".line-inner");
        for (var j = 0; j < lineInners.length; j++) {
          lineInners[j].classList.add("is-visible");
        }
        target.classList.add("is-visible");
        obs.unobserve(target);
      }
    },
    { threshold: 0.15 }
  );

  /* ── Wait for fonts, then init text animations ── */
  function initTextAnimations() {
    /* Hero text */
    var heroText = document.querySelector(".hero-text");
    if (heroText) {
      var heroLines = splitLines(heroText);
      requestAnimationFrame(function () {
        setTimeout(function () {
          for (var i = 0; i < heroLines.length; i++) {
            heroLines[i].classList.add("is-visible");
          }
          /* Clean up will-change */
          setTimeout(function () {
            for (var i = 0; i < heroLines.length; i++) {
              heroLines[i].style.willChange = "auto";
            }
          }, 1600);
        }, 300);
      });
    }

    /* Section titles */
    var teamTitle = document.querySelector(".team-title");
    var faqTitle = document.querySelector(".faq-title");
    if (teamTitle) {
      splitLines(teamTitle);
      revealObserver.observe(teamTitle);
    }
    if (faqTitle) {
      splitLines(faqTitle);
      revealObserver.observe(faqTitle);
    }
  }

  /* Use document.fonts.ready if available, otherwise fallback to load event */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      requestAnimationFrame(initTextAnimations);
    });
  } else {
    window.addEventListener("load", initTextAnimations);
  }

  /* ── FAQ staggered scroll reveal ── */
  for (var qi = 0; qi < faqItems.length; qi++) {
    faqItems[qi].style.transitionDelay = (qi * 0.1) + "s, " + (qi * 0.1) + "s, 0s, 0s";
    revealObserver.observe(faqItems[qi]);
  }

  /* ── Footer reveals ── */
  var footerBtn = document.querySelector(".footer-btn");
  var footerBlock = document.querySelector(".footer-block");
  if (footerBtn) revealObserver.observe(footerBtn);
  if (footerBlock) revealObserver.observe(footerBlock);

})();
</script>
```

---

## Step 5: Fix Combo Classes After Import

HTMLtoFlow may only import the first class on elements with multiple classes. After importing, check these elements in the Webflow Designer and manually add the missing combo classes:

| Element | Should Have | HTMLtoFlow Imports | Manually Add |
|---------|------------|-------------------|--------------|
| Service block 1 | `service-block block-1` | `service-block` | `block-1` |
| Service block 2 | `service-block block-2` | `service-block` | `block-2` |
| Service block 3 | `service-block block-3` | `service-block` | `block-3` |
| Blue button | `block-btn btn-blue` | `block-btn` | `btn-blue` |
| Red button | `block-btn btn-red` | `block-btn` | `btn-red` |
| Left arrow | `carousel-arrow arrow-left` | `carousel-arrow` | `arrow-left` |
| Right arrow | `carousel-arrow arrow-right` | `carousel-arrow` | `arrow-right` |

Also add these **custom attributes** on each FAQ item div (Settings panel > Custom Attributes):
- `role` = `button`
- `tabindex` = `0`
- `aria-expanded` = `false`

---

## Important Settings

Before publishing:

1. **Disable Webflow Smooth Scroll**: Body element > Body Settings > turn OFF "Smooth Scroll"
2. **Do NOT use Webflow's Slider component** for the carousel — it's built with plain Divs
3. **Do NOT use Webflow's Dropdown component** for the FAQ — it's built with plain Divs
4. **Do NOT add IX2 scroll interactions** on animated elements — they will conflict
5. **Disable "Asynchronous JavaScript loading"** in Advanced Publishing Options

---

## How the Animation Guard Works

```
Editor/Designer:
  JS doesn't run → .js-ready never added → all content visible for editing

Published site:
  JS runs → .js-ready added to <html> → animation hiding states activate
  Body curtain (html:not(.w-editor) body { opacity: 0 }) prevents FOUC
  Animations play → elements reveal
```

Only ONE rule uses the old `html:not(.w-editor)` guard: the body curtain. This must work before JS loads to prevent a flash of unstyled content. Everything else uses `.js-ready`, which has clean specificity that never conflicts.

---

## Troubleshooting

### "Animations don't work in the Designer"
Expected. Custom JS only runs on the published site. Use the staging preview to test.

### "Page is blank / invisible"
The `body { opacity: 0 }` curtain waits for the `pageReveal` animation. Check browser console (F12) for JS errors. If stuck, temporarily remove the `html:not(.w-editor) body { opacity: 0; animation: ... }` block from Head CSS.

### "Text is invisible on the published site"
This was the old specificity bug — now fixed. The `.js-ready` approach ensures reveal states (`.js-ready .line-inner.is-visible`) always beat hiding states (`.js-ready .line-inner`) because they have higher specificity. If you still see invisible text, check that no Webflow styles set `opacity: 0` on those elements.

### "Horizontal scroll doesn't work"
- `.services-wrapper` needs `height: 300vh` (set in Webflow styles)
- `.services` needs `position: sticky; top: 0; height: 100vh; overflow: hidden`
- No parent element should have `overflow: hidden` or `overflow: auto` (breaks sticky)
- Only activates above 1024px width

### "Carousel slides are all visible / stacked"
In the Designer, all slides are visible for editing (no `.js-ready` class). On published site, JS adds `.active` to the first slide. This is correct behavior.

### "FAQ doesn't animate on mobile"
Mobile FAQ uses `max-height` transitions. Make sure `.faq-right` on mobile has `display: flex` (not `display: none`).

### "Stats section scrolls too fast/slow"
Adjust `height` on `.stats-wrapper`. More height = slower. Default: 600vh desktop, 500vh tablet, 400vh mobile.

### "Fonts look wrong"
Make sure all 6 GT Walsheim files are uploaded with correct weights. Font family must be exactly `GT Walsheim` (with space).

### "Lenis CDN is blocked / fails"
The JS has a try/catch fallback. If Lenis fails, native scrolling works and all other animations still run.
