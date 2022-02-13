import React from 'react'
import { Navbar } from 'react-bootstrap'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <img src={logo} alt='logo' width='180' height='100' className='px-2' />
      </Navbar.Brand>
    </Navbar>
  )
}

export default Header
