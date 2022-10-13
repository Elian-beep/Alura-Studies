import React, { useState } from 'react';
import Botao from '../components/Botao';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.css';

function App() {
  const [tarefas, setTarefas] = useState([
    {
      tarefa: 'React',
      tempo: '02:00:00'
    },
    {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    }, {
      tarefa: 'Typescript',
      tempo: '3:00:00'
    }
  ]);

  return (
    <div className="AppStyle">
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
