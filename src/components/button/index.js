import React from 'react'
import './button.css'

const Button = props => (
  <button onClick={props.onClick} className='calculator-btn'>
    {props.children}
  </button>
)

export default Button
