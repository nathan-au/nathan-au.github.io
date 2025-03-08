function toggleDarkMode() {
    document.querySelectorAll(".portfolio-container").forEach(
        element => {
            element.classList.toggle("dark-mode");
        }
    );
    document.body.classList.toggle("body-dark-mode");
    document.querySelectorAll(".invertible-logo").forEach(
        element => {
            element.classList.toggle("invert-colors");
        }
    );
}
