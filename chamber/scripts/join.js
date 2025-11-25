const getString = window.location.search;


const applicationInfo = new URLSearchParams(getString);


document.querySelector("#application").innerHTML = `
<p>Application for ${applicationInfo.get("orgName")} has been filed</p>
<p>Name: ${applicationInfo.get("first")} ${applicationInfo.get("last")}</p>
<p>Email: ${applicationInfo.get("email")}</p>
<p>Phone number: ${applicationInfo.get("phone")}</p>
<p>Membership Level: ${applicationInfo.get("level")}</p>
`

function showmodal(level,price,benefit){
    const dialog = document.querySelector("#membershipDetails");
    dialog.innerHTML =`
    <button id = "closeModal">❌</button>
    <h2>${level} Membership</h2>
    <p>$${price} annually</p>
    <p>Benefits include:<br>${benefit}</p>
    `
    dialog.showModal();

    closeModal.addEventListener("click", () => {dialog.close()});
}