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
})
