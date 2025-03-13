import { PaymentIcon, SupportIcon, ShippingIcon, ValueIcon } from '../SVG/SVG'

function Support() {
    return (
        <div className='flex justify-center gap-[100px] h-[151px] bg-[#31418C4D]'>
            <div className='flex gap-[33px] items-center'>
                <PaymentIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Secure Payment</p>
            </div>
            <div className='flex gap-[33px] items-center'>
                <SupportIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Online Support</p>
            </div>
            <div className='flex gap-[33px] items-center'>
                <ShippingIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Free Shipping</p>
            </div>
            <div className='flex gap-[33px] items-center'>
                <ValueIcon />
                <p className='text-[22px] text-white font-normal leading-[26.4px] font-montreal'>Best Value</p>
            </div>
        </div>
    )
}

export default Support