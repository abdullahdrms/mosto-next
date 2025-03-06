"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import styles from './header.module.css'

export default function index() {
    const [bgActive, setBgActive] = useState(false)
    const [menu, setMenu] = useState(false)
    const [width, setWidth] = useState();

    const changeBackground = useCallback(() => {
        if (window.scrollY >= 80) {
            setBgActive(true);
        } else {
            setBgActive(false);
        }
    }, []);

    const updateWindowDimensions = useCallback(() => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
        if (newWidth >= 992) {
            setMenu(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
        window.addEventListener('resize', updateWindowDimensions);

        changeBackground()

        return () => {
            window.removeEventListener('scroll', changeBackground)
            window.removeEventListener('resize', updateWindowDimensions)
        }
    }, [changeBackground, updateWindowDimensions])


    return (
        <>
            <div className={`w-full fixed  z-[100] ${!bgActive ? 'top-2' : ''} font-sans ${bgActive ? 'bg-[#f0f5fc]' : ''} ${bgActive ? 'top-0' : ''} ${bgActive ? 'pb-5' : ''} ${bgActive ? 'border-b' : ''}  ${bgActive ? 'shadow-[0_-2px_5px_0px_rgba(59,54,140,0.1)]' : ''} ${bgActive ? 'border-[#3b368c4d]' : ''} `} >
                <div className="w-[1110px] m-auto pt-4 max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                    <div className="flex justify-between items-center">
                        <div className="w-[170px]">
                            <Link onClick={() => setMenu(false)} href="/">
                                <img src="/logo/gdmenulogo.svg" alt="" />
                            </Link>
                        </div>
                        <ul className="flex ml-auto mr-11 justify-end flex-wrap text-[#3b368c] font-semibold gap-8 max-xl:mr-[40px] max-xl:gap-4 max-lg:hidden ">
                            <li className="p-[5px] relative max-xl:text-[14px]">
                                <Link href='/features'>
                                    Özellikler
                                </Link>
                            </li>
                            <li className="p-[5px] relative max-xl:text-[14px]">
                                <Link href='/pricing'>
                                    Fiyatlandırma
                                </Link>
                            </li>
                            {/* <li className="p-[5px] relative max-xl:text-[14px]">
                                <Link href='/who-choose-us'>
                                    Bizi Tercih Edenler
                                </Link>
                            </li> */}
                        </ul>
                        <div className="hidden max-lg:block ml-auto max-lg:mr-[20px] max-sm:mr-[0px]">
                            {!menu && <AiOutlineMenu onClick={() => setMenu(!menu)} className="cursor-pointer text-[#3b368c]" size={28} />}
                            {menu && <AiOutlineClose className="cursor-pointer text-[#3b368c]" size={28} onClick={() => setMenu(false)} />}
                        </div>
                        <div>
                            {/* <div className="cursor-pointer block clear-both float-left pl-4 pr-7 relative text-sm flex text-[#3b368c] max-xl:top-1 max-sm:pr-1">
                                EN
                                <span><MdOutlineKeyboardArrowDown size={24} className="ml-1 relative bottom-[2px] text-black" /></span>
                            </div> */}
                            <Link href='/' className="pt-3 pb-3 pr-8 pl-8 border border-solid border-[#665cb2] rounded-3xl ml-2 transition ease-in-out delay-75 text-[#3b368c] font-semibold hover:bg-white max-xl:p-[7px 25px] max-xl:text-sm max-lg:ml-0 max-sm:hidden">
                                HEMEN BAŞLA!
                            </Link>
                        </div>
                    </div>
                </div>
            </div >
            <div>
                <div className={`${styles['menu']} ${menu && styles['active']}`}>
                    <ul>
                        <Link onClick={() => setMenu(false)} href='/features' className=''>
                            <li className='pl-[15px] leading-[72px] text-[20px] font-semibold pr-[15px] pt-[8px] pb-[8px] text-[#3b368c] transition-all duration-300 border-t border-[rgba(59,54,140,.1)] hover:bg-[rgba(51,64,106,.98)] hover:text-white'>
                                Özellikler
                            </li>
                        </Link>

                        <Link onClick={() => setMenu(false)} href='/pricing' className=''>
                            <li className='pl-[15px] leading-[72px] text-[20px] font-semibold pr-[15px] pt-[8px] pb-[8px] text-[#3b368c] transition-all duration-300 border-t border-[rgba(59,54,140,.1)] hover:bg-[rgba(51,64,106,.98)] hover:text-white'>
                                Fiyatlandırma
                            </li>
                        </Link>

                        {/* <Link onClick={() => setMenu(false)} href='/who-choose-us' className=''>
                            <li className='pl-[15px] pr-[15px] pt-[8px] pb-[8px] text-[#3b368c] transition-all duration-300 border-t border-[rgba(59,54,140,.1)] hover:bg-[rgba(51,64,106,.98)] hover:text-white'>
                                Bizi Tercih Edenler
                            </li>
                        </Link> */}
                    </ul>
                </div>
            </div>
        </>
    )
}
