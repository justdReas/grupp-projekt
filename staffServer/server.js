const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8080;
const app = express();
const routes = require("./routes/routes");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost/staffList")
  .then(() => console.log("Connected SUCCESSFULLY"))
  .catch((err) => console.error(err));

app.use("/staffs/", routes);

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT);
});
