/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener('focus', event => {

});

const progressBars = document.querySelectorAll('.progress-bar');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: [0, 0.5, 1], // Detect both entering and exiting the viewport
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const progressBar = entry.target;

    if (entry.intersectionRatio >= 0.5) {
      progressBar.style.width = getComputedStyle(progressBar).getPropertyValue('--original-width');
      progressBar.classList.add('animate-progress');
    } else {
      progressBar.style.width = '0%';
      progressBar.classList.remove('animate-progress');
    }
  });
}, options);

progressBars.forEach(progressBar => {
  observer.observe(progressBar);
});