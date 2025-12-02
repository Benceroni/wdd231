import points_data from "../data/poi.mjs";

const destinations_html = document.querySelector("#destinations");

// console.table(points_data.points)

destinations_html.innerHTML = ''

points_data.points.forEach(point => {
    destinations_html.innerHTML +=`
    <h2>${point.name}</h2>
    <figure><img src = "${point.image}" alt = "image of ${point.name}"</figure>
    <address>${point.address}</address>
    <p>${point.description}</p>
    <button>Learn More</button>
    `
});