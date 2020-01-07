import React, { useState, useEffect } from 'react';
import MostrarVoltas from './components/MostrarVoltas';
import TempoVoltas from './components/TempoVoltas';
import Button from './components/Button'

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

