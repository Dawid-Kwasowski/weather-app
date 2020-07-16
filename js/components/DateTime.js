const getCurrentDate = () => {
   const dateHolder = document.querySelector('.date__date')
   return dateHolder.textContent = new Date().toLocaleDateString([], {
      year: "numeric",
      weekday: "short",
      month: "short",
   })
}

const getCurrentTime = () => {
   const timeHolder = document.querySelector('.date__time')
   return timeHolder.textContent = new Date().toLocaleTimeString([],{
      hour: '2-digit',
      minute: '2-digit'
   })
}

export {getCurrentDate, getCurrentTime}