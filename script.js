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
function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu) {
        dropdownMenu.classList.toggle("show");
        logDebug("Dropdown menu toggled");
    }
}
function toggleTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    document.body.classList.toggle("dark");
    const darkModeOn = document.body.classList.contains("dark");
    if (themeToggle) {
        if (darkModeOn) {
            themeToggle.innerHTML = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.innerHTML = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    }
    logDebug(
        darkModeOn
        ? "Dark mode turned on"
        : "Light mode turned on"
    );
}
function loadTheme() {
    const themeToggle = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        if(themeToggle){
            themeToggle.innerHTML = "☀️ Light Mode";
        }
        logDebug("Saved dark mode loaded");
    }
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
    if(firstProject){
        firstProject.classList.toggle("styled-feature");
        logDebug("Project card style changed");
    } else {
        logDebug("No project card found");
    }
}
function smoothScroll(){
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function(event){
            event.preventDefault();
            const section = document.querySelector(
                this.getAttribute("href")
            );
            if(section){
                section.scrollIntoView({
                    behavior:"smooth"
                });
            }
        });
    });
    logDebug("Smooth scrolling enabled");
}
window.onload = function(){
    updateHeadingText();
    smoothScroll();
    loadTheme();
    logDebug("Page loaded successfully");
};
const menuButton = document.getElementById("menu-toggle");
if(menuButton){
    menuButton.onclick = toggleMenu;
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

function settingsMessage(message) {
    alert(message);
}


function openSettingsPrivacy() {
    settingsMessage("Opening Settings & Privacy");
}


function openSecurity() {
    settingsMessage("Opening Security Settings");
}


function openHelpSupport() {
    settingsMessage("Opening Help & Support");
}


function openHelpCenter() {
    settingsMessage("Opening Help Center");
}


function openContactSupport() {
    settingsMessage("Opening Contact Support");
}


function reportProblem() {
    settingsMessage("Report a Problem page opened");
}


function openAbout() {
    settingsMessage("About this website");
}


function openTerms() {
    settingsMessage("Opening Terms of Service");
}


function openPrivacyPolicy() {
    settingsMessage("Opening Privacy Policy");
}


function openFeedback() {
    settingsMessage("Opening Feedback Form");
}


function logout() {
    let confirmLogout = confirm("Are you sure you want to log out?");

    if(confirmLogout){
        alert("You have been logged out");
    }
}


const privacyButton = document.getElementById("privacy-btn");
if(privacyButton){
    privacyButton.onclick = openSettingsPrivacy;
}


const securityButton = document.getElementById("security-btn");
if(securityButton){
    securityButton.onclick = openSecurity;
}


const supportButton = document.getElementById("support-btn");
if(supportButton){
    supportButton.onclick = openHelpSupport;
}


const helpButton = document.getElementById("help-btn");
if(helpButton){
    helpButton.onclick = openHelpCenter;
}


const contactButton = document.getElementById("contact-btn");
if(contactButton){
    contactButton.onclick = openContactSupport;
}


const reportButton = document.getElementById("report-btn");
if(reportButton){
    reportButton.onclick = reportProblem;
}


const aboutButton = document.getElementById("about-btn");
if(aboutButton){
    aboutButton.onclick = openAbout;
}


const termsButton = document.getElementById("terms-btn");
if(termsButton){
    termsButton.onclick = openTerms;
}


const privacyPolicyButton = document.getElementById("privacy-policy-btn");
if(privacyPolicyButton){
    privacyPolicyButton.onclick = openPrivacyPolicy;
}


const feedbackButton = document.getElementById("feedback-btn");
if(feedbackButton){
    feedbackButton.onclick = openFeedback;
}
