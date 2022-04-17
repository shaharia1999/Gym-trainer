import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar,} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './Header.css';


const Header = () => {
    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
          <div >
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
      const [user, loading, error] = useAuthState(auth);
      const navigate=useNavigate();
     const singout=()=>{
      signOut(auth).than(()=>{
        navigate('/')

      })
      .catch((error) => {
        // An error happened.
      });

     }
    
    return (
        <div className='header'>
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
         {
           user?.uid?
           <li><CustomLink onClick={singout} to='/' >Log Out</CustomLink></li>:
            <li><CustomLink to='login'>Log in</CustomLink></li> 
         }
          
         <li><CustomLink to='/register'>Register</CustomLink></li> 
          
      </div>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
            
        </div>
    );
};

export default Header;