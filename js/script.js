// ============================================================
// Azmi Adi Parira — Landing Page interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Scroll reveal animations ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReducedMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealEls.forEach((el) => io.observe(el));
  } else {
    // fallback: show everything immediately
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // ---- Floating particles ----
  const particlesWrap = document.getElementById('particles');
  const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
  if (particlesWrap && !prefersReducedMotion && !isSmallScreen) {
    const PARTICLE_COUNT = 8;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      const size = Math.random() * 3 + 2;
      const left = Math.random() * 100;
      const duration = Math.random() * 14 + 10;
      const delay = Math.random() * 14;
      const drift = (Math.random() - 0.5) * 120;
      const hueVariant = Math.random();

      p.style.left = `${left}%`;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.animationDuration = `${duration}s`;
      p.style.animationDelay = `${delay}s`;
      p.style.setProperty('--drift', `${drift}px`);

      if (hueVariant < 0.33) {
        p.style.background = 'var(--teal)';
      } else if (hueVariant < 0.66) {
        p.style.background = 'var(--violet)';
      } else {
        p.style.background = 'var(--pink)';
      }

      particlesWrap.appendChild(p);
    }
  }

  // ---- Tilt effect on the profile photo frame ----
  const tiltCard = document.getElementById('tiltCard');
  if (tiltCard && !prefersReducedMotion && window.matchMedia('(hover: hover)').matches) {
    const maxTilt = 10;

    tiltCard.addEventListener('mousemove', (e) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      tiltCard.style.transform = `rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale(1.03)`;
    });

    tiltCard.addEventListener('mouseleave', () => {
      tiltCard.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }

  // ---- Graceful fallback if the photo hasn't been replaced / fails to load ----
  const heroPhoto = document.getElementById('heroPhoto');
  if (heroPhoto) {
    heroPhoto.addEventListener('error', () => {
      heroPhoto.style.objectFit = 'contain';
      heroPhoto.style.background = 'rgba(255,255,255,0.05)';
    });
  }
});
