const getString = window.location.search;
console.log(getString);


const myInfo = new URLSearchParams(getString);

document.querySelector("#results").innerHTML = `
<p>appointment for ${myInfo.get("first")} ${myInfo.get("last")} confirmed</p>
<p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} temple.</p>
<p>Your phone number is: ${myInfo.get("phone")}</p>
<p>Your email is: ${myInfo.get("email")}</p>
`