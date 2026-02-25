
import { type Bird, type Plant } from "../models/types"
import { getNatureImages } from "../services/inaturalist";

const wildlifeCards = document.getElementById("wildlifeCards");
const plantCards = document.getElementById("plantCards")

export const wildlifeCardsFunction = async (birds: Bird[]) => {
    for(const bird of birds.slice(0,3)) {
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const img = document.createElement("img")
        const card = document.createElement("div")
        const imageUrl = await getNatureImages(bird.name) 
    img.src = imageUrl
    if (!imageUrl) {
      continue // hoppa över detta kort i loopen
  }
    title.textContent = bird.name
    description.textContent = bird.description

   card.appendChild(img)
   card.appendChild(title)
   card.appendChild(description)
   wildlifeCards?.appendChild(card)

   card.classList.add("card")

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible")
  })
})
observer.observe(card)

    }

    console.log("birds", birds)
}

export const plantCardsFunction = async (plants: Plant[]) => {
    for(const plant of plants.slice(0,5)) {
    const title = document.createElement("h3")
    const description = document.createElement("p")
    const img = document.createElement("img")
    const card = document.createElement("div")
    const imageUrl = await getNatureImages(plant.name) 
    
    img.src = imageUrl
    if (imageUrl) img.src = imageUrl
    if (!imageUrl) {
      continue // hoppa över detta kort i loopen
  }
    title.textContent = plant.name
    description.textContent = plant.description
    
    
   

    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(description)
    
    plantCards?.appendChild(card)

    }
        
    

  
    
}