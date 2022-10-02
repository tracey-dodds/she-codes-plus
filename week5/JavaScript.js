let apiKey = "708ef12b3e0617a4c8a28e31ae3f4341";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric";

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
