function logDebug(message) {
    console.log("[Portfolio Debug] " + message);
}
function updateHeadingText() {
    const heading = document.querySelector(".brand-text h1");

    if (heading) {
        heading.innerText = "KRISTIAN DAVE ALLI";
        logDebug("Heading text updated");
    }
}
function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    document.body.classList.toggle("dark-mode");
    const darkModeOn = document.body.classList.contains("dark-mode");
    if (themeToggle) {
        themeToggle.setAttribute(
            "aria-label",
            darkModeOn ? "Switch to light mode" : "Switch to dark mode"
        );
        themeToggle.innerHTML = darkModeOn ? "☀️" : "☰";
    }
    logDebug(
        darkModeOn 
        ? "Dark mode turned on" 
        : "Light mode turned on"
    );
}
function showPersonalInfo() {
    const infoBox = document.getElementById("info-box");
    if (!infoBox) {
        logDebug("Info box not found");
        return;
    }
    const isHidden = infoBox.hasAttribute("hidden");
    if (isHidden) {
        infoBox.innerHTML = `
            Name: Kristian Dave Alli <br>
            Course: BS Information Technology <br>
            Year Level: 3rd Year <br>
            School: Holy Child Central Colleges Incorporated
        `;
        infoBox.removeAttribute("hidden");
        logDebug("Personal information displayed");
    } else {
        infoBox.setAttribute("hidden", "");
        logDebug("Personal information hidden");
    }
}
function changeElementStyle() {
    const firstProject = document.querySelector(".project-card");
    if (firstProject) {
        firstProject.classList.toggle("styled-feature");
        logDebug("Project card style changed");
    } else {
        logDebug("No project card found");
    }
}
function smoothScroll() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event){
            event.preventDefault();
            const section = document.querySelector(
                this.getAttribute("href")
            );
            if(section){
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
    logDebug("Smooth scrolling enabled");
}
window.onload = function () {
    alert("Welcome to my portfolio!");
    updateHeadingText();
    smoothScroll();
    logDebug("Page loaded successfully");
}
const themeButton = document.getElementById("theme-toggle");
if(themeButton){
    themeButton.onclick = toggleTheme;
}
const infoButton = document.getElementById("show-info-btn");
if(infoButton){
    infoButton.onclick = showPersonalInfo;
}
const styleButton = document.getElementById("change-style-btn");
if(styleButton){
    styleButton.onclick = changeElementStyle;
}