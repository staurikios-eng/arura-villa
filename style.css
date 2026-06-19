/* ============================================
   ARURA LUXURY VILLA — style.css
   Palette: Deep Navy / Warm Gold / Off-White
   Type: Cormorant Garant + Jost
   ============================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garant:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');

/* ── Reset & Base ── */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --navy:       #0A0F1E;
  --navy-mid:   #111827;
  --navy-light: #1A2540;
  --gold:       #C9A84C;
  --gold-light: #E8D5A3;
  --gold-pale:  #F5EDD6;
  --offwhite:   #F5F0E8;
  --white:      #FFFFFF;
  --text-muted: #8A9BB8;

  --display: 'Cormorant Garant', Georgia, serif;
  --body:    'Jost', system-ui, sans-serif;

  --max-w: 1280px;
  --section-pad: 120px 40px;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--navy);
  color: var(--offwhite);
  font-family: var(--body);
  font-weight: 300;
  line-height: 1.7;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }

/* ── Utility ── */
.gold-rule {
  display: block;
  width: 60px;
  height: 1px;
  background: var(--gold);
  margin: 0 auto 32px;
  transition: width 0.8s ease;
}
.gold-rule.wide { width: 120px; }

.eyebrow {
  font-family: var(--body);
  font-weight: 400;
  font-size: 0.68rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--display);
  font-weight: 300;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  line-height: 1.15;
  color: var(--offwhite);
  margin-bottom: 20px;
}

.section-title em {
  font-style: italic;
  color: var(--gold-light);
}

.section-subtitle {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  line-height: 1.8;
  max-width: 520px;
}

.btn-gold {
  display: inline-block;
  padding: 14px 38px;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-family: var(--body);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  position: relative;
  overflow: hidden;
}
.btn-gold::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
  z-index: -1;
}
.btn-gold:hover { color: var(--navy); }
.btn-gold:hover::after { transform: scaleX(1); }


/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
#nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  padding: 24px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: padding 0.4s, background 0.4s, backdrop-filter 0.4s;
}
#nav.scrolled {
  padding: 16px 48px;
  background: rgba(10, 15, 30, 0.92);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(201, 168, 76, 0.12);
}

.nav-logo {
  font-family: var(--display);
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 0.18em;
  color: var(--gold);
  text-transform: uppercase;
}
.nav-logo span { font-style: italic; font-weight: 400; }

.nav-links {
  display: flex;
  gap: 36px;
  list-style: none;
}
.nav-links a {
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(245, 240, 232, 0.7);
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--gold); }

.nav-cta {
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--gold);
  padding: 10px 24px;
  transition: background 0.3s, color 0.3s;
}
.nav-cta:hover { background: var(--gold); color: var(--navy); }

/* Hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
}
.nav-hamburger span {
  display: block;
  width: 24px;
  height: 1px;
  background: var(--gold);
  transition: transform 0.3s, opacity 0.3s;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

/* Mobile menu */
.nav-mobile {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: var(--navy);
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 36px;
}
.nav-mobile.open { display: flex; }
.nav-mobile a {
  font-family: var(--display);
  font-size: 2rem;
  font-weight: 300;
  color: var(--offwhite);
  letter-spacing: 0.08em;
  transition: color 0.2s;
}
.nav-mobile a:hover { color: var(--gold); }


/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
#hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video-wrap {
  position: absolute;
  inset: 0;
}
.hero-video-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Cinematic letterbox + gradient overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom,
      rgba(10,15,30,0.55) 0%,
      rgba(10,15,30,0.2) 40%,
      rgba(10,15,30,0.5) 80%,
      rgba(10,15,30,0.9) 100%
    );
}

/* Gold horizontal bars — cinematic feel */
.hero-bars::before,
.hero-bars::after {
  content: '';
  position: absolute;
  left: 0; right: 0;
  height: 80px;
  background: var(--navy);
  z-index: 2;
}
.hero-bars::before { top: 0; }
.hero-bars::after { bottom: 0; }

