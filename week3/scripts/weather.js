const currentTemp = document.querySelector('#current-temp');
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");

// 49.75081970519322, 6.636588674207356

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=fc9fe556276fc9142140291bdb778812&units=imperial'

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else{
        throw Error(await response.text());
        }
    }
    catch(error){
        console.log(error);
    }
}

apiFetch();

function displayResults(data){
    currentTemp.innerHTML = ` ${data.main.temp}&deg;F`;
    // console.log("temp " + data.main.temp);
    icon.setAttribute("src",`https://openweathermap.org/img/w/${data.weather[0].icon}.png`)
    caption.innerHTML = `${data.weather[0].description}`
}