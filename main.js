import './style.css'

const menuToggleButton = document.getElementById("menu-toggle-btn");
const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");
const closeIcon = document.getElementById("close-icon");


menuToggleButton.addEventListener("click", function () {
    menu.classList.toggle("active"); // Toggle the 'active' class on the menu

    if (menu.classList.contains("active")) {
        // If the menu is active, show the close icon and hide the hamburger icon
        hamburgerIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        // If the menu is not active, show the hamburger icon and hide the close icon
        hamburgerIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
});