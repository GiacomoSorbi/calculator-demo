import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = props => (
  <div className='app-header'>
    <img alt='equal experts' src={logo} className='logo' />
  </div>
)

export default Header
