import React from 'react';
import Phases from './phases';
import './enrrollment.css';
import Specialize from './specialize';
import Shedule from './schedule-modality';
import Tariff from './tariff';
import PersonalData from './personalData';



const Enrrollment = () => {

    const [enrollmentData, setEnrollmentData] = React.useState( {
        step: 1,
        rama: '',
        city: '',
        exStudent: '',
        presentation: '',
        modality:'',
        schedule:'',
        tariff: '',
        name:'',
        dni:'',
        provincia: '', 

    });

    const  { rama, localidad, exStudent, presentation, modality, schedule, tariff, name, dni, provincia } = enrollmentData;
    const values = { rama, localidad, exStudent, presentation, modality, schedule, tariff, name, dni, provincia}

    const  prevStep = () => {
        const step = enrollmentData.step;
        
        setEnrollmentData({step: step - 1})       
    } 
    const nextStep = () => {
        const step = enrollmentData.step;
        setEnrollmentData({step: step + 1}) 
    };

    const handleChange = input =>  event => {
        setEnrollmentData({[input]: event.target.value})
    };

    const enrrollement = (enrollmentData) => {
        switch(enrollmentData.step) {
            case 1:
                return ( 
                <Specialize 
                nextStep={nextStep}
                handleChange={handleChange}
                values={values}
                /> 
                
                )
            case 2:
                return (
                    <Shedule
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
            case 3:
                return (
                    <Tariff 
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values} 
                    />
                )
            case 4:
                return (
                    <PersonalData
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={values}  
                        />
                )
            default:
                //do nothing;
        }
    }

    return (
        <div>
            <div className='container'>
                <Phases />
                <div className='fondo'>
                   {enrrollement (enrollmentData)}
                </div>
            </div>
        </div>
    )
}


export default Enrrollment;