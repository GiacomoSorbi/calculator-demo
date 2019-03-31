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
})
