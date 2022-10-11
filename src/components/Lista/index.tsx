import React from 'react';
import Item from './item';
import './style.css';

function Lista() {
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },{
            tarefa: 'Typescript',
            tempo: '3:00:00'
        }
    ];

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