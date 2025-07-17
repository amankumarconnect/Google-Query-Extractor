const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

searchInput.addEventListener("input", async() => {
  const query = searchInput.value;
  const result = await fetch(`/api/get-suggestions?q=${query}`);
  const data = await result.json();
  resultsList.innerHTML = data[1].map(item => `<li>${item}</li>`).join("");
})