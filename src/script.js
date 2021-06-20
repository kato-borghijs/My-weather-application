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

// date display function forecast
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[day];
}

// forecast function
function displayForecast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="row forecast">
        <div class="col-4">
          <p>${formatDay(forecastDay.dt)}</p>
        </div>
        <div class="col-4">
          <p class="temperature">${Math.round(forecastDay.temp.day)}˚C</p>
        </div>
        <div class="col-4">
          <img src="images/${
            forecastDay.weather[0].icon
          }.png" alt="sunny" class="forcast-image" />
        </div>
      </div>`;
    }
  });

  forecastElement.innerHTML = forecastHTML;
}

// get coordinates for forecast function
function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayForecastCurrentLocation(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = "";
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
      <div class="row forecast">
        <div class="col-4">
          <p>${formatDay(forecastDay.dt)}</p>
        </div>
        <div class="col-4">
          <p class="temperature">${Math.round(forecastDay.temp.day)}˚C</p>
        </div>
        <div class="col-4">
          <img src="images/${
            forecastDay.weather[0].icon
          }.png" alt="sunny" class="forcast-image" />
        </div>
      </div>`;
    }
  });
  forecastElement.innerHTML = forecastHTML;
}

function getForecastCurrentLocation(coordinates) {
  console.log(coordinates);
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecastCurrentLocation);
}

// current temperature function
function showCurrentWeather(response) {
  celciusTemperature = response.data.main.temp;

  let temperature = Math.round(celciusTemperature);
  let wind = response.data.wind.speed;
  let humidity = response.data.main.humidity;
  let icon = response.data.weather[0].icon;
  let city = response.data.name;

  let displayTemp = document.querySelector("#current-temperature");
  displayTemp.innerHTML = `${temperature}˚C`;

  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind: ${wind}m/s`;

  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: ${humidity}%`;

  let displayIcon = document.querySelector("#icon");
  displayIcon.setAttribute("src", `images/${icon}.png`);

  let displayCity = document.querySelector("h1");
  displayCity.innerHTML = city;

  getForecast(response.data.coord);
}

// current temperature function current location
function showCurrentWeatherCurrentLocation(response) {
  celciusTemperature = response.data.main.temp;

  let temperature = Math.round(celciusTemperature);
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

  getForecastCurrentLocation(response.data.coord);
}

function search(city) {
  let unit = "metric";
  let apiKey = "39c5b362f47e0665da2f1eefc0c7ab6b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showCurrentWeather);
}

// city display function
function submitCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

//city variables
let cityInput = document.querySelector("#city-form");
cityInput.addEventListener("submit", submitCity);

// Functions for quick links

// Berlin
function clickBerlin(event) {
  event.preventDefault();
  search("Berlin");
}

let berlinLink = document.querySelector("#berlin");
berlinLink.addEventListener("click", clickBerlin);

// Brussels
function clickBrussels(event) {
  event.preventDefault();
  search("Brussels");
}
let brusselsLink = document.querySelector("#brussels");
brusselsLink.addEventListener("click", clickBrussels);

// Luxemburg
function clickLuxemburg(event) {
  event.preventDefault();
  search("Luxemburg");
}
let luxemburgLink = document.querySelector("#luxemburg");
luxemburgLink.addEventListener("click", clickLuxemburg);

// Paris
function clickParis(event) {
  event.preventDefault();
  search("Paris");
}
let parisLink = document.querySelector("#paris");
parisLink.addEventListener("click", clickParis);

//date variables
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

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

let celciusTemperature = null;
search("Brussels");
