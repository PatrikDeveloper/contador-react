import React, { useState, useEffect } from 'react';
import MostrarVoltas from './components/MostrarVoltas';
import TempoVoltas from './components/TempoVoltas';
import Button from './components/Button';
import './assets/css/app.css';

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
    if(numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
  
    }
  }

  const reiniciar = () => {
    setTempo(0);

  }

  return (
    <div className="App">
      <div id='Wrapper'>
        <div id='Wrapper-title'> 
          <MostrarVoltas totalVoltas={numVoltas} text='Voltas' />
        </div>
        <div>
          {
            numVoltas > 0 && 
              <TempoVoltas
                tempoMedio={Math.round(tempo / numVoltas)}
                text='Tempo Médio Por Voltas'
              />
          }
        </div>
        <div>
          <Button text='+' onclick={incrementar}/>
          <Button text='-' onclick={decrementar} />
          <Button onclick={toogleRunning} text={running ? 'Pausar' : 'Iniciar'} />
          <Button onclick={reiniciar} text='Reiniciar'/>
        </div>
    </div>
  </div>
 );
} 

