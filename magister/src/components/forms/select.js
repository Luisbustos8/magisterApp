import React from 'react';
import './forms.css';



function SelectForm({ value, label, handleChange, items, name}) {
    
    const handleSelectChange = (event) => {
        handleChange(event);
    }
  
    
    

    return (
        <div>
            <select id={items.id} name={name} className='select' onChange={(event) => handleSelectChange(name, event)} items={items}>
               {items.map(item => 
                    <option   value={item} label={item}  />
               )}
            </select>
        </div>
    )
}

export default SelectForm;