const express = require("express");
const compression = require("compression");
const path = require("path");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routerUrls = require("./Routes/routes");

const app = express();

dotenv.config();

mongoose.connect(
  process.env.MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected");
  }
);

app.use(compression());
app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());
app.use(cors());

app.use("/api", routerUrls);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, () => {
  console.log("Server started at port 8080");
  console.log("Follow the link http://localhost:8080/");
});

//mongodb+srv://testuser:test123@cluster1.qceqb.mongodb.net/markleguy?retryWrites=true&w=majority
