import React from 'react';
import Checkbox from '../forms/checkbox';
import SelectForm from '../forms/select';
import './specialize.css';
import '../initialPage/initialPage.css';



const Specialize = () => {

    const item = ['patata', 'toni', 'moro', 'nfoqwnaoifnwinqwfnwnqìqnìqwenfìnew']
    const student =[ 'Sí', 'No', 'Sí, pero antes de 2017'];

    const [radiocheck, setRadioCheck] = React.useState();

    const radioBut = event => {
        setRadioCheck(event)
        console.log(setRadioCheck)
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
                        value={item}
                    />
                </div>
                <div className='location'>
                    <h2 className='title-select'>Localidad</h2>
                    <h4>(Selecciona una opción)</h4>
                    <SelectForm
                        items={item}
                        name={item}
                        value={item}
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
                        handleChange={radioBut}  />
                </div>
                </div>
                <div className='next'>
                    <button className='button'>Siguiente</button>
                </div>
        </div>
    )
}

export default Specialize;