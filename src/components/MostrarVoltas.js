import React from 'react';
import './../assets/css/app.css'

const MostrarVoltas = (props) => {
  return(
    <p>
      <div id='Wrapper-number'>{props.totalVoltas}</div>
      <div id='Wrapper-text'>{props.text}</div>
    </p>
  );
}

export default MostrarVoltas;