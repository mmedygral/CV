const hamburger = document.getElementsByClassName("hamburger")[0];
const navbar = document.getElementsByClassName("nav-menu")[0];

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active")
});


document.addEventListener("scroll", (event) => {
    const skillSection = document.getElementById("skill-section");
    if(window.scrollY+window.innerHeight >= skillSection.offsetTop+skillSection.offsetHeight/1.2) {
        const values = {
            progress_html: 75,
            progress_css: 60,
            progress_js: 25,
            progress_jira: 80,
            progress_sql: 70,
            progress_python: 35,
            progress_selenium: 50,
            progress_git:20
        }
        const progresses = document.getElementsByClassName("progress-content")
        for (const progress of progresses) {
            progress.setAttribute("style", `width: ${values[progress.id]}%`)
        }
    }
});