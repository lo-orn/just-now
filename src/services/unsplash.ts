
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getMoodImage = async (searchQuery: string) => {

  const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${API_KEY}`)
  const data = await response.json()

    if (!data.results.length) {
    return { url: "", photographer: "", photographerLink: ""} 
}

  const url = data.results[0].urls.regular
  const photographer = data.results[0].user.name
  const photographerLink = data.results[0].user.links.html

  return {url, photographer, photographerLink}
} 
