
import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  useNavigate } from 'react-router-dom';





const ChackOut = () => {
    let navigate = useNavigate();
    const [agree,setAgree]=useState(false)
    const fromControl=(e)=>{
        e.preventDefault()
       
      };
    //   model

    // end model
    const notify = (e) =>{
        toast("Chack Out sucessFull!");
        navigate("/");
      
      
    };
 
   
  


    return (
       
        <div>
           
            <h1 className="text-center">
                This is The Chack Out Page
            </h1>
           
            <Form onSubmit={fromControl} className='w-50 mx-auto mb-5'>
  <Form.Group className="mb-3 " >
    <Form.Label>Name :</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" required/>
   
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Address :</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" required/>
   
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Current City :</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" required/>
   
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

 
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" onClick={()=>setAgree(!agree)}  />
  </Form.Group>

  
  <Button disabled={!agree} variant="primary" onClick={notify} type="text" >
      
    Chack Out
  </Button>
  
</Form>
<ToastContainer />


         


            
        </div>
    );
};


export default ChackOut;