.hero-content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 0 24px;
}

.hero-eyebrow {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 0.9s 0.3s forwards;
}

.hero-title {
  font-family: var(--display);
  font-size: clamp(3.5rem, 9vw, 8rem);
  font-weight: 300;
  line-height: 1.0;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--offwhite);
  margin-bottom: 8px;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 1s 0.5s forwards;
}
.hero-title em {
  font-style: italic;
  font-weight: 300;
  color: var(--gold-light);
  display: block;
  font-size: 0.52em;
  letter-spacing: 0.28em;
  margin-top: 6px;
}

.hero-sub {
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  color: rgba(245, 240, 232, 0.6);
  text-transform: uppercase;
  margin-top: 28px;
  opacity: 0;
  animation: fadeUp 1s 0.9s forwards;
}

.hero-scroll {
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0;
  animation: fadeUp 1s 1.4s forwards;
}
.hero-scroll span {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold);
}
.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  animation: scrollDrop 1.8s ease-in-out infinite;
}

@keyframes fadeUp {
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scrollDrop {
  0%, 100% { transform: scaleY(1); opacity: 1; }
  50% { transform: scaleY(0.5); opacity: 0.4; }
}


/* ══════════════════════════════════════════
   ABOUT
══════════════════════════════════════════ */
#about {
  padding: var(--section-pad);
  background: var(--navy);
}

.about-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image-stack {
  position: relative;
  height: 560px;
}
.about-img-main {
  position: absolute;
  top: 0; left: 0;
  width: 82%;
  height: 88%;
  object-fit: cover;
}
.about-img-accent {
  position: absolute;
  bottom: 0; right: 0;
  width: 54%;
  height: 48%;
  object-fit: cover;
  border: 6px solid var(--navy);
}

.about-gold-badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 84px;
  border: 1px solid var(--gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--navy);
  z-index: 4;
  gap: 2px;
}
.about-gold-badge strong {
  font-family: var(--display);
  font-size: 1.8rem;
  font-weight: 300;
  color: var(--gold);
  line-height: 1;
}
.about-gold-badge small {
  font-size: 0.55rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.about-text { padding-top: 20px; }
.about-text .section-subtitle { margin-top: 16px; margin-bottom: 36px; }

.about-stats {
  display: flex;
  gap: 40px;
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid rgba(201, 168, 76, 0.18);
}
.stat-item { }
.stat-num {
  font-family: var(--display);
  font-size: 2.4rem;
  font-weight: 300;
  color: var(--gold);
  line-height: 1;
}
.stat-label {
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 4px;
}


/* ══════════════════════════════════════════
   GALLERY
══════════════════════════════════════════ */
#gallery {
  padding: var(--section-pad);
  background: var(--navy-mid);
}

.gallery-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 64px;
}

.gallery-grid {
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 280px 280px;
  gap: 12px;
}

.g-item {
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.g-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.g-item:hover img { transform: scale(1.06); }

.g-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 15, 30, 0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.g-item:hover .g-overlay { background: rgba(10, 15, 30, 0.35); }
.g-overlay svg { opacity: 0; transition: opacity 0.3s; color: var(--gold-light); }
.g-item:hover .g-overlay svg { opacity: 1; }

/* Grid layout */
.g-item:nth-child(1) { grid-column: 1 / 6; grid-row: 1; }
.g-item:nth-child(2) { grid-column: 6 / 9; grid-row: 1; }
.g-item:nth-child(3) { grid-column: 9 / 13; grid-row: 1; }
.g-item:nth-child(4) { grid-column: 1 / 5; grid-row: 2; }
.g-item:nth-child(5) { grid-column: 5 / 9; grid-row: 2; }
.g-item:nth-child(6) { grid-column: 9 / 13; grid-row: 2; }

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(5, 8, 18, 0.96);
  z-index: 2000;
  align-items: center;
  justify-content: center;
}
.lightbox.open { display: flex; }
.lightbox-img {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border: 1px solid rgba(201, 168, 76, 0.2);
}
.lightbox-close {
  position: absolute;
  top: 28px; right: 36px;
  font-size: 1.6rem;
  color: var(--gold);
  cursor: pointer;
  font-family: var(--display);
  line-height: 1;
}
.lightbox-prev, .lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 1px solid rgba(201, 168, 76, 0.4);
  color: var(--gold);
  width: 48px; height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.lightbox-prev:hover, .lightbox-next:hover { background: rgba(201, 168, 76, 0.15); }
