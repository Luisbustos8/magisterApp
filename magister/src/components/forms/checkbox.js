import React from 'react';

import './forms.css';

function Checkbox({  items, checked, handleChange}){

   const [selected, setSelected] = React.useState('');

   const handleRadioChange = (item) => {
        setSelected(item);
        handleChange(item)
   }
    return (
        <div className="ra-button" >
            {items.map(item =>
                <button className={item === checked ? 'active-button' : 'radio-button'} onClick={() => handleRadioChange(item)} >{item}</button>
            )}  
        </div>
    )
}

export default Checkbox;