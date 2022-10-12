import React from 'react';
import Botao from '../components/Botao';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import './style.css';

function App() {
  return (
    <div className="AppStyle">
      <Formulario />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
