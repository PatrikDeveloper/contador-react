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
    <button>{props.text}</button>
  );
}
export default function App() {
  return (
    <div className="App">

      <MostrarVoltas
        totalVoltas='10'
        text='Voltas'
      />
      <Button 
        text='+'
      />
      <Button 
        text='-'
      />
      <TempoVoltas
        tempoMedio='01:30'
        text='Tempo Médio Por Voltas'
      />
     <Button
      text='Iniciar'
     />Iniciar
     <Button
      text='Reiniciar'
     />
    </div>
  );
}

