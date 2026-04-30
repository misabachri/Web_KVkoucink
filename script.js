document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav a');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (mobileNav.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
      } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
      }
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
      });
    });
  }

  // Smooth Scroll with Offset for Sticky Header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerOffset = 80; // Approximate header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  // Fade-in Animation on Scroll
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });

  // Timeline Scroll Animation
  const timelineContainer = document.querySelector('.timeline-container');
  const timelineProgress = document.querySelector('.timeline-progress');
  const timelineItems = document.querySelectorAll('.timeline-item');

  if (timelineContainer && timelineProgress && timelineItems.length > 0) {

    function updateTimeline() {
      const rect = timelineContainer.getBoundingClientRect();
      const containerTopFromViewport = rect.top;
      const containerHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // The point on the screen that "draws" the line (e.g., 60% down the screen)
      const triggerPoint = viewportHeight * 0.7;

      // Calculate progress (how much of the container is above the trigger point)
      let progress = triggerPoint - containerTopFromViewport;

      // Clamp progress
      if (progress < 0) progress = 0;
      if (progress > containerHeight) progress = containerHeight;

      // Update line height
      timelineProgress.style.height = `${progress}px`;

      // Update active items based on progress
      timelineItems.forEach(item => {
        // item.offsetTop is invariant (relative to container top)
        // We activate the item when the line reaches the center of the marker (approx 22px down from item top)
        const itemTriggerPoint = item.offsetTop + 20;

        if (progress >= itemTriggerPoint) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    // Update on scroll and resize
    window.addEventListener('scroll', updateTimeline);
    window.addEventListener('resize', updateTimeline);

    // Initial check
    updateTimeline();
  }

  // Testimonials Slider
  const sliderEl = document.querySelector('.testimonials-slider');
  if (sliderEl) {
    const track = sliderEl.querySelector('.testimonials-track');
    const originalCards = Array.from(track.querySelectorAll('.testimonial-card'));
    const prevBtn = sliderEl.querySelector('.slider-prev');
    const nextBtn = sliderEl.querySelector('.slider-next');
    const dotsContainer = sliderEl.querySelector('.slider-dots');

    let currentIndex = 0;
    let visibleCount = getVisible();

    function getVisible() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function getLogicalIndex() {
      const originalCount = originalCards.length;
      return ((currentIndex - visibleCount) % originalCount + originalCount) % originalCount;
    }

    function rebuildTrack() {
      visibleCount = getVisible();
      const logicalIndex = getLogicalIndex();
      const prependClones = originalCards
        .slice(-visibleCount)
        .map((card) => card.cloneNode(true));
      const appendClones = originalCards
        .slice(0, visibleCount)
        .map((card) => card.cloneNode(true));

      track.innerHTML = '';
      [...prependClones, ...originalCards, ...appendClones].forEach((card) => {
        track.appendChild(card);
      });

      currentIndex = logicalIndex + visibleCount;
    }

    function buildDots() {
      dotsContainer.innerHTML = '';
      for (let i = 0; i < originalCards.length; i++) {
        const dot = document.createElement('button');
        dot.className = 'slider-dot' + (i === getLogicalIndex() ? ' active' : '');
        dot.setAttribute('aria-label', 'Reference ' + (i + 1));
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
      }
    }

    function updateSlider(options = {}) {
      const { instant = false } = options;
      const gap = parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || '0');
      const containerWidth = sliderEl.offsetWidth;
      const cardWidth = visibleCount === 2 ? (containerWidth - gap) / 2 : containerWidth;
      const offset = currentIndex * (cardWidth + gap);

      track.style.transition = instant ? 'none' : '';
      track.style.transform = 'translateX(-' + offset + 'px)';

      dotsContainer.querySelectorAll('.slider-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === getLogicalIndex());
      });
    }

    function goTo(index) {
      currentIndex = index + visibleCount;
      updateSlider();
    }

    prevBtn.addEventListener('click', () => {
      currentIndex -= 1;
      updateSlider();
    });
    nextBtn.addEventListener('click', () => {
      currentIndex += 1;
      updateSlider();
    });

    track.addEventListener('transitionend', () => {
      const originalCount = originalCards.length;

      if (currentIndex >= originalCount + visibleCount) {
        currentIndex -= originalCount;
        updateSlider({ instant: true });
      } else if (currentIndex < visibleCount) {
        currentIndex += originalCount;
        updateSlider({ instant: true });
      }
    });

    window.addEventListener('resize', () => {
      const nextVisible = getVisible();
      if (nextVisible !== visibleCount) {
        rebuildTrack();
      }

      buildDots();
      updateSlider({ instant: true });
    });

    rebuildTrack();
    buildDots();
    updateSlider({ instant: true });
  }

  // Contact form – submit via fetch, stay on page
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        contactForm.reset();
        contactForm.querySelector('.form-success').style.display = 'block';
      }
    });
  }
});
