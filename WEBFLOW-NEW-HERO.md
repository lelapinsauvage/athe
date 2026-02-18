# ATHENA — New Hero Section (Webflow Setup)

This is the new hero section that goes **before** the existing hero text section. Import via HTMLtoFlow, then paste the CSS.

---

## Step 1: Import HTML via HTMLtoFlow

Paste this snippet into HTMLtoFlow. It should be placed **at the very top** of the page body, before the existing hero text section.

```html
<section class="hero-new">
  <div class="hero-new-block"></div>
  <div class="hero-new-bar"></div>
  <div class="hero-new-image">
    <img src="https://placeholder.co/493x602" alt="360 Real Estate">
    <span class="hero-new-caption">360° Real Estate</span>
  </div>
  <h1 class="hero-new-title">Werte brauchen Haltung. Wirkung braucht Verstand.</h1>
  <nav class="hero-new-links">
    <a href="#" class="hero-new-link hero-new-link-blue">Projektmanagement</a>
    <a href="#" class="hero-new-link hero-new-link-red">Finanzierungsmanagement</a>
    <a href="#" class="hero-new-link hero-new-link-yellow">Invest</a>
  </nav>
</section>
```

> After import, replace the placeholder image with your actual architectural photo in the Webflow Asset Manager.

---

## Step 2: CSS

Paste this into **Project Settings > Custom Code > Head Code** inside a `<style>` tag, or add it to your existing custom CSS block.

```css
/* ═══════════════════════════════════════════════
   NEW HERO — Full-viewport split layout
   Design base: 1920 × 1080
   ═══════════════════════════════════════════════ */

.hero-new {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #EFE7E1;
}

/* Grey block — left half */
.hero-new-block {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;            /* 960 / 1920 */
  height: 100%;
  background: #DBD3CD;
}

/* Beige bar — full width, top strip */
.hero-new-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;            /* 1920 / 1920 — full width */
  height: 11.76%;         /* 127 / 1080 */
  background: #EEE7E1;
  z-index: 1;
}

/* Image */
.hero-new-image {
  position: absolute;
  top: 26.76%;            /* 289 / 1080 */
  left: 12.14%;           /* 233 / 1920 */
  width: 25.68%;          /* 493 / 1920 */
  z-index: 2;
}

.hero-new-image img {
  width: 100%;
  aspect-ratio: 493 / 602;
  object-fit: cover;
  display: block;
}

.hero-new-caption {
  position: absolute;
  bottom: 1vw;
  left: 1vw;
  font-family: 'GT Walsheim', sans-serif;
  font-size: 0.729vw;    /* 14 / 1920 */
  font-weight: 400;
  color: #282828;
}

/* Title */
.hero-new-title {
  position: absolute;
  top: 26.76%;            /* 289 / 1080 */
  left: 53.85%;           /* 1034 / 1920 */
  width: 42.08%;          /* 808 / 1920 */
  text-align: center;
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 500;
  font-size: 3.646vw;     /* 70 / 1920 */
  line-height: 4.688vw;   /* 90 / 1920 */
  letter-spacing: 0.073vw; /* 1.4 / 1920 */
  color: #282828;
  text-transform: uppercase;
}

/* Links */
.hero-new-links {
  position: absolute;
  top: 75.46%;            /* 815 / 1080 */
  right: 7.5%;            /* 144 / 1920 */
  width: 12.97%;          /* 249 / 1920 */
  text-align: right;
}

.hero-new-link {
  display: block;
  text-decoration: none;
  font-family: 'GT Walsheim', sans-serif;
  font-weight: 400;
  font-size: 0.781vw;     /* 15 / 1920 */
  line-height: 1.51vw;    /* 29 / 1920 */
  text-transform: uppercase;
}

.hero-new-link-blue   { color: #689DE8; }
.hero-new-link-red    { color: #ED5F64; }
.hero-new-link-yellow { color: #FFBF24; }

/* ── Stack layout (≤ 1024px) ── */
@media (max-width: 1024px) {
  .hero-new {
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: visible;
  }
  .hero-new-block {
    display: none;
  }
  .hero-new-bar {
    display: none;
  }
  .hero-new-title {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    order: 1;
    padding: 10vw 8vw 3vw;
    font-size: 5.5vw;
    line-height: 7vw;
    letter-spacing: 0.08vw;
  }
  .hero-new-links {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    order: 2;
    text-align: center;
    padding: 0 8vw 4vw;
  }
  .hero-new-link {
    font-size: 1.5vw;
    line-height: 3vw;
  }
  .hero-new-image {
    position: relative;
    top: auto;
    left: auto;
    width: 100%;
    order: 3;
    z-index: auto;
  }
  .hero-new-image img {
    aspect-ratio: auto;
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  .hero-new-caption {
    font-size: 1.5vw;
    bottom: 1.5vw;
    left: 2vw;
    color: #fff;
  }
}

/* ── Mobile (≤ 768px) ── */
@media (max-width: 768px) {
  .hero-new-title {
    padding: 12vw 7vw 3vw;
    font-size: 7vw;
    line-height: 9vw;
    letter-spacing: 0.12vw;
  }
  .hero-new-links {
    padding: 0 7vw 5vw;
  }
  .hero-new-link {
    font-size: 2.8vw;
    line-height: 5vw;
  }
  .hero-new-image img {
    height: 42vh;
  }
  .hero-new-caption {
    font-size: 2.5vw;
    bottom: 3vw;
    left: 3vw;
  }
}

/* ── Small Mobile (≤ 480px) ── */
@media (max-width: 480px) {
  .hero-new-title {
    padding: 16vw 5vw 3vw;
    font-size: 8.5vw;
    line-height: 10.5vw;
  }
  .hero-new-links {
    padding: 0 5vw 5vw;
  }
  .hero-new-link {
    font-size: 3.5vw;
    line-height: 6vw;
  }
  .hero-new-image img {
    height: 38vh;
  }
  .hero-new-caption {
    font-size: 3vw;
  }
}
```

