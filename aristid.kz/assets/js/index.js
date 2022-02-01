let mainNav = document.querySelector(".after-header");
let header_placeholder = document.querySelector(".header-placeholder");
let header = document.querySelector("header");

window.addEventListener("scroll", ev => {
  const headerCoords = header.getBoundingClientRect();
  const navCoords = mainNav.getBoundingClientRect();

  if (window.pageYOffset > headerCoords.height) {
    mainNav.parentElement.classList.add("fixed-header");
    header_placeholder.style.height = navCoords.height + "px";
  } else {
    mainNav.parentElement.classList.remove("fixed-header");
  }
});
