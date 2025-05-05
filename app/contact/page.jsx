import React from 'react'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata = {
    title: 'Gdmenu | İletişim',
    description: 'Gdmenu tüm sorulanız için 7/24 çözüm garantisi',
}

export default function Contact() {
    return (
        <div className='w-full mt-20'>
            <div className='w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]'>
                <div className='mb-[60px] text-center relative pt-[70px]'>
                    <h2 className='mb-[10px] text-[#3b368c] font-bold text-[54px] leading-[64px] max-md:text-[36px]'>Bize Ulaşın</h2>
                    <p className='text-[18px] text-[#3b368c] font-sans'>
                        Demo talebi, destek veya ticari sorularınız için bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız!
                    </p>
                </div>
                <div className='justify-between flex flex-wrap mr-[15px] ml-[15px] '>
                    <div className='max-w-[58.33%] max-lg:max-w-full relative w-full'>
                        <ContactForm />
                    </div>
                    <div className='max-w-[33.33%] max-lg:max-w-full relative max-lg:mt-[100px] w-full pr-[15px]'>
                        <div className='block'>
                            <div className='mt-[20px] mb-[65px] max-lg:hidden'>
                                <img src="/img/contact/man.png" alt="" />
                            </div>
                            <div className='text-left ml-0 max-w-full mb-[60px] mr-auto ml-auto relative'>
                                <h3 className='font-semibold mb-[24px] text-[#3b368c] text-[36px] leading-[46px] mt-[-16px] max-md:text-[28px]'>Sorunuz mu var?</h3>
                                <p className='text-[18px] mb-[35px] mt-[-12px] text-[#504c89]'>
                                    Ödemeler veya fiyat planlarıyla ilgili sorularınız mı var? Tüm cevaplar için buradayız!
                                </p>
                                {/* <Link className='text-[#504c89] pl-[25px] relative transition-all duration-300 text-left before:rounded-[50%] before:bg-gradient-to-r from-[#e2906e] to-[#e83a99] before:opacity-[0.5] before:w-[50px] before:h-[50px] before:absolute before:top-[-75%] before:left-0 before:transition-all hover:before:left-[calc(100%-30px)] before:duration-300' href='/'>Read F.A.Q</Link> */}
                            </div>
                            <div className='mb-[-40px] block'>
                                <div className='items-center mb-[40px] flex flex-wrap'>
                                    <div className='w-[78px]'>
                                        <img className='max-w-full' src="/img/contact/contact1.png" alt="" />
                                    </div>
                                    <div className='w-[calc(100%-78px)] pl-[30px]'>
                                        <h5 className='text-[24px] leading-[38px] text-[#3b368c]'>Email</h5>
                                        <Link className='text-[#504c89] text-[18px]' href='mailto:info@gdmenu.com'>info@gdmenu.com</Link>
                                    </div>
                                </div>
                                <div className='items-center mb-[40px] flex flex-wrap'>
                                    <div className='w-[78px]'>
                                        <img className='max-w-full' src="/img/contact/contact2.png" alt="" />
                                    </div>
                                    <div className='w-[calc(100%-78px)] pl-[30px]'>
                                        <h5 className='text-[24px] leading-[38px] text-[#3b368c]'>Telefon</h5>
                                        <Link className='text-[#504c89] block text-[18px]' href='tel:+905382403883'>+90 (538) 240 38 83</Link>
                                    </div>
                                </div>
                                <div className='items-center mb-[40px] flex flex-wrap'>
                                    <div className='w-[78px]'>
                                        <img className='max-w-full' src="/img/contact/contact3.png" alt="" />
                                    </div>
                                    <div className='w-[calc(100%-78px)] pl-[30px]'>
                                        <h5 className='text-[24px] leading-[38px] text-[#3b368c]'>Adres</h5>
                                        <p className='text-[#504c89] text-[18px]'>
                                            Taşdelen Mahallesi Atabey Caddesi no:7 Çekmeköy/İstanbul
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
