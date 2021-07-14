import React  from 'react';
import './initialPage.css';
import  logo  from '../../assets/images/logo.png';
import Button from '../Button/button';


const InitialPage = () => {


    return (
        <div>
            <div className='header'>
                <img className='logo' src={logo}></img>
                <h4 className='title'>Magister</h4>
            </div>
            <div className='start-info'>
                <h1 className='start-enrollment'>¡Comencemos con tu matrícula!</h1>
                <p className='start-description'>Para comenzar a especializarte, vamos a realizar unas preguntas para darte el mejor servicio</p>
            </div>
            <div className='button'>
                <Button label='comenzar' />
            </div>
        </div>
    )



}

export default InitialPage;