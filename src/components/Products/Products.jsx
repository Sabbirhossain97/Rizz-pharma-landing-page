import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Navigation, FreeMode } from "swiper/modules";
import { Cart, NextArrow, NextPageArrow } from '../SVG/SVG';

function Products() {

    const categories = [
        "Best Selling Products",
        "Weight Loss",
        "Beauty And Hair Loss",
        "Testosterone/HRT",
        "Sexual Health",
        "Atheltic Performance"
    ];

    return (
        <div className='max-w-[1170px] px-6 custom1:px-0 mx-auto'>
            <div>
                <div className='text-center mt-[153px] hero-custom-text3 text-white text-[32px] md:text-[48px] font-normal capitalize leading-[57.6px]'>
                    <h1>Solutions for Your <span className='hero-custom-text4'>Unique</span> Health Goals</h1>
                </div>
            </div>
            <div className='flex mt-[63.5px] gap-[12px]'>
                <div >
                    <button className='cursor-pointer hover:text-[#1F1F1F] hover:bg-[#E1C06E] hover:border-none rounded-full border border-white px-[29.5px] py-[18.5px] text-white transition-all '>
                        All
                    </button>
                </div>
                <div className="overflow-hidden">
                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode={true}
                        modules={[Navigation, FreeMode]}
                        className="flex max-w-[1170px] justify-center font-montreal"
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}

                    >
                        {categories.map((category, index) => (
                            <SwiperSlide
                                key={index}
                                className="!w-auto cursor-pointer hover:text-[#1F1F1F] hover:bg-[#E1C06E] hover:border-none rounded-full border border-white px-[29.5px] py-[18.5px] text-white transition-all "
                            >
                                {category}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <button
                        className='cursor-pointer custom-next hover:text-[#1F1F1F] hover:bg-[#E1C06E] hover:border-none rounded-full border border-white px-[29.5px] py-[22.5px] text-white transition-all '>
                        <NextArrow />
                    </button>
                </div>
            </div>
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="absolute right-0 top-0 product-card-top-text rounded-[0px_12px]">
                            <h3 className="px-[15.5px] font-montreal pt-[5px] pb-[7px]  text-white text-[13px] font-normal leading-[15.6px]">Research use only</h3>
                        </div>
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/Retarutide.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Retarutide</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>$39.99/per month</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="absolute right-0 top-0 product-card-top-text rounded-[0px_12px]">
                            <h3 className="px-[15.5px] font-montreal pt-[5px] pb-[7px]  text-white text-[13px] font-normal leading-[15.6px]">Research use only</h3>
                        </div>
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/Lyopholized.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Lyopholized
                                Glow (GHK-CU/ BPC-157/TB-500)</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>$39.99/per month</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="absolute right-0 top-0 product-card-top-text2 rounded-[0px_12px]">
                            <h3 className="px-[15.5px] font-montreal pt-[5px] pb-[7px] text-white text-[13px] font-normal leading-[15.6px]">Recurring Plan</h3>
                        </div>
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/Sermorelin.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Compounded
                                Sermorelin 15mg</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>Starting at $179 Monthly +  $45 Physician consult</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/Lpamorelin.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">2X CJC / Ipamorelin</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>Starting at $149 Monthly +
                                    $45 Physician consult +
                                    $100 Lab Charge</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/Oxytocin.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Lyopholized Oxytocins</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>$39.99/per month</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="absolute right-0 top-0 product-card-top-text2 rounded-[0px_12px]">
                            <h3 className="px-[15.5px] font-montreal pt-[5px] pb-[7px] text-white text-[13px] font-normal leading-[15.6px]">Recurring Plan</h3>
                        </div>
                        <div className="flex items-center h-[calc(100%-65px)] pt-[20px] mr-[16px]">
                            <img src='src/assets/Finasteride.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] w-full product-card-text break-words">Lyopholized Finasteride 1mg</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>$39.99/per month</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px] mr-[16px]">
                            <img src='src/assets/NAD.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Compounded NAD+ 1000 mg</h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>Starting at $179 Monthly +
                                    $45 Physician consult</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-[12px] bg-[#31418C4D] h-[262px] overflow-hidden relative">
                        <div className="absolute right-0 top-0 product-card-top-text2 rounded-[0px_12px]">
                            <h3 className="px-[15.5px] font-montreal pt-[5px] pb-[7px] text-white text-[13px] font-normal leading-[15.6px]">Recurring Plan</h3>
                        </div>
                        <div className="flex items-center gap-[24px] h-[calc(100%-65px)] ml-[20px] pt-[20px]">
                            <img src='src/assets/Lyopholized-PT.png' />
                            <h3 className="font-montreal text-[18px] font-medium leading-[21.6px] product-card-text">Lyopholized
                                PT- 141
                                10mg </h3>
                        </div>
                        <div className="h-[65px] flex justify-between bg-[#1F1F1F4D]">
                            <div className="flex items-center w-[calc(100%-87px)] ml-6 text-white font-montreal text-[12px] font-normal leading-[19.2px]">
                                <h3>Starting at $149 Monthly +
                                    $45 Physician consult +
                                    $100 Lab Charge</h3>
                            </div>
                            <div className="flex items-center justify-center w-[87px] product-cart-bg cursor-pointer">
                                <button>
                                    <Cart />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-[32px] mt-[50px]">
                <button
                    className='cursor-pointer rotate-180 flex justify-center items-center custom-next hover:text-[#1F1F1F] bg-[#E1C06E] hover:bg-[#fcdc8c] hover:border-none rounded-full w-[60px] h-[60px] text-white transition-all '>
                    <NextPageArrow />
                </button>
                <button
                    className='cursor-pointer custom-next flex justify-center items-center hover:text-[#1F1F1F] bg-[#E1C06E] hover:bg-[#fcdc8c] hover:border-none rounded-full w-[60px] h-[60px] text-white transition-all '>
                    <NextPageArrow />
                </button>
            </div>
        </div>
    )
}

export default Products