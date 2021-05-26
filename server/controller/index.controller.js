const fetch = require('node-fetch');
const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?' ;
const apiKey = '&APPID=4eb1336542ba1919730386daa6a094bd&units=metric' ;

const getWeatherByZipcode = (req, res) => {
  const zipcode = 'zip=' + req.params.zipcode;
  const url = baseUrl + zipcode  + apiKey;
  fetch(url)
   .then(response => response.json())
   .then(json => {
     res.send({ data : json });
   })
   .catch(err => {
       res.send({error:'Ocurrio un error'});
     });
 }

 const getWeatherById = (req, res) => {
   const city_id = 'id=' + req.params.id;
   const url = baseUrl + city_id  + apiKey;
   fetch(url)
    .then(response => response.json())
    .then(json => {
      res.send({ data : json });
    })
    .catch(err => {
        res.send({error:'Ocurrio un error'});
      });
 }

 const getCityByGeoposition = (req, res) => {
  const point = [req.params.lat, req.param.lng]
  const url = baseUrl + "lat=" + req.params.lat + "&lon=" + req.params.lon + apiKey
  fetch(url)
    .then(response => response.json())
    .then(json => {
      res.send({data: json})
    })
    .catch(err => {
      res.send({error: 'Ocurrio un error'})
    })
 }

 module.exports = {
   getWeatherByZipcode,
   getWeatherById,
   getCityByGeoposition,
 }
