import React from 'react';

const TempoVoltas = (props) => {

  const tempo = props.tempoMedio;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;

  return(
    <p>
      <div id='Wrapper-number'>
        {`${minutosStr}:${segundosStr}`}<br />
      </div>
      {props.text}
    </p>
  );
}

export default TempoVoltas