import React from 'react';
import './forms.css';



function SelectForm({ value, label, items, handleChange, name}) {
    
    const handleSelectChange = (event) => {
        handleChange(event);
    };


    return (
        <div>
            <select id={items.id} name={name} className='select' onChange={(event) => handleSelectChange(event)} items={items}>
               {items.map(item => 
                    <option   value={item} label={item}  />
               )}
            </select>
        </div>
    )
}

export default SelectForm;