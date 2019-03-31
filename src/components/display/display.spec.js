import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Display from './'

describe('Display should', () => {
  it('exist', () => {
    expect(Display).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<Display displayedText='(2+2)*(2+2)' />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
