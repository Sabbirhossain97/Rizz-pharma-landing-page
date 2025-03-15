import React from 'react'
import Navbar from '../Navbar/Navbar'

function Hero() {
    return (
        <section
            className="relative w-full bg-[60%_top] bg-[2300px_auto] md:bg-auto min-h-[1100px] md:min-h-[1220px] bg-no-repeat md:bg-center"
            style={{ backgroundImage: "url('src/assets/hero.jpg')" }}
        >
            <Navbar />
            <div className='max-w-[1170px] px-6 custom1:px-0 mx-auto mt-[300px] sm:mt-[353px] md:mt-[53px]'>
                <h1 className='hero-custom-text1 text-center md:text-start'>Prescription <br className='hidden md:block' /> treatments for <br className='hidden md:block' /> your <br className='hidden md:block' /> <span className='hero-custom-text2'>health goals</span></h1>
                <div className='mt-[33px] flex justify-center md:justify-start items-center font-montreal'>
                    <button className='hero-custom-btn whitespace-nowrap cursor-pointer'>
                        <span>Find my treatment</span>
                    </button>
                </div>
                <div className='mt-16 md:mt-[147px] flex justify-center font-montreal'>
                    <div className='w-full md:w-3/4 lg:w-1/2 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='absolute z-2 left-[40px] top-[22px] md:top-[24px] h-[16px] w-[16px] md:h-[24px] md:w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fillRule="evenodd" clip-rule="evenodd" d="M11 1.25C5.61522 1.25 1.25 5.61522 1.25 11C1.25 16.3848 5.61522 20.75 11 20.75C13.4224 20.75 15.6385 19.8666 17.3437 18.4043L21.4697 22.5303C21.7626 22.8232 22.2374 22.8232 22.5303 22.5303C22.8232 22.2374 22.8232 21.7626 22.5303 21.4697L18.4043 17.3437C19.8666 15.6385 20.75 13.4224 20.75 11C20.75 5.61522 16.3848 1.25 11 1.25ZM2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11Z" fill="#FAF8F2" />
                        </svg>
                        <input
                            placeholder='Search by product/treatment'
                            className='border w-full indent-[72px] border-white text-white backdrop-blur-[102px] placeholder:text-[14px]  md:placeholder:text-[20px] placeholder:font-medium placeholder:tracking-[1.6px] placeholder:text-white rounded-[100px] bg-[rgba(67, 67, 67, 0.16)] px-[6px] py-[16px] md:py-[25px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

