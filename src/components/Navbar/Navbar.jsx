import React from 'react'

function Navbar() {
    return (
        <div className='pt-[50px] max-w-[1170px] mx-auto flex justify-between relative font-montreal'>
            <div className='flex items-center gap-[10px]'>
                <img src='src/assets/logo.png' />
            </div>
            <div className='hidden lg:block'>
                <ul className='flex text-[#FAF8F2] text-[16px] font-normal leading-[140%] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]'>
                    <li className='flex gap-[4px]'>Home
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                        </svg>
                    </li>
                    <li className='flex gap-[4px] ml-[53px]'>Category
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.20451 7.70267C2.64385 7.26333 3.35616 7.26333 3.7955 7.70267L11.7348 15.642C11.8399 15.7471 11.9251 15.8322 12 15.9047C12.0749 15.8322 12.1601 15.7471 12.2652 15.642L20.2045 7.70267C20.6438 7.26333 21.3562 7.26333 21.7955 7.70267C22.2348 8.14201 22.2348 8.85432 21.7955 9.29366L13.8562 17.233C13.844 17.2451 13.8319 17.2573 13.8196 17.2695C13.6022 17.4872 13.367 17.7225 13.1417 17.8944C12.8778 18.0958 12.5002 18.3125 12 18.3125C11.4998 18.3125 11.1222 18.0958 10.8583 17.8944C10.633 17.7225 10.3978 17.4872 10.1804 17.2695C10.1681 17.2573 10.156 17.2451 10.1438 17.233L2.20451 9.29366C1.76517 8.85432 1.76517 8.14201 2.20451 7.70267Z" fill="#FAF8F2" />
                        </svg>
                    </li>
                    <li className='ml-[32px]'>Top Products</li>
                    <li className='ml-[44px]'>Contact Us</li>
                    <li className='ml-[32px]'>FAQs</li>
                    <li className='ml-[50px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                    <li className='ml-[16px]'>
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
                <div className='hidden lg:flex gap-[30px] text-[16px] justify-end mt-[32px]'>
                    <button className='text-[#1F1F1F] inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] bg-[#E1C06E] border rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#C1842D]'>Sign Up</button>
                    <button className='text-[#FAF8F2] inline-flex justify-center items-center font-normal text-[16px] leading-[140%] px-4 py-[6.5px] border rounded-[50px] shadow-[0_2px_10px_0px_rgba(0,0,0,0.25)] border-[#FAF8F2]'>Log In</button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <g filter="url(#filter0_d_2008_8)">
                            <path d="M12.905 25.0899H24.0016C30.8576 25.0899 31.9003 20.7829 33.1649 14.501C33.5297 12.6891 33.7121 11.7832 33.2735 11.1796C32.8348 10.576 31.9941 10.576 30.3126 10.576H9.84949" stroke="#FAF8F2" stroke-width="1.83333" stroke-linecap="round" />
                            <path d="M12.905 25.0899L8.90026 6.01549C8.5602 4.65526 7.33803 3.70102 5.93594 3.70102H4.5022" stroke="#FAF8F2" stroke-width="1.83333" stroke-linecap="round" />
                            <path d="M14.2495 25.0899H13.6209C11.538 25.0899 9.84949 26.8488 9.84949 29.0185C9.84949 29.3801 10.1309 29.6732 10.4781 29.6732H27.4189" stroke="#FAF8F2" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                            <ellipse cx="16.7244" cy="31.9649" rx="2.29167" ry="2.29167" stroke="#FAF8F2" stroke-width="1.83333" />
                            <ellipse cx="27.4189" cy="31.9649" rx="2.29167" ry="2.29167" stroke="#FAF8F2" stroke-width="1.83333" />
                        </g>
                        <defs>
                            <filter id="filter0_d_2008_8" x="-6.41443" y="-5.21564" width="50.8611" height="52.3889" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="2" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2008_8" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2008_8" result="shape" />
                            </filter>
                        </defs>
                    </svg></button>
                </div>
            </div>
        </div>
    )
}

export default Navbar