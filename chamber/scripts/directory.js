const url = "data/members.json"

const cards = document.querySelector("#cards");

async function getMemberData(){
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members)
}

getMemberData();

const displayMembers = (members =>{
    console.table(members);
    members.forEach(member => {
        const card = document.createElement("section");
        const _logo = document.createElement("img");
        
        _logo.setAttribute("src",member.imageAddress);
        _logo.setAttribute("alt",`Image of ${member.name} logo.`);
        _logo.setAttribute("height", "100");
        card.appendChild(_logo)

        cards.appendChild(card);
    });
})