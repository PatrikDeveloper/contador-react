import React from 'react';
import './../assets/css/app.css';

const Button = (props) => {
  return(
    <button onClick={props.onclick}>{props.text}</button>
  );
}

export default Button;