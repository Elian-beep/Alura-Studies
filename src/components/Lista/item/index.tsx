import React from 'react';
import { ITarefa } from '../../../types/tarefa';
import '../style.css';

export default function Item({ tarefa, tempo, selecionado, completado, id }: ITarefa): JSX.Element {
    console.log('item atual: ', { tarefa, tempo, selecionado, completado, id });
    
    return (
        <li className="item">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}