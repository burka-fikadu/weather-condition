const apiKey = "7a0b35710881c074489847a85daf1b6b";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");


async function getweather(city){
    const response = await fetch(apiurl.replace("{city}", city) + `&appid=${apiKey}`);
   if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "image/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        document.querySelector(".weather-icon").src = "image/clear.png";
    }else if(data.weather[0].main == "Rain"){
        document.querySelector(".weather-icon").src = "image/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "image/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        document.querySelector(".weather-icon").src = "image/mist.png";
    }else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "image/snow.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchbtn.addEventListener("click",()=>{
    getweather(searchbox.value);
});