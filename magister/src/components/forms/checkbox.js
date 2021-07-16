import React from 'react';

import './forms.css';

function Checkbox({  items, checked, handleChange}){

   
    return (
        <div className="radio-toolbar" >
            {items.map(item =>
                <>
                <input type="radio" items={items}  value={item} checked={checked === item} onChange={(event) => handleChange(event)}></input> 
                <label for="radio-label">{item}</label>
                </>
                )}
           
                
        
        </div>
    )
}

export default Checkbox;