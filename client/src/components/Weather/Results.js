import React, { Component } from 'react';
import Spinner from '../Spinner';

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
    const response = await fetch('/search-location-weather');
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
  render(){
    const { weather, main, wind, city, country, temp, clouds } = this.props
    return(
      <div>
        <h3>{city} - {country.country}</h3>
        {console.log(this.props)}
        <h4>Temperature: {temp.temp}</h4>
        <h4>Feels like: {temp.feels_like}</h4>
        <h5>Max Temperature: {temp.temp_max}</h5>
        <h5>Min Temperature: {temp.temp_min}</h5>
        <h4>Pressure:{temp.pressure} hPa</h4>
        <h4>Humidity:{temp.humidity}%</h4>
        <h3>Wind: {wind.speed}m/s</h3>
        <h3>Clouds: {clouds.all}%</h3>
      </div>
    )
  }
}

export default Results;
