/*@@@@@@@@@@@@@@@@@ LOADER @@@@@@@@@@@@@@@@@*/
onload = () => {
  const load = document.getElementById('load');

  setTimeout(() => {
    load.style.display = 'none';
  }, 2500);
};

/*@@@@@@@@@@@@@@@@@ SHOW MENU @@@@@@@@@@@@@@@@@*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', () => {
  navMenu.classList.add('show-menu');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('show-menu');
});

/*@@@@@@@@@ remove menu when click on nav links @@@@@@@@@@*/

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*@@@@@@@@@@@@@@@@@ CHANGE BACKGROUND HEADER @@@@@@@@@@@@@@@@@*/

const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

/*@@@@@@@@@@@@@@@@@ MIXITUP FILTER PRODUCTS @@@@@@@@@@@@@@@@@*/

let mixerProducts = mixitup('.products__group', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 0,
  },
});

/* Default filter products */
mixerProducts.filter('.delicacies');

/* Link active products */
const linkProducts = document.querySelectorAll('.products__item');

linkProducts.forEach((l) => {
  l.addEventListener('click', activeProduct);
});

function activeProduct() {
  linkProducts.forEach((l) => {
    l.classList.remove('active-product');
    this.classList.add('active-product');
  });
}

/*@@@@@@@@@@@@@@@@@ TEAM CARDS @@@@@@@@@@@@@@@@@*/

const teamToggles = document.querySelectorAll('.team__social .toggle');

teamToggles.forEach((e) => {
  e.addEventListener('click', function () {
    const social = this.parentElement.parentElement;

    if (social.classList.contains('active')) {
      social.classList.add('down-animation');

      setTimeout(() => {
        social.classList.remove('down-animation');
      }, 1000);
    }

    social.classList.toggle('active');
  });
});

/*@@@@@@@@@@@@@@@@@ SHOW SCROLL UP @@@@@@@@@@@@@@@@@*/

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');
  if (this.scrollY >= 100) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}
