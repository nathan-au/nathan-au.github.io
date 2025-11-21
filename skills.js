const skillCategories = [
    {
        category: "Languages",
        skills: [
            "Python",
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "C++",
            "Java",
        ]
    },
    {
        category: "Mobile",
        skills: [
            "Swift",
            "SwiftUI",
            "Dart",
            "Flutter",

        ]
    },
    {
        category: "Libraries + Frameworks",
        skills: [
            "Pandas",
            "NumPy",
            "Vue.js",
            "FastAPI",
            "TailwindCSS",
            "Playwright",
            "Pytesseract",
            "PyMuPDF",
            "Matplotlib",
            "jQuery",
        ]
    },
    {
        category: "Database",
        skills: [
            "SQLModel",
            "SQLite",
            "Pydantic",
            "SQL",
            "MySQL",
            "Firebase",
            "Supabase",

        ]
    },
    {
        category: "AI + ML",
        skills: [
            "Vertex AI",
            "FinBERT",
            "Ollama",
        ]
    },
    {
        category: "API",
        skills: [
            "Reddit JSON API",
            "yfinance",
            "Google OAuth API",
            "Concordia University API"
        ]
    },
    {
        category: "Tools",
        skills: [
            "Git + GitHub",
            "SolidWorks",
            "KiCad",
            "Arduino"
        ]
    },
];

const skillsContainer = document.getElementById('skills-container')

skillCategories.forEach(skillCategory => {

    let skillsHTML = ""
    skillCategory.skills.sort()
    skillCategory.skills.forEach(skill => {
        skillsHTML += "<div class=\"kbd kbd-xl\">" + skill + "</div>"
    })

    const skillCategorySection = document.createElement("div")
    skillCategorySection.className = "card bg-base-100 card-lg sm:w-256 md:w-128 lg:w-128 shadow-lg"
    skillCategorySection.innerHTML = `
        <div class="card-body">
            <h2 class="card-title text-info text-2xl">${skillCategory.category}</h2>
            <div class="flex flex-row gap-2 my-2 flex-wrap">
                ${skillsHTML}
            </div>
        </div>
    `
    skillsContainer.appendChild(skillCategorySection)

})