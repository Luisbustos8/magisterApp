import React from 'react';
import SelectForm from '../forms/select';
import './personalData.css';

const PersonalData = ({prevStep, nextStep, handleChange, values}) => {

     const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    }
    
    const backEnrollment = (e) => {
        e.preventDefault();
        prevStep();
    }


    const provincia = ['Cataluña', 'Madrid', 'Valencia'];
    const ciudad = ['Barcelona', 'Madrid', 'Valencia'];

    return (
        <div>
            <div>
                <h1 className='initial-title'>Tus datos personales</h1>
            </div>
            <div>
                <form>
                    <div className='your-name'>
                        <label className='full-name'>Nombre completo</label>
                        <input className='input-Name' type='text' value={values.name}/>
                    </div>
                    <div className='container-data'>
                        <div className='identify'>
                            <label className='dni'>DNI</label>
                            <input className='number-dni' type='number' value={values.identify}/>
                        </div>
                        <div className='years'>
                            <label className='edad'>Edad</label>
                            <input className='year' type='number'/>
                        </div>
                        <div>
                            <label>Ciudad</label>
                            <SelectForm
                            items={ciudad}
                            name={ciudad}
                            value={values.city} />
                        </div>
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
                </form>
            </div>
            
        </div>
    )
}

export default PersonalData;