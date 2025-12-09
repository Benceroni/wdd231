const getString = window.location.search;


const applicationInfo = new URLSearchParams(getString);


document.querySelector("#application").innerHTML = `
<p>Name: ${applicationInfo.get("first")} ${applicationInfo.get("last")}</p>
<p>Email: ${applicationInfo.get("email")}</p>
`