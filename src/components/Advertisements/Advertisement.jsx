import React from 'react'
import { FullArrow } from '../SVG/SVG'

function Advertisement() {
    return (
        <div className='min-h-[300px] sm:h-[500px] md:min-h-[800px] mt-[160px] px-4 md:px-6 custom1:px-0 max-w-screen w-full bg-no-repeat bg-center bg-cover md:bg-top flex justify-center' style={{ backgroundImage: "url('/assets/service.png')" }}>
            <div className='flex flex-col lg:flex-row lg:justify-between pb-10 md:pb-0 gap-[24px] lg:gap-[88px] mt-[32px] md:mt-[90px] w-full max-w-[1170px]'>
                <div className='flex flex-col whitespace-nowrap text-[44px] sm:text-[58px] leading-[69.6px]'>
                    <div>
                        <h1 className='font-normal ad-custom-header text-white'>100% Online</h1>
                    </div>
                    <div>
                        <h1 className='font-normal ad-custom-header text-white'>100% Convenient</h1>
                    </div>
                </div>
                <div>
                    <ul className='space-y-[21px]'>
                        <li className='flex items-center gap-[30px]'>
                            <FullArrow />
                            <h3 className='text-white text-[18px] font-medium leading-[28.8px] font-montreal'>Chat with a provider 24/7</h3>
                        </li>
                        <li className='flex items-center gap-[30px]'>
                            <FullArrow />
                            <h3 className='text-white text-[18px] font-medium leading-[28.8px] font-montreal'>Fast, discreet shipping</h3>
                        </li>
                        <li className='flex items-center gap-[30px]'>
                            <span><FullArrow /></span>
                            <h3 className='text-white text-[18px] font-medium leading-[28.8px] font-montreal'>Clinically proven ingredients and FDA-approved treatments.</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advertisement