.lightbox-prev { left: 24px; }
.lightbox-next { right: 24px; }


/* ══════════════════════════════════════════
   AMENITIES
══════════════════════════════════════════ */
#amenities {
  padding: var(--section-pad);
  background: var(--navy);
}

.amenities-inner {
  max-width: var(--max-w);
  margin: 0 auto;
}

.amenities-header {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 72px;
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
}

.amenity-card {
  background: var(--navy-light);
  padding: 44px 32px;
  text-align: center;
  transition: background 0.35s;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}
.amenity-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--gold);
  transform: scaleX(0);
  transition: transform 0.4s;
}
.amenity-card:hover { background: #1E2A45; border-color: rgba(201,168,76,0.15); }
.amenity-card:hover::before { transform: scaleX(1); }

.amenity-icon {
  width: 44px;
  height: 44px;
  margin: 0 auto 20px;
  color: var(--gold);
}
.amenity-icon svg { width: 100%; height: 100%; }

.amenity-name {
  font-family: var(--display);
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--offwhite);
  margin-bottom: 8px;
}
.amenity-desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.7;
}


/* ══════════════════════════════════════════
   VIDEO TOUR
══════════════════════════════════════════ */
#video-tour {
  padding: var(--section-pad);
  background: var(--navy-mid);
}

.video-tour-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.video-tour-text .section-subtitle { margin-top: 16px; margin-bottom: 36px; }

.video-frame {
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;
  background: var(--navy-light);
}
.video-frame iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-play-thumb {
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.video-play-thumb img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}
.video-play-thumb:hover img { transform: scale(1.04); }

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 72px; height: 72px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(10, 15, 30, 0.5);
  color: var(--gold);
  transition: background 0.3s, transform 0.3s;
}
.video-play-thumb:hover .play-btn {
  background: rgba(201, 168, 76, 0.25);
  transform: translate(-50%, -50%) scale(1.08);
}


/* ══════════════════════════════════════════
   LOCATION
══════════════════════════════════════════ */
#location {
  padding: var(--section-pad);
  background: var(--navy);
}

.location-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.location-text .section-subtitle { margin-top: 16px; margin-bottom: 40px; }

.location-features {
  list-style: none;
  margin-bottom: 44px;
}
.location-features li {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
  font-size: 0.82rem;
  color: rgba(245, 240, 232, 0.75);
  letter-spacing: 0.03em;
}
.location-features li::before {
  content: '';
  width: 5px; height: 5px;
  background: var(--gold);
  border-radius: 50%;
  flex-shrink: 0;
}

.map-wrap {
  position: relative;
  height: 480px;
  border: 1px solid rgba(201, 168, 76, 0.15);
  overflow: hidden;
}
.map-wrap iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: invert(90%) hue-rotate(180deg) saturate(0.4);
  opacity: 0.85;
}


/* ══════════════════════════════════════════
   CONTACT
══════════════════════════════════════════ */
#contact {
  padding: var(--section-pad);
  background: var(--navy-mid);
}

