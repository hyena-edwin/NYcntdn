const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const year = document.querySelector('#year')
const loading = document.querySelector('#loading')

const currentYear = new Date().getFullYear()
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

// Set background year
year.innerText = currentYear + 1

// Update countdown time
function updateCountdown() {
  const currentTime = new Date()
  const diff = newYearTime - currentTime

  const day = Math.floor(diff / 1000 / 60 / 60 / 24) // 초(밀리초) / 분(60초) / 시(60분) / 일(24)
  const hour = Math.floor(diff / 1000 / 60 / 60 ) % 24
  const min = Math.floor(diff / 1000 / 60 ) % 60
  const sec = Math.floor(diff / 1000) % 60
  
  // Add values to DOM
  days.innerText = day 
  hours.innerText = hour < 10 ? '0' + hour : hour;
  minutes.innerText = min < 10 ? '0' + min : min;
  seconds.innerText = sec < 10 ? '0' + sec : sec;
}

// Show spinner before countdown
setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex'
}, 1500)

// Run every second
setInterval(updateCountdown, 1000)

