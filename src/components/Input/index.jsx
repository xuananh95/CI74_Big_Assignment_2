import React from 'react'
import { SInput } from './styles'


const Input = ({label, val, setVal}) => {
  return (
    <SInput>
        <label>{label}</label>
        <input type="text" value={val} onChange={(e)=> setVal(e.target.value)} required />
    </SInput>
  )
}

export default Input