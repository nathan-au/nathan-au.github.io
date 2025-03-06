function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    // document.getElementById("github-logo").classList.toggle("invert-colors");
    document.querySelectorAll(".invertible-logo").forEach(
        element => {
            element.classList.toggle("invert-colors");
        }
    );
}
