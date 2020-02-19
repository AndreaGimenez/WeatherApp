import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class Home extends React.Component{

  render(){
    return(
      <Button variant="contained" color="primary">
        <Link to='/search' style={{color:"#fff"}}>Search</Link>
      </Button>
    );
  }
}
