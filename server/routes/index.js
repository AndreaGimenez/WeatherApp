const { Router } = require('express');
const router = Router();

const { getWeatherByZipcode,
        getWeatherById } = require('../controller/index.controller');

router.get('/search-location-weather/zipcode/:zipcode', getWeatherByZipcode);
router.get('/search-location-weather/city/:id', getWeatherById);

module.exports = router;
