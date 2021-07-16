

import React from 'react';
import './stepBar.css';

const StepBar = () => {


    return (
        <div>
            <ul id="progress">
                <li><div class="node green"></div><p>¿En qué te quieres especilizar?</p></li>
                <li><div class="divider grey"></div></li>
                <li><div class="node grey"></div><p>Horario y Modalidad</p></li>
                <li><div class="divider grey"></div></li>
                <li><div class="node grey"></div><p>Tarifa</p></li>
                <li><div class="divider grey"></div></li>
                <li><div class="node grey"></div><p>Datos Personales</p></li>
                <li><div class="divider grey"></div></li>
                <li><div class="node grey"></div><p>Forma de Pago</p></li>
            </ul>
        </div>
    )
}

export default StepBar;