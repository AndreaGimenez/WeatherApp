import React, { Component } from 'react';
import Spinner from '../Spinner';
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
  borderRadius: "10px"
}

const backStyle = {
  marginLeft: "46%",
  marginTop: "5%",
  width: "10%",
  textAlign: "center",
}

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : null,
      loaded: false,
    }
}
  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({data: res.data, loaded : true}))
      .catch(err => console.log(err))
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/search-location-weather/' + this.props.match.params.zipcode);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="Results">
        { this.state.loaded ?
            <WeatherInfo
              weather={this.state.data.weather}
              temp={this.state.data.main}
              wind={this.state.data.wind}
              country={this.state.data.sys}
              city={this.state.data.name}
              clouds = {this.state.data.clouds}
            />
          :
            <Spinner />
        }
      </div>
    );
  }
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

export default Results;
