import React from 'react';
import { ITarefa } from '../../../types/tarefa';
import '../style.css';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

export default function Item(
    {
        tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props): JSX.Element {
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id });

    return (
        <li className={`item ${selecionado ? 'itemSelecionado' : ''}`} onClick={() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id,
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}