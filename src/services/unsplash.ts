
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getMoodImage = async (searchQuery: string) => {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${API_KEY}`)
  const data = await response.json()

    if (!data.results.length) {
    return { url: "", photographer: "", photographerLink: ""} 
}
  const index = Math.floor(Math.random()* data.results.length)
    if (!data.results?.[index]?.urls) {
    return { url: "", photographer: "", photographerLink: "" }
}
console.log(data.results[index].user.links.html)
  const url = data.results[index].urls.regular
  const photographer = data.results[index].user.name
  const photographerLink = data.results[index].user.links.html

  return {url, photographer, photographerLink}

 
}