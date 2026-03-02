
const API_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY

export const getMoodImage = async (searchQuery: string) => {

  const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${API_KEY}`)
  const data = await response.json()

  const result = data.results?.[0]

  return {
    url: result?.urls?.regular ?? "",
    photographer: result?.user?.name ?? "",
    photographerLink: result?.user?.links?.html ?? ""
  }
} 
