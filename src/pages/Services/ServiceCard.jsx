import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, title, img, price} = service
    return (
        <div className="card bg-base-100 w-96 shadow-lg">
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
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn  btn-primary">Purchase</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;