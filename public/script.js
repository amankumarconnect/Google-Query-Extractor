const searchInput = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");
const resultsContainer = document.getElementById("results-container");
const copyButton = document.getElementById("copyButton");

searchInput.addEventListener("input", async () => {
  const query = searchInput.value;
  if (query !== "") {
    const result = await fetch(`/api/get-suggestions?q=${query}`);
    const data = await result.json();
    resultsList.innerHTML = data[1].map((item) => `<li>${item}</li>`).join("");
    resultsContainer.style.display = "block";
  } else {
    resultsList.innerHTML = "";
    resultsContainer.style.display = "none";
  }
});

copyButton.addEventListener("click", () => {
  const textToCopy = Array.from(resultsList.children)
    .map((item) => item.textContent)
    .join("\n");
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert("Keywords Copied to clipboard!");
  });
});
