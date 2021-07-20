import React from 'react';
import { getDataModality, getDataSchedule } from '../data/data';
import Checkbox from '../forms/checkbox';
import './schedule-modality.css'


const Shedule = ({prevStep, nextStep, selectSchedule, selectModality}) => {

    const [schedule, setSchedule] = React.useState([]);
    const [modality, setModality] = React.useState([]);

    React.useEffect(() => {
       getSchedule();
       getModality();
    },[])

    const getSchedule = async () => {
        const dataSchedule = await getDataSchedule();
        
        const schedules =  [];
        dataSchedule.forEach((schedule => {
            schedules.push(schedule.data().name)
        }));
        setSchedule(schedules)
    };

    const getModality= async () => {
        const dataModality = await getDataModality();
        
        const modality =  [];
        dataModality.forEach((mod => {
            modality.push(mod.data().name)
        }));
        setModality(modality)
    };

     const continueEnrollment = (e)=> {
        e.preventDefault();
        nextStep();
    }
    
    const backEnrollment = (e) => {
        e.preventDefault();
        prevStep();
    }

     const handleModality = radiocheck => {
        selectModality(radiocheck)
    }
    const handleSchedule = radiocheck => {
        selectSchedule(radiocheck)
    }

    

    
    
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
                     {modality.map(item =>
                <button className='active-button' onClick={() => handleModality(item)} >{item}</button>
            )} 
                </div>
                 <div className='container-schedule'>
                    <h2 className='schedule'>Horario</h2>
                    <h4 className='schedule'>(Selecciona una opción)</h4>
                <div className='checkbox-schedule'>
                    {schedule.map(item =>
                        <button className='active-button' onClick={() => handleSchedule(item)} >{item}</button>
                    )} 
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