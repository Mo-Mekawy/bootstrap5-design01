const filterBtns = document.querySelectorAll("[data-filter]");
const navLinks = document.querySelectorAll(".nav-link");
const navToggler = document.querySelector(".navbar-toggler");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    document.querySelector(".nav-link.active").classList.remove("active");
    e.target.classList.add("active");
  });
});

// close the nav menu when clicked on any other area of the screen
document.querySelector("nav").onclick = (e) => e.stopPropagation();
document.addEventListener("click", (e) => {
  if (
    e.target.tagName !== "NAV" &&
    navToggler.getAttribute("aria-expanded") === "true"
  )
    navToggler.click();
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector("[data-filter].active").classList.remove("active");
    e.target.classList.add("active");
  });
});

// activate mixitup filter to the porofolio section
const mixer = mixitup(".ourwork-gallery", {
  selectors: {
    target: ".ourwork-gallery > div",
  },
});
