import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './'

describe('Button should', () => {
  it('exist', () => {
    expect(Button).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<Button onClick={jest.fn()} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('trigger the callback function everytime the button is triggered', () => {
    const callback = jest.fn()
    const wrapper = mount(<Button onClick={callback} />)
    const button = wrapper.find('button')
    button.simulate('click')
    expect(callback).toHaveBeenCalledTimes(1)
    button.simulate('click')
    button.simulate('click')
    expect(callback).toHaveBeenCalledTimes(3)
  })
})
