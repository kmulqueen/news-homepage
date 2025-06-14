const hamburgerMenu = document.getElementById("hamburger-menu");
const closeMenu = document.getElementById("close-menu");
const navMenu = document.getElementById("nav");
const navItems = document.querySelectorAll(".nav-item");
const windowWidth = window.innerWidth;

/**
 * Toggles the nav menu visibility.
 *
 * @param {boolean} isOpen
 */
function toggleMenu(isOpen) {
  if (isOpen) {
    // Show nav and close button, hide hamburger
    hamburgerMenu.classList.add("hidden");
    hamburgerMenu.setAttribute("aria-hidden", "true");

    navMenu.classList.remove("hidden");
    navMenu.setAttribute("aria-hidden", "false");

    closeMenu.classList.remove("hidden");
    closeMenu.setAttribute("aria-hidden", "false");
  } else {
    // Hide nav and close button, show hamburger
    closeMenu.classList.add("hidden");
    closeMenu.setAttribute("aria-hidden", "true");

    navMenu.classList.add("hidden");
    navMenu.setAttribute("aria-hidden", "true");

    hamburgerMenu.classList.remove("hidden");
    hamburgerMenu.setAttribute("aria-hidden", "false");
  }
}

function handleMenuOpen() {
  toggleMenu(true);
}
function handleMenuClose() {
  toggleMenu(false);
}

/**
 * Displays the nav list or menu depending on the layout.
 *
 * @param {*} layout "nav" | "menu"
 */
function toggleNav(layout) {
  if (layout === "nav") {
    closeMenu.classList.add("hidden");
    closeMenu.setAttribute("aria-hidden", "true");
    hamburgerMenu.classList.add("hidden");
    hamburgerMenu.setAttribute("aria-hidden", "true");

    navMenu.classList.remove("hidden");
    navMenu.setAttribute("aria-hidden", "false");
    navMenu.classList.add("nav-desktop");
  } else {
    closeMenu.classList.add("hidden");
    closeMenu.setAttribute("aria-hidden", "true");
    hamburgerMenu.classList.remove("hidden");
    hamburgerMenu.setAttribute("aria-hidden", "false");

    navMenu.classList.add("hidden");
    navMenu.setAttribute("aria-hidden", "true");
    navMenu.classList.remove("nav-desktop");
  }
}

if (windowWidth >= 1280) {
  toggleNav("nav");
}

// Event listeners
hamburgerMenu.addEventListener("click", handleMenuOpen);
closeMenu.addEventListener("click", handleMenuClose);
navItems.forEach((item) => {
  item.addEventListener("click", handleMenuClose);
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1280) {
    toggleNav("nav");
  } else {
    toggleNav("menu");
  }
});
