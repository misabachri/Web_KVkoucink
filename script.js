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
});
