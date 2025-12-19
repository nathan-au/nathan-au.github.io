const projects = [
    {
        name: "Reel Digest",
        image_path: "./assets/screens/reeldigest_screen.png",
        description: "Productivity tool for converting short form content into text summaries.",
        tech_stack: ["Python", "Ollama", "SQLite", "Telegram Bot API", "yt-dlp", "SpeechRecognition"],
        modal_id: "reeldigest_modal",
        git_repo: "https://github.com/nathan-au/reel-digest"
    },
    {
        name: "Instagram Opps v3",
        image_path: "./assets/screens/instagramoppsv3_screen.png",
        description: "Script for detecting your Instagram opps (people you follow that don't follow you back)",
        tech_stack: ["Python", "Playwright"],
        modal_id: "instagramoppsv3_modal",
        git_repo: "https://github.com/nathan-au/instagram-opps-v3"
    },
    {
        name: "WSB-BERT",
        image_path: "./assets/screens/wsbbert_screen.png",
        description: "NLP sentiment analysis for the craziest online trading community: r/WallStreetBets",
        tech_stack: ["Python", "FinBERT", "Reddit JSON API", "Ollama", "Hugging Face Transformers"],
        modal_id: "wsbbert_modal",
        git_repo: "https://github.com/nathan-au/wsb-bert"
    },
    {
        name: "MA Crossover Trading Model",
        image_path: "./assets/screens/macrossover_screen.png",
        description: "Algorithmic trading model that implements the moving average crossover strategy",
        tech_stack: ["Python", "yfinance", "Pandas", "Matplotlib"],
        modal_id: "macrossover_modal",
        git_repo: "https://github.com/nathan-au/ma-crossover"
    },
    {
        name: "RPG-Mini",
        image_path: "./assets/screens/rpgmini_screen.png",
        description: "End-to-end API framework for tax accounting automation.",
        tech_stack: ["Python", "SQLModel", "SQLite", "Ollama", "Pytesseract", "FastAPI", "pytest"],
        modal_id: "rpgmini_modal",
        git_repo: "https://github.com/nathan-au/rpg-mini"
    },
    {
        name: "PartCart",
        image_path: "./assets/screens/partcart_screen.png",
        description: "Web app for managing part requests and order logistics at computer repair companies",
        tech_stack: ["Vue.js", "Supabase", "TailwindCSS"],
        modal_id: "partcart_modal",
        git_repo: "https://github.com/nathan-au/part-cart"
    },
    {
        name: "Amicae",
        image_path: "./assets/screens/amicae_screen.jpg",
        description: "Cross-platform mobile app for social and academic networking at Concordia University.",
        tech_stack: ["Flutter", "Firebase", "Dart", "Vertex AI", "Concordia Open Data API", "flutter_map"],
        modal_id: "amicae_modal",
        git_repo: "https://github.com/nathan-au/amicae"
    },
    {   
        name: "West Carleton Grad System",
        image_path: "./assets/screens/gradd_screen.png",
        description: "Full-stack web app for creating and managing slideshows for graduation ceremonies.",
        tech_stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "SQL", "MySQL", "Google OAuth API", "jQuery", "TinyMCE"],
        modal_id: "gradd_modal",
        git_repo: "https://github.com/nathan-au/grad-d"
    }
]

const projectCardsContainer = document.getElementById('project-cards-container')
const projectModalsContainer = document.getElementById('project-modals-container')
const githubLogoSVG = "<svg aria-label=\"GitHub\" width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path fill=\"white\" d=\"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z\"></path></svg>"

projects.forEach(project => {

    let imageHTML = ""
    imageHTML = "<figure><img class=\"h-64\" src=\"" + project.image_path + "\" alt=\"" + project.name + "\"></figure>"

    let techStackHTML = ""
    project.tech_stack.sort()
    project.tech_stack.forEach(tech => {
        techStackHTML += "<span class=\"badge badge-soft badge-info shadow-lg\">" + tech + "</span>"
    })
    
    const projectCard = document.createElement("div")
    projectCard.className = "card bg-base-100 w-128 shadow-lg"
    projectCard.innerHTML = `
    
        ${imageHTML}
        <div class="card-body">
            <h2 class="card-title text-info">${project.name}</h2>
            <p>${project.description}</p>
            <div class="flex flex-row gap-2 my-2 flex-wrap">
                ${techStackHTML}
            </div>
            <div class="card-actions justify-end">
                <a href="${project.git_repo}" target="_blank">
                    <button class="btn bg-black text-white">
                        ${githubLogoSVG}
                        ${project.name} on GitHub
                    </button>
                </a>
                <!-- <label for="${project.modal_id}" class="btn btn-info">Explore ${project.name}</label> -->
            </div>
        </div>
    `
    projectCardsContainer.appendChild(projectCard)

    // const projectModal = document.createElement("div")
    // projectModal.innerHTML = `
    //     <input type="checkbox" id="${project.modal_id}" class="modal-toggle"/>
    //     <div class="modal" role="dialog">
    //         <div class="modal-box max-w-7xl">
    //             <div class="flex flex-col items-center gap-4">
    //                 <img class="w-256" src="${project.image_path}" alt="${project.name}"/>
    //                 <p class="text-3xl font-bold text-info">${project.name}</p>
    //                 <a href="${project.git_repo}" target="_blank">
    //                     <button class="btn bg-black text-white border-black">
    //                         ${githubLogoSVG}
    //                         ${project.name} on GitHub
    //                     </button>
    //                 </a>
    //                 <!-- <p>Check out the <a class="link link-secondary" href="${project.git_repo}/blob/main/README.md#demo-screenshots" target="_blank">README.md</a> for demo screenshots.</p> -->
    //             </div>
    //         </div>
    //         <label class="modal-backdrop" for="${project.modal_id}">Close</label>
    //     </div>
    // `
    // projectModalsContainer.appendChild(projectModal)

})