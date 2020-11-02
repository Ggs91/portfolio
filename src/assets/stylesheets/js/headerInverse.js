////////////////////// Observers //////////////////////
//observers to make the logo and menu button (in the header) switch color when they intersect with white/dark sections
const header = document.querySelector(".primary-header");

const heroSection = document.querySelector("section#hero");
const heroSectionOptions = {
  root: null,
  rootMargin: "-5% 0px 0px 0px"
};

const heroSectionObserver = new IntersectionObserver(function(entries, heroSectionObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      console.log("IF");
      header.classList.add("inverse"); // switch to black header
    } else {
      console.log("ELSE");
      header.classList.remove("inverse"); // switch back to white header
    }
  });
}, heroSectionOptions)

heroSectionObserver.observe(heroSection);
