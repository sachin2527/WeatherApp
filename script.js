let inpVal = document.getElementById("screen");
let city = document.getElementById("city");
let temp = document.getElementById("temp");
// let img = document.getElementById("img");
let desc = document.getElementById("desc");
let wind = document.getElementById("wind");
let search = document.getElementById("search");

let weather = {
    apikey : "69398a83c848a2f04f61142da5dd51c9",
    fetchWeather : function(city) {

        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city  
            + "&units=metric&appid=" 
            + this.apikey
        ).then((res)=> res.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather : function(data)
    {
        let weathername = data.name;
        let  weathertemp = data.main.temp;
        let  weatherwind = data.wind.speed;
        let  weatherdesc = data.weather[0].main;
        

        city.innerText = `Weather In ${weathername}`;
        temp.innerText = `${weathertemp}°C`;
        desc.innerHTML = `${weatherdesc}`;
        wind.innerHTML = `Wind Speed in ${weathername} : ${weatherwind}`;
        

    }
};

search.addEventListener("click",function(name)
{
    weather.fetchWeather(inpVal.value);
   
})