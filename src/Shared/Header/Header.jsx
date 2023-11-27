import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/home-image/logo.svg'
const Header = () => {
  return (
    <Navbar expand="lg" className="text-white" style={{backgroundColor:'#21364A',borderBlockEnd:'3px solid #A3C43D'}}>
    <Container>
      <Navbar.Brand href="#home"> <Image src={logo} className='img img-fluid' style={{width:'100px'}} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="" className='text-white'>Home</Nav.Link>
          <Nav.Link href="about" className='text-white'>About</Nav.Link>
          <Nav.Link href="services" className='text-white'>Services</Nav.Link>
          <Nav.Link href="appoinment" className='text-white'>Appoinment</Nav.Link>
          <NavDropdown  title="Dropdown" id="basic-nav-dropdown" className='text-white'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href="contact" className='text-white'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default Header