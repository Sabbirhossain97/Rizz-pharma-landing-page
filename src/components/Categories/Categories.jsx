import Advertisement from "../Advertisements/Advertisement"
import Products from "../Products/Products"
import Support from "../Support/Support"

function Categories() {
    return (
        <section id="category" className='mx-auto bg-repeat md:bg-no-repeat bg-bottom md:bg-top -mt-72 pb-72 md:pb-0 md:mt-0 relative '
            style={{ backgroundImage: "url('src/assets/bg_artwork_2.png')" }}
        >
            <div className="relative pt-20 md:pt-0 md:-top-44">
                <div className='text-center hero-custom-text3 text-white text-[32px] md:text-[48px] font-normal capitalize leading-[57.6px]'>
                    <h1>Shop by <span className='hero-custom-text4 text-[32px] md:text-[48px]'>Category</span></h1>
                </div>
                <div className='max-w-[1170px] mx-auto px-4 md:px-6 custom1:px-0 mt-[46px]'>
                    <div className="grid gap-[15px] md:gap-[30px] grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-[376px_auto_376px]">

                        <div className="md:col-start-1 md:row-span-2 relative cursor-pointer">
                            <img src="src/assets/category-1.png" className="rounded-[24px] w-full h-full object-cover" alt="category-1" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Weight</span>
                                <span>Loss</span>
                            </p>
                        </div>

                        <div className="md:col-start-2 md:row-start-1 relative cursor-pointer">
                            <img src="src/assets/category-2.png" className="rounded-[24px] w-full h-full object-cover" alt="category-2" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Sexual</span>
                                <span>Health</span>
                            </p>
                        </div>

                        <div className="md:col-start-3 md:row-span-2 relative cursor-pointer">
                            <img src="src/assets/category-3.png" className="rounded-[24px] w-full h-full object-cover" alt="category-3" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Brain</span>
                                <span>Health</span>
                            </p>
                        </div>

                        <div className="md:col-start-1 md:row-start-3 relative cursor-pointer">
                            <img src="src/assets/category-4.png" className="rounded-[24px] w-full h-full object-cover" alt="category-4" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Testosterone</span>
                                <span>HRT</span>
                            </p>
                        </div>

                        <div className="md:col-start-2 md:row-start-2 row-span-2 relative cursor-pointer">
                            <img src="src/assets/category-5.png" className="rounded-[24px] w-full h-full object-cover" alt="category-5" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Athletic</span>
                                <span>Performance</span>
                            </p>
                        </div>

                        <div className="md:col-start-3 md:row-start-3 row-span-2 md:row-auto relative cursor-pointer">
                            <img src="src/assets/category-6.png" className="rounded-[24px] w-full h-full object-cover" alt="category-6" />
                            <p className="absolute flex flex-col left-[24px] top-[24px] text-[24px] leading-[28px] sm:text-[36px] text-white font-montreal font-medium sm:leading-[43.2px]">
                                <span>Beauty and</span>
                                <span>Hair Loss</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-[160px] bg-[#31418C4D]">
                    <Support />
                </div>
                <Products />
                <Advertisement />
            </div>
        </section >
    )
}

export default Categories