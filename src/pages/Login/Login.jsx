import React from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="card bg-base-100 w-full md:py-16 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className="text-5xl  text-center font-bold">Login!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-lg btn-primary">Login</button>
                        </div>
                        <div className='text-center'>
                            <p>Don't have account? Please <Link to="/register"><span className='text-blue-700 font-bold'>Register</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;