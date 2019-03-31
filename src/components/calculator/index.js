import React, { useState } from 'react'
import './calculator.css'
import Display from '../display'
import Button from '../button'
import { BASE_LAYOUT, ERROR } from '../../constants'
import { calculatorActionHandler } from '../../utilities'

const Calculator = props => {
  const [calculatorValue, setCalculatorValue] = useState('')
  const onClickHandler = event => {
    setCalculatorValue(
      calculatorActionHandler(calculatorValue, event.target.innerText),
    )
  }
  return (
    <div className='calculator-container'>
      <Display displayedText={calculatorValue} />
      <div className='calculator-buttons'>
        {BASE_LAYOUT.map(btn => (
          <Button
            key={btn.text}
            onClick={onClickHandler}
            disabled={calculatorValue === ERROR && btn.text !== 'CE'}
          >
            {btn.text}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Calculator
