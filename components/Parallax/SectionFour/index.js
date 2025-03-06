"use client"
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Link from "next/link";

const Component = () => {
    return (
        <ParallaxProvider>
            <Parallax
                translateY={['0px', '395px']}
                easing="easeInOut"
                speed={10}
            >
                <div className="relative">
                    <div className="mb-[35px]">
                        <img src="/img/sectionfour/cate.png" alt="" />
                    </div>
                    <h2 className="text-[54px] font-bold text-[#3b368c] leading-[64px] mb-[15px]">
                        Qrmenü İşletmenize Ne Gibi Avantajlar Sağlar
                    </h2>
                    <Link href='/features' className="text-[#3b368c] text-[18px] hover:text-[#ee4730] transition-all duration-300">Özellikleri Keşfet</Link>
                </div>
            </Parallax>
        </ParallaxProvider>

    );
};

export default Component

