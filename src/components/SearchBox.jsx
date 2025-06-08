import React from 'react'
import "./SearchAndDrop.css"

export default function SearchBox({label, placeholder, value,handleSearch}) {
  return (
    <div className="div-search">
        <label className='div-search-label'>{label}</label>
        <input className='div-search-input-style' type='text' placeholder={placeholder} value={value} 
        onChange={(event)=>handleSearch(event.target.value)}/>
        
    </div>
  )
}
