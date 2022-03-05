import React from "react";
import Nome from "./Nome";

export default props =>
    <div>
        <Nome nome = "João Paulo" sobrenome = {props.sobrenome}/>
        <Nome nome = "Taka" sobrenome = {props.sobrenome}/>
        <Nome nome = "Maria" sobrenome = {props.sobrenome}/>
        <Nome nome = "Airlindo" sobrenome = {props.sobrenome}/>
    </div>