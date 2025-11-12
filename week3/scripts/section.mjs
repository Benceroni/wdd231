export function setSectionSelection(data) {
  const sectionSelect = document.querySelector("#sectionNumber");
  data.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}