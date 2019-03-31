import { calculatorActionHandler, evaluateExpression } from './'
import { ERROR } from '../constants'

describe('calculatorActionHandler should', () => {
  it('exist', () => {
    expect(calculatorActionHandler).toBeDefined()
  })

  it('handle normal operations incrementing the current expression', () => {
    let currentExpression, newAction
    currentExpression = '2+'
    newAction = '2'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
    currentExpression = '34+5'
    newAction = '*'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
    currentExpression = ''
    newAction = '4'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
    currentExpression = '(5-6)*'
    newAction = '8'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
    currentExpression = '-4/'
    newAction = '1'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
  })

  it("remove the last character when 'C' is pressed", () => {
    let currentExpression, newAction
    currentExpression = '23'
    newAction = 'C'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression.slice(0, -1),
    )
    currentExpression = '4/7'
    newAction = 'C'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression.slice(0, -1),
    )
    currentExpression = ''
    newAction = 'C'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression.slice(0, -1),
    )
  })

  it("reset the expression when 'CE' is pressed", () => {
    let currentExpression, newAction
    currentExpression = '('
    newAction = 'CE'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe('')
    currentExpression = '(5-6)*'
    newAction = 'CE'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe('')
    currentExpression = ''
    newAction = 'CE'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe('')
  })

  it("add an initial 0 when '.' is inputted only when first character", () => {
    let currentExpression, newAction
    currentExpression = ''
    newAction = '.'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      '0' + newAction,
    )
    currentExpression = '23'
    newAction = '.'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
    currentExpression = '4/7'
    newAction = '.'
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(
      currentExpression + newAction,
    )
  })

  it(`provide the expected result or '${ERROR}' when '=' is passed`, () => {
    let currentExpression, newAction
    currentExpression = '2+2'
    newAction = '='
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(4)
    currentExpression = '(2+2)*(2+2)'
    newAction = '='
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(16)
    currentExpression = '2+2)'
    newAction = '='
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(ERROR)
    currentExpression = '4/0'
    newAction = '='
    expect(calculatorActionHandler(currentExpression, newAction)).toBe(ERROR)
  })
})

describe('evaluateExpression should', () => {
  it('exist', () => {
    expect(evaluateExpression).toBeDefined()
  })

  it('correctly evaluate simple expressions', () => {
    expect(evaluateExpression('2+3')).toBe(5)
    expect(evaluateExpression('21-12')).toBe(9)
    expect(evaluateExpression('1.8*30')).toBe(54)
    expect(evaluateExpression('6/4')).toBe(1.5)
  })

  it('correctly evaluate more complex expressions', () => {
    expect(evaluateExpression('2+3*4')).toBe(14)
    expect(evaluateExpression('21-12/6')).toBe(19)
    expect(evaluateExpression('2-9*6+50')).toBe(-2)
    expect(evaluateExpression('1+2+3+6/4-0.5')).toBe(7)
  })

  it('correctly evaluate more complex expressions using parentheses', () => {
    expect(evaluateExpression('(2+3)*4')).toBe(20)
    expect(evaluateExpression('(21-12)/6')).toBe(1.5)
    expect(evaluateExpression('(2-9)*(6+50)')).toBe(-392)
    expect(evaluateExpression('1+(2+(3+6))/(4-2)')).toBe(6.5)
    expect(evaluateExpression('1+2+((3+6)/(4-2))')).toBe(7.5)
  })

  it(`return '${ERROR}' for invalid expressions`, () => {
    expect(evaluateExpression('2+3*4)')).toBe(ERROR)
    expect(evaluateExpression('(3+6')).toBe(ERROR)
    expect(evaluateExpression('8..21')).toBe(ERROR)
    expect(evaluateExpression('6/0')).toBe(ERROR)
    expect(evaluateExpression('8..21')).toBe(ERROR)
  })
})
