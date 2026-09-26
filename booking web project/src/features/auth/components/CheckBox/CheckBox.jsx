import React from 'react'
import './CheckBox.css'
function CheckBox({label,name,id,required=false}) {
  return (
     <div className="checkbox-container">
              <input type="checkbox" name={name} id={id} required={required} />
              <label htmlFor={id}>{label}</label>

            </div>
  )
}

export default CheckBox