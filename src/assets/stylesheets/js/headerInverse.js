////////////////////// Observers //////////////////////
//observers to make the logo and button menu (in the header) change color when they intersect with dark sections
const header = document.querySelector(".primary-header");

// Hero Section Observer
const heroSection = document.querySelector("section#hero");
const heroSectionOptions = {
  root: null,
  rootMargin: "-6% 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(function(entries, heroSectionObserver) {
  entries.forEach(entry => {
    console.log(entry);
    if (!entry.isIntersecting) {
      header.classList.add("inverse");
    } else {
      header.classList.remove("inverse");
    }
  });
}, heroSectionOptions)

heroSectionObserver.observe(heroSection)

// Footer Observer

const footer = document.getElementById("primary-footer");

const footerOptions = {
  root: null,
  rootMargin: "0px 0px -94% 0px"
};

const footerObserver = new IntersectionObserver(function(entries, footerObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("inverse");
    } else {
      header.classList.remove("inverse");
    }
  });

}, footerOptions)

footerObserver.observe(footer)
