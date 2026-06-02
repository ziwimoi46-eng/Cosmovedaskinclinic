/* ============================================
   CosmoVeda – Vanilla JavaScript
   All interactivity: loading, scroll, nav,
   filters, gallery, FAQ, form, animations
   ============================================ */

// ── LOADING SCREEN ──────────────────────────
;(function () {
  const el = document.getElementById('loading-screen');
  if (!el) return;
  setTimeout(() => {
    el.style.opacity = '0';
    setTimeout(() => { el.style.display = 'none'; }, 500);
  }, 1800);
})();

// ── SCROLL PROGRESS ──────────────────────────
;(function () {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  function update() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
})();

// ── NAVBAR ───────────────────────────────────
;(function () {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── MOBILE MENU ──────────────────────────────
function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = 'flex';
  requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add('open')));
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => { if (!menu.classList.contains('open')) menu.style.display = 'none'; }, 300);
}

// ── SMOOTH SCROLL ────────────────────────────
function scrollToSection(id) {
  closeMobileMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── BACK TO TOP ──────────────────────────────
;(function () {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  function update() {
    btn.style.display = window.scrollY > 400 ? 'flex' : 'none';
  }
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── COUNTER ANIMATION ────────────────────────
function animateCounter(el, end, suffix) {
  const dur = 2000, t0 = performance.now();
  function step(t) {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.ceil(p * end) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
;(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting || entry.target.dataset.counted) return;
      entry.target.dataset.counted = '1';
      const valEl = entry.target.querySelector('.counter-value');
      animateCounter(valEl, +entry.target.dataset.end, entry.target.dataset.suffix || '');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter-block').forEach(b => obs.observe(b));
})();

// ── SERVICES FILTER ──────────────────────────
;(function () {
  const cards = Array.from(document.querySelectorAll('.service-card'));
  const btns  = Array.from(document.querySelectorAll('.service-filter-btn'));

  function activate(cat) {
    btns.forEach(b => {
      const on = b.dataset.cat === cat;
      b.classList.toggle('bg-pink-200',  on);
      b.classList.toggle('text-gray-900', on);
      b.classList.toggle('shadow-md',     on);
      b.classList.toggle('bg-gray-50',   !on);
      b.classList.toggle('text-gray-500', !on);
    });
    cards.forEach(c => {
      c.style.display = (cat === 'All' || c.dataset.category === cat.toLowerCase()) ? 'flex' : 'none';
    });
  }

  btns.forEach(b => b.addEventListener('click', () => activate(b.dataset.cat)));
  activate('All');

  // 3D tilt on desktop
  const grid = document.getElementById('services-grid');
  if (grid) {
    grid.addEventListener('mousemove', e => {
      if (window.innerWidth <= 768) return;
      const card = e.target.closest('.service-card');
      if (!card) return;
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top  - r.height / 2) / (r.height / 2)) * -10;
      const ry = ((e.clientX - r.left - r.width  / 2) / (r.width  / 2)) *  10;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
    });
    grid.addEventListener('mouseleave', e => {
      const card = e.target.closest?.('.service-card');
      if (card) card.style.transform = '';
    }, true);
  }
})();

// ── GALLERY ──────────────────────────────────
const GALLERY_ITEMS = [
  { src: 'images/logo.jpg',         alt: 'CosmoVeda Logo',          cat: 'Clinic'    },
  { src: 'images/dr.jpg',           alt: 'Dr. Jayshree Londhe',     cat: 'Clinic'    },
  { src: 'images/clinic.jpg',       alt: 'Reception Area',          cat: 'Clinic'    },
  { src: 'images/dr-room.jpg',      alt: 'Consultation Room',       cat: 'Clinic'    },
  { src: 'images/room1.jpg',        alt: 'Treatment Room 1',        cat: 'Clinic'    },
  { src: 'images/room2.jpg',        alt: 'Treatment Room 2',        cat: 'Clinic'    },
  { src: 'images/pancha.jpg',       alt: 'Panchakarma Setup',       cat: 'Clinic'    },
  { src: 'images/shiro.jpg',        alt: 'Shirodhara Equipment',    cat: 'Equipment' },
  { src: 'images/steamer.jpg',      alt: 'Ozone Steamer',           cat: 'Equipment' },
  { src: 'images/quantum.jpg',      alt: 'Quantum Pro Duo Laser',   cat: 'Equipment' },
  { src: 'images/eyebrow-promo.png',alt: 'Eyebrow Promo',           cat: 'PMU'       },
  { src: 'images/microblading.jpg', alt: 'Microblading Information',cat: 'PMU'       },
  { src: 'images/ear-piercing.jpg', alt: 'Ear Piercing Service',    cat: 'Clinic'    },
  { src: 'images/pigment.jpg',      alt: 'Pigmentation Result',     cat: 'Results'   },
  { src: 'images/hair-prp.jpg',     alt: 'Hair PRP Result',         cat: 'Results'   },
  { src: 'images/micro-result.jpg', alt: 'Microblading Result',     cat: 'Results'   },
];

let currentGallery = [...GALLERY_ITEMS];
let lightboxIndex = 0;

const ZOOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
  stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
</svg>`;

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = currentGallery.map((item, i) => `
    <div class="gallery-card relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100"
         onclick="openLightbox(${i})">
      <img src="${item.src}" alt="${item.alt}" loading="lazy"
           class="w-full h-full object-cover object-center">
      <div class="gallery-zoom-overlay">${ZOOM_SVG}</div>
    </div>`).join('');
}

function filterGallery(cat) {
  currentGallery = cat === 'All' ? [...GALLERY_ITEMS] : GALLERY_ITEMS.filter(i => i.cat === cat);
  renderGallery();
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    const on = btn.dataset.cat === cat;
    btn.className = `gallery-filter-btn px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      on ? 'bg-[#3A2D2D] text-white shadow-md' : 'bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-[#3A2D2D]'}`;
  });
}

function openLightbox(i) {
  lightboxIndex = i;
  const item = currentGallery[i];
  document.getElementById('lb-img').src     = item.src;
  document.getElementById('lb-img').alt     = item.alt;
  document.getElementById('lb-caption').textContent = item.alt;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}
function lbNext(e) {
  e && e.stopPropagation();
  openLightbox((lightboxIndex + 1) % currentGallery.length);
}
function lbPrev(e) {
  e && e.stopPropagation();
  openLightbox((lightboxIndex - 1 + currentGallery.length) % currentGallery.length);
}

// ── FAQ ──────────────────────────────────────
function toggleFAQ(i) {
  const item = document.getElementById('faq-' + i);
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ── APPOINTMENT FORM ─────────────────────────
;(function () {
  const dateEl = document.getElementById('apt-date');
  if (dateEl) dateEl.min = new Date().toISOString().split('T')[0];

  const form = document.getElementById('appointment-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const ids  = ['apt-name','apt-phone','apt-service','apt-date','apt-time','apt-message'];
    const msgs = {
      'apt-name':    'Name is required',
      'apt-phone':   'Phone is required',
      'apt-service': 'Please select a service',
      'apt-date':    'Please select a date',
      'apt-time':    'Please select a preferred time',
      'apt-message': 'Please provide a short message',
    };
    // clear
    ids.forEach(id => {
      document.getElementById(id).classList.remove('field-error');
      const err = document.getElementById(id + '-err');
      if (err) err.textContent = '';
    });
    let bad = false;
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.classList.add('field-error');
        const err = document.getElementById(id + '-err');
        if (err) err.textContent = msgs[id];
        bad = true;
      }
    });
    if (bad) return;
    document.getElementById('success-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
})();

function closeSuccessModal() {
  document.getElementById('success-modal').style.display = 'none';
  document.body.style.overflow = '';
  const form = document.getElementById('appointment-form');
  if (form) form.reset();
  document.querySelectorAll('.form-field').forEach(el => el.classList.remove('field-error'));
  document.querySelectorAll('.field-err').forEach(el => el.textContent = '');
}

// ── SCROLL ANIMATIONS ────────────────────────
;(function () {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-80px 0px' });
  document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => obs.observe(el));
})();

// ── KEYBOARD SUPPORT ─────────────────────────
document.addEventListener('keydown', e => {
  const lb = document.getElementById('lightbox');
  if (lb && lb.style.display === 'flex') {
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowRight')  lbNext();
    if (e.key === 'ArrowLeft')   lbPrev();
  }
});

// ── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderGallery();
  filterGallery('All');
  if (typeof lucide !== 'undefined') lucide.createIcons();
});
