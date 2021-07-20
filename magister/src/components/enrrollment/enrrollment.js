import React from 'react';
import Phases from './phases';
import './enrrollment.css';
import Specialize from './specialize';
import Shedule from './schedule-modality';
import Tariff from './tariff';
import PersonalData from './personalData';


const Enrrollment = () => {

    const [branch, setBranch] = React.useState();
    const [province, setProvince] = React.useState();
    const [exStudent, setExStudent] = React.useState();
    const [modality, setModality] = React.useState();
    const [schedule, setSchedule] = React.useState();

    const [enrollmentData, setEnrollmentData] = React.useState( {
        step: 1,
    });


    const data = {
        branch: branch,
        province: province,
        exStudent: exStudent,
        modality: modality,
        schedule: schedule
    }

    console.log(data)

    const  prevStep = () => {
        const step = enrollmentData.step;
        setEnrollmentData({step: step - 1})       
    } 
    const nextStep = () => {
        const step = enrollmentData.step;
        setEnrollmentData({step: step + 1}) 
    };

    const selectBranch = (event) => {
        setBranch(event)
    }
    const selectProvince = event => {
        setProvince(event)
    }
    const selectExStudent = event =>  {
        setExStudent(event)
    }
    const selectModality = event => {
        setModality(event)
    }
    const selectSchedule = event => {
        setSchedule(event)
    }

    const enrrollement = (enrollmentData) => {
        switch(enrollmentData.step) {
            case 1:
                return ( 
                <Specialize 
                    nextStep={nextStep}
                    selectBranch={selectBranch}
                    selectProvince={selectProvince}
                    selectExStudent={selectExStudent}
                    
                /> 
                )
            case 2:
                return (
                    <Shedule
                        prevStep={prevStep}
                        nextStep={nextStep}
                        selectModality={selectModality}
                        selectSchedule={selectSchedule}
                         
                    />
                )
            case 3:
                return (
                    <Tariff 
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={null}
                         
                    />
                )
            case 4:
                return (
                    <PersonalData
                        prevStep={prevStep}
                        nextStep={nextStep}
                        handleChange={null}
                          
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
                   {enrrollement(enrollmentData)}
                </div>
               
            </div>
        </div>
    )
}

export default Enrrollment;