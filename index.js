import express from "express";

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/api/get-suggestions", async (req, res) => {
  const query = req.query.q;
  const response = await fetch(
    `https://suggestqueries.google.com/complete/search?client=chrome&q=${query}`
  );
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
