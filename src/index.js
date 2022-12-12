const button = document.getElementById('submit');
let fetchURL = '';
const weatherDisc = document.getElementById('weatherDisc');
const windSpeed = document.getElementById('windSpeed');
const tempH1 = document.getElementById('temp');
const humidity = document.getElementById('humidity');

const cityChosen = () => {
  const city = document.getElementById('inputWeather').value;
  fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84169de893f4def24d7209482a80603e`;
};

async function getWeather() {
  const response = await fetch(fetchURL);
  const weatherData = await response.json();
  weatherDisc.textContent = weatherData.weather[0].description;
  windSpeed.textContent = weatherData.wind.speed;
  const temp1 = weatherData.main.temp;
  console.log(temp1);
  const temp2 = Number(temp1) / 8.528125;
  tempH1.textContent = Math.trunc(temp2);
  humidity.textContent = weatherData.main.humidity;
  console.log(weatherData);
}

function generateWeather() {
}

button.addEventListener('click', () => {
  cityChosen();
  getWeather();
  generateWeather();
});

// weatherDisc windSpeed temp humidity
