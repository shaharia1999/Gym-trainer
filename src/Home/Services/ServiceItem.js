import React from 'react';
import './ServiceItem.css';

const ServiceItem = ({item,func}) => {
   
    const {picture,name,price,description,id}=item;
    return (
        <div className='Service-item'>
            <img src={picture} alt=""  />
             <h2>Name :{name.slice(0,20)}...</h2>
             <h2>Price :{price}</h2>
             <p>Description :{description.slice(0,100)}..</p>
             <button className='bg-primary b-none py-2 px-5 rounded-pill text-white' onClick={()=>func(item)}>Detelas</button>

            
        </div>
    );
};

export default ServiceItem;