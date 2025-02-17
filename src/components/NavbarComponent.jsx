import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { navLinks } from '../data/index'
import { NavLink } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Icon from '../../public/icon.png'


export const NavbarComponent = () => {

  const [changeColor,setChangeColor] = useState(false);
  const changeBackgroundColor = () =>{
    if (window.scrollY > 10){
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  useEffect(() =>{
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor)
  })

  return (
    <Navbar expand="lg" className={`fixed-top ${changeColor ? "color-active" : ""}`}>

      <Container>
        <Navbar.Brand href="/"><img className='image-brand' src={Icon} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navLinks.map((link) => {
              return (
                <div key={link.id} className='nav-link'>        
                  <NavLink to={link.path} end>{link.text}</NavLink>
                </div>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
