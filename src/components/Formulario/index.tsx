import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import './style.css';

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: "",
        tempo: "00:00:00"
    }

    adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault(); //Para impedir o load de formulário após o click de submit
        this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, { ...this.state }]); //?Adicionando a nova tarefa
    }

    render() {
        return (
            <form className="novaTarefa" onSubmit={this.adicionarTarefa.bind(this)}> {/* bind associa o escopo de fora para dentro da função (adicionarTarefa.escopo = formulario.escopo) */}
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input
                        type="text" name="tarefa"
                        value={this.state.tarefa}
                        id="tarefa" placeholder="o que você quer estudar?" required
                        onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })} //Pegando o valor do campo e atualizando no state
                    />
                </div>

                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input
                        type="time" step="1" name="tempo"
                        value={this.state.tempo}
                        id="tempo" min="00:00:00" max="1:30:00" required
                        onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })} //Pegando o valor do campo e atualizando no state
                    />
                </div>

                <Botao type="submit">
                    Adicionar
                </Botao>
            </form>
        );
    }
}

export default Formulario;