const fetch = require('node-fetch');

const getWeatherByZipcode = (req, res) => {
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' ;
  const unit = "&unit=metric"
  const apiKey = '&APPID=4eb1336542ba1919730386daa6a094bd&units=metric' ;
  const zipcode = req.params.zipcode;
  const url = baseUrl + zipcode + unit + apiKey;
  fetch(url)
   .then(response => response.json())
   .then(json => {
     res.send({ data : json });
   })
   .catch(err => {
       res.send({error:'Ocurrio un error'});
     });
 }

 module.exports = {
   getWeatherByZipcode,
 }
