
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


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add reveal with stagger (optional)
      setTimeout(() => {
        entry.target.classList.add("reveal");
      }, index * 150); // 150ms delay between each card

      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  observer.observe(card);
});


// Privacy Modal
const privacyLink = document.getElementById("privacyLink");
const privacyModal = document.getElementById("privacyModal");
const closeModal = document.getElementById("closeModal");

privacyLink.addEventListener("click", (e) => {
  e.preventDefault();
  privacyModal.style.display = "block";
  privacyModal.setAttribute("aria-hidden", "false");
});

closeModal.addEventListener("click", () => {
  privacyModal.style.display = "none";
  privacyModal.setAttribute("aria-hidden", "true");
});

// Close modal if clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === privacyModal) {
    privacyModal.style.display = "none";
    privacyModal.setAttribute("aria-hidden", "true");
  }
});

