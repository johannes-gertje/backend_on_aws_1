const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express backend");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Backend");
});


let rawdata_2 = '{ "employees" : [' +
'{ "firstName":"Johnxx" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let json_file_2 = JSON.parse(rawdata_2);
console.log(json_file_2);

app.get("/api/test",(req,res)=>{
    res.setHeader("content-type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.status(200).send(json_file_2);
})


app.get('/api/test2', (req, res, next) => {
    let colors = ["blue","yellow", "red"];
    res.setHeader("content-type","application/json");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.status(200).send(JSON.stringify(colors));
});

app.listen(4000, () => {
  console.log("backend listening");
});
