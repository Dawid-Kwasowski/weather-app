export  default () => {
   // function which returns the current device position
   const getPosition = (callback) => {
      return navigator.geolocation.getCurrentPosition(succes => {
         return callback(succes)
      })
   }

   return new Promise((resolve,reject) => {
      // shordhand if statement which checking geoloc support 
      return navigator.geolocation ? getPosition(resolve) : console.error('The Geolocation has not supported at this browser')
   })
   .then(response => {
      const lat = response.coords.latitude
      const lon = response.coords.longitude

      const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b48a6bae4902b0c459a89225cd3615a`
      fetch(apiCall)
      .then(response => response.json())
      .then(data => {
         const cityName = document.querySelector('.localization__city')
         const countryName = document.querySelector('.localization__country')
         return (
            cityName.textContent = data.name,
            countryName.textContent = data.sys.country
         )
      })
   })
}