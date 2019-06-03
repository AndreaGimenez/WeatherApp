const fetch = require('node-fetch');
module.exports = (app) => {
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
        res.send({ data : json.coord.lon });
      })
      .catch(err => {
          res.send({error:'Ocurrio un error'});
        });
    });
}
