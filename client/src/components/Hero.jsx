import React from 'react'
import macBookPro from '../assets/macbook-pro-14-and-16_overview__fz0lron5xyuu_og-removebg-preview.png'

export default function Hero() {
    return (
        <div className='flex flex-col gap-4 mx-auto items-center p-10 bg-[#fafafa]'>
                <h1 className='text-[#1d1d1f] font-bold text-6xl'>MacBook Pro</h1>
                <h2 className='text-[#1d1d1f] text-3xl'>Mind-blowing. Head-turning</h2>
                <a href="" className='text-[#2b80d4] text-2xl hover:underline'>Learn more</a>
                <img src={macBookPro} alt="" />
        </div>
    )
}
