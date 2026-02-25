

    export const getNatureImages = async (name: string) => {
        const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${name}`);
        const data = await response.json()
         if(!data.results.length) return "";
        const index = Math.floor(Math.random() * data.results.length)
        if(!data.results[index].default_photo) return "";
        return data.results[index].default_photo.medium_url

    }