---

## Step 3: Page Order

After import, your page structure should be:

```
1. hero-new          ← NEW (this section)
2. hero              ← Existing hero text ("Die ATHENA Unternehmensgruppe...")
3. image-separator   ← Existing crane image
4. services-wrapper  ← Existing horizontal scroll
5. team              ← Existing carousel
6. stats-wrapper     ← Existing stats
7. faq               ← Existing FAQ
8. footer            ← Existing footer
```

---

## Element Map

| Webflow Element | Class | What it does |
|-----------------|-------|-------------|
| Section | `hero-new` | Full-viewport container, 100vh |
| Div Block | `hero-new-block` | Grey (#DBD3CD) background, left 50% |
| Div Block | `hero-new-bar` | Beige (#EEE7E1) bar, full width, 127px tall |
| Div Block | `hero-new-image` | Image wrapper, absolutely positioned |
| Image | (inside `hero-new-image`) | Architectural photo, 493:602 aspect |
| Text Span | `hero-new-caption` | "360° Real Estate" label on image |
| Heading H1 | `hero-new-title` | Main title, centered, uppercase |
| Nav | `hero-new-links` | Links container, right-aligned |
| Link | `hero-new-link hero-new-link-blue` | "Projektmanagement" |
| Link | `hero-new-link hero-new-link-red` | "Finanzierungsmanagement" |
| Link | `hero-new-link hero-new-link-yellow` | "Invest" |

---

## Step 4: Integration Fix (REQUIRED)

Since `hero-new` is placed **inside** `.page-wrapper` (which has `height: 0`), it breaks the nav overlay system and pushes nothing below. Add this CSS alongside the hero-new CSS to fix all interactions:

```css
/* ═══════════════════════════════════════════════
   HERO-NEW / PAGE-WRAPPER INTEGRATION
   Fixes: paragraph section behind hero,
   page-main overlay, page-1/2/3 stacking
   ═══════════════════════════════════════════════ */

/* page-wrapper must have height so content below is pushed down */
.page-wrapper {
  height: 100vh;
}

/* hero-new needs explicit z-index below the overlay pages */
.hero-new {
  z-index: 1;
}

/* page-main must overlay hero-new, not sit beside it in flex row */
.page-main {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 4;
}

/* Overlay pages above hero-new */
.page-1, .page-2, .page-3 {
  z-index: 5;
}

/* ── Tablet/Mobile: hero-new stacks, wrapper auto-heights ── */
@media (max-width: 1024px) {
  .page-wrapper {
    height: auto;
  }
}

@media (max-width: 767px) {
  .page-wrapper {
    height: auto;
    flex-flow: column;
  }
  .page-main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
  }
}
```

### Why this is needed

The `.page-wrapper` was designed as a 0-height overlay container — everything inside was either `display: none` or `position: absolute`. Adding `hero-new` with `position: relative` breaks that pattern because:

1. **Paragraph behind hero** — the wrapper is 0px tall in document flow, so content after it sits at the top of the page, behind the overflowing hero
2. **page-main beside hero** — the wrapper is `display: flex` (row), so when the burger opens page-main, it shares horizontal space instead of overlaying
3. **nav pages under hero** — without explicit z-index on hero-new, the stacking order is ambiguous

---

## Notes

- All classes use `hero-new-` prefix to avoid conflicts with the existing `hero` section
- All sizes use `vw` units so they scale proportionally from the 1920px design
- The beige bar is full-width (1920px) and 127px tall — exact XD Rechteck 22 specs
- Replace the placeholder image URL after importing into Webflow
- No JavaScript needed for this section — it's pure CSS positioning
