const links = [
    { 
        href: "https://www.linkedin.com/in/-nathanau/", 
        src: "https://img.icons8.com/?size=100&id=446&format=png&color=ffffff", 
        alt: "LinkedIn" 
    },
    { 
        href: "https://www.github.com/nathan-au", 
        src: "https://img.icons8.com/?size=100&id=467&format=png&color=ffffff", 
        alt: "GitHub" 
    },
    { 
        href: "https://raw.githubusercontent.com/nathan-au/resume/main/Nathan_Au_Resume.pdf", 
        src: "https://img.icons8.com/?size=100&id=6459&format=png&color=ffffff", 
        alt: "Resume" 
    },
    { 
        href: "mailto:im.nathanau@gmail.com", 
        src: "https://img.icons8.com/?size=100&id=492&format=png&color=ffffff", 
        alt: "Email" 
    }
]

const linksContainer = document.getElementById("links-container")

let linksHTML = ""
links.forEach(link => {
    linksHTML += `
        <a href="${link.href}" target="_blank">
            <img class="w-15 h-15 hover:scale-115 transition-transform duration-200" src="${link.src}" alt="${link.alt}">
        </a>
    `
})

linksContainer.innerHTML = linksHTML