import React from 'react';
import  logo  from '../../assets/images/logo.png';
import study from '../../assets/images/study.svg';
import './phases.css';
import StepBar from './stepBar';

const Phases = () => {

    return(
        <div className='lateral-navbar'>
            <div className='lateral-header'>
                <img className='logo' src={logo}></img>
                 <h4 className='title'>Magister</h4>
            </div>
            <div>
                <StepBar />
            </div>
            <div>
                <img className='study' src={study}></img>
            </div>
        </div>
    )
}

export default Phases;