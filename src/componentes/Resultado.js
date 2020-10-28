import React, { Fragment } from 'react';

const Resultado = ({total, plazo, cantidad}) => {
    return ( 
        <Fragment>
            <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>La cantidad solicitada es: ${cantidad}</p>
                <p>A pagar en: {plazo} meses</p>
                <p>Su pago mensual equivale a: ${ (total / plazo).toFixed(2) }</p>
                <p>Total: ${ (total).toFixed(2) }</p>
            </div> 
       </Fragment>
     );
}
 
export default Resultado;