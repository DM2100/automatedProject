// FUNCTION FOR DROPDOWN
const dropdownToggle = document.querySelector('#navbarDropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const arrowIcon = dropdownToggle.querySelector('.fa-chevron-down');

function openDropdown() {
  gsap.to(dropdownMenu, {
    duration: 0.4,
    height: "auto",
    opacity: 1,
    display: "block",
    ease: "power2.inOut",
    onStart: () => dropdownMenu.style.display = "block" 
  });

  gsap.to(arrowIcon, {
    duration: 0.3,
    rotation: 180,
    ease: "power2.inOut",
  });
}

function closeDropdown() {
  gsap.to(dropdownMenu, {
    duration: 0.4,
    height: 0,
    opacity: 0,
    ease: "power2.inOut",
    onComplete: () => dropdownMenu.style.display = "none" 
  });

  gsap.to(arrowIcon, {
    duration: 0.3,
    rotation: 0,
    ease: "power2.inOut",
  });
}

dropdownToggle.addEventListener('mouseenter', openDropdown);
dropdownToggle.addEventListener('mouseleave', closeDropdown);
dropdownMenu.addEventListener('mouseenter', openDropdown);
dropdownMenu.addEventListener('mouseleave', closeDropdown);

document.addEventListener('DOMContentLoaded', () => {
  // Initially hide elements
  gsap.set('.navbar', { opacity: 0, y: -50 });
  gsap.set('.image-section', { opacity: 0, scale: 0.8 });
  gsap.set('.section-text', { opacity: 0, y: 50 });

  // Animate navbar
  gsap.to('.navbar', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out'
  });

  // Animate image and text with delays
  gsap.to('.image-section', {
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: 1,
      ease: 'power2.out'
  });

  gsap.to('.section-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 1.5,
      ease: 'power2.out'
  });
});


// Register ScrollTrigger plugin, GSAP animations on scroll
gsap.registerPlugin(ScrollTrigger);


gsap.from('.logo-image', {
    scrollTrigger: {
        trigger: '.logo-image',
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false 
    },
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.description-text', {
    scrollTrigger: {
        trigger: '.description-text',
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false 
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
});

gsap.from('.download-btns', {
    scrollTrigger: {
        trigger: '.download-btns',
        start: 'top 80%',
        end: 'top 60%',
        toggleActions: 'play none none reverse',
        markers: false 
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out',
    stagger: 0.3
});
