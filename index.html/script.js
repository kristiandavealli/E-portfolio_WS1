function logDebug(message) {
    console.log("[Portfolio Debug] " + message);
}

function updateHeadingText() {
    const heading = document.getElementById("main-heading");
    heading.innerText = "Welcome to Jade's Portfolio";
    logDebug("Heading text changed");
}

function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    document.body.classList.toggle("dark-mode");

    const darkModeOn = document.body.classList.contains("dark-mode");
    themeToggle.setAttribute(
        "aria-label",
        darkModeOn ? "Switch to light mode" : "Switch to dark mode"
    );
    logDebug(darkModeOn ? "Dark mode turned on" : "Light mode turned on");
}

function showPersonalInfo() {
    const infoBox = document.getElementById("info-box");
    const isHidden = infoBox.hasAttribute("hidden");

    if (isHidden) {
        infoBox.innerHTML = "Name: Jade Jardenico<br>Age: 19 years old<br>Course: BS Information Technology";
        infoBox.removeAttribute("hidden");
        logDebug("Personal information displayed");
    } else {
        infoBox.setAttribute("hidden", "");
        logDebug("Personal information hidden");
    }
}

function changeElementStyle() {
    const firstProject = document.querySelector(".project-card");
    firstProject.classList.toggle("styled-feature");
    logDebug("Project card style changed");
}

window.onload = function () {
    alert("Welcome to my portfolio!");
    updateHeadingText();
    logDebug("Page loaded successfully");
};

document.getElementById("theme-toggle").onclick = toggleTheme;
document.getElementById("show-info-btn").onclick = showPersonalInfo;
document.getElementById("change-style-btn").onclick = changeElementStyle;
