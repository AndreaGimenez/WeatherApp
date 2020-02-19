const fetch = require('node-fetch');
module.exports = (app) => {
  //url components
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=' ;
  //const zip = '90210' ;
  let zipcode;
  const unit = "&unit=metric"
  const apiKey = '&APPID=4eb1336542ba1919730386daa6a094bd&units=metric' ;

  app.post('/search-location-weather', (req, res) => {
		zipcode = req.body.zipcode;
console.log(zipcode)
		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
			res.redirect('/error');
		} else {
			res.redirect('/weatherinfo');
		}
  })

  app.get('/search-location-weather', (req, res) => {
    //build api URL with user zip
    const url = baseUrl + zipcode + unit + apiKey;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(json => {
        res.send({ data : json });
      })
      .catch(err => {
          res.send({error:'Ocurrio un error'});
        });
    });
}
