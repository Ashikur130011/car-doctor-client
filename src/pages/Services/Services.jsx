import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then( res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])
    return (
        <div className='mx-auto'>
            <div className='text-center space-y-5'>
            <h3 className='text-xl font-bold text-orange-500'>Service</h3>
            <h1 className='text-5xl font-bold text-black'>Our Service Area</h1>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            <div className='grid md:ps-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
            }
            </div>
            <div className='py-9'>
            <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
        </div>
    );
};

export default Services;