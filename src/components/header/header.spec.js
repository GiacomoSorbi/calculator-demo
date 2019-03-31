import * as React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './'

describe('Header should', () => {
  it('exist', () => {
    expect(Header).toBeDefined()
  })

  it('have a consistent structure', () => {
    const wrapper = mount(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
