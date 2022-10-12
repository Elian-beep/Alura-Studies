import React from 'react';
import Botao from "../Botao";
import './style.css';
import Relogio from "./Relogio";

export default function Cronometro(){
    return(
        <div className='cronometro'>
            <p className='titulo'>Escolha um card e inicie o cronômetro</p>
            <div className='relogioWrapper'>
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    );
}