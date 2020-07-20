const getCurrentDate = () => {
   const dateHolder = document.querySelector('.date__date')
   return dateHolder.textContent = new Date().toLocaleDateString([], {
      year: "numeric",
      weekday: "short",
      month: "short",
   })
}

const unixTimeForHuman = (...Unixtimes) => {
   return [...Unixtimes].map(time => {
      const miliseconds = time * 1000
      return new Date(miliseconds).toLocaleTimeString([],{
         hour: '2-digit',
         minute: '2-digit'
      })
   })
}

const getCurrentTime = () => {
   const timeHolder = document.querySelector('.date__time')
   return timeHolder.textContent = new Date().toLocaleTimeString([],{
      hour: '2-digit',
      minute: '2-digit'
   })
}

export {getCurrentDate, getCurrentTime,unixTimeForHuman}