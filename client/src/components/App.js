import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Weather/Form';
import Layout from '../containers/layout';
import Results from './Weather/Results'

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
          <Layout/>
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={Form}/>
          <Route path="/weatherinfo/:zipcode" exact component={Results}/>
      </BrowserRouter>
    )
  }
}

export default App;
