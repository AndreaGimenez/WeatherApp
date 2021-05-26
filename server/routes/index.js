const { Router } = require('express');
const router = Router();

const { 
    getWeatherByZipcode,
    getWeatherById,
    getCityByGeoposition
} = require('../controller/index.controller');

router.get('/search-location-weather/zipcode/:zipcode', getWeatherByZipcode);
router.get('/search-location-weather/city/:id', getWeatherById);
router.get('/search-location-weather/geoposition/:lat/:lon', getCityByGeoposition);

module.exports = router;
