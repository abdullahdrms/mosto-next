import React from 'react'
import Link from 'next/link'

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
                    <div className='max-w-[58.33%] max-lg:max-w-full relative w-full pr-[15px] pl-[15px]'>
                        <div className='border rounded-[5px] border-[#fff] bg-white shadow-[0_11px_19.2px_0.8px_rgba(66,58,232,0.1)] pt-[65px] pb-[0px] pl-[40px] pr-[40px]'>
                            <h4 className='mb-[30px] text-center text-[28px] leading-[38px] mt-[-14px] text-[#3b368c] font-semibold'>İletişime Geçin</h4>
                            <form action="">
                                <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Firma Adı</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Firma adı giriniz' type="text" />
                                </div>
                                <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Yetkili Ad Soyad</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Yetkili ad soyad giriniz' type="text" />
                                </div>
                                <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Telefon Numarası</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Telefon numarası giriniz' type="text" />
                                </div>
                                <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Email</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Email giriniz' type="text" />
                                </div>
                                {/* <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Your Subject</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Enter Your Subject' type="text" />
                                </div> */}
                                <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Mesajınız</label>
                                    <textarea className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] resize-none h-[140px] font-sans' placeholder='Mesajınızı yazınız' type="text" ></textarea>
                                    {/* <div className='p-0 items-center pt-[10px] pb-[15px] flex'>
                                        <input id='btn1' className='w-[22px] cursor-pointer h-[22px] rounded-[4px]' type="checkbox" />
                                        <label className='m-0 pl-[10px] text-[16px] font-sans font-normal text-[#6f6c9f] cursor-pointer' htmlFor="btn1">I agree to receive emails, newsletters and promotional messages</label>
                                    </div> */}
                                </div>
                                <div className='mb-[23px] translate-y-[50px]'>
                                    <input value='MESAJI GÖNDER' className='bg-gradient-to-r cursor-pointer text-white w-auto pr-[50px] pl-[50px] font-semibold ml-auto mr-auto block border-none rounded-[30px] h-[60px] from-[#c165dd] to-[#1153fc] max-xsm:pl-[10px] max-xsm:pr-[10px] hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300' type="submit" />
                                </div>
                            </form>
                        </div>
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
                                        <Link className='text-[#504c89] text-[18px]' href='/'>info@gdmenu.com</Link>
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
