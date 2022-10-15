import React from 'react';
import { ITarefa } from '../../../types/tarefa';
import './item.css';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void,
}

export default function Item(
    {
        tarefa, tempo, selecionado, completado, id, selecionaTarefa
    }: Props): JSX.Element {

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