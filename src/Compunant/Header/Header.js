import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css'

const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
      
        return (
          <div>
            <Link
              style={{ color: match ? "red" : "white" }}
              to={to}
              {...props}
            >
              {children}
            </Link>
         
          </div>
        );
      }
    return (
        <div>
            <Navbar bg="primary" expand="lg">
  <Container fluid>
     <h1 ><Link className='text-white text-decoration-none' to="/"><span className='text-danger'>B</span>ody Bil<span className='text-danger'>d</span>ing</Link></h1> 
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >

      </Nav>
      <div className='navber-item'>
          <li><CustomLink to='/'>Home</CustomLink></li>
         <li><CustomLink to='/blog'>Blog</CustomLink></li> 
         <li><CustomLink to='/about'>About</CustomLink></li> 
          <li><CustomLink to='/login'>Log in</CustomLink></li>
         <li><CustomLink to='/register'>Register</CustomLink></li> 
          
      </div>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;