import React from 'react';
import { Link } from 'react-router-dom';
import UseHooks from '../../UseHokks/UseHooks';
import ServiceItem from './ServiceItem';
import './Services.css'

const Services = () => {
    const datas=UseHooks();
    
    return (
        <div className='container container-service'>
            <div className='service-title'>
               <div className='hr'></div>
               <h1> Services</h1>
               <div className='hr'></div>
            </div>
        <div className='service'>
            {
                datas.map(item=><ServiceItem key={item.id} item={item}></ServiceItem>)
            }
            
        </div>
        <h2 className='text-center chak'><Link to="/chack-Out">Chack-Out</Link></h2>
        </div>
    );
};

export default Services;