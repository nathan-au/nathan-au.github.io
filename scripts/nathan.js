const nathan_assets = [
    { 
        path: "assets/nathan/worlds.JPG", 
        alt: "Nathan at Worlds" 
    },
    { 
        path: "assets/nathan/camel.JPG", 
        alt: "Nathan on camel" 
    },
    { 
        path: "assets/nathan/motorcycle.JPG", 
        alt: "Nathan with motorcycle" 
    },
    { 
        path: "assets/nathan/snowboard.JPG", 
        alt: "Nathan on snowboard" 
    }
]

const nathanContainer = document.getElementById("nathan-container")

nathan_assets.sort(() => Math.random() - 0.5);

let imagesHTML = ""
nathan_assets.forEach(asset => {
    imagesHTML += `<img src="${asset.path}" alt="${asset.alt}"/>`
})

nathanContainer.innerHTML = imagesHTML