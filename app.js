const express = require("express");
const wordsRouter = require("./routes/words");
const app = express();
const db = require("./db/db")();
require("dotenv").config({ path: "./.env" });

app.use(express.json());
app.use(express.urlencoded());
app.use("/words", wordsRouter);
app.get("/", (_, res) => {
  res.send("<h1>Get Words Request ➡ (/words)</h1>");
});
app.get("/words", (_, res) =>
  res.send(
    "<h1>All Words ➡ (words/all)</h1><h1>New Words ➡ (words/new)</h1><h1>Get Words Id ➡ (words/all/:id)</h1>",
  ),
);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`),
);
