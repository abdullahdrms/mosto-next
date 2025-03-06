"use client"
import Link from 'next/link';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '@/app/globals.css'

export default function Reference() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='w-full mt-52 max-sm:mt-36'>
            <div className='max-w-[1140px] max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full m-auto max-sm:pl-[15px] max-sm:pr-[15px]'>
                <div className="ml-[15px] mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] text-center leading-[64px] font-bold text-[50px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Bizi Tercih Edenler</h2>
                    <div className='mt-10'>
                        <Carousel
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={1000}
                            itemClass="carousel-item-padding-40-px"
                            responsive={responsive}
                            arrows={false}
                        >
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                            <div>
                                <img draggable={false} className='' src="/logo/gdmenulogo.svg" alt="" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div >

        </div >

    )
}
