
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'block';
    mobileMenu.style.display = open ? 'none' : 'block';
    hamburger.setAttribute('aria-expanded', String(!open));
    mobileMenu.setAttribute('aria-hidden', String(open));
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  });

  // FAQ accordion
  document.querySelectorAll(".faq .item .question").forEach(q => {
  q.addEventListener("click", () => {
    const item = q.parentElement;
    const answer = item.querySelector(".answer");

    if (item.classList.contains("open")) {
      // collapse
      answer.style.height = answer.scrollHeight + "px"; // set current height
      requestAnimationFrame(() => {
        answer.style.height = "0px";
      });
      item.classList.remove("open");
    } else {
      // expand
      answer.style.height = "0px"; // reset
      item.classList.add("open");
      requestAnimationFrame(() => {
        answer.style.height = answer.scrollHeight + "px";
      });
    }
  });
});


  // Simple marquee fallback: if not wide enough to require scrolling, pause animation
  // (no JS required to create duplicates because HTML duplicated logos earlier)
  // If you want to adjust marquee speed: change animation-duration on .client-strip .marquee.

  // Smooth scroll for anchors (already enabled by CSS scroll-behavior)
  // Additional: ensure header height offset for anchor positions if header overlaps.
  // If your sticky header overlaps anchor content, you can adjust via scroll-margin-top on section:
  document.querySelectorAll('section[id]').forEach(sec => {
    sec.style.scrollMarginTop = '80px'; // adjust if header height changes on mobile
  });

  // Accessibility: close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
      mobileMenu.style.display = 'none';
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
  });

  // Optional: pause marquee when reduced-motion is preferred
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.marquee').forEach(m => m.style.animation = 'none');
  }

  