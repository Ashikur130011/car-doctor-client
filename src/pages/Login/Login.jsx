import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';


const Login = () => {
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });

                    }
                    //navigate(location?.state ? location.state : '/' )
                    //get access token
                    const user = {email}
                    axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
                    .then(res => {
                        console.log(res.data)
                        if(res.data.success){
                            navigate(location?.state ? location.state : '/' )
                        }
                    })

                form.reset()
            })
            .error(error => {
                console.log(error.code)
            })
            
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="card bg-base-100 md:py-16 w-full max-w-md shrink-0 shadow-2xl">
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