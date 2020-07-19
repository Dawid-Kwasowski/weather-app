import Position from './components/Position.js'
import { getCurrentDate, getCurrentTime } from './components/DateTime.js'
import { getForecast } from './components/Forecast.js'
addEventListener('DOMContentLoaded', () => {
   Position()
   getForecast()
   getCurrentDate()
   setInterval(getCurrentTime,1000)
})
   
   