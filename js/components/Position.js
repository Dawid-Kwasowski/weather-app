import {displayForecast} from './Forecast.js'

export  default () => {
   // function which returns the current device position
   const getPosition = (callback) => {
      return navigator.geolocation.getCurrentPosition(succes => {
         return callback(succes)
      })
   }

   return new Promise((resolve,reject) => {
      // shordhand if statement which checking geoloc support 
      return navigator.geolocation ? getPosition(resolve) : console.error('The Geolocation is not supported at this browser')
   })
   .then(response => {
      const lat = response.coords.latitude
      const lon = response.coords.longitude

      const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8b48a6bae4902b0c459a89225cd3615a&units=metric`
      fetch(apiCall)
      .then(response => response.json())
      .then(data =>  displayForecast(data))
   })
}