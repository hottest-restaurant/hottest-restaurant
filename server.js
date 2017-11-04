var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
 {
    name: "Paul",
    phone: 4151234567,
    email: "paul@gmail.com",
    uniqueID: 123
  },
   {
    name: "Stella",
    phone: 4151234567,
    email: "stella@gmail.com",
    uniqueID: 1234
  },
   {
    name: "Jake",
    phone: 4151234567,
    email: "Jake@gmail.com",
    uniqueID: 12345
  }
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  res.json(reservations);
});

app.get("/api/waitlist", function(req, res) {
 // res.json(reservations.splice(0, 1));
  res.json(reservations);
});

app.post("/api/new", function(req, res) {

  var newTable = req.body;
  newTable.name = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  reservations.push(newTable);

  res.json(newTable);

  console.log(reservations);
});

app.listen(port, function() {
  console.log("App listening on PORT " + port);
});





