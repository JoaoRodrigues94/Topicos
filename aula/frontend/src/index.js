import React from "react";
import ReactDOM from "react-dom";
// import Componente1 from "./Componentes/Componente1";
// import { CompA, CompB as B } from "./Componentes/DoisComponentes";
// import MultiElementos from "./Componentes/MultiElementos";
// import { Teste1, Teste2, Teste3 } from "./Componentes/MultiElementos";
// import FamiliaGomes from "./Componentes/FamiliaGomes";
// import Familia from "./Componentes/Familia";
// import Nome from "./Componentes/Nome";
//import ComponenteComFuncao from "./Componentes/ComponenteComFuncao";
import Pai from "./Componentes/Pai";

const element = document.getElementById('root')

ReactDOM.render(
    <div>
        {/*<Componente1 valor="Bom dia!" soma={3 + 4}/>
        <CompA valor = "Primeiro componente" />
        <B valor = "Segundo componente" />
        <MultiElementos/>
        <Teste1/>
        <Teste2/>
        <Teste3/> 
        <FamiliaGomes />  */}

        {/* <FamiliaGomes sobrenome="Tirulipa"/> */}
        {/* <Familia sobrenome="Rodrigues " endereco="Rua tal " numero="n° 7 " cidade="Franca " estado="SP">
            <Nome nome="Apolo" />
            <Nome nome="João" />
            <Nome nome="Paulo" />
        </Familia> */}

        {/* <ComponenteComFuncao/> */}
        <Pai/>
    </div>
    ,element
)