import React from 'react';


const MostrarVoltas = (props) => {
  return(
    <p>
      {props.totalVoltas}
      {props.text}
    </p>
  );
}

export default MostrarVoltas;