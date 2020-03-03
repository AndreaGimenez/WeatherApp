import React, { Component } from 'react';
import Spinner from '../Spinner';
import WeatherInfo from './WeatherInfo';

class ResultsByCity extends Component {
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
    const response = await fetch('/search-location-weather/city/' + this.props.match.params.city);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="ResultsByCity">
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



export default ResultsByCity;
