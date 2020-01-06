import React, { useState, useEffect } from 'react';
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

  const tempo = props.tempoMedio;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  const minutosStr = minutos < 10 ? '0' + minutos : minutos;
  const segundosStr = segundos < 10 ? '0' + segundos : segundos;

  return(
    <p>
      {`${minutosStr}:${segundosStr}`}<br />
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
  
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);
  
  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old +1)
      }, 1000);
    }
    return() => {
      if (timer) {
        clearInterval(timer);
      }
    }
  });
  
  const toogleRunning = () => {
    setRunning(!running);
  }

  const incrementar = () => {
    setNumVoltas(numVoltas + 1);
  }

  const decrementar = () => {
    setNumVoltas(numVoltas - 1);
  }

  const reiniciar = () => {
    setTempo(0);

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
        onclick={decrementar}
      />
      {
        numVoltas > 0 && 
          <TempoVoltas
            tempoMedio={Math.round(tempo / numVoltas)}
            text='Tempo Médio Por Voltas'
          />
      }
     <Button 
      onclick={toogleRunning}
      text='Iniciar' />
     <Button 
     onclick={reiniciar}
     text='Reiniciar'/>
     
    </div>
 );
} 

