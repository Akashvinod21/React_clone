import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





function Header() {

    
    const [dropDown,setDropDown]=useState(false)
    const [dropHover,setDropHover]=useState(false)
    

    const mouseHover=()=>{
        setDropDown(true)
        
    }

    const mouseLeave=()=>{
        
        setDropDown(false)
    }

    const mouseHovering=()=>{
        setDropHover(true)
        
    }

    

    const mouseLeaving=()=>{
        
        setDropHover(false)
    }
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
      
        <Navbar.Brand>
            <div className='d-flex justify-content-center align-items-center'>
            <img src="https://www.pngall.com/wp-content/uploads/13/Nothing-Phone-Logo-PNG.png" alt="" style={{width:"90%",height:"20px"}} />
            </div>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto me-1'/>
        
        <Navbar.Collapse id="basic-navbar-nav" >
          <div className='d-flex justify-content-center align-items-center w-100'>
              <Nav>
              <NavDropdown title="Phone"  className='fw-bolder' style={{color:"black"}} id="basic-nav-dropdown" show={dropDown} onMouseEnter={mouseHover} onMouseLeave={mouseLeave}>
                  <NavDropdown.Item  href="#action/3.1 " >Phones</NavDropdown.Item>
                  <NavDropdown.Item  href="#action/3.2 " >Phone(2)</NavDropdown.Item>
                  <NavDropdown.Item  href="#action/3.3 " >Phone(2a)</NavDropdown.Item>
                  <NavDropdown.Item  href="#action/3.4 " >Accessories</NavDropdown.Item>
                 
                </NavDropdown>

                <NavDropdown title="Audio" className='fw-bolder' style={{color:"black"}} id="basic-nav-dropdown" show={dropHover} onMouseEnter={mouseHovering} onMouseLeave={mouseLeaving}>
                <NavDropdown.Item  href="#action/3.1 " >Earbuds</NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.1 " >Ear</NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.1 " >Ear(a)</NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.1 " >View All</NavDropdown.Item>
                </NavDropdown>


                <Nav.Link href="#home" className='fw-bolder' style={{color:"black"}}>CMF</Nav.Link>
                <Nav.Link href="#home" className='fw-bolder' style={{color:"black"}}>Store</Nav.Link>
                <Nav.Link href="#home" className='fw-bolder' style={{color:"black"}}>Community</Nav.Link>
                <Nav.Link href="#link" className='fw-bolder' style={{color:"black"}}>Support</Nav.Link>
                
              </Nav>
          </div>
          <FontAwesomeIcon icon={faUser} className='me-md-auto text-center hide'/>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    </>
  )
}

export default Header