import React from 'react';
import WeatherInfo from '../../components/Weather/Results';
import ButtonAppBar from './appbar.js';

import { Route } from 'react-router-dom';

const navigate = (url) => {
  window.location = 'http://localhost:3000' + url;
}

class Layout extends React.Component {
  render(){
    return(
      <div>
        <ButtonAppBar />
        <Route path="/weatherinfo" exact component={WeatherInfo}/>
      </div>
    )
  }
}

export default Layout;
