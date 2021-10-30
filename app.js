const express = require("express"); #import
const https = require("https");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});
app.post("/",function(req,res){
  var c = req.body.city;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+c+"&appid="+"016f41822d30fa0baf449c87b1285cc4";
  https.get(url, function(response){
    response.on("data", function(data){
      const ww = JSON.parse(data);
      res.sendStatus(ww.main.temp)
    });

  });
});
app.get("/back",function(req,res){
  res.sendFile(__dirname + "/back.html")
});
app.post("/back",function(req,res){
  res.redirect("/")
});
app.listen(3000);


//016f41822d30fa0baf449c87b1285cc4
