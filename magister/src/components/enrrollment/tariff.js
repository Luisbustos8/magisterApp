import React from 'react';
import Checkbox from '../forms/checkbox';
import './tariff.css'

const Tariff = ({prevStep, nextStep, handleChange, values}) => {

     const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    }
    
    const backEnrollment = (e) => {
        e.preventDefault();
        prevStep();
    }


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
                    <button 
                        className='next-button'
                        onClick={continueEnrollment} 
                    >
                        Siguiente
                    </button>
                    <button 
                        className='previous'
                        onClick={backEnrollment}
                        
                    >
                        Volver atrás
                    </button>
                </div>
        </div>
    )
}

export default Tariff;