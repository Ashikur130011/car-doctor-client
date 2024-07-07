import React from 'react';
import imag1 from '../../../assets/images/banner/1.jpg'
import imag2 from '../../../assets/images/banner/2.jpg'
import imag3 from '../../../assets/images/banner/3.jpg'
import imag4 from '../../../assets/images/banner/4.jpg'
import imag5 from '../../../assets/images/banner/5.jpg'
import imag6 from '../../../assets/images/banner/6.jpg'


const Banner = () => {


    return (
        <div className="carousel md:h-[600px] h-[400px] rounded-xl border-r-2">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                    src={imag1}
                    className="w-full" />
                <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide6" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                    src={imag2}
                    className="w-full" />
                    <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                    src={imag3}
                    className="w-full" />
                    <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={imag4}
                    className="w-full" />
                    <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                    src={imag5}
                    className="w-full" />
                    <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                    src={imag6}
                    className="w-full" />
                   <div className="absolute h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]   flex transform">
                    <div className='text-white md:space-y-7 pl-4 md:pl-12 md:w-1/2'>
                    <h1 className='text-6xl'>Affordable Price For Car Servicing</h1>
                    <p className='items-center'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                    <button className="btn btn-outline btn-success mr-2">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 justify-end gap-2 flex -translate-y-1/2 transform">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;