"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './pricing.module.css'

export default function Pricing() {
    const [checkbox, setCheckbox] = useState(true)
    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex flex-col items-center mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h5 className="mb-[20px]  text-[#ff8a00] text-center text-[24px] font-semibold max-md:text-[20px]">Muhteşem Özelliklerin Kapsamlı Listesi</h5>
                    <h2 className="mb-[24px] max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Basit, Uygun Fiyatlı Planlar.</h2>
                    <p className="text-[#504c89] mb-[60px] max-w-[620px] text-center text-[19px] font-sans">
                        Gdmenu'nun ihtiyaçlarınıza göre ölçeklenebilen planları vardır. İşletmenizin boyutuna uygun bir plana abone olun. Tüm planlarda 15 gün deneme sürümü mevcuttur.
                    </p>
                    <ul className='relative flex text-[#504c89] z-[99] justify-between w-[200px] mb-[50px]'>
                        <li onClick={() => setCheckbox(false)} className={`capitalize px-[10px] text-[#504c89] py-[5px] w-[50%] relative cursor-pointer ${checkbox === true && 'before:bg-gradient-to-r before:from-[#4050e9] before:to-[#a12ffe] before:absolute before:content-[""] before:w-[70px] before:h-[40px] before:rounded-[20px] before:right-[-43px] before:top-[50%] before:mt-[-20px] after:absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[#fff] after:rounded-[15px] after:mt-[-15px] after:z-[1] after:top-[50%] after:right-[-38px]'} select-none`}>Aylık</li>
                        <li onClick={() => setCheckbox(true)} className={`text-right text-[#504c89] capitalize py-[5px] w-[50%] pl-[10px] relative cursor-pointer ${checkbox === false && 'before:left-[-27px] before:right-auto before:bg-gradient-to-r before:from-[#4050e9] before:to-[#a12ffe] before:absolute before:content-[""] before:w-[70px] before:h-[40px] before:rounded-[20px] before:top-[50%] before:mt-[-20px] after:right-auto after:left-[-22px] after:absolute after:content-[""] after:w-[30px] after:h-[30px] after:bg-[#fff] after:rounded-[15px] after:mt-[-15px] after:z-[1] after:top-[50%]'} select-none`}>Yıllık</li>
                    </ul>
                    <div className='flex w-full flex-wrap mr-[-15px] ml-[-15px] mb-[-30px] justify-center'>
                        <div className={` ${styles['tab']} relative w-[100%] pr-[15px] pl-[15px]`}>
                            <div className='bg-gradient-to-b from-[#fe648b] to-[#ff926f] text-center rounded-[30px] mb-[30px] ml-[40px] max-xsm:ml-[20px] relative before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[url(/img/pricing/pricing.png)] before:bg-[-54px_0] before:bg-cover before:rounded-[30px] before:absolute before:content-[""]'>
                                <div className='text-[#fff] pb-[30px] z-[9] relative'>
                                    <span className='font-semibold rounded-br-[30px] rounded-bl-[30px] leading-[40px] inline-block w-auto mr-auto ml-auto mb-[40px] bg-[#fff] text-[#3b368c] min-w-[160px] px-[15px]'>STARTER</span>
                                    <h2 className='text-[#fff] text-[54px] font-normal m-0 leading-[1]'>{checkbox ? "3.000" : "300"}₺</h2>
                                    <span className='uppercase'>{checkbox ? "yıllık" : "aylık"}</span>
                                </div>
                                <div style={{ boxShadow: '1.95px 15.881px 30px 0 rgba(47, 105, 252, 0.3)' }} className='bg-[#fff] ml-[-10px] translate-x-[-30px] max-xsm:text-[16px] max-xsm:translate-x-[-20px] max-xsm:p-[20px] pt-[20px] pb-[20px] pl-[65px] pr-[40px] rounded-tr-[30px] rounded-br-[30px] relative z-[9] before:absolute before:w-[40px] before:h-[48px] before:bg-[#cdd0f6] before:left-0 before:top-[100%] before:content-[""] before:[clip-path:polygon(0%_0%,100%_0%,100%_100%)]'>
                                    <ul>
                                        <li className='border-b-2 border-dotted text-[16px] border-[#bccaea] py-[8px] text-[#3b368c]'>Kolay yönetim paneli</li>
                                        <li className='border-b-2 border-dotted text-[16px] border-[#bccaea] py-[8px] text-[#3b368c]'>Sınırsız ürün & kategori</li>
                                        <li className='border-b-2 border-dotted text-[16px] border-[#bccaea] py-[8px] text-[#3b368c]'>Ürün & kategori fotoğrafları</li>
                                        <li className='border-b-2 border-dotted text-[16px] border-[#bccaea] py-[8px] text-[#3b368c]'>Ürün içerikleri (alerjen, kalori, açıklama) ekleyebilme</li>
                                        <li className='border-b-2 border-dotted text-[16px] border-[#bccaea] py-[8px] text-[#3b368c]'>Sosyal medya bağlantıları</li>
                                        <li className='py-[8px] text-[#3b368c] text-[16px]'>Wi-Fi şifresi kopyalama</li>
                                    </ul>
                                </div>
                                <div className='py-[45px] relative z-[9] px-[15px] text-center'>
                                    <Link className='max-xsm:text-[14px] max-xsm:py-[20px] max-xsm:px-[20px]  font-semibold rounded-[30px] cursor-pointer text-[#fff] py-[20px] px-[45px] bg-[linear-gradient(-65deg,_#c165dd_0%,_#1153fc_100%)] text-center hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300' href={'/contact'}>HEMEN BAŞLA</Link>
                                </div>
                            </div>
                        </div>
                        <div className={` ${styles['tab']} relative w-[100%] pr-[15px] pl-[15px]`}>
                            <div className='bg-gradient-to-b from-[#c165dd] to-[#1153fc] text-center rounded-[30px] mb-[30px] ml-[40px] max-xsm:ml-[20px] relative before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[url(/img/pricing/pricing.png)] before:bg-[-54px_0] before:bg-cover before:rounded-[30px] before:absolute before:content-[""]'>
                                <div className='text-[#fff] pb-[30px] z-[9] relative'>
                                    <span className='font-semibold rounded-br-[30px] rounded-bl-[30px] leading-[40px] inline-block w-auto mr-auto ml-auto mb-[40px] bg-[#fff] text-[#3b368c] min-w-[160px] px-[15px]'>PRO</span>
                                    <h2 className='text-[#fff] text-[54px] font-normal m-0 leading-[1]'>{checkbox ? "4.500" : "450"}₺</h2>
                                    <span className='uppercase'>{checkbox ? "yıllık" : "aylık"}</span>
                                </div>
                                <div style={{ boxShadow: '1.95px 15.881px 30px 0 rgba(47, 105, 252, 0.3)' }} className='bg-[#fff] ml-[-10px] translate-x-[-30px] max-xsm:text-[16px] max-xsm:translate-x-[-20px] max-xsm:p-[20px] pt-[20px] pb-[20px] pl-[65px] pr-[40px] rounded-tr-[30px] rounded-br-[30px] relative z-[9] before:absolute before:w-[40px] before:h-[48px] before:bg-[#cdd0f6] before:left-0 before:top-[100%] before:content-[""] before:[clip-path:polygon(0%_0%,100%_0%,100%_100%)]'>
                                    <ul>
                                        <li className='border-b-2 text-[16px] border-dotted border-[#bccaea] py-[8px] text-[#3b368c]'>Starter plandaki tüm özellikler</li>
                                        <li className='border-b-2 text-[16px] border-dotted border-[#bccaea] py-[8px] text-[#3b368c]'>Çoklu dil desteği</li>
                                        <li className='border-b-2 text-[16px] border-dotted border-[#bccaea] py-[8px] text-[#3b368c]'>Çoklu kur desteği</li>
                                        <li className='py-[8px] text-[#3b368c] text-[16px]'>2 farklı tema seçenegi</li>
                                    </ul>
                                </div>
                                <div className='py-[45px] relative z-[9] px-[15px] text-center'>
                                    <Link className='max-xsm:text-[14px] max-xsm:py-[20px] max-xsm:px-[20px]  font-semibold rounded-[30px] cursor-pointer text-[#fff] py-[20px] px-[45px] bg-[linear-gradient(-65deg,_#c165dd_0%,_#1153fc_100%)] text-center hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300' href={'/contact'}>HEMEN BAŞLA</Link>
                                </div>
                            </div>
                        </div>
                        <div className={` ${styles['tab']} relative w-[100%] pr-[15px] pl-[15px]`}>
                            <div className='bg-gradient-to-b from-[#01b7cd] to-[#02cb7a] text-center rounded-[30px] mb-[30px] ml-[40px] max-xsm:ml-[20px] relative before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[url(/img/pricing/pricing.png)] before:bg-[-54px_0] before:bg-cover before:rounded-[30px] before:absolute before:content-[""]'>
                                <div className='text-[#fff] pb-[30px] z-[9] relative'>
                                    <span className='font-semibold rounded-br-[30px] rounded-bl-[30px] leading-[40px] inline-block w-auto mr-auto ml-auto mb-[40px] bg-[#fff] text-[#3b368c] min-w-[160px] px-[15px]'>ENTERPRISE</span>
                                    <h2 className='text-[#fff] text-[54px] font-normal m-0 leading-[1]'>{checkbox ? "7.000" : "700"}₺</h2>
                                    <span className='uppercase'>{checkbox ? "yıllık" : "aylık"}</span>
                                </div>
                                <div style={{ boxShadow: '1.95px 15.881px 30px 0 rgba(47, 105, 252, 0.3)' }} className='bg-[#fff] ml-[-10px] translate-x-[-30px] max-xsm:text-[16px] max-xsm:translate-x-[-20px] max-xsm:p-[20px] pt-[20px] pb-[20px] pl-[65px] pr-[40px] rounded-tr-[30px] rounded-br-[30px] relative z-[9] before:absolute before:w-[40px] before:h-[48px] before:bg-[#cdd0f6] before:left-0 before:top-[100%] before:content-[""] before:[clip-path:polygon(0%_0%,100%_0%,100%_100%)]'>
                                    <ul>
                                        <li className='border-b-2 border-dotted border-[#bccaea] text-[16px] py-[8px] text-[#3b368c]'>Pro plandaki tüm özellikler</li>
                                        <li className='border-b-2 border-dotted border-[#bccaea] text-[16px] py-[8px] text-[#3b368c]'>Özel tema & renk düzeni</li>
                                        <li className='border-b-2 border-dotted border-[#bccaea] text-[16px] py-[8px] text-[#3b368c]'>Alanadı ile çalışma (örnek: menu.firmaniz.com) isteğe bağlı extra</li>
                                        <li className='text-[16px] py-[8px] text-[#3b368c]'>Menü içerikleriniz, ekibimiz tarafından ücretsiz olarak sisteme entegre edilir</li>
                                    </ul>
                                </div>
                                <div className='py-[45px] relative z-[9] px-[15px] text-center'>
                                    <Link className='max-xsm:text-[14px] max-xsm:py-[20px] max-xsm:px-[20px]  font-semibold rounded-[30px] cursor-pointer text-[#fff] py-[20px] px-[45px] bg-[linear-gradient(-65deg,_#c165dd_0%,_#1153fc_100%)] text-center hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300' href={'/contact'}>HEMEN BAŞLA</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
