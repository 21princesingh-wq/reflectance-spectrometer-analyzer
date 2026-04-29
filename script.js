/* ═══════════════════════════════════════════════════
   Reflectance Spectrophotometer Portfolio
   script.js — All Interactivity
═══════════════════════════════════════════════════ */

/* ── PAGE ROUTER ── */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  const mob = document.getElementById('mobile-menu');
  if (mob) mob.classList.remove('open');
  // Trigger stagger animations
  setTimeout(() => staggerCards(el), 60);
}

/* ── STAGGER CARD ENTRANCE ── */
function staggerCards(page) {
  const items = page.querySelectorAll(
    '.paper-card,.obj-card,.oc-card,.metric-card,.app-tile,.team-card,.challenge-card,.tl-item'
  );
  items.forEach((item, i) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(14px)';
    item.style.transition = `opacity .35s ease ${i * 55}ms, transform .35s ease ${i * 55}ms`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }));
  });
}

/* ── NAV SCROLL SHADOW ── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar')
    ?.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── MOBILE MENU TOGGLE ── */
function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  if (m) m.classList.toggle('open');
}

/* ── CONTACT FORM ── */
function sendForm() {
  const name  = document.getElementById('cf-name');
  const email = document.getElementById('cf-email');
  const msg   = document.getElementById('form-msg');

  if (!name?.value.trim() || !email?.value.trim()) {
    alert('Please fill in your name and email.');
    return;
  }

  if (msg) {
    msg.style.display = 'block';
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
  }

  // Reset fields
  ['cf-name','cf-email','cf-subject','cf-msg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
}

/* ── SPECTRUM BAR ENTRANCE ANIMATION ── */
document.addEventListener('DOMContentLoaded', () => {
  // Animate any spectrum bars
  document.querySelectorAll('.spectrum-bar').forEach(bar => {
    bar.style.opacity = '0';
    bar.style.transform = 'scaleX(0)';
    bar.style.transformOrigin = 'left';
    bar.style.transition = 'all 1.2s cubic-bezier(0.4,0,0.2,1) 0.4s';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      bar.style.opacity = '1';
      bar.style.transform = 'scaleX(1)';
    }));
  });

  // Trigger initial page card stagger
  const activePage = document.querySelector('.page.active');
  if (activePage) setTimeout(() => staggerCards(activePage), 200);

  // Animate progress bars when future page shown
  const progObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width || entry.target.style.width;
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.prog-fill').forEach(bar => {
    const targetW = bar.style.width;
    bar.dataset.width = targetW;
    bar.style.width = '0%';
    bar.style.transition = 'width 1s ease 0.3s';
    progObserver.observe(bar);
  });
});

/* ── KEYBOARD NAV ── */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const mob = document.getElementById('mobile-menu');
    if (mob) mob.classList.remove('open');
  }
});
