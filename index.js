// Backend for the project
const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/weather", (req, res) => {
  const options = {
    method: "GET",
    url: `http://api.weatherapi.com/v1/forecast.json?key=  ${process.env.REACT_APP_KEY}  &q=${req.query.location}&days=4&aqi=no&alerts=no`,
  };

  axios.request(options).then((response) => {
    res.json(response.data);
  });
});

app.listen(PORT, () => console.log(`Server is  running on ${PORT}`));
