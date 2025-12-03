import points_data from "../data/poi.mjs";

const destinations_html = document.querySelector("#destinations");

const flavorText = document.querySelector("#flavorText");
const lastVisit = localStorage.getItem("lastVisit")


// console.table(points_data.points)

destinations_html.innerHTML = ''

points_data.points.forEach(point => {
    destinations_html.innerHTML +=`
    <section class="card">
    <h2>${point.name}</h2>
    <figure><img src = "${point.image}" alt = "image of ${point.name}"></figure>
    <address>${point.address}</address>
    <p>${point.description}</p>
    <button>Learn More</button>
    </section>
    `
});

function flavorTextMessage(){
    console.log(lastVisit)
    if (lastVisit){
        console.log(lastVisit)
        let days = Math.abs((lastVisit - Date.now())/ 86400000);
        console.log("Days "+ days)
        if (days <1){
            flavorText.innerHTML = "Back so soon! Awesome!";
        }
        else{
            flavorText.innerHTML = `You last visited ${days.toFixed(0)} days ago`;
        }
    }
    else{
        console.log(new Date)
        flavorText.innerHTML = "Welcome! Let us know if you have any questions."
        localStorage.setItem("lastVisit",Date.now())
    }
}

flavorTextMessage();