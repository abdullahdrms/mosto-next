import React from 'react'
import Link from 'next/link'

export default function SectionFive() {
    return (
        <div className='w-full mt-52 max-sm:mt-36'>
            <div className='max-w-[1140px] max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full m-auto max-sm:pl-[15px] max-sm:pr-[15px]'>
                <div className='relative max-lg:flex max-lg:items-center max-lg:justify-center bg-gradient-to-r from-[#5c68f2] to-[#cc68ff] items-center justify-between pl-[58px] pr-[58px] rounded-[30px] pt-[120px] pb-[120px] max-lg:pb-[80px] max-lg:pt-[80px] max-lg:pr-[28px] max-lg:pl-[28px] flex flex-wrap max-lg:block max-lg:justify-start'>
                    <div className='max-xl:hidden absolute bottom-0 right-[-30px] left-[40px] top-[-40px] z-10'>
                        <img src="/img/sectionfive/balls.png" alt="" />
                    </div>
                    <div className="w-[50%] max-lg:w-full z-20 relative">
                        <h3 className="max-w-[380px] mb-[27px] relative text-[36px] leading-[46px] max-lg:text-center max-lg:m-auto max-lg:mb-6 text-[#fff]">Şimdi başla 14 gün ücretsiz kullan!</h3>
                        <p className="text-[18px] max-w-[380px] max-lg:text-center max-lg:w-[500px] max-sm:w-full max-lg:m-auto max-lg:mb-6 text-white">
                            QR Menü ile İşinizi Hızlandırın: 14 Gün Bedava Deneyin, Dijital Devrime Adım Atın!
                        </p>
                    </div>
                    <div className='z-20'>
                        <Link className='z-20 transition-all duration-300 text-white border border-[#c087fa] rounded-[25px] font-semibold font-sans pt-[10px] pb-[10px] pr-[25px] pl-[25px] hover:text-[#ee4730] hover:bg-white hover:border-[#ee4730]' href='/contact'>Hemen Başla!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
