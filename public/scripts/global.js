document.addEventListener('DOMContentLoaded', () => {

  // ── MODAL ──────────────────────────────────────────────────────
  window.openModal = function openModal() {
    document.getElementById('modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  window.closeModalDirect = function closeModalDirect() {
    document.getElementById('modal').classList.remove('open');
    document.body.style.overflow = '';
  };

  window.closeModal = function closeModal(e) {
    if (e.target === document.getElementById('modal')) closeModalDirect();
  };

  // ── BLIND DATE TOGGLE ──────────────────────────────────────────
  let blindDateOn = false;

  window.toggleBlindDate = function toggleBlindDate() {
    blindDateOn = !blindDateOn;
    const toggle = document.getElementById('bdToggle');
    const fields = document.getElementById('extraFields');
    const msg = document.getElementById('bdMessage');
    const sub = document.getElementById('bdSubText');
    if (blindDateOn) {
      toggle.classList.add('active');
      fields.classList.add('hidden');
      msg.classList.add('show');
      sub.textContent = 'Blind date mode: on. We do our homework too.';
    } else {
      toggle.classList.remove('active');
      fields.classList.remove('hidden');
      msg.classList.remove('show');
      sub.textContent = "Skip the questions. We'll come prepared either way.";
    }
  };

  // ── FORM SUBMISSION ────────────────────────────────────────────
  (function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Populate hidden enrichment fields
      var params = new URLSearchParams(window.location.search);
      document.getElementById('f-submitted-at').value = new Date().toISOString();
      document.getElementById('f-page-url').value = window.location.href;
      document.getElementById('f-referrer').value = document.referrer || '';
      document.getElementById('f-utm-source').value = params.get('utm_source') || '';
      document.getElementById('f-utm-medium').value = params.get('utm_medium') || '';
      document.getElementById('f-utm-campaign').value = params.get('utm_campaign') || '';
      document.getElementById('f-utm-term').value = params.get('utm_term') || '';
      document.getElementById('f-utm-content').value = params.get('utm_content') || '';
      document.getElementById('f-user-agent').value = navigator.userAgent || '';
      document.getElementById('f-screen-res').value = screen.width + 'x' + screen.height;
      document.getElementById('f-timezone').value = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      document.getElementById('f-language').value = navigator.language || '';
      document.getElementById('f-blind-date').value = blindDateOn ? 'on' : 'off';

      var submitBtn = document.getElementById('contact-submit');
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      // Submit to Netlify Forms
      var formData = new FormData(form);
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then(function (res) {
        if (res.ok) {
          // Show success state
          form.style.display = 'none';
          document.getElementById('form-success').style.display = 'block';
        } else {
          submitBtn.textContent = 'Something went wrong — try again';
          submitBtn.disabled = false;
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Connection error — try again';
        submitBtn.disabled = false;
      });
    });
  })();

  // ── ACCORDION (Services page) ──────────────────────────────────
  window.toggleAcc = function toggleAcc(btn) {
    const item = btn.closest('.acc-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  };

  // ── COUNT UP ───────────────────────────────────────────────────
  function startCountUp() {
    document.querySelectorAll('[data-target]').forEach(el => {
      const target = parseFloat(el.dataset.target);
      const prefix = el.dataset.prefix || '';
      const suffix = el.dataset.suffix || '';
      const isDecimal = el.dataset.decimal === 'true';
      const duration = 1600;
      const start = performance.now();

      function update(now) {
        const elapsed = Math.min(now - start, duration);
        const eased = 1 - Math.pow(1 - elapsed / duration, 3);
        const current = eased * target;
        el.textContent = prefix + (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;
        if (elapsed < duration) requestAnimationFrame(update);
        else el.textContent = prefix + (isDecimal ? target.toFixed(2) : target) + suffix;
      }

      requestAnimationFrame(update);
    });
  }

  // Run countup on initial load
  setTimeout(startCountUp, 400);

  // ── NAV SCROLL-AWARE ───────────────────────────────────────────
  (function () {
    const nav = document.querySelector('nav');
    if (!nav) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  })();

  // ── SCROLL REVEAL (IntersectionObserver) ───────────────────────
  (function () {
    const els = document.querySelectorAll('.scroll-reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  })();

  // ── GLOBE ──────────────────────────────────────────────────────
  (function () {
    const canvas = document.getElementById('globe');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cxG = W / 2, cyG = H / 2, R = W * 0.42;
    let rot = 0;

    const cities = [
      [40.7, -74], [37.7, -122], [51.5, 0], [48.8, 2.3], [35.6, 139.7],
      [-33.8, 151], [19.4, -99], [55.7, 37.6], [1.3, 103.8], [-23.5, -46.6],
      [28.6, 77.2], [31.2, 121.5], [-1.3, 36.8], [6.5, 3.4], [30.0, 31.2],
      [25.2, 55.3], [41.0, 28.9], [52.4, 4.9], [59.9, 30.3], [43.6, -79.4]
    ];

    function project(lat, lon, r) {
      const phi = (90 - lat) * Math.PI / 180;
      const theta = (lon + rot) * Math.PI / 180;
      return {
        x: cxG + r * Math.sin(phi) * Math.cos(theta),
        y: cyG + r * Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta)
      };
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Glow bg
      const grd = ctx.createRadialGradient(cxG, cyG, R * 0.2, cxG, cyG, R * 1.1);
      grd.addColorStop(0, 'rgba(123,94,167,0.05)');
      grd.addColorStop(1, 'rgba(9,9,12,0)');
      ctx.fillStyle = grd;
      ctx.beginPath(); ctx.arc(cxG, cyG, R * 1.1, 0, Math.PI * 2); ctx.fill();

      // Outer circle
      ctx.beginPath(); ctx.arc(cxG, cyG, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(123,94,167,0.2)'; ctx.lineWidth = 1; ctx.stroke();

      // Latitude rings
      [-60, -30, 0, 30, 60].forEach(lat => {
        const phi = (90 - lat) * Math.PI / 180;
        const ry = R * Math.abs(Math.cos(phi)) * 0.2;
        const rx = R * Math.sin(phi);
        if (rx < 2) return;
        ctx.beginPath();
        ctx.ellipse(cxG, cyG - R * Math.cos(phi) * 0.02, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(123,94,167,0.09)'; ctx.lineWidth = 0.5; ctx.stroke();
      });

      // Meridians
      for (let lon = 0; lon < 360; lon += 30) {
        const a = (lon + rot) * Math.PI / 180;
        const front = Math.cos(a) > 0;
        ctx.beginPath();
        for (let lat = -88; lat <= 88; lat += 6) {
          const phi = (90 - lat) * Math.PI / 180;
          const x = cxG + R * Math.sin(phi) * Math.cos(a);
          const y = cyG + R * Math.cos(phi);
          lat === -88 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = front ? 'rgba(123,94,167,0.13)' : 'rgba(123,94,167,0.04)';
        ctx.lineWidth = 0.5; ctx.stroke();
      }

      // City dots
      cities.forEach(([lat, lon]) => {
        const p = project(lat, lon, R);
        if (p.z < 0) return;
        const op = 0.25 + p.z * 0.75;
        const sz = 1.5 + p.z * 2.5;
        // Pulse ring for bright cities
        if (p.z > 0.65) {
          ctx.beginPath(); ctx.arc(p.x, p.y, sz * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(123,94,167,${op * 0.12})`; ctx.fill();
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, sz, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,169,224,${op})`; ctx.fill();
      });

      // Connection lines
      const pairs = [[0, 2], [1, 3], [4, 5], [6, 7], [8, 9], [10, 11], [12, 13]];
      pairs.forEach(([a, b]) => {
        const p1 = project(cities[a][0], cities[a][1], R);
        const p2 = project(cities[b][0], cities[b][1], R);
        if (p1.z < 0.15 || p2.z < 0.15) return;
        const op = Math.min(p1.z, p2.z) * 0.3;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2 - 18;
        ctx.quadraticCurveTo(mx, my, p2.x, p2.y);
        ctx.strokeStyle = `rgba(160,124,197,${op})`; ctx.lineWidth = 0.8; ctx.stroke();
      });

      rot += 0.1;
      requestAnimationFrame(draw);
    }

    draw();
  })();

});
