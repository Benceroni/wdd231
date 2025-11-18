const currentWeatherElement = document.querySelector("#currentWeather");
const weatherForecastElement = document.querySelector("#forecastWeather");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=43.60&lon=-116.24&appid=fc9fe556276fc9142140291bdb778812&units=imperial'



async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            displayResults(data);
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error);
    }
    
}

apiFetch();

function displayResults(data){
    unixSunrise = data.sys.sunrise
    sunriseDate = new Date(unixSunrise *1000);
    sunriseHours = sunriseDate.getHours();
    sunriseMinutes = sunriseDate.getMinutes();

    unixSunset = data.sys.sunset;
    sunsetDate = new Date(unixSunset *1000);
    sunsetHours = sunsetDate.getHours()-12;
    sunsetMinutes = sunsetDate.getMinutes();

    currentWeatherElement.innerHTML +=
    `<img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"></img>
    <p>${Math.round(data.main.temp)}&deg;F<br>${data.weather[0].description}<br>
    High: ${Math.round(data.main.temp_max)}&deg;<br>
    Low: ${Math.round(data.main.temp_min)}&deg;<br>
    Humidity: ${data.main.humidity}%<br>
    Sunrise: ${sunriseHours}:${sunriseMinutes} am<br>
    Sunset: ${sunsetHours}:${sunsetMinutes} pm
    </p>`
}

const url2 ='https://api.openweathermap.org/data/2.5/forecast?lat=43.60&lon=-116.24&appid=fc9fe556276fc9142140291bdb778812&units=imperial'

async function apiFetch2() {
    try{
        const response = await fetch(url2);
        if (response.ok){
            const data = await response.json();
            displayResults2(data);
        }
        else{
            throw Error(await response.text())
        }
    }
    catch(error){
        console.log(error);
    }
}

apiFetch2();

function displayResults2(data){
    const dates = [1,9,17];
    const func = dates.forEach(element => {
        let __data = data.list[element];
        let _date = new Date(__data.dt*1000).getDay();
        let weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        // console.log(weekday[_date]);
        // __data.main.temp
        console.log(`${weekday[_date]}: ${Math.round(__data.main.temp)}&deg;F`)
        weatherForecastElement.innerHTML += `${weekday[_date]}: ${Math.round(__data.main.temp)}&deg;F <br>`
    });
    
    // console.log(data.list);
}