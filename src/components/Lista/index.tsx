import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Item from './item';
import './style.css';

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside className="listaTarefas">
            <h2>Estudos do dia</h2>

            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;