import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="./logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong className='logoname p-3 mt-5 '>TastyMania</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header