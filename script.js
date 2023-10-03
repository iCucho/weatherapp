// async function loadImages(imageUrls) {
//     const container = document.getElementById('imageContainer');

//     for (let url of imageUrls) {
//         try {
//             const response = await fetch(url);

//             if (response.ok) {
//                 const blob = await response.blob();
//                 const img = document.createElement('img');
//                 img.src = URL.createObjectURL(blob);

//                 container.appendChild(img);
//                 console.log(`${url} - Loaded successfully!`);
//             } else {
//                 console.log(`${url} - Failed to load.`);
//             }
//         } catch (error) {
//             console.log(`${url} - Failed to load. Error: ${error}`);
//         }
//     }
// }

// const imageUrls = [
//     'https://picsum.photos/200?1',
//     'https://picsum.photos/200?2',
//     'https://picsum.photos/200?3'
// ];

// loadImages(imageUrls);

// const cityName = 'London';
// async function fetchWeather(cityName) {
//   const apiKey = 'bb9581510a19b40560611638945c7bfd';
//   const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

//   try {
//     const response = await fetch(endpoint);
//     const data = await response.json();
//     if (data.cod !== 200) {
//       throw new Error(data.message);
//     }
//     console.log(
//       `The weather in ${data.name} is ${data.weather[0].description} with a temperature of ${data.main.temp}°C`
//     );
//   } catch (error) {
//     console.log(`Failed to fetch the weather data: ${error.message}`);
//   }
// }
// fetchWeather(cityName);

document.addEventListener('DOMContentLoaded', event => {
  document.getElementById('goButton').addEventListener('click', function () {
    const cityName = document.getElementById('Name').value;
    fetchWeather(cityName);
  });
});

async function fetchWeather(cityName) {
  const apiKey = '963239b8c8ded31bffc9947bb52b85bc'; // Make sure this is your API Key
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
