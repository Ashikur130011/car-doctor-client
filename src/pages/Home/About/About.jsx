import React from 'react';
import about1 from '../../../assets/images/about_us/person.jpg'
import about2 from '../../../assets/images/about_us/parts.jpg'
import './About.css'

const About = () => {
    return (
        <div className="hero screen-height">
            <div className="hero-content flex-col gap-8 lg:flex-row">
                <div className='lg:w-1/2 h-full relative'>
                    <img
                        src={about1}
                        className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={about2}
                        className="w-1/2 border-white border-8 absolute top-1/2 right-5 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 h-full space-y-6'>
                    <h1 className='text-3xl text-orange-500 font-bold'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /> <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-error bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;