import { ERROR } from '../constants'

export const calculatorActionHandler = (currentExpression, newAction) => {
  switch (newAction) {
    case 'CE':
      return ''
    case 'C':
      return currentExpression.slice(0, -1)
    case '.':
      return (currentExpression || '0') + newAction
    case '=':
      return evaluateExpression(currentExpression)
    default:
      return currentExpression + newAction
  }
}

export const evaluateExpression = expression => {
  try {
    const result = eval(expression)
    return Math.abs(result) === Infinity ? ERROR : result
  } catch (error) {
    return ERROR
  }
}
