import React from "react";
import Botao from "../Botao";
import './style.css';

class Formulario extends React.Component {
    render() {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa">Adicione um novo estudo</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="o que você quer estudar?" required />
                </div>

                <div className="inputContainer">
                    <label htmlFor="tempo">Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="1:30:00" required />
                </div>

                <Botao>
                    Adicionar
                </Botao>
            </form>
        );
    }
}

export default Formulario;