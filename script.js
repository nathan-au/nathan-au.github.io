function toggleDarkMode() {
    document.querySelectorAll(".project-card, .experience-card, .education-card").forEach(
        element => {
            element.classList.toggle("container-dark-mode");
        }
    );

    document.body.classList.toggle("body-dark-mode");

    document.querySelectorAll(".invertible-logo").forEach(
        element => {
            element.classList.toggle("invert-colors");
        }
    );
}
