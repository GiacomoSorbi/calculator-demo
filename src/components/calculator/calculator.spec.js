import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Calculator from './'

describe('Calculator should', () => {
  it('exist', () => {
    expect(Calculator).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<Calculator />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // to be decided - either refactor with class component or use react-testing-library
  xit('Perform proper operations', () => {
    const wrapper = mount(<Calculator />)
    const buttons = wrapper.find('button')
    console.log(buttons.length, buttons[13])
    // pressing '2'
    buttons.at(13).simulate('click')
    // pressing '+'
    buttons.at(19).simulate('click')
    // pressing '4'
    buttons.at(13).simulate('click')
    // pressing '='
    buttons.at(18).simulate('click')
    const span = wrapper.find('Display')
    // expect(wrapper.state()).toBe(4)
    console.log(toJson(span))
    expect(span.textContent).toBe(4)
  })
})
