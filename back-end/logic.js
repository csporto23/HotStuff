var express = require("express");
var path = require("path");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

const reservations = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//post reservation data

//routes for html pages
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "../front-end/index.html"));
});

app.get("/reservation-form", function(request, response) {
    response.sendFile(path.join(__dirname, "../front-end/reservation-form.html"));
});

app.get("/reservation-view", function(request, response) {
    response.sendFile(path.join(__dirname, "../front-end/reservation-view.html"));
});


    app.post("/api/reservations", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newReservations = req.body;
      
        // We then add the json the user sent to the character array
        reservations.push(newReservations);
        console.log(reservations);
        // We then display the JSON to the users
        res.json(newReservations);
      });

      app.get("/api/reservations/:reservation", function(req, res) {
        for (var i = 0; i < reservations.length; i++) {
            return res.json(reservations[i]);
        };
  
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });