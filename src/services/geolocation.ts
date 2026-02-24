
export const getLocation = async() => {
    return new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

export const getCity = async () => {
 

     const position = await getLocation()
     const lat = position.coords.latitude;
     const lon = position.coords.longitude;

     const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`, {
         headers: {
             "User-Agent": "JustNow/1.0"
         }
     });
     const data = await response.json();
     return data.address.city

}


