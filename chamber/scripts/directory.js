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
        const card      = document.createElement("section");
        const _logo     = document.createElement("img");
        const _name     = document.createElement("h3");
        const _phone    = document.createElement("p");
        const _address  = document.createElement("p");
        const _website  = document.createElement("a");
        
        //setting attributes

        _logo.setAttribute("src",member.imageAddress);
        _logo.setAttribute("alt",`Image of ${member.name} logo.`);
        _logo.setAttribute("height", "100");

        _name.textContent       = member.name;
        _address.textContent    = member.address;
        _phone.textContent      = member.phoneNumber;
        _website.textContent    = member.websiteName;
        _website.href           = member.websiteURL;
        

        //card child appends
        card.appendChild(_logo);
        card.appendChild(_address);
        card.appendChild(_phone);
        card.appendChild(_website);
        

        //cards card appends
        cards.appendChild(card);
    });
})