const educations = [
    {
        degree: "Software Engineering",
        school: "Concordia University",
        details: [
            "Bachelor of Engineering",
            "Co-op"
        ],
        gpa: "3.4/4.0",
        clubs: [
            "Google Developer Group on Campus Concordia University (GDGoC Concordia)",
            "Software Engineering and Computer Science Society (SCS)",
            "Quantitative Research and Competitions Club (QUARCC)"
        ],
        relevant_courses: [
            "Object-Oriented Programming I",
            "Professional Practice and Responsibility",
            "Mathematics for Computer Science"
        ],
        start_date: "2024",
        end_date: "2028 (expected)",
        location: "Montr&eacute;al, QC",
        logo_path: "./assets/icons/concordia_logo.png"
    },
    {
        degree: "Ontario Secondary School Diploma",
        school: "West Carleton Secondary School",
        details: [
            "Information and Communications Technology Specialist High Skills Major",
            "French Immersion Certificate (CECR DELF B2)",
            "Co-op",
            "Ontario Scholar Award",
            "Honour Roll"
        ],
        gpa: "3.6/4.0",
        clubs: [
            "Boys Varsity Lacrosse Team",
            "Link Crew",
            "Chess Club"
        ],
        relevant_courses: [
            "Computer Science (12)",
            "Computer Engineering Technology (11 & 12)",
            "Introduction to Computer Science (11)",
            "Computer Technology and the Skilled Trades (10)"
        ],
        start_date: "2020",
        end_date: "2024",
        location: "Ottawa, ON",
        logo_path: "./assets/icons/wcss_logo.png"
    },

]

const educationContainer = document.getElementById('education-container')

educations.forEach(education => {

    let detailsString = education.details.join(", ")
    let clubsString = education.clubs.join(", ")
    let relevantCoursesString = education.relevant_courses.join(", ")

    const educationCard = document.createElement("div")
    educationCard.className = "card bg-base-100 card-lg w-256 shadow-lg"
    educationCard.innerHTML = `
        <div class="card-body">
            <div class="flex justify-center mb-2">
                <img class="w-32 shadow-lg" src="${education.logo_path}" alt="${education.school}"/>
            </div>
            <h2 class="card-title text-info text-2xl">${education.degree} @ ${education.school}</h2>
            <ul class="list-disc list-inside">
                <li>${detailsString}</li>
                <li>GPA: ${education.gpa}</li>
                <li>Clubs: ${clubsString}</li>
                <li>Relevant Courses: ${relevantCoursesString}</li>
            </ul> 
            <div class="flex flex-row gap-2 my-2">
                <span class="badge badge-soft badge-info shadow-lg">${education.start_date} - ${education.end_date}</span>
                <span class="badge badge-soft badge-info shadow-lg">${education.location}</span>
            </div>
        </div>
    `
    educationContainer.appendChild(educationCard)
    
})
