import React from 'react'
import './calculator.css'
import Display from '../display'
import Button from '../button'
import { BASE_LAYOUT } from '../constants'

const Calculator = props => {
  const onClickHandler = event => console.log(event.target.innerText)
  return (
    <div className='calculator-container'>
      <Display displayedText={'3.14'} />
      <div className='calculator-buttons'>
        {BASE_LAYOUT.map(btn => (
          <Button key={btn.text} onClick={onClickHandler}>
            {btn.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Calculator
