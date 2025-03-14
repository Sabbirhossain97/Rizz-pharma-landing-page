import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";
import { Pagination, FreeMode } from "swiper/modules";
import { EmptyStar, FullStar, Quote } from '../SVG/SVG';
import Footer from '../Footer/Footer';

function Feedback() {
    return (
        <section className='mx-auto min-h-[1540px] bg-no-repeat bg-top -mt-44 '
            style={{ backgroundImage: "url('src/assets/bg_artwork_2.png')" }}
        >
            <div className='pt-[800px]'>
                <div>
                    <div className='text-center hero-custom-text3 text-white text-[48px] font-normal capitalize leading-[57.6px]'>
                        <h1>Hear What <span className='hero-custom-text4'>Rizz</span> Patients Have To Say</h1>
                    </div>
                </div>
            </div>
            <div className='mt-[45px] max-w-[1700px] mx-auto'>
                <Swiper
                    slidesPerView="4"
                    spaceBetween={16}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="flex justify-center items-center font-montreal py-20"
                    pagination={{
                        clickable: true,
                    }}
                >
                    {Array(7).fill(null).map((_, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative rounded-[15.5px]"
                        >
                            <div className="max-w-[414px] relative h-[440px] text-white p-6 rounded-2xl shadow-lg space-y-4"
                                style={{ backgroundImage: "url('src/assets/feedback-card-bg.png')" }}
                            >
                                <Quote />
                                <p className="text-gray-300  text-[18px] font-montreal font-normal leading-[28.8px] mt-[50px] px-[15px]">
                                    I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I’ve started using Hims my hair has grown, thickened, and darkened tremendously.
                                </p>
                                <div className="flex justify-center space-x-1 text-yellow-400 mt-[35px]">
                                    <span><FullStar /></span>
                                    <span><FullStar /></span>
                                    <span><FullStar /></span>
                                    <span><FullStar /></span>
                                    <span className="text-gray-500"><EmptyStar /></span>
                                </div>

                                <div className="flex gap-[10px] justify-center items-center space-x-3 mt-[53px] pb-[38px]">
                                    <img
                                        className="w-[60px] h-[60px] rounded-full"
                                        src="src/assets/feedback-card-avatar.png"
                                        alt="User"
                                    />
                                    <div>
                                        <h4 className="font-bold text-white font-montreal text-[20px] not-italic">John Williams</h4>
                                        <p className="text-white/50 font-montreal text-[16px] font-bold leading-normal mt-[4px]">Lead Designer</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/* <Footer/> */}
        </section>
    )
}

export default Feedback