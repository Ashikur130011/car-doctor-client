import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Service"
                    className="rounded-xl" />
            </figure>
            <div className="card-body font-semibold text-center">
                <h2 className="card-title font-bold">{title}</h2>
                <div className="card-actions flex items-center">
                <p className='text-red-600 text-start'>Price: $ {price}</p>
                    <button className="btn  btn-primary">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;