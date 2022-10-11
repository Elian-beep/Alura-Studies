import React from 'react';
import '../style.css';

export default function Item({ tarefa, tempo }: { tarefa: string, tempo: string }): JSX.Element {
    return (
        <li className="item">
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    );
}