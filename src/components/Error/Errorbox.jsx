import React from 'react'
import './Errorbox.css'

export default function Errorbox({message}) {
  return (
    <div className='cms-empty-error'>
      <h1>{ message }</h1>
    </div>
  )
}
