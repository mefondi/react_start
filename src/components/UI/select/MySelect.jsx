import React from 'react'

export default function MySelect({option, defaultValue}) {
  return (
    <select>
    <option disabled={true} value="">{defaultValue}</option>
    {option.map((option) => 
     <option value="option.value">{option.name}</option>
    )}
  </select>
  )
}