//City input and button Confirm
//API City, temperature, wind, rain

function showTemp(response) {
  console.log(response);
  let tempD = Math.round(response.data.main.temp);
  let tempN = Math.round(response.data.main.temp_min);
  let dayTemp = document.querySelector("#main-temp-day");
  let nightTemp = document.querySelector("#main-temp-night");
  let windSpeed = Math.round(response.data.wind.speed);
  let windDeg = Math.round(response.data.wind.deg);
  let humidity = Math.round(response.data.main.humidity);
  let pressure = Math.round(response.data.main.pressure);
  let windS = document.querySelector("#wind-speed");
  let windD = document.querySelector("#wind-deg");
  let humi = document.querySelector("#humidity");
  let press = document.querySelector("#pressure");
  let mainCity = response.data.name;
  let mainCityName = document.querySelector("#city-name-main");
  mainCityName.innerHTML = `${mainCity}`;
  dayTemp.innerHTML = `${tempD}`;
  nightTemp.innerHTML = `${tempN}`;
  windS.innerHTML = `${windSpeed}`;
  windD.innerHTML = `${windDeg}`;
  humi.innerHTML = `${humidity}`;
  press.innerHTML = `${pressure}`;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#input-form").value;
  let apiKey = "f4694dab77f16eded26a08442f7ba9ab";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemp);
}

let buttonConnfirm = document.querySelector("#button-confirm");
buttonConnfirm.addEventListener("click", search);

//Day and hour
let now = new Date();
let dayOne = document.querySelector("#day-main");
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let year = now.getFullYear();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
dayOne.innerHTML = `${day} ${hours}:${minutes} ${year}`;

//°C and °F
//Day Temp
function celClick(event) {
  event.preventDefault();
  let dayTemp = document.querySelector("#main-temp-day");
  dayTemp.innerHTML = "0";
}

let celLink = document.querySelector("#cel");
celLink.addEventListener("click", celClick);

function farClick(event) {
  event.preventDefault();
  let dayTemp = document.querySelector("#main-temp-day");
  dayTemp.innerHTML = "0";
}

let farLink = document.querySelector("#far");
farLink.addEventListener("click", farClick);

//Night Temp
function celNightClick(event) {
  event.preventDefault();
  let nightTemp = document.querySelector("#main-temp-night");
  nightTemp.innerHTML = "0";
}

let celNightLink = document.querySelector("#cel2");
celNightLink.addEventListener("click", celNightClick);

function farNightClick(event) {
  event.preventDefault();
  let nightTemp = document.querySelector("#main-temp-night");
  nightTemp.innerHTML = "0";
}

let farNightLink = document.querySelector("#far2");
farNightLink.addEventListener("click", farNightClick);

//Wind day
let nowWind = new Date();
let windDay = document.querySelector("#wind-day");
let windDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayW = windDays[nowWind.getDay()];
windDay.innerHTML = `${dayW}`;

//Rain day
let nowRain = new Date();
let rainDay = document.querySelector("#rain-day");
let rainDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedsday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayR = rainDays[nowRain.getDay()];
rainDay.innerHTML = `${dayW}`;

//Geolocation API city, temperature, wind, rain
function retrivePosition(position) {
  console.log(position);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let apiKey = "f4694dab77f16eded26a08442f7ba9ab";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=${unit}`;

  axios.get(apiURL).then(showCurrentTemp);
}

function showCurrentTemp(response) {
  let tempD = Math.round(response.data.main.temp);
  let tempN = Math.round(response.data.main.temp_min);
  let windSpeed = Math.round(response.data.wind.speed);
  let windDeg = Math.round(response.data.wind.deg);
  let humidity = Math.round(response.data.main.humidity);
  let pressure = Math.round(response.data.main.pressure);
  let cityName = response.data.name;
  let cityCurrentName = document.querySelector("#city-name-main");
  let windS = document.querySelector("#wind-speed");
  let windD = document.querySelector("#wind-deg");
  let humi = document.querySelector("#humidity");
  let press = document.querySelector("#pressure");
  let dayTemp = document.querySelector("#main-temp-day");
  let nightTemp = document.querySelector("#main-temp-night");
  dayTemp.innerHTML = `${tempD}`;
  nightTemp.innerHTML = `${tempN}`;
  windS.innerHTML = `${windSpeed}`;
  windD.innerHTML = `${windDeg}`;
  humi.innerHTML = `${humidity}`;
  press.innerHTML = `${pressure}`;
  cityCurrentName.innerHTML = `${cityName}`;
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(retrivePosition);
}

let button = document.querySelector("#button-current");
button.addEventListener("click", getCurrentPosition);
