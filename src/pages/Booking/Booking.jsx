import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import BookTable from './BookTable';
import Swal from 'sweetalert2';
import axios from 'axios';

const Booking = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0){
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                        const remainingBooking = bookings.filter( booking => booking._id != id)
                        setBookings(remainingBooking)
                    })
              
            }
          });

        }
        const handleBooking = (id) => {
            fetch(`http://localhost:5000/bookings/${id}`, {
              method: 'PATCH',
              headers: {
                  'content-type': 'application/json'
              },
              body:JSON.stringify({status: 'confirm'})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.modifiedCount > 0){
                        const remaining = bookings.filter(booking => booking._id !== id)
                        const updated = bookings.find(booking => booking._id === id)
                        updated.status = 'confirm'
                        const newBooking = [updated, ...remaining]
                        setBookings(newBooking)
                        console.log(newBooking)
                    }
                })
          }


    useEffect(() => {
        axios.get(url, {withCredentials: true}) 
        .then(res => {
            setBookings(res.data)
        })
        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url])


    return (

        <div className="overflow-x-auto md:max-w-4xl mx-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr  className='text-lg text-center'>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" disabled defaultChecked/>
                            </label>
                        </th>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {
                    bookings.map(booking => <BookTable 
                        key={booking._id}
                        booking={booking}
                        handleDelete={handleDelete}
                        handleBooking={handleBooking}
                        ></BookTable>)
                }
               
            </table>
        </div>
    );
};

export default Booking;