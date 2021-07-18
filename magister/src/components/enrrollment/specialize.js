import React from 'react';
import Checkbox from '../forms/checkbox';
import SelectForm from '../forms/select';
import './specialize.css';
import '../initialPage/initialPage.css';



const Specialize = ({nextStep, handleChange, values}) => {

    const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    };
    

    const item = ['patata', 'toni', 'moro', 'nfoqwnaoifnwinqwfnwnqìqnìqwenfìnew']
    const student =[ 'Sí', 'No', 'Sí, pero antes de 2017'];

    const [radiocheck, setRadioCheck] = React.useState();

    const radioBut = event => {
        console.log(event)
        setRadioCheck(event)
    }
    return (
        <div>
            <div>
                <h1 className='initial-title'>¿En qué te quires especializar?</h1>
            </div>
            <div className='branch-location'>
                <div className='branch'>
                    <h2 className='title-select'>Rama</h2>
                    <h4>(Selecciona una opción)</h4>
                    <SelectForm
                        items={item}
                        name={item}
                        value={values.rama}
                        onChange={handleChange('rama')}
                    />
                </div>
                <div className='location'>
                    <h2 className='title-select'>Localidad</h2>
                    <h4>(Selecciona una opción)</h4>
                    <SelectForm
                        items={item}
                        name={item}
                        value={values.localidad}
                        onChange={handleChange('localidad')}
                    />
                </div>
            </div>
                <div className='student-box'>
                    <div className='student'>
                        <h2>¿Has sido alumn@ de Magister</h2>
                        <a>Consulta Condiciones</a>
                        <Checkbox 
                            items={student}
                            checked={radiocheck}
                            handleChange={radioBut}
                            values={values.exStudent}  />
                        
                    </div>
                </div>
                <div className='next'>
                    <button className='button' onClick={continueEnrollment} >Siguiente</button>
                </div>
        </div>
    )
}

export default Specialize;