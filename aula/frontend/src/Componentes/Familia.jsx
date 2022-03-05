import React from "react";
import { filhosComProps } from "./ComponenteUtil";

export default props =>
    <>
        <h1>Família</h1>
        {/* {React.cloneElement(props.children, {...props})} */}
        {/* {React.Children.map(props.children, filho => {
            return React.cloneElement(filho, {...props})
        })} */}
        {filhosComProps(props)}
    </>