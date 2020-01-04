import React from 'react';
import './App.css';


const MostrarVoltas = (props) => {
  return(
    <p>
      {props.totalVoltas}<br />
      {props.text}
    </p>
  );
}

const TempoVoltas = (props) => {
  return(
    <p>
      {props.tempoMedio}<br />
      {props.text}
    </p>
  );
}

const Button = (props) => {
  return(
    <button onClick={props.onclick}>{props.text}</button>
  );
}
export default function App() {
  
  let numVoltas = 0;
  const incrementar = () => {
    numVoltas++;
  }

  const descrementar = () => {
    numVoltas--;
  }


  return (
    <div className="App">
      <MostrarVoltas
        totalVoltas={numVoltas}
        text='Voltas'
      />
      <Button 
        text='+'
        onclick={incrementar}
      />
      <Button 
        text='-'
        onclick={descrementar}
      />
      <TempoVoltas
        tempoMedio='01:30'
        text='Tempo Médio Por Voltas'
      />
     <Button text='Iniciar' />
     <Button text='Reiniciar'/>
    </div>
  );
}

