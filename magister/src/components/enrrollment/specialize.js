import React from 'react';
import Checkbox from '../forms/checkbox';
import SelectForm from '../forms/select';
import './specialize.css';
import '../initialPage/initialPage.css';
import { getDataBranch, getDataProvince } from '../data/data';



const Specialize = ({nextStep, handleChange, values}) => {

    const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    };
    const radioBut = event => {
        console.log(event)
        setRadioCheck(event)
    }
    
   const [branch, setBranch] = React.useState([]);
   const [province, setProvince] = React.useState([]);
   const [radiocheck, setRadioCheck] = React.useState();
    const student =[ 'Sí', 'No', 'Sí, pero antes de 2017'];
   
    React.useEffect(() => {
       getBranches();
       getProvinces();
    },[])

    const getBranches = async () => {
        const dataBranch = await getDataBranch();
        const branches = [];
        dataBranch.forEach((branch) => {
            branches.push(branch.data().name)
        });
        setBranch(branches);  
    };

    const getProvinces = async () => {
        const dataProvince = await getDataProvince();
        
        const provinces =  [];
        dataProvince.forEach((province => {
            console.log(province.data())
            provinces.push(province.data().name)
        }));
        setProvince(provinces)
    };


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
                        items={branch}
                        name={branch}
                        value={values.rama}
                        onChange={handleChange('rama')}
                    />
                </div>
                <div className='location'>
                    <h2 className='title-select'>Provincia</h2>
                    <h4>(Selecciona una opción)</h4>
                    <SelectForm
                        items={province}
                        name={province}
                        value={values.provincia}
                        onChange={handleChange('provincia')}
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