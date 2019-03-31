import React from 'react'
import './display.css'

const Display = props => (
  <div className='display-container'>
    <span>{props.displayedText || '0'}</span>
  </div>
)

export default Display
