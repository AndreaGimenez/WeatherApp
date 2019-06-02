const express = require('express');
const app = express();
const port = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fetch = require('node-fetch');
// By importing the /routes directory that the index.js file is located in,
// our backend sever will have access to every API route we create
//require('./routes')(app);

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT :)' });
});

//url components
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' ;
const zip = '90210' ;
const apiKey = '&APPID=4eb1336542ba1919730386daa6a094bd&units=metric' ;

const url = baseUrl + zip + apiKey;
console.log(url);
app.get('/search-location-weather', (req, res) => {
  //build api URL with user zip
  fetch(url)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    res.send({ data : json.coord.lon });
  })
  .catch(err => {
        res.send({error:'Ocurrio un error'});
  });
});


// console.log that your server is up and running
app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
});
