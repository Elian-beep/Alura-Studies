import React from "react";
import './style.css'

class Botao extends React.Component<{children: React.ReactNode}>{
    render(){
        return(
            <button className="botao">
                {this.props.children}
            </button>
        );
    }
}

export default Botao;