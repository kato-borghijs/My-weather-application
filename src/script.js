// date display function
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

// current temperature function
function showCurrentWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;
}

// current temperature function current location
function showCurrentWeatherCurrentLocation(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let location = response.data.name;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = `${location}`;
}

// current temperature function Berlin
function showCurrentWeatherBerlin(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = "Berlin";
}

// current temperature function Brussels
function showCurrentWeatherBrussels(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = "Brussels";
}

// current temperature function Luxemburg
function showCurrentWeatherLuxemburg(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = "Luxemburg";
}

// current temperature function Paris
function showCurrentWeatherParis(response) {
  let temperature = Math.round(response.data.main.temp);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = "Paris";
}

// city display function
function enterCity(event) {
  event.preventDefault();
  let cityTitle = document.querySelector("#city-input");
  let cityDisplay = document.querySelector("h1");
  cityDisplay.innerHTML = `${cityTitle.value}`;
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityTitle.value}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeather);
}

// berlin display function
function clickBerlin(event) {
  event.preventDefault();
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeatherBerlin);
}

// brussels display function
function clickBrussels(event) {
  event.preventDefault();
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=brussels&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeatherBrussels);
}

// luxemburg display function
function clickLuxemburg(event) {
  event.preventDefault();
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=luxemburg&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeatherLuxemburg);
}

// paris display function
function clickParis(event) {
  event.preventDefault();
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeatherParis);
}

// click berlin link
let berlinLink = document.querySelector("#berlin");
berlinLink.addEventListener("click", clickBerlin);

// click brussels link
let brusselsLink = document.querySelector("#brussels");
brusselsLink.addEventListener("click", clickBrussels);

// click luxemburg link
let luxemburgLink = document.querySelector("#luxemburg");
luxemburgLink.addEventListener("click", clickLuxemburg);

// click paris link
let parisLink = document.querySelector("#paris");
parisLink.addEventListener("click", clickParis);

// change to celcius function
function clickCelcius(event) {
  event.preventDefault();
  let currentCelcius = document.querySelector("h2");
  currentCelcius.innerHTML = "13˚C";
}

// change to fahrenheit function
function clickFahrenheit(event) {
  event.preventDefault();
  let currentFahrenheit = document.querySelector("h2");
  currentFahrenheit.innerHTML = "66˚F";
}

//date variables
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//city variables
let cityInput = document.querySelector("#city-form");
cityInput.addEventListener("submit", enterCity);

// celsius variables
let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", clickCelcius);

// fahrenheit variables
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", clickFahrenheit);

// current location display function
function showPosition(location) {
  let longitude = location.coords.longitude;
  let latitude = location.coords.latitude;
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeatherCurrentLocation);
}

// current location variable
function showCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

// click current location link
let currentLocationLink = document.querySelector("#current-location");
currentLocationLink.addEventListener("click", showCurrentPosition);
