import React from "react";

const aprovados = ["João Paulo", "Ana", "Paulo", "Apolo"]

export default props => {
    const gerarItens = itens => {
        return itens.map(item => <li>{item}</li>)
    }

    return(
        <ul>
            {gerarItens(aprovados)}
        </ul>
    )
}