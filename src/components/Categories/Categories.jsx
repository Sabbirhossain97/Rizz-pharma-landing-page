import Advertisement from "../Advertisements/Advertisement"
import Products from "../Products/Products"
import Support from "../Support/Support"

function Categories() {
    return (
        <section className='mx-auto min-h-[2800px] bg-no-repeat bg-top -mt-20'
            style={{ backgroundImage: "url('src/assets/bg_artwork_2.png')" }}
        >
            <div className='max-w-[1170px] mx-auto'>
                <div className='grid gap-[30px] grid-cols-3 grid-rows-[376px_44px_376px]'>
                    <div className="col-start-1 row-span-2 relative">
                        <div>
                            <img src='src/assets/category-1.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Weight</span>
                            <span>Loss</span>
                        </p>
                    </div>
                    <div className="col-start-2 row-start-1 relative">
                        <div>
                            <img src='src/assets/category-2.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Sexual</span>
                            <span>Health</span>
                        </p>
                    </div>
                    <div className='col-start-3 row-span-2 relative'>
                        <div>
                            <img src='src/assets/category-3.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Brain</span>
                            <span>Health</span>
                        </p>
                    </div>
                    <div className='col-start-1 row-start-3 relative'>
                        <div>
                            <img src='src/assets/category-4.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Testosterone</span>
                            <span>HRT</span>
                        </p>
                    </div>
                    <div className='col-start-2 row-start-2 row-span-2 relative'>
                        <div>
                            <img src='src/assets/category-5.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Athletic</span>
                            <span>Perfomance</span>
                        </p>
                    </div>
                    <div className='col-start-3 row-start-3 relative'>
                        <div>
                            <img src='src/assets/category-6.png' className='rounded-[24px]' />
                        </div>
                        <p className='absolute flex flex-col left-[24px] top-[24px] text-[36px] text-white font-montreal font-medium leading-[43.2px]'>
                            <span>Beauty and</span>
                            <span>Hair Loss</span>
                        </p>
                    </div>
                </div>          
            </div>
            <div className="mt-[160px]">
                <Support />
            </div>
            <Products/>
            <Advertisement/>
        </section>
    )
}

export default Categories