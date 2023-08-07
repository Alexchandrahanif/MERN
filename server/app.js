// https://www.youtube.com/watch?v=R8-zQjkiVuc&list=PLxLtIf3VX_3ABbDFyT28V9UWFbRI-mTZI

require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");

const router = require("./routes");
const mongoose = require("mongoose");
const handleError = require("./middleware/handleError");

mongoose.connect(process.env.URL_MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const cekDB = mongoose.connection;

cekDB.on("error", (error) => {
  console.log("error");
});

cekDB.once("open", (error) => {
  console.log("Mongo DB Connect");
});

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use("/", router)
  .use(handleError);

app.listen(port, () => {
  console.log(`SERVER MERN CONNECT`);
});
