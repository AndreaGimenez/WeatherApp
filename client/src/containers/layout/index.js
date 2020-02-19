import React from 'react';
import WeatherInfo from '../../components/Weather/Results';
import Home from '../../components/Home';
import Form from '../../components/Weather/Form';
import { Route, Link } from 'react-router-dom';

const navigate = (url) => {
  window.location = 'http://localhost:3000' + url;
}

class Layout extends React.Component {
  render(){
    return(
      <div>
        <div style={{display:"flex"}}>
          <div>ANDRE WEATHER APP</div>
        </div>
        <Route path="/" exact component={Home}/>
        <Route path="/weatherinfo" exact component={WeatherInfo}/>
        <Route path="/search" exact component={Form}/>
      </div>
    )
  }
}

export default Layout;
