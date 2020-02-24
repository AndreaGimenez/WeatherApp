import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Redirect } from "react-router-dom";

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
  constructor(props){
    super(props);
    this.state = {zipcode : '', redirect: null}
    this.handleChange = this.handleChange.bind(this);
    this.redirectToWeatherInfo = this.redirectToWeatherInfo.bind(this);
  }

  redirectToWeatherInfo = (e) => {
    e.preventDefault()
    console.log(this.state.zipcode)
    const path = '/weatherinfo/' + this.state.zipcode
    this.setState({redirect: path})
  }

  handleChange = (e) => {
    this.setState({zipcode: e.target.value})
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return(
      <div style={{marginTop:"7%"}}>
        <div style={{marginLeft:"33%"}}>
        <div style = {textStyle}>Search US cities weather by their zipcode</div>
          <form noValidate autoComplete="off" onSubmit={this.redirectToWeatherInfo}>
              <TextField
              id="outlined-basic"
              type="text"
              label="zipcode"
              variant="outlined"
              name='zipcode'
              placeholder="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
              />
              <button style={buttonStyles}>ENTER</button>
          </form>
        </div>
      </div>
    )
  }
}
export default Form;
