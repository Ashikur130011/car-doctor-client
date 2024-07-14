import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData()
    const { _id,img, title, price } = service

    const {user} = useContext(AuthContext)

    const handleCheckOut = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = user?.email
        const message = form.message.value
        const order = {
            customerName: name,
            date,
            img,
            email,
            service_id:_id,
            service: title,
            price:price,
            message

        }

        console.log(order)

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(order) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Order palaced Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            form.reset()
        })
    }
    return (
        <div className='bg-base-200 py-16'>
            <h1 className='text-3xl font-semibold mb-4 text-center'>Service Name: {title}</h1>

            <form onSubmit={handleCheckOut} className="rounded-lg card-body max-w-80 bg-base-100 md:max-w-4xl pb-24 mx-auto shadow-2xl">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="name" name='name' defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>                    
                    <input type="date" name='date' placeholder="date" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Amount</span>
                    </label>
                    <input type="text" name='amount' defaultValue={price} placeholder={price} className="input input-bordered" required />
                    
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered" name='message' placeholder="message"></textarea>
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Place Order</button>
                </div>
            </form>
        </div>

    );
};

export default CheckOut;