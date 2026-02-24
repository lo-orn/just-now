import { loadNatureData } from "../main";

const locationDisplay = document.getElementById("locationDisplay")
const locationInput = document.getElementById("locationInput") as HTMLInputElement
const locationText = document.getElementById("locationText") as HTMLSpanElement

export let activeCity = "";

export const renderHero = (city: string) => {
    activeCity = city
    locationText.textContent = city
}

const closeInput = () => {
    locationInput?.classList.add("hidden")
    locationDisplay?.classList.remove("hidden")
}

locationText.addEventListener("click", () => {
    locationDisplay?.classList.add("hidden")
    locationInput?.classList.remove("hidden")
    locationInput?.focus()
})

locationInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
    closeInput();
    activeCity = locationInput.value
    document.getElementById("wildlifeCards")!.innerHTML = ""
    document.getElementById("plantCards")!.innerHTML = ""
    loadNatureData(activeCity)
    locationText.textContent = locationInput.value
    locationInput.value ="";
   
    }
    if (event.key === "Escape") {
    closeInput();
    }
})

locationInput?.addEventListener("blur", () => {
  closeInput();
    
})