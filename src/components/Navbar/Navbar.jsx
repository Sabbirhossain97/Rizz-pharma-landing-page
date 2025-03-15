import React, { useState } from 'react'
import { CartMain, CloseIcon, DownArrow, MenuIcon, NavFacebook, NavInstagram } from '../SVG/SVG'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='pt-[20px] md:pt-[50px] max-w-[1170px] px-6 custom1:px-0 mx-auto flex justify-between relative font-montreal'>
            <div className='flex items-center gap-[10px] cursor-pointer'>
                <img src='src/assets/logo.png' className='w-3/4 lg:w-full' />
            </div>
            <div >
                <ul className='hidden md:flex whitespace-nowrap text-[#FAF8F2]  text-[14px] lg:text-[16px] font-normal leading-[140%] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                    <li className='hover:text-[#E1C06E] cursor-pointer'>Home</li>
                    <li className='flex gap-[4px] ml-[33px] lg:ml-[53px] hover:text-[#E1C06E] cursor-pointer'>Category
                        <DownArrow />
                    </li>
                    <li className='flex  gap-[4px] ml-[22px] lg:ml-[32px] hover:text-[#E1C06E] cursor-pointer'>Top Products
                        <DownArrow />
                    </li>
                    <li className='ml-[24px] lg:ml-[44px] hover:text-[#E1C06E] cursor-pointer'>Contact Us</li>
                    <li className='ml-[32px] hover:text-[#E1C06E] cursor-pointer'>FAQs</li>
                    <li className='ml-[50px] hover:text-[#E1C06E] cursor-pointer'><NavInstagram /></li>
                    <li className='ml-[16px] cursor-pointer'><NavFacebook /></li>
                </ul>
                <div className='flex gap-[16px] md:gap-[30px] text-[16px] justify-end mt-[32px]'>
                    <button className='hidden cursor-pointer text-[#1F1F1F] md:inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] bg-[#E1C06E] border rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#C1842D]'>Sign Up</button>
                    <button className='text-[#FAF8F2] cursor-pointer inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] border hover:bg-[#E1C06E] hover:text-[#1F1F1F] rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#FAF8F2]'>Log In</button>
                    <button className='cursor-pointer'><CartMain /></button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='block md:hidden cursor-pointer'><MenuIcon /></button>
                </div>
                {/* small screen */}
                <div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition duration-300 lg:hidden ease-in-out fixed z-[1000] top-0 left-0 right-0 bg-[#1d1d1d] h-auto`}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute right-4 top-4 cursor-pointer"><CloseIcon /></button>
                    <ul className='flex flex-col py-10 items-center space-y-[24px] text-[16px] text-white'>
                        <li className='cursor-pointer hover:text-[#f5e0aa]'><a>Home</a></li>
                        <li className='flex gap-[4px] items-center cursor-pointer hover:text-[#f5e0aa]'><a>Category</a><DownArrow /></li>
                        <li className='flex gap-[4px] items-center cursor-pointer hover:text-[#f5e0aa]'><a>Top Products</a><DownArrow /></li>
                        <li className='cursor-pointer hover:text-[#f5e0aa]'>Contact Us</li>
                        <li className='cursor-pointer hover:text-[#f5e0aa]'>FAQs</li>
                        <li>
                            <button className='text-[#1F1F1F] cursor-pointer hover:bg-[#f5e0aa] inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] bg-[#E1C06E] border rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#C1842D]'>Sign Up</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar