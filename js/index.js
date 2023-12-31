// <============== Set Current Year ============>

const currentYear = document.querySelector('.year');
const year = new Date().getFullYear();
currentYear.textContent = year;

// <============== Mobile Navigation ============>

const menuBtnEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

menuBtnEl.addEventListener('click', () => {
  headerEl.classList.toggle('nav-open');

  if (headerEl.classList.contains('nav-open'))
    document.querySelector('html').style.overflow = 'hidden';
  else document.querySelector('html').style.removeProperty('overflow');
});

// <======== Smooth scrolling by the Javascript ==========>

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');

    // Back to top
    if (href === '#')
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });

    //   Go to clicked section
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    //   Hide mobile navigation
    if (link.classList.contains('main-nav-link')) {
      headerEl.classList.remove('nav-open');
      document.querySelector('html').style.removeProperty('overflow');
    }
  });
});

// <============= STICKY NAVIGATION ===========>

const sectionHeroEl = document.querySelector('.section-hero');

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) document.body.classList.add('sticky');

    if (entry.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
observer.observe(sectionHeroEl);
