
import React, { Component } from 'react';
import logo from './logo.svg';
import './Results.css';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : null,
    }
}
  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({data: res.data}))
      .catch(err => console.log(err))
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/search-location-weather');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="Results">
        {/*<p className="App-intro">longitud : {this.state.data}</p>*/}
      </div>
    );
  }
}

export default Results;