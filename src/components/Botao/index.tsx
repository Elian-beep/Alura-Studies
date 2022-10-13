import React, { ReactFragment } from "react";
import './style.css'

class Botao extends React.Component<{
    type?: "button" | "submit" | "reset" | undefined; //?: uma prop opcional
    children: ReactFragment;
}>{
    render(){
        const { type = 'button' } = this.props;
        return(
            <button type={type} className="botao">
                {this.props.children}
            </button>
        );
    }
}

export default Botao;