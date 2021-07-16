import React from 'react';
import Phases from './phases';
import './enrrollment.css';
import Specialize from './specialize';
import Shedule from './schedule-modality';
import Tariff from './tariff';



const Enrrollment = () => {

    const [state, setState] = React.useState( {
        step: 1,
        rama: '',
        provincia: '',
        alumno: '',
        entregas: '',
    });

    const prevStep = (state) => {
        const step = state.step;
        setState({step: step - 1})       
    } 
    const nextStep = (state) => {
        const step = state.step;
        setState({step: step + 1})
    };

    const handleChange = input =>  event => {
        setState({[input]: event.target.value})
    };

    // const enrrollement = () => {
    //     switch(step) {
    //         case 1:
    //             return ()
    //     }
    // }

    return (
        <div>
            <div className='container'>
                <Phases />
                <div className='fondo'>
                    {/* <Specialize /> */}
                    {/* <Shedule /> */}
                    <Tariff />
                </div>
            </div>
        </div>
    )
}


export default Enrrollment;