.contact-inner {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.contact-inner .section-subtitle {
  margin: 16px auto 56px;
}

.contact-form {
  display: grid;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.form-group label {
  font-size: 0.62rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(201, 168, 76, 0.2);
  color: var(--offwhite);
  font-family: var(--body);
  font-size: 0.85rem;
  font-weight: 300;
  padding: 14px 18px;
  outline: none;
  transition: border-color 0.3s;
  width: 100%;
  appearance: none;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--gold);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); }
.form-group textarea { resize: vertical; min-height: 120px; }
.form-group select option { background: var(--navy-mid); }

.form-submit { margin-top: 16px; }
.form-submit .btn-gold { width: 100%; padding: 18px; font-size: 0.72rem; }

.contact-divider {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 48px 0;
  color: var(--text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.contact-divider::before, .contact-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: rgba(201, 168, 76, 0.15);
}

.contact-details {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}
.contact-detail-item {
  text-align: center;
}
.contact-detail-item .eyebrow { margin-bottom: 6px; }
.contact-detail-item p {
  font-size: 0.88rem;
  color: var(--offwhite);
}
.contact-detail-item a { color: var(--offwhite); transition: color 0.2s; }
.contact-detail-item a:hover { color: var(--gold); }


/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
footer {
  background: var(--navy);
  padding: 48px 40px;
  border-top: 1px solid rgba(201, 168, 76, 0.12);
}
.footer-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-logo {
  font-family: var(--display);
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.18em;
  color: var(--gold);
  text-transform: uppercase;
}

.footer-copy {
  font-size: 0.68rem;
  color: var(--text-muted);
  letter-spacing: 0.1em;
}

.footer-social {
  display: flex;
  gap: 18px;
}
.footer-social a {
  width: 38px; height: 38px;
  border: 1px solid rgba(201, 168, 76, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  font-size: 0.85rem;
  transition: background 0.3s, border-color 0.3s;
}
.footer-social a:hover { background: rgba(201, 168, 76, 0.12); border-color: var(--gold); }


/* ══════════════════════════════════════════
   SCROLL ANIMATIONS
══════════════════════════════════════════ */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.22s; }
.reveal-delay-3 { transition-delay: 0.34s; }
.reveal-delay-4 { transition-delay: 0.46s; }


/* ══════════════════════════════════════════
   RESPONSIVE — TABLET
══════════════════════════════════════════ */
@media (max-width: 1024px) {
  :root { --section-pad: 90px 32px; }

  .about-inner,
  .video-tour-inner,
  .location-inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-image-stack { height: 420px; }

  .amenities-grid { grid-template-columns: repeat(2, 1fr); }

  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 260px);
  }
  .g-item:nth-child(1),
  .g-item:nth-child(2),
  .g-item:nth-child(3),
  .g-item:nth-child(4),
  .g-item:nth-child(5),
  .g-item:nth-child(6) {
    grid-column: auto;
    grid-row: auto;
  }

  .nav-links, .nav-cta { display: none; }
  .nav-hamburger { display: flex; }
}


/* ══════════════════════════════════════════
   RESPONSIVE — MOBILE
══════════════════════════════════════════ */
@media (max-width: 640px) {
  :root { --section-pad: 72px 20px; }

  #nav { padding: 20px 24px; }
  #nav.scrolled { padding: 14px 24px; }

  .hero-title { letter-spacing: 0.08em; }
  .hero-bars::before, .hero-bars::after { height: 48px; }

  .about-image-stack { height: 300px; }
  .about-stats { gap: 28px; flex-wrap: wrap; }

  .amenities-grid { grid-template-columns: 1fr 1fr; gap: 1px; }
  .amenity-card { padding: 32px 20px; }

  .gallery-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 220px);
  }

  .form-row { grid-template-columns: 1fr; }

  .contact-details { gap: 32px; }

  .footer-inner { flex-direction: column; text-align: center; }

  .map-wrap { height: 320px; }

  .lightbox-prev { left: 8px; }
  .lightbox-next { right: 8px; }
}

/* ── Reduced motion ── */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
}
