import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseHooks from '../../UseHokks/UseHooks';
import ServiceItem from './ServiceItem';
import './Services.css'

  


const Services = (id) => {
    const navigate=useNavigate()
    const datas=UseHooks();
    const deteles=(product)=>{
        navigate('/chackOut');
    }
    
    return (
        <div className='container container-service'>
            <div className='service-title'>
               <div className='hr'></div>
               <h1> Services</h1>
               <div className='hr'></div>
            </div>
        <div className='service'>
            {
                datas.map(item=><ServiceItem key={item.id} item={item} func={deteles}></ServiceItem>)
            }
            
        </div>
        <h2 className='text-center chak'><Link to="/chackOut">Chack-Out</Link></h2>
        </div>
    );
};

export default Services;