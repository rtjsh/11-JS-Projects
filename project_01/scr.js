const apiKey = "7966e32fa8453a3ab985fcd8db8f6b77";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {

    const response = await fetch(apiURL + city +  `&appid=${apiKey}`);
    if(response.status==404)
        {
            document.querySelector(".error").style.display="block"
            document.querySelector(".weather").style.display="none"
        }
    else{
        let data = await response.json();
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr"
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "../Project01/images/clouds.png"
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "../Project01/images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "../Project01/images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "../Project01/images/drizzle.png"
    }

    else {
        weatherIcon.src = "../Project01/images/mist.png"
    }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none"
}

}
    
searchBtn.addEventListener("click", ()=>
{
    checkWeather(searchBox.value);
})

// Whenever the search button is pressed, it will send the value of "searchBox" to "checkWeather" function, value as of city in this case. When checkWeather function is called, its value goes to the async "checkWeather" function and "fetch" method is responsible for fetching the value of that city from the API


