import {unixTimeForHuman} from './DateTime.js'

const displayForecast = (data = {}) => {
   // Destructive api call
   const {
      sys: {
         country,
         sunrise,
         sunset
      }, weather: [{
         description,
         icon
      }], main:{
         temp,
      },name} = data
      
   const forecastContainer = document.querySelector('.forecast')
   const cityName = document.querySelector('.localization__city')
   const countryName = document.querySelector('.localization__country')

   cityName.textContent = name
   countryName.textContent = country
   
   //Regural func who returns a array of converted times 
   const [convertedSunrise,convertedSunset] = unixTimeForHuman(sunrise,sunset)

   forecastContainer.innerHTML = `
      <div class="forecast__weather">
         <img class="forecast__icon" src="./assets/animated/${icon}.svg" />
         <span class="forecast__temperature">
            ${Math.floor(temp)} &#176
         </span>
         <span class="forecast__description">
            ${description}
         </span>
      </div>
      <div class="sun">
         <span class="sun__pos"> - Sunrise: ${convertedSunrise}</span>
         <span class="sun__pos"> - Sunset: ${convertedSunset}</span>
      </div>
   `
}

const getForecast = () => {
   const form = document.querySelector('.form-group')
   const citySearch = document.querySelector('.form-group__search')
   
   form.addEventListener('submit', e => {
      e.preventDefault()
      const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch.value}&appid=8b48a6bae4902b0c459a89225cd3615a&units=metric`
      citySearch.value = ""
      fetch(apiCall)
      .then(response => response.json())
      .then(cityData => {
         return displayForecast(cityData)
      })
   })
}


export {getForecast,displayForecast}