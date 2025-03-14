import React from 'react'
import { FullArrow } from '../SVG/SVG'

function Advertisement() {
    return (
        <div className='absolute min-h-[800px] mt-[160px] max-w-screen w-full bg-no-repeat bg-top flex justify-center h-auto' style={{ backgroundImage: "url('src/assets/service.png')" }}>
            <div className='flex justify-between gap-[88px] mt-[90px] w-full max-w-[1170px]'>
                <div className='flex flex-col'>
                    <div>
                        <h1 className='text-[58px] font-normal leading-[69.6px] ad-custom-header text-white'>100% Online</h1>
                    </div>
                    <div>
                        <h1 className='text-[58px] font-normal leading-[69.6px] ad-custom-header text-white'>100% Convenient</h1>
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
                            <FullArrow />
                            <h3 className='text-white text-[18px] font-medium leading-[28.8px] font-montreal'>Clinically proven ingredients and FDA-approved treatments.</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advertisement