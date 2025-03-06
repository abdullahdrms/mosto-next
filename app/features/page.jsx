import React from 'react'
import styles from './features.module.css'
import { FaQrcode } from "react-icons/fa";
import { IoMdBusiness, IoMdPhotos } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { MdLanguage, MdCurrencyExchange } from "react-icons/md";
import { TfiPanel } from "react-icons/tfi";
import { FaLink } from "react-icons/fa";

export const metadata = {
    title: 'Gdmenu | Özellikler',
    description: 'Gdmenu her bütçeye uygun fiyat seçenekleri',
}

export default function Features() {
    const feature = [
        {
            icon: <FaQrcode color='#504c89' size={115} />,
            title: 'QR Kodlu Menü',
            desc: "Müşterileriniz, QR kodunu tarayarak kolayca menünüze erişebilirler."
        },
        {
            icon: <IoMdBusiness color='#504c89' size={115} />,
            title: 'Her İşletmeye Uygun',
            desc: "Kafeler, restoranlar, oteller ve tüm perakende işletmeler Dijital QR Menüyü kolayca kullanabilir."
        },
        {
            icon: <IoMdPhotos color='#504c89' size={115} />,
            title: 'Görsel Menü',
            desc: "Ürünlerinizi görsellerle sunarak müşterilerinizin sipariş öncesi detaylı bilgi edinmesini sağlayın."
        },
        {
            icon: <BiFoodMenu color='#504c89' size={115} />,
            title: 'Metin Odaklı Menü Seçeneği',
            desc: "Ürün görselleriniz henüz hazır değilse, QR menünüzü sade ve şık bir liste formatında sunarak müşterilerinize kolay ve hızlı bir kullanım deneyimi sağlayabilirsiniz."
        },
        {
            icon: <CiMobile3 color='#504c89' size={115} />,
            title: 'Mobil Uyumlu Menü',
            desc: "Mobil uyumlu QR Menü sayesinde müşterileriniz, menünüzü kendi mobil cihazlarında hızlı ve kolay bir şekilde görüntüleyebilir ve inceleyebilirler."
        },
        {
            icon: <MdLanguage color='#504c89' size={115} />,
            title: 'Çok Dilli Menü Desteği',
            desc: "QR Menü, ürün bilgileri ve açıklamalar dahil olmak üzere farklı dillerde içerik sunarak uluslararası müşterileriniz için daha erişilebilir ve kullanıcı dostu bir deneyim sağlar."
        },
        {
            icon: <MdCurrencyExchange color='#504c89' size={115} />,
            title: 'Çoklu Döviz Desteği',
            desc: "QR Menü, TL, Euro, Dolar gibi birçok para birimiyle fiyatlandırma yapma imkânı sunarak farklı ülkelerden müşterilere kolay ve esnek bir alışveriş deneyimi sağlar."
        },
        {
            icon: <TfiPanel color='#504c89' size={115} />,
            title: 'Kolay Yönetim Paneli',
            desc: "Sade ve kullanıcı dostu arayüzüyle menünüzü hızlı ve pratik bir şekilde yönetin."
        },
        {
            icon: <FaLink color='#504c89' size={115} />,
            title: 'Hızlı Erişim Linkleri',
            desc: "Müşterileriniz, hızlı linkler sayesinde sosyal medya hesaplarınıza ve Wi-Fi şifrenize kolayca erişebilir."
        },
    ]
    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex flex-col justify-center items-center mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Özellikler</h2>
                    <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] max-w-[620px] mt-[-12px] text-center'>
                        Birbirinden farklı özelliklerle QR Menü'nün avantajlarını keşfedin ve işletmenize değer katın.
                    </p>
                    <div className='justify-center flex flex-wrap mb-[-30px] mx-[-15px] w-full mt-[60px]'>

                        {feature.map((item, i) => (
                            <div
                                key={i}
                                className={`${styles["col-md-4"]} relative w-full px-[15px] max-sm:px-[0px] flex`}
                            >
                                <div className='flex flex-wrap justify-center bg-[#fff] py-[60px] px-[20px] mr-auto mb-[30px] ml-auto text-center flex-grow'>
                                    <div className='flex justify-center items-center flex-col h-full'>
                                        {/* <img className='max-h-[115px] max-w-full align-middle' src={item.image} alt="" /> */}
                                        {item.icon}
                                        <div className='mt-[30px]'>
                                            <p className='text-[#3b368c] text-[19px] leading-[29px] font-semibold mb-[14px]'>{item.title}</p>
                                            <p className='text-[18px] leading-[28px] text-[#504c89] max-w-[620px] text-center'>
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
