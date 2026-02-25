

    export const getNatureImages = async (name: string) => {
        const response = await fetch(`https://api.inaturalist.org/v1/taxa?q=${name}`);
        const data = await response.json()
         if(!data.results.length) return "";
       
        if(!data.results[0].default_photo) return "";
        return data.results[0].default_photo.medium_url

    }
