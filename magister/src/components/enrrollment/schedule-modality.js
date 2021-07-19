import React from 'react';
import Checkbox from '../forms/checkbox';
import './schedule-modality.css'


const Shedule = ({prevStep, nextStep, handleChange, values}) => {

     const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    }
    
    const backEnrollment = (e) => {
        e.preventDefault();
        prevStep();
    }

    const modality = ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 2020', 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb 2021', 'ccccccccccccccccccccccccccccc 2022', 'dddddddddddddddddddddddddddd 2023']
    const schedule = ['1 clase al mes practica y progrmamaicon. 10-14', '1 clase al mes practica y progrmamaicon. 10-14', '1 clase al mes practica y progrmamaicon. 10-14' ]

    return (
        <div>
            <div>
                <h1 className='initial-title'>Elige el horario y la modalidad que más te acomode</h1>
            </div>
                <div className='container-modality'>
                    <h2 className='modality'>Modalidad</h2>
                    <h4 className='modality'>(Selecciona una opción)</h4>
                </div>
                <div className='checkbox-modality'>
                    <Checkbox 
                        items={modality}
                        value={values.modality}
                        onChange={handleChange=('modality')}
                         />
                </div>
                 <div className='container-schedule'>
                    <h2 className='schedule'>Horario</h2>
                    <h4 className='schedule'>(Selecciona una opción)</h4>
                <div className='checkbox-schedule'>
                    <Checkbox 
                        items={schedule}
                        onChange={handleChange=('schedule')}
                        value={values.schedule}
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
        </div>
        
    )
}

export default Shedule;