const hamburger = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active")
});

const progressBar = document.getElementsByClassName("content")[0];


let obj = setInterval(interval,10)


function interval(){
    const scrolled = window.scrollY;
    if(scrolled > 2500){
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue("--width"))
    progressBar.style.setProperty("--width", width + 0.5)
    if(width >= 60){
        clearInterval(obj)
    }}
}



