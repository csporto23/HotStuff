var express = require("express");
var path = require("path");
const http = require ("http");
const fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

const server = http.createServer(handleRequest);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(request, response) {
    resizeBy.sendFile(path.join(__dirname, "index.html"));
});