let express = require("express");
const router = require("./routes/index");

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index");
});

app.use("/users", router);
app.use(router);

app.listen(3000);
