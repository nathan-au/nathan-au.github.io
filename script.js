function toggleDarkMode() {
    document.querySelectorAll(".portfolio-container").forEach(
        element => {
            element.classList.toggle("dark-mode");
        }
    );
    document.body.classList.toggle("dark-mode");
    // document.getElementById("github-logo").classList.toggle("invert-colors");
    document.querySelectorAll(".invertible-logo").forEach(
        element => {
            element.classList.toggle("invert-colors");
        }
    );
}
