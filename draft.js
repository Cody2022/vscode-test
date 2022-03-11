const express = require("express");
const app=express();
const fetch=require('node-fetch');
const {APIkey_weather}=require('./API-key');

app.use(express.json());

const PORT = 5000;

const name="panda"

function echoPortNumber() {
    console.log(`Listening on port ${PORT}`);
    // console.log("Listening on port", PORT);
  }
  
  app.listen(PORT, echoPortNumber);

  fetch('https://freegeoip.app/json/')
  .then(response=>response.json())
  .then(results=>console.log(results))
  
  function hello(req, res) {
      res.send("Hello World!");
      console.log("console.log result:", "hello World");
    }
    
    app.get("/hello", hello);
    
    app.get("/query", (req, res) => {
      let q1 = req.query.q1;
      if (q1 === "yes") {
        fetch("https://freegeoip.app/json/")
          .then((responseIP) => responseIP.json())
          .then((results) => {
            res.json({
              city: results.city,
              ip: results.ip,
            });
          
        
        });
      }
    });

    // const weather=(l)

let city="Calgary"
console.log(APIkey_weather);
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey_weather}`)
.then(weatherData=>weatherData.json())
.then(weatherJson=>{
    // response.json({temperature: weatherJson.main.temp});    
    console.log((weatherJson.weather[0].description));
    console.log("temperature:",weatherJson.main.temp);
    console.log(weatherJson.base);
    // response.send(weatherJson.base);

})
// `Welcome (${name}): your City is: ${results.city}`);
// response.write(`Welcome (${name}): your ip is: ${results.ip}`);
// response.send(results.ip);