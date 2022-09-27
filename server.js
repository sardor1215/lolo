const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || 3000, (err) => {
  if (!err) {
    console.log("Server is running");
  } else {
    console.error(err);
  }
});
