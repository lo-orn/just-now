

    export const getBirdImage = async (name: string) => {
        const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${name}`)
        const data = await response.json()
        if (!data.results[0]?.default_photo) {
            return ""
        }
       return data.results[0].default_photo.medium_url
    }

    export const getPlantImage = async (name: string) => {
        const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${name}`)
        const data = await response.json()

        if (!data.results[0]?.default_photo) {
            return "" // tom sträng om ingen bild finns
        }
        return data.results[0].default_photo.medium_url
   
    }
