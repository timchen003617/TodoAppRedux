import React from 'react'
import Container from 'components/Container'
import Navbar from 'components/Navbar'

const NavbarContainer = () => {
  return (
    <Container>
      <Navbar>
        <Navbar.item to='/'>Home</Navbar.item>
        <Navbar.item to='/about'>About</Navbar.item>
        <Navbar.item to='/todoApp'>TodoApp</Navbar.item>
      </Navbar>
    </Container>
  )
}

export default NavbarContainer
