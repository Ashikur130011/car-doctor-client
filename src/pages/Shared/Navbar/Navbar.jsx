import React from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><Link className='text-base me-2' to="/">Home</Link></li>
        <li><Link className='text-base me-2' to="/services">Services</Link></li>
        <li><Link className='text-base me-2' to="/login">Login</Link></li>
        <li><Link className='text-base me-2' to="/about">About</Link></li>
        <li><Link className='text-base me-2' to="/contact">Contact</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn logo btn-ghost text-xl">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline btn-success">Appoinment</a>
            </div>
        </div>
    );
};

export default Navbar;