/* ============================================
   RAGHUVIR DAV – CV JAVASCRIPT
   ============================================ */

// ── Background Canvas (subtle particle field) ──
(function () {
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function buildParticles() {
    particles = [];
    const count = Math.floor((W * H) / 22000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        a: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(196,160,80,${p.a})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    requestAnimationFrame(draw);
  }

  resize();
  buildParticles();
  draw();
  window.addEventListener('resize', () => { resize(); buildParticles(); });
})();


// ── Scroll Reveal ──
(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();


// ── Active Nav Link on Scroll ──
(function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.section === id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => observer.observe(s));
})();


// ── Download CV ──
function downloadCV() {
  const btn = document.getElementById('downloadBtn');
  
  // Animate button
  if (btn) {
    btn.innerHTML = '<span class="dl-icon">✓</span><span>Downloading...</span>';
    btn.style.background = 'linear-gradient(135deg,#6dbe8a,#3a9a5c)';
    setTimeout(() => {
      btn.innerHTML = '<span class="dl-icon">↓</span><span>Download CV</span>';
      btn.style.background = '';
    }, 2000);
  }

  // Trigger download
  const link = document.createElement('a');
  link.href = 'Raghuvir_Dav_CV.pdf';
  link.download = 'Raghuvir_Dav_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


// ── Smooth scrolling for nav links ──
document.querySelectorAll('.nav-item[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── Tag hover ripple ──
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('mouseenter', function () {
    this.style.transition = 'all 0.15s ease';
  });
});


// ── Staggered timeline cards on load ──
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.timeline-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.06}s`;
  });

  const skillGroups = document.querySelectorAll('.skill-group');
  skillGroups.forEach((g, i) => {
    g.style.transitionDelay = `${i * 0.05}s`;
    g.style.transition = `border-color 0.2s ease, transform 0.25s ease ${i * 0.05}s`;
  });
});
