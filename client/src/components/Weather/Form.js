import React from 'react';

class Form extends React.Component {
  render(){
    return(
      <form method='POST' action='/search-location-weather'>
          <input type="text" placeholder="zip"  name='zipcode' />
          <button type="submit">ENTER</button>
      </form>
    )
  }
}
export default Form;
