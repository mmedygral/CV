const hamburger = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active")
});