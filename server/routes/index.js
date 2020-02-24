const { Router } = require('express');
const router = Router();

const { getWeatherByZipcode } = require('../controller/index.controller');

router.get('/search-location-weather/:zipcode', getWeatherByZipcode)

module.exports = router;
