import { PaymentIcon, SupportIcon, ShippingIcon, ValueIcon } from '../SVG/SVG'

function Support() {
    return (
        <div className='flex flex-wrap items-center lg:flex-row whitespace-nowrap justify-center gap-[100px] h-auto py-[55px] px-4 md:px-6 custom1:px-0'>
            <div className='flex gap-[33px] items-center sm:flex-1 lg:flex-none'>
                <PaymentIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Secure Payment</p>
            </div>
            <div className='flex gap-[33px] items-center sm:flex-1 lg:flex-none'>
                <SupportIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Online Support</p>
            </div>
            <div className='flex gap-[33px] items-center sm:flex-1 lg:flex-none'>
                <ShippingIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Free Shipping</p>
            </div>
            <div className='flex gap-[33px] items-center sm:flex-1 lg:flex-none'>
                <ValueIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Best Value</p>
            </div>
        </div>
    )
}

export default Support