import { fetchNatureInfo } from "./services/groq";
import { getCity } from "./services/geolocation";
import { getMoodImage } from "./services/unsplash";
import "./style.css";
import { plantCardsFunction, wildlifeCardsFunction } from "./ui/cards";
import { renderCurrentMood } from "./ui/currentMood";
import { renderHero } from "./ui/hero";

const city = await getCity();
const date = new Date().toLocaleDateString("en-EN"); 

export const loadNatureData = async (city: string) => {
  const natureData = await fetchNatureInfo(city, date);
  wildlifeCardsFunction(natureData.birds);
  plantCardsFunction(natureData.plants);
  const moodImage = await getMoodImage(natureData.imageQuery);
  renderCurrentMood(
    natureData.moodTitle,
    natureData.description,
    moodImage.url,
    moodImage.photographer
  );
  
}

renderHero(city);
loadNatureData(city)




