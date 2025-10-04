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

    document.querySelectorAll(".modal").forEach(
        element => {
            element.classList.toggle("modal-dark-mode");
        }
    );

    var darkModeIcon = document.getElementById("dark-mode-icon");
    var lightModeIcon = document.getElementById("light-mode-icon");
    
    darkModeIcon.classList.toggle("hide-element");
    lightModeIcon.classList.toggle("hide-element");
}


function showModal(item) {
    document.getElementById("modal-overlay").style.display = "block";
    const modal = document.getElementById(item);
    modal.style.display = "block";
    document.body.classList.add("modal-overlay-active"); // Disables interaction with other elements

    // Reset scroll position
    modal.scrollTop = 0;
}
function hideModal() {
    document.getElementById("modal-overlay").style.display = "none";
    document.querySelectorAll(".modal").forEach(
        element => {
            element.style.display = "none";
        }
    );
    document.body.classList.remove("modal-overlay-active"); // Re-enables interaction
    document.getElementById("email-copied").style.display = "none";

    
}

function copyEmail() {
    navigator.clipboard.writeText("im.nathanau@gmail.com");
    document.getElementById("email-copied").style.display = "block";
    var minecraft_xp = new Audio('./assets/minecraft_xp.mp3');
    minecraft_xp.play();
}

// Add this once, ideally at the end of your script.js
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        hideModal();
    }
});