import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const buttonStyles = {
  height: "55px",
  width: "90px",
  marginLeft: "5px",
  borderRadius: "5px",
  backgroundColor: "#3f51b5",
  color: "#FFF",
  fontWeight: "700"
}

const textStyle = {
  fontFamily: "sans-serif",
  marginBottom: "3%",
  fontSize: "larger"
}

class Form extends React.Component {
  render(){
    return(
      <div style={{marginTop:"7%"}}>
        <div style={{marginLeft:"33%"}}>
        <div style = {textStyle}>Search US cities weather by their zipcode</div>
          <form noValidate autoComplete="off" method='POST' action='/search-location-weather'>
              <TextField id="outlined-basic" type="text" label="zipcode" variant="outlined"  name='zipcode' placeholder="zipcode"/>
              <button style={buttonStyles}>ENTER</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Form;
