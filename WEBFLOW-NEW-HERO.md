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

/* Beige bar — top of grey block (matches page bg) */
.hero-new-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 15%;            /* ~162px of 1080 */
  background: #EFE7E1;
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
.hero-new-link-red    { color: #D85050; }
.hero-new-link-yellow { color: #D4A843; }
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
| Div Block | `hero-new-bar` | Beige (#EFE7E1) bar at top of grey block |
| Div Block | `hero-new-image` | Image wrapper, absolutely positioned |
| Image | (inside `hero-new-image`) | Architectural photo, 493:602 aspect |
| Text Span | `hero-new-caption` | "360° Real Estate" label on image |
| Heading H1 | `hero-new-title` | Main title, centered, uppercase |
| Nav | `hero-new-links` | Links container, right-aligned |
| Link | `hero-new-link hero-new-link-blue` | "Projektmanagement" |
| Link | `hero-new-link hero-new-link-red` | "Finanzierungsmanagement" |
| Link | `hero-new-link hero-new-link-yellow` | "Invest" |

---

## Notes

- All classes use `hero-new-` prefix to avoid conflicts with the existing `hero` section
- All sizes use `vw` units so they scale proportionally from the 1920px design
- The beige bar height (`15%`) may need adjusting — increase/decrease to match your exact XD comp
- Replace the placeholder image URL after importing into Webflow
- No JavaScript needed for this section — it's pure CSS positioning
