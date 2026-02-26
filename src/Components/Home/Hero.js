import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
    return (
        // linier gradiend color top to bottom from #ff7e5f to #feb47b
        <div className='w-full relative h-[90vh] bg-gradient-to-b from-[#cbe5ff10] to-[#cbe5ff] flex items-center justify-center'>
            <div className='container py-10 lg:py-20 z-10'>
                <h2 className='text-4xl font-semibold text-primary'>Manage Tasks</h2>
                <h1 className='text-7xl my-5 font-bold text-gray-800 mb-4'>Guide Your Group Stay  <br />
                    in Control!</h1>
                <p className='text-lg text-gray-600 mb-8'>Perfect for teachers, parents, and business managers.</p>
                <button className='bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 flex items-center'>Start Free Trial 15 days <FaArrowRight className='inline-block ml-2' /></button>
            </div>
            <div className='absolute bottom-0 right-0 w-1/2  bg-gradient-to-t from-[#cbe5ff] to-transparent'>
                <img className='w-full h-full object-cover z-0' src="/Images/Home/Heor_banner_Image.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;
