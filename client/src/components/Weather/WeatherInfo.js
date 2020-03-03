import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Assets
import ThunderStormIcon from './assets/weather_icons/01W.svg';
import RainIcon from './assets/weather_icons/02W.svg';
import SnowIcon from './assets/weather_icons/03W.svg';
import ClearIcon from './assets/weather_icons/04W-DAY.svg';
import CloudsIcon from './assets/weather_icons/05W.svg';
import NoLocationFound from './assets/no-location.svg';

const cardStyle = {
  marginLeft: "33%",
  width:  "35%",
  border: "2px solid black",
  textAlign: "center",
  borderRadius: "10px",
  padding: "3%",
}

const backStyle = {
  marginLeft: "49%",
  marginTop: "5%",
  width: "10%",
  textAlign: "center",
}

class WeatherInfo extends Component{
  selectIcon = (weatherId) => {
	   if(weatherId <= 232) {
	       return ThunderStormIcon;
	   } else if(weatherId >= 300 && weatherId <= 531) {
	       return RainIcon;
	   } else if(weatherId >= 600 && weatherId <= 622 ) {
	       return SnowIcon;
	   } else if(weatherId === 800) {
	       return ClearIcon;
	   } else if(weatherId >= 700 && weatherId <= 804) {
	       return CloudsIcon;
	   }
     return NoLocationFound;
  }

  render(){
    const { weather, wind, city, country, temp, clouds } = this.props
    return(
      <div style={{marginTop:"4%"}}>
        <div style={cardStyle}>
          <img src={this.selectIcon(weather[0].id)} alt='Weather icon'/>
          <h3>{city} - {country.country}</h3>
          <h4>Temperature: {temp.temp} ºC</h4>
          <h4>Feels like: {temp.feels_like} ºC</h4>
          <h5>Max Temperature: {temp.temp_max} ºC</h5>
          <h5>Min Temperature: {temp.temp_min} ºC</h5>
          <h4>Pressure:{temp.pressure} hPa</h4>
          <h4>Humidity:{temp.humidity}%</h4>
          <h3>Wind: {wind.speed}m/s</h3>
          <h3>Clouds: {clouds.all}%</h3>
        </div>
        <div style={backStyle}>
          <Link to="/" style={{color: "black", textDecorationLine: "none"}}>
            RETURN HOME
          </Link>
        </div>
      </div>
    )
  }
}

export default WeatherInfo;
