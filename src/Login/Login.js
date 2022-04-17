import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
// import auth from './../../firebase.init';
import auth from '../firebase.init';
import googleImg from '../images/sing-in-img/google-signin-button-1024x260.png';
import {  useLocation } from 'react-router-dom';


const Login = () => {
  let location = useLocation();
let from = location.state?.from?.pathname || "/";
  
    // singing system start
    let navigate = useNavigate();
    const [errors,setErrors]=useState("")
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] =useSignInWithEmailAndPassword(auth);


      const fromControl=(e)=>{
        e.preventDefault()
      
       const email=e.target[0].value;
       const password=e.target[1].value;
       if(loading){
           
       }
       if(error){
        setErrors(  <p>Error: {error.message}</p>)
        return;

        }
        signInWithEmailAndPassword(email, password)
      };
      if( user){
        navigate(from, { replace: true });
      }
    // singing system end
    const [signInWithGoogle, googleuser, gooleloading, googleerror] = useSignInWithGoogle(auth);
    
    const googleSingin=()=>{
     signInWithGoogle()
  };
  if(googleuser){
    navigate('/');
  }
  

    return (
        <div className='mt-5 mb-5'>
            <h1 className='mt-5 text-center'>This is the Login page</h1>
            <Form onSubmit={fromControl} className='w-50 mx-auto'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Login
  </Button>
  <h2 className='text-danger'>{errors}</h2>

  <h3>You're New User ,<span ><Link  className='text-primary' to="/register">Please Ragister !!</Link></span></h3>


</Form>
<br />
           <br />
           <div className='service-title'>
               <div className='hr'></div>
               <h6 className='px-2'>Or</h6>
               <div className='hr'></div>
            </div>
            <div className='d-flex items-center google'>
               <img src={googleImg } onClick={googleSingin} alt="" /> 

            </div> 
        </div>
    );
};

export default Login;