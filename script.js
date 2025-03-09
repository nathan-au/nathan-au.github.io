function toggleDarkMode() {
    document.querySelectorAll(".card").forEach(
        element => {
            element.classList.toggle("card-dark-mode");
        }
    );

    document.body.classList.toggle("body-dark-mode");

    document.querySelectorAll(".invertible-logo").forEach(
        element => {
            element.classList.toggle("invert-colors");
        }
    );
}

function showEmailOverlay() {
    document.getElementById("email-overlay").style.display = "block";
    document.getElementById("email-envelope").style.display = "block";
    document.body.classList.add("email-overlay-active"); // Disables interaction with other elements

}
function hideEmailOverlay() {
    document.getElementById("email-overlay").style.display = "none";
    document.getElementById("email-envelope").style.display = "none";
    document.body.classList.remove("email-overlay-active"); // Re-enables interaction
    

}