import React from 'react'
import Navbar from '../Navbar/Navbar'
import { SearchIcon } from '../SVG/SVG'

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
                       <SearchIcon/>
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

