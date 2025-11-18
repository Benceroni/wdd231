const url = "data/members.json"

const cards = document.querySelector("#cards");
const homepageCards = document.querySelector("#cardHighlight");


async function getMemberData(){
    const response = await fetch(url);
    const data = await response.json();
    if (cards){displayMembers(data.members)}
    if (homepageCards){displayHomecards(data.members)}
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
        card.appendChild(_name);
        card.appendChild(_address);
        card.appendChild(_phone);
        card.appendChild(_website);
        

        //cards card appends
        cards.appendChild(card);
    });
})

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min )) + min;
}

function removeAtWithFilter(array, index) {
  return array.filter((_, i) => i !== index);
}

const displayHomecards = (members =>{
    console.table(members);
    var qualifiedMembers = members.filter((member) => member.membershipLevel >= 2);

    for (let i=0; i<3; i++){
        const memberLoopId = randomInteger(0,qualifiedMembers.length);
        console.log(memberLoopId)
        console.log(qualifiedMembers[memberLoopId])
        const selectedMember = qualifiedMembers[memberLoopId];

        const card      = document.createElement("section");
        const _name     = document.createElement("h3");
        const _logo     = document.createElement("img");
        const _email    = document.createElement("p")
        const _phone    = document.createElement("p");
        const _website  = document.createElement("a");
        

        _logo.setAttribute("src",selectedMember.imageAddress);
        _logo.setAttribute("alt",`Image of ${selectedMember.name} logo.`);
        _logo.setAttribute("height", "100");

        _name.textContent       = selectedMember.name;
        _email.textContent      = `EMAIL: Support@${selectedMember.websiteName}`
        _phone.textContent      = `PHONE: ${selectedMember.phoneNumber}`;
        _website.textContent    = `URL: ${selectedMember.websiteName}`;
        _website.href           = selectedMember.websiteURL;

        card.appendChild(_name);
        card.appendChild(_logo);
        card.appendChild(_email);
        card.appendChild(_phone);
        card.appendChild(_website);

        homepageCards.appendChild(card);

        qualifiedMembers.splice(memberLoopId,1);
    }

}

)