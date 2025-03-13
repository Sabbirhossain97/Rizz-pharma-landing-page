import React from 'react'
import Navbar from '../Navbar/Navbar'

function Hero() {
    return (
        <section
            className="relative w-full min-h-[1220px] bg-no-repeat bg-top"
            style={{ backgroundImage: "url('src/assets/hero.jpg')" }}
        >
            <Navbar />
            <div className='max-w-[1170px] mx-auto mt-[53px]'>
                <h1 className='hero-custom-text1'>Prescription <br /> treatments for <br /> your <br /> <span className='hero-custom-text2'>health goals</span></h1>
                <div className='w-[248px] mt-[33px] flex justify-center items-center font-montreal'>
                    <button className='hero-custom-btn whitespace-nowrap'>
                        <span>Find my treatment</span>
                    </button>
                </div>
                <div className='mt-[147px] flex justify-center font-montreal'>
            
                    <div className='w-1/2 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-2 left-[40px] top-[26px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.4224 20.75 15.6385 19.8666 17.3437 18.4043L21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L18.4043 17.3437C19.8666 15.6385 20.75 13.4224 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z" fill="#FAF8F2" />
                        </svg>
                        <input
                            placeholder='Search by product/treatment'
                            className='border z-0 border-white text-white w-full backdrop-blur-[102px] placeholder:text-[20px] placeholder:font-medium placeholder:tracking-[1.6px] placeholder:text-white rounded-[100px] bg-[rgba(67, 67, 67, 0.16)] px-[100px] py-[25px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

