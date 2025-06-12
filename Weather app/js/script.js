let apiKey = "f223dfe6b0e9b2c3d5172a7de87d46c4"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input")
let searchBtn = document.querySelector(".search button")
let weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data);
    

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "http://127.0.0.1:5500/Weather%20app/img/snowr.png";
    }

}

searchBtn.addEventListener("click", (e) => {

    checkWeather(searchBox.value)
})

