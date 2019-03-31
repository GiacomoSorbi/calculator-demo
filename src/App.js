import React, { Component } from 'react'
import Header from './components/header'
import Calculator from './components/calculator'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Calculator />
      </div>
    )
  }
}

export default App
