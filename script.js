/* ============================================
   ARURA LUXURY VILLA — script.js
   ============================================ */

'use strict';

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initGalleryLightbox();
  initContactForm();
  initGoldRuleAnimation();
});


/* ══════════════════════════════════════════
   NAVIGATION — sticky + hamburger
══════════════════════════════════════════ */
function initNav() {
  const nav        = document.getElementById('nav');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  /* Sticky scroll */
  const onScroll = () => {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Hamburger toggle */
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

/* Called from HTML onclick */
function closeMobile() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.body.style.overflow = '';
}


/* ══════════════════════════════════════════
   SCROLL REVEAL — Intersection Observer
══════════════════════════════════════════ */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}


/* ══════════════════════════════════════════
   GALLERY LIGHTBOX
══════════════════════════════════════════ */
function initGalleryLightbox() {
  const items      = document.querySelectorAll('.g-item');
  const lightbox   = document.getElementById('lightbox');
  const lbImg      = document.getElementById('lightboxImg');
  const lbClose    = document.getElementById('lightboxClose');
  const lbPrev     = document.getElementById('lightboxPrev');
  const lbNext     = document.getElementById('lightboxNext');

  let currentIndex = 0;
  const images = [];

  items.forEach((item, i) => {
    const img = item.querySelector('img');
    images.push({ src: img.src, alt: img.alt });

    item.addEventListener('click', () => openLightbox(i));
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openLightbox(i);
    });
  });

  function openLightbox(index) {
    currentIndex = index;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt;
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lbImg.src = images[currentIndex].src;
    lbImg.alt = images[currentIndex].alt;
  }

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', showPrev);
  lbNext.addEventListener('click', showNext);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });
}


/* ══════════════════════════════════════════
   CONTACT FORM — basic validation
══════════════════════════════════════════ */
function initContactForm() {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (!form) return;

  /* Set min date for date pickers to today */
  const today = new Date().toISOString().split('T')[0];
  const checkin  = document.getElementById('checkin');
  const checkout = document.getElementById('checkout');
  if (checkin)  checkin.setAttribute('min', today);
  if (checkout) checkout.setAttribute('min', today);

  checkin && checkin.addEventListener('change', () => {
    if (checkout) checkout.setAttribute('min', checkin.value);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const name  = document.getElementById('name');
    const email = document.getElementById('email');
    let valid = true;

    /* Simple validation */
    [name, email].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (email && email.value && !isValidEmail(email.value)) {
      email.style.borderColor = '#c0392b';
      valid = false;
    }

    if (!valid) return;

    /* Simulate sending (replace with real fetch/Netlify/FormSubmit) */
    const btn = form.querySelector('.btn-gold');
    btn.textContent = 'Sending…';
    btn.style.pointerEvents = 'none';

    setTimeout(() => {
      form.reset();
      btn.textContent = 'Send Enquiry';
      btn.style.pointerEvents = '';
      success.style.display = 'block';

      setTimeout(() => { success.style.display = 'none'; }, 6000);
    }, 1200);
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ══════════════════════════════════════════
   GOLD RULE ANIMATION — grow on scroll
══════════════════════════════════════════ */
function initGoldRuleAnimation() {
  const rules = document.querySelectorAll('.gold-rule');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('wide');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  rules.forEach(r => observer.observe(r));
}


/* ══════════════════════════════════════════
   PASSIVE SCROLL — smooth parallax on hero
   (lightweight, no library)
══════════════════════════════════════════ */
(function initHeroParallax() {
  const video = document.querySelector('.hero-video-wrap video');
  if (!video) return;

  // Reduce motion check
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          video.style.transform = `translateY(${y * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
})();
