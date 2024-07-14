import React, { useContext } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)

        createUser(email, password)
            .then( result => {
                console.log(result.user)
                if(result.user){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registered Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                form.reset()

            })
            .error(error => {
                console.log(error.code)
            })


    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content w-full flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img src={loginImg} alt=""/>
                </div>
                <div className="card bg-base-100 md:py-16 w-full max-w-md shrink-0 shadow-2xl">
                <h1 className="text-5xl  text-center font-bold">Register!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn text-lg btn-primary">Register</button>
                        </div>
                        <div className='text-center'>
                            <p>Have an account? Please <Link to="/login"><span className='text-blue-700 font-bold'>Login</span></Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;