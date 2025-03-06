import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { BiLogoTelegram } from 'react-icons/bi'
import Link from 'next/link'

export default function SectionThree() {
    return (
        <div className="mt-52 w-full">
            <div className="max-w-[1140px] max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full m-auto">
                <div className="flex items-center flex-wrap mb-10 max-lg:block">
                    <div className="relative max-w-[58.3%] pl-[15px] pr-[15px] max-lg:max-w-[100%]">
                        <div className="text-left">
                            <h5 className="text-[#ff8a00] text-[24px] font-semibold mb-[18px]">Our stats say more than any words</h5>
                            <h2 className="text-[54px] leading-[64px] font-bold text-[#3b368c] mb-[13px] max-md:text-[36px]">Apps Without Borders</h2>
                            <p className="text-[#504c89] text-[18px] font-sans">
                                Mosta app are growing by 300% every year with a steady love from users around the world. We are also close to achieving 10 million cumulative downloads.
                            </p>
                        </div>
                    </div>
                    <div className="relative max-w-[41.6%] w-full max-lg:max-w-[100%] max-lg:pl-[15px] max-lg:pr-[15px] max-lg:mt-[40px]">
                        <div className="text-right max-lg:text-start">
                            <div className="justify-end flex flex-wrap max-lg:justify-start">
                                <div className="text-right flex max-lg:text-start">
                                    <span><AiFillStar size={26} color='#fc0' /></span>
                                    <span><AiFillStar size={26} color='#fc0' /></span>
                                    <span><AiFillStar size={26} color='#fc0' /></span>
                                    <span><AiFillStar size={26} color='#fc0' /></span>
                                    <span><AiFillStar size={26} color='#fc0' /></span>
                                </div>
                                <span className="font-semibold ml-[10px] font-sans text-[18px] text-[#504c89] relative bottom-[1px]">5.0 / 5.0</span>
                            </div>
                            <h2 className="text-[#38a20e] text-[54px] font-bold mt-[5px] drop-shadow-[1.452px_5.822px_8.64px_rgba(56,162,14,0.4)] max-md:text-[36px]">312,921+</h2>
                            <div className="flex text-right justify-end max-lg:justify-start max-lg:text-start">
                                <Link className="font-sans flex text-[#3b368c] text-[18px]" href='/'>
                                    Total User Reviews
                                    <BiLogoTelegram size={24} className="ml-3 relative top-[1px]" color='#337adb' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pl-[15px] max-[499px]:grid-cols-2 max-md:grid max-md:grid-cols-3 max-md:gap-2 flex flex-wrap min-h-[609px] max-md:min-h-full relative pr-[15px] bg-cover bg-center bg-no-repeat bg-[url('/img/sectionthree/world-map.png')] max-lg:mt-[30px]">
                    <div className="absolute max-sm:w-full max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[214px] max-md:w-[155px] h-[214px] left-[70px] top-[75px] flex flex-wrap bg-gradient-to-r from-[#e2906e] to-[#e83a99] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(232,58,153,0.5)] pt-2 max-lg:top-0 max-lg:left-0">
                        <span className="text-white max-md:text-[16px] text-[18px] font-sans font-semibold">
                            North America
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[54px] font-semibold">70.7%</h2>
                    </div>

                    <div className="absolute max-sm:w-full max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[155px] h-[155px] right-[155px] top-[80px] flex flex-wrap bg-gradient-to-r from-[#83c3fa] to-[#6290fb] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(94,105,246,0.5)] pt-2 max-lg:top-[80px] max-lg:right-[40px]">
                        <span className="text-white max-md:text-[16px] text-[16px] font-sans font-semibold">
                            Asia
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[40px] font-semibold">14.4%</h2>
                    </div>

                    <div className="absolute max-sm:w-full max-md:mb-5 max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[155px] h-[155px] right-[380px] top-[110px] flex flex-wrap bg-gradient-to-r from-[#f6d365] to-[#fda085] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(253,160,133,0.5)] pt-2 max-lg:top-[140px] max-lg:right-[240px]">
                        <span className="text-white max-md:text-[16px] text-[16px] font-sans font-semibold">
                            North Europe
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[40px] font-semibold">8.4%</h2>
                    </div>

                    <div className="absolute max-sm:w-full max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[155px] h-[155px] left-[235px] bottom-[50px] flex flex-wrap bg-gradient-to-r from-[#d180dd] to-[#796be8] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(121,107,232,0.5)] pt-2 max-lg:bottom-0 max-lg:left-[100px]">
                        <span className="text-white max-md:text-[16px] text-[16px] font-sans font-semibold">
                            South America
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[40px] font-semibold">1.8%</h2>
                    </div>

                    <div className="absolute max-sm:w-full max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[100px] max-md:w-[155px] h-[100px] left-[500px] bottom-[175px] flex flex-wrap bg-gradient-to-r from-[#e1358f] to-[#7e6ce7] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(121,107,232,0.5)] pt-2 max-lg:left-[365px] max-lg:bottom-[170px]">
                        <span className="text-white max-md:text-[16px] text-[16px] font-sans font-semibold">
                            Africa
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[28px] font-semibold">1.8%</h2>
                    </div>

                    <div className="absolute max-sm:w-full max-md:h-[106px] max-md:rounded-[5px] max-md:static rounded-[50%] flex-col items-center justify-center w-[100px] max-md:w-[155px] h-[100px] right-[130px] bottom-[110px] flex flex-wrap bg-gradient-to-r from-[#97ee85] to-[#64b3f4] shadow-[5.806px_23.287px_30.72px_1.28px_rgba(100,179,244,0.5)] pt-2 max-lg:right-[40px] max-lg:bottom-[60px]">
                        <span className="text-white max-md:text-[16px] text-[16px] font-sans font-semibold">
                            Australia
                        </span>
                        <h2 className="text-white max-md:text-[36px] text-[28px] font-semibold">3%</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
