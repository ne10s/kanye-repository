//import fetch from "node-fetch";
import axios from "axios";
import express from "express";
import cors from "cors";
//express app/server that can receive http(s) requests & send back responses
//This app/server is deaf
const PORT = 3000;
const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

app.use(cors());

// app.get((req, res, next) => {
//   console.log("Some endpoint hit");
//   next();
// });

const URL = "https://api.kanye.rest/";

// fetch(URL)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//using axious
//axios(URL).then((response) => console.log(response.data));

//GET /kanye_quotes
//<SERVERNAME>.<METHODNAME>(<PATHNAME>,<CALLBACK FUNCTION>)
app.get(
  "/kanye_quotes",
  (req, res, next) => {
    console.log("middleware hit");
    next();
  },
  async (req, res) => {
    try {
      const response = await axios.get(URL);
      res.send(response.data);
    } catch (error) {
      console.log(error);
    }

    //   axios
    //     .get(URL)
    //     .then((response) => {
    //       res.send(response.data);
    //     })
    //     .catch((err) => console.log(err));
  }
);

//GET / =>
app.get("/", (req, res) => {
  res.send("Hello!");
});

//const myDB = require("./db");

//console.log(myDB);
//console.log(myDB.neten);
// const { neten: myFunc, sugu: myBool } = require("./db");
// console.log(myFunc);
// console.log(myBool);

//const a = require("./db");
// import { destinations as everything, cities } from "./db.js";
// console.log(everything);
// console.log(cities);
// import catMe, { catNames } from "cat-me";
// console.log(catMe());
