import React, { useState } from 'react'
import { CartMain } from '../SVG/SVG'

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
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                        </svg>
                    </li>
                    <li className='flex  gap-[4px] ml-[22px] lg:ml-[32px] hover:text-[#E1C06E] cursor-pointer'>Top Products
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-[20px]  w-[20px] lg:h-[24px] lg:w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                        </svg>
                    </li>
                    <li className='ml-[24px] lg:ml-[44px] hover:text-[#E1C06E] cursor-pointer'>Contact Us</li>
                    <li className='ml-[32px] hover:text-[#E1C06E] cursor-pointer'>FAQs</li>
                    <li className='ml-[50px] hover:text-[#E1C06E] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='hover:text-[#E1C06E]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_1007)">
                                <path d="M18 0H6C2.64 0 0 2.64 0 6V18C0 21.36 2.64 24 6 24H18C21.36 24 24 21.36 24 18V6C24 2.64 21.36 0 18 0ZM21.6 18C21.6 20.04 20.04 21.6 18 21.6H6C3.96 21.6 2.4 20.04 2.4 18V6C2.4 3.96 3.96 2.4 6 2.4H18C20.04 2.4 21.6 3.96 21.6 6V18Z" fill="#FAF8F2" />
                                <path d="M12 6C8.64 6 6 8.64 6 12C6 15.36 8.64 18 12 18C15.36 18 18 15.36 18 12C18 8.64 15.36 6 12 6ZM12 15.6C9.96 15.6 8.4 14.04 8.4 12C8.4 9.96 9.96 8.4 12 8.4C14.04 8.4 15.6 9.96 15.6 12C15.6 14.04 14.04 15.6 12 15.6Z" fill="#FAF8F2" />
                                <path d="M17.9969 7.19688C18.6596 7.19688 19.1969 6.65962 19.1969 5.99688C19.1969 5.33413 18.6596 4.79688 17.9969 4.79688C17.3341 4.79688 16.7969 5.33413 16.7969 5.99688C16.7969 6.65962 17.3341 7.19688 17.9969 7.19688Z" fill="#FAF8F2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1007">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                    <li className='ml-[16px] cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_1012)">
                                <path d="M19 0H5C2.24294 0 0 2.24294 0 5V19C0 21.7571 2.24294 24 5 24H19C21.7571 24 24 21.7571 24 19V5C24 2.24294 21.7571 0 19 0ZM10 22V16H8V14H10V9C10 7.34544 11.3454 6 13 6H16V8H12V14H15.719L15.219 16H12V22H10ZM22 19C22 20.6546 20.6546 22 19 22H14V18H16.781L18.281 12H14V10H18V4H13C10.2429 4 8 6.24294 8 9V12H6V18H8V22H5C3.34544 22 2 20.6546 2 19V5C2 3.34544 3.34544 2 5 2H19C20.6546 2 22 3.34544 22 5V19Z" fill="#FAF8F2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1012">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </li>
                </ul>
                <div className='flex gap-[16px] md:gap-[30px] text-[16px] justify-end mt-[32px]'>
                    <button className='hidden cursor-pointer text-[#1F1F1F] md:inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] bg-[#E1C06E] border rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#C1842D]'>Sign Up</button>
                    <button className='text-[#FAF8F2] cursor-pointer inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] border hover:bg-[#E1C06E] hover:text-[#1F1F1F] rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#FAF8F2]'>Log In</button>
                    <button className='cursor-pointer'><CartMain /></button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='block md:hidden cursor-pointer'>
                        <svg className="w-6 h-6 text-white hover:text-[#f5e0aa]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
                {/* small screen */}
                <div className={`${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition duration-300 lg:hidden ease-in-out fixed z-[1000] top-0 left-0 right-0 bg-[#1d1d1d] h-auto`}>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="absolute right-4 top-4 cursor-pointer">
                        <svg className="w-4 h-4 text-white hover:text-[#f5e0aa]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                        </svg>
                    </button>
                    <ul className='flex flex-col py-10 items-center space-y-[24px] text-[16px] text-white'>
                        <li className='cursor-pointer hover:text-[#f5e0aa]'><a>Home</a></li>
                        <li className='flex gap-[4px] items-center cursor-pointer hover:text-[#f5e0aa]'><a>Category</a>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                            </svg>
                        </li>
                        <li className='flex gap-[4px] items-center cursor-pointer hover:text-[#f5e0aa]'><a>Top Products</a>
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-[20px] w-[20px] lg:h-[24px] lg:w-[24px]' width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                            </svg>
                        </li>
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