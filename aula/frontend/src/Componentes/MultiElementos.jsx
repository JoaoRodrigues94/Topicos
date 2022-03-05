import React from "react";


const Teste1 = (props) =>
    <>
        <h1>Teste 1</h1>
        <h1>Teste 2</h1>
    </>

const Teste2 = (props) =>
    <React.Fragment>
        <h1>Teste 1</h1>
        <h1>Teste 2</h1>
    </React.Fragment>

const Teste3 = (props) =>
    [
        <h1>Teste 1</h1>,
        <h1>Teste 2</h1>
    ]

    export {Teste1, Teste2, Teste3}