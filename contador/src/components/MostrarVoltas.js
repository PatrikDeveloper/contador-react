import React from 'react';

const MostrarVoltas = (props) => {
  return(
    <p>
      {props.totalVoltas}<br />
      {props.text}
    </p>
  );
}

export default MostrarVoltas;