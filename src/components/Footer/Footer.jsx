import React from 'react'
import { Email, Facebook, Instagram, Submit } from '../SVG/SVG'

function Footer() {
    return (
        <div className='min-h-screen bg-[#1C1C1C]'>
            <div className='z-10 footer-bg border min-h-screen'>
                <div className='max-w-[1170px] mx-auto'>
                    {/* first section */}
                    <div className='flex items-end gap-[182px] mt-[80px]'>
                        <div className=' py-[35px] border-2 border-white/10 w-[413px] rounded-[20px]'>
                            <h1 className='text-white font-montreal text-[43px] font-normal leading-[51.6px] text-center px-[66.5px]'>Let’s Stay In Touch</h1>
                            <h3 className='text-white font-montreal text-[16px] font-normal leading-[19.2px] text-center mt-[20px] px-[66.5px]'>Keep up to date with our latest news & special offers.</h3>
                            <div className='flex justify-center mt-[28px] mx-[40px] relative'>
                                <input placeholder='enter your email' className='py-[18px] w-full border border-white rounded-[8px] indent-6 placeholder:text-white placeholder:text-[16px] placeholder:font-montreal placeholder:font-normal placeholder:leading-[19.2px]' />
                                <Submit />
                            </div>
                        </div>
                        <div className='flex gap-[182px]'>
                            <div>
                                <h3 className='text-white text-[12px] font-montreal font-normal leading-[14.4px]'>Quick Links</h3>
                                <ul className='mt-[30px] space-y-[20px]'>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Erectile Dysfunction</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Weight Loss</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Men’s Hair Loss</li>
                                </ul>
                                <div className='mt-[60px]'>
                                    <h3 className='text-white text-[12px] font-montreal font-normal leading-[14.4px]'>Contact Info</h3>
                                    <h3 className='flex items-center gap-[12px] mt-[27px]'>
                                        <Email />
                                        <span className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>hello@rizzpharma.com</span>
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-white text-[12px] font-montreal font-normal leading-[14.4px]'>Our Company</h3>
                                <ul className='mt-[30px] space-y-[20px]'>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>HIPAA Notice</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Privacy Policy</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Return & Refund Policy</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Terms Of Use</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>CCPA Opt-Out</li>
                                    <li className='text-white text-[16px] font-montreal font-normal leading-[25.6px]'>Opt-Out Preferences</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* second section */}
                    <div className='max-w-[1170px] mx-auto mt-[60px]'>
                        <div className='flex'>
                            <div className='w-1/2 pl-[110px] flex items-center '>
                                <img src='src/assets/footer-logo-1.png' />
                            </div>
                            <div className='flex flex-col gap-[26px] w-1/2'>
                                <div>
                                    <ul className='flex gap-3'>
                                        <li className='p-4 rounded-full bg-[#434B76]'>
                                            <a>
                                                <Facebook />
                                            </a>
                                        </li>
                                        <li className='p-4 rounded-full bg-[#434B76]'>
                                            <a>
                                                <Instagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex gap-[22px] items-center'>
                                    <img src='src/assets/footer-logo-2.png' />
                                    <div>
                                        <p className='text-white font-montreal text-[16px] font-normal leading-[25.6px]'>Copyright © 2024 Rizz Pharma All Right Reserved - Built by Business Web Social</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third section */}
                    <div className='mt-[50px]'>
                        <img src='src/assets/Branding.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer