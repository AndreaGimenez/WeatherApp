import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Form from './Weather/Form';
import Layout from '../containers/layout';
import ResultsByZipcode from './Weather/ResultsByZipcode';
import ResultsByCity from './Weather/ResultsByCity';
import CitiesArgentina from './Weather/CitiesArgentina';

class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
          <Layout/>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <Form />
          </Route>
          <Route path="/weatherinfo/:zipcode" exact component={ResultsByZipcode}/>
          <Route path="/argentina" exact>
            <CitiesArgentina />
          </Route>
          <Route path="/argentina/:city" exact component={ResultsByCity}>
          </Route>
      </BrowserRouter>
    )
  }
}

export default App;
