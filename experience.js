const experiences = [
    {
        role: "Mobile Developer",
        organization: "GDGoC Concordia",
        details: [
            "Built Amicae, a cross-platform Flutter app that helps university students make connections, find study spots, and stay updated on campus events.",
            "Earned recognition at the project showcase for: Best UI/UX, Best Presentation, and 2nd Place Overall",
            "Worked with 4 other developers to complete the project goals."
        ],
        start_date: "Nov 2024",
        end_date: "Apr 2025",
        location: "Hybrid / Montreal, QC, Canada",
        logo_path: "./assets/logos/gdgoc_logo.png"
    },
    {
        role: "Engineering Intern",
        organization: "Renaissance Network Reinvent",
        details: [
            "Designed and implemented functionality tests for computer systems and network hardware.",
            "Worked across various teams to debug and resolve performance issues.",
            "Optimized inventory tracking and data management systems for import/export logistics."
        ],
        start_date: "Sep 2023",
        end_date: "Feb 2024",
        location: "Ottawa, ON, Canada",
        logo_path: "./assets/logos/renaissance_logo.jpg"

    },
]

const experienceContainer = document.getElementById('experience-container')

experiences.forEach(experience => {

    let detailsHTML = ""
    experience.details.forEach(detail => {
        detailsHTML += "<li>" + detail + "</li>"
    })

    const experienceCard = document.createElement("div")
    experienceCard.className = "card bg-base-100 card-lg w-256 shadow-lg"
    experienceCard.innerHTML = `
        <div class="card-body">
            <div class="flex justify-center mb-2">
                <img class="w-32 shadow-lg" src="${experience.logo_path}" alt="${experience.organization}"/>
            </div>
            <h2 class="card-title text-info text-2xl">${experience.role} @ ${experience.organization}</h2>
            <ul class="list-disc list-inside">
                ${detailsHTML}
            </ul> 
            <div class="flex flex-row gap-2 my-2">
                <span class="badge badge-soft badge-info shadow-lg">${experience.start_date} - ${experience.end_date}</span>
                <span class="badge badge-soft badge-info shadow-lg">${experience.location}</span>
            </div>
        </div>
    `
    experienceContainer.appendChild(experienceCard)
    
})
