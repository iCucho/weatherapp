document.addEventListener('DOMContentLoaded', event => {
  document.getElementById('goButton').addEventListener('click', function () {
    const cityName = document.getElementById('Name').value;
    fetchWeather(cityName);
  });
});

async function fetchWeather(cityName) {
  const apiKey = '963239b8c8ded31bffc9947bb52b85bc';
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  const weatherDisplay = document.getElementById('weatherDisplay');

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    weatherDisplay.textContent = `The weather in ${cityName} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C`;
  } catch (error) {
    weatherDisplay.textContent = `Failed to fetch the weather data: ${error.message}`;
  }
}
