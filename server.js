

// var express = require('express');
// var app = express();

// //setting middleware
// app.use(express.static(__dirname + '/public')); //Serves resources from public folder


// var server = app.listen(11896);


// fetch('https://spreadsheets.google.com/feeds/list/1eXqcfAFnQsfIgsAWohCV2sRYQxvG6V8Q9RpDvyWAgz4/1/public/full?alt=json')
// 	  .then(response => response.json())
// 	  .then(data => {
	  	
// 	  	allData = data.feed.entry;
// 	  	console.log(allData)

// });







const express = require('express');
const app = express();
let db = [];

var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client_secret.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1eXqcfAFnQsfIgsAWohCV2sRYQxvG6V8Q9RpDvyWAgz4');

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function (err) {

  // Get all of the rows from the spreadsheet.
  doc.getRows(1, function (err, rows) {
   db = rows

  });
});





app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(11896);