import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Weather/Form';
import Layout from '../containers/layout';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
          <Layout/>
          <Route path="/" exact component={Home}/>
          <Route path="/search" exact component={Form}/>
      </BrowserRouter>
    )
  }
}

export default App;
