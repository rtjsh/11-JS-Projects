document.addEventListener("DOMContentLoaded", (event) => {
    let inputCity = document.getElementById("city-input");
    let searchBtn = document.getElementById("search")

    function fetchWeather(city) {
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7966e32fa8453a3ab985fcd8db8f6b77`)
         .then((res) =>{ 
            return res.json()
         }) 
         .then((data) => {
            // console.log(data)
            if(data.cod!="200") {
                document.getElementsByClassName("error")[0].style.display = "block"
                document.getElementsByClassName("weather")[0].style.display = "none"
                return;
            }
            document.getElementsByClassName("weather")[0].style.display = "block"
            document.getElementsByClassName("error")[0].style.display = "none"
            document.getElementsByClassName("temp")[0].innerHTML =(data.main.feels_like-273.15).toFixed(2) + "°C";
            document.getElementsByClassName("humidity")[0].innerHTML =(data.main.humidity) + "%";
            document.getElementsByClassName("wind")[0].innerHTML =(data.wind.speed * 3.6).toFixed(2) + " km/hr";
            document.getElementsByClassName("city")[0].innerHTML =data.name;
            document.getElementsByClassName("weather-icon")[0].src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            inputCity.value=""

         })
         .catch(err => () => {
            // console.log(err);
         }); 
    }

    searchBtn.addEventListener("click", () => {
        fetchWeather(inputCity.value);
    })
});
 