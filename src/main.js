const APIKEY = '631b27773f71433e9cc143604241401'

const img = document.querySelector('img');

function fetchCurrentWeather(location) {
  fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${location}`, {
    mode: 'cors'
  })
  .then((response) => { return response.json() })
  .then((response) => {
    displayResult(response.current.condition.text)
  })
  .catch(() => {
    console.log('Error - poor data supplied')
  })
}

fetchCurrentWeather('London');
