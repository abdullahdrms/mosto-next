import Link from 'next/link'
import React from 'react'

export default function SectionTwo() {
    return (
        <div className="mt-52 relative w-full">
            <div className="bg-[url('/img/sectiontwo/smart-bg-1.png')] absolute top-0 bottom-0 left-0 right-0 bg-right-top bg-[length:100%_100%] max-lg:hidden">
            </div>
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <div className="relative w-full max-w-[480px] max-xl:max-w-[58.3%] max-lg:max-w-[100%]">
                        <div className="text-left">
                            <h5 className="mb-[20px]  text-[#ff8a00] text-[24px] font-semibold max-md:text-[20px]">Also Available in</h5>
                            <h2 className="mb-[24px] leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Smart Watch Version</h2>
                            <p className="text-[#504c89] text-[19px] font-sans">
                                Everything about mosto is designed to be easy. You can download it right now from the App Store or Play Market. Moreover, with just a few steps, you can migrate your content automatically and securely from your Android device with the Move to iOS app.
                            </p>
                        </div>
                        <div className="flex flex-wrap mt-12 gap-x-6 max-sm:justify-center max-[453px]:justify-start">
                            <Link className="hover:border-white hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] rounded-[50px] transition-all duration-300 max-w-[200px] max-[453px]:mb-[20px]" href='/'>
                                <img src="/img/sectiontwo/google.png" alt="" />
                            </Link>
                            <Link className="hover:border-white hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] rounded-[50px] transition-all duration-300 max-w-[200px]" href='/'>
                                <img src="/img/sectiontwo/apple.png" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="relative w-full max-xl:max-w-[41.7%] max-lg:hidden">
                        <div className="relative text-left max-xl:translate-y-[150px]">
                            <img className="translate-x-[80px]" src="/img/sectiontwo/watch2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
