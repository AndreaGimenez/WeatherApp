import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Form from '../Weather/Form';

export default class Home extends React.Component{

  render(){
    return(
      <div>
      <Form />
      </div>
    );
  }
}
