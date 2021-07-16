import React from 'react';
import Checkbox from '../forms/checkbox';
import './tariff.css'

const Tariff = () => {


    const tariff = ['101.00€ mensuales', '303.00€ trimestrales','3005.00€ anuales' ]
    return (
        <div>
            <div>
                <h1 className='initial-title'>Selecciona tú tarifa</h1>
            </div>
            <div className='container-tariff'>
                <h2 className='tariff'>Modalidad</h2>
                <h4 className='tariff'>(Selecciona una opción)</h4>
            </div>
            <div className='checkbox-tariff'>
                    <Checkbox 
                        items={tariff}
                         />
            </div>
             <div className='buttons'>
                <button className='next-button'>Siguiente</button>
                <a className='previous'>Volver atrás</a>
            </div>
        </div>
    )
}

export default Tariff;