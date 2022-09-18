import React from 'react'
import './Chip.css'
const Chip = ({label}) => {
  return (
    <p className='chip'>
      {label}
    </p>
  )
}

export default Chip
