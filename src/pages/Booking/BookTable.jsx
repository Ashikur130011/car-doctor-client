import React from 'react';

const BookTable = ({ booking, handleDelete, handleBooking}) => {
    const { _id, img, service, price, date, status } = booking
    return (
        <tbody>
            {/* row 1 */}
            <tr className='text-center'>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-square btn-error btn-sm btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24  24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center gap-6">
                        <div className="avatar ">
                            <div className="w-20 rounded-xl">
                                {
                                    img && <img
                                        src={img}
                                        alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">{service}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {price} $
                </td>
                <td>{date}</td>
                <th>
                    {
                        status === 'confirm' ? <span className='text-success text-lg'>Confirmed</span>:
                    <button onClick={() => handleBooking(_id)} className="btn btn-warning btn-xs">Pending</button>
                    }
                </th>
            </tr>

        </tbody>
    );
};

export default BookTable;