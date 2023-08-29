import React from 'react'
import logo from '../assets/images/johnny_cash.jpg'
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={logo} className='logo' alt="Johnny Cash" />
        <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header
