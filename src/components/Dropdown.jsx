import React from 'react'
import "./SearchAndDrop.css"

export default function Dropdown({label,options, selectedValue,sortValue}) {
    return (
        <div className='div-dropdown'>
          <label className='div-dropdown-label'>{label}</label>
          <select 
          className="div-dropdown-option-field" 
          onChange={(value) => (sortValue(value.target.value))}
          value={selectedValue}>
            {options.map((OptVal, index) => (
              <option key={index} value={OptVal}>
                {OptVal}
              </option>
            ))}
            

          </select>
        </div>
      );
}
