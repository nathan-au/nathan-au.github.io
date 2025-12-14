const experiences = [
    {
        role: "Mobile Application Developer",
        organization: "Google Developer Group on Campus Concordia University",
        details: [
            "Earned team recognition for Best UI/UX, Best Presentation, and 2nd Place Winning Team.",
            "Collaborated in a 4-person team to plan, design, and develop Amicae: an app connecting students with peers, study spots, and events (see Projects).",
            "Applied Agile methodology through 2-week Scrum sprints to prioritize high-impact tasks, develop features iteratively, and incorporate user feedback.",
            "Pitched the app at Flutter Montr&eacute;al and Concordia University to 100+ people and produced the official launch video to highlight core functionality."
        ],
        start_date: "Nov. 2024",
        end_date: "Apr. 2025",
        location: "Hybrid / Montr&eacute;al, QC",
        logo_path: "./assets/logos/gdgoc_logo.png"
    },
    {
        role: "Engineering Intern - Hardware & Electronics",
        organization: "Renaissance Network Reinvent",
        details: [
            "Engaged in the full product repair cycle: testing -> debugging -> repair -> assembly -> quality control, while adhering to ESD safety protocols",
            "Debugged and repaired 200+ units (e.g., circuit boards, server fans, power supplies) using electronic test instruments and component-level soldering techniques.",
            "Reduced material costs by salvaging 75+ microchips and various electronic components from unrepairable circuit boards.",
            "Managed inventory of 1,000+ repair components using barcode-enabled data capture and Excel-driven tracking."
        ],
        start_date: "Sep. 2023",
        end_date: "Feb. 2024",
        location: "Ottawa, ON",
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
