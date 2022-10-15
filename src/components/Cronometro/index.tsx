import React from 'react';
import Botao from "../Botao";
import Relogio from "./Relogio";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import { useEffect, useState } from "react";

export default function Cronometro() {
    // const [tempo, setTempo] = useState<number>();

    // useEffect(() => {
    //     if (selecionado?.tempo) {
    //         setTempo(tempoParaSegundos(selecionado.tempo));
    //     }
    // }, [selecionado])

    return (
        <div className='cronometro'>
            <p className="titulo">Escolha um card e inicie o Cronômetro</p>
            <div className="relogioWrapper">
                <Relogio />
            </div>
            <Botao>
                Começar!
            </Botao>
        </div>
    )
}