"use client"
import Head from 'next/head';
import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
    const [company, setCompany] = useState('')
    const [companyDirty, setCompanyDirty] = useState(false)
    const [fullname, setFullname] = useState('')
    const [fullnameDirty, setFullnameDirty] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState(false);
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false);
    const [message, setMessage] = useState('')
    const [messageDirty, setMessageDirty] = useState(false)
    const [captchaToken, setCaptchaToken] = useState(null)

    function onChange(value) {
        setCaptchaToken(value)
    }

    const requestHandler = async () => {
        if (company?.length > 1 && fullname?.length > 1 && phone?.length > 1 && phoneError === false && email?.length > 1 && emailError === false && message?.length > 1 && captchaToken) {
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: 'info@gdmenu.com',
                    subject: 'Gdmenu İletişim Formu',
                    message: `Firma adı: ${company},Yetkili Ad Soyad: ${fullname},Telefon: ${phone},Email: ${email}, Mesaj: ${message}`,
                }),
            });

            const data = await response.json();
            if (data.success) {
                alert('Mail gönderildi!');
                location.reload()

            } else {
                alert('Hata: ' + data.error);
            }
        } else {
            alert("zorunlu alanları doldurun!")
        }
    }

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        setPhoneError(!/^05\d{9}$/.test(value));
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!isValidEmail(value));
    };

    const handleCompanyChange = (e) => {
        const value = e.target.value;
        setCompany(value);
        setCompanyDirty(true)
    };

    const handleFullnameChange = (e) => {
        const value = e.target.value;
        setFullname(value);
        setFullnameDirty(true)
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        setMessageDirty(true)
    };

    return (
        <div className='border rounded-[5px] border-[#fff] bg-white shadow-[0_11px_19.2px_0.8px_rgba(66,58,232,0.1)] pt-[65px] pb-[0px] pl-[40px] pr-[40px]'>
            <h4 className='mb-[30px] text-center text-[28px] leading-[38px] mt-[-14px] text-[#3b368c] font-semibold'>İletişime Geçin</h4>
            <form action="">
                <div className='mb-[23px]'>
                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Firma Adı *</label>
                    <input onChange={handleCompanyChange} className={`p-[15px] outline-none w-full border ${companyDirty && company?.length < 2 ? 'border-red-500' : 'border-[rgba(59,54,140,0.1)]'} rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans`} placeholder='Firma adı giriniz' type="text" />
                    {companyDirty && company?.length < 2 && (
                        <p className="text-red-500 text-sm mt-2">Firma adı zorunlu</p>
                    )}
                </div>
                <div className='mb-[23px]'>
                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Yetkili Ad Soyad *</label>
                    <input onChange={handleFullnameChange} className={`p-[15px] outline-none w-full border ${fullnameDirty && fullname?.length < 2 ? 'border-red-500' : 'border-[rgba(59,54,140,0.1)]'} rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans`} placeholder='Yetkili ad soyad giriniz' type="text" />
                    {fullnameDirty && fullname?.length < 2 && (
                        <p className="text-red-500 text-sm mt-2">Yetkili ad soyad zorunlu</p>
                    )}
                </div>
                <div className='mb-[23px]'>
                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block'>
                        Telefon Numarası *
                    </label>
                    <input
                        onChange={handlePhoneChange}
                        className={`p-[15px] outline-none w-full border ${phoneError ? 'border-red-500' : 'border-[rgba(59,54,140,0.1)]'} rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans`}
                        placeholder='Telefon numarası giriniz'
                        type="text"
                    />
                    {phoneError && (
                        <p className="text-red-500 text-sm mt-2">Geçerli bir telefon numarası giriniz (05xxxxxxxxx)</p>
                    )}
                </div>
                <div className='mb-[23px]'>
                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block'>
                        E-posta Adresi *
                    </label>
                    <input
                        onChange={handleEmailChange}
                        className={`p-[15px] outline-none w-full border ${emailError ? 'border-red-500' : 'border-[rgba(59,54,140,0.1)]'
                            } rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans`}
                        placeholder='E-posta adresinizi giriniz'
                        type="email"
                    />
                    {emailError && (
                        <p className="text-red-500 text-sm mt-2">Geçerli bir e-posta adresi giriniz</p>
                    )}
                </div>
                {/* <div className='mb-[23px]'>
                                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Your Subject</label>
                                    <input className='p-[15px] outline-none w-full border border-[rgba(59,54,140,0.1)] rounded-[5px] bg-[#f6f6fa] h-[60px] font-sans' placeholder='Enter Your Subject' type="text" />
                                </div> */}
                <div className='mb-[23px]'>
                    <label className='text-[#3b368c] text-[18px] font-semibold cursor-pointer mb-[0.5rem] inline-block' htmlFor="">Mesajınız *</label>
                    <textarea onChange={handleMessageChange} className={`p-[15px] outline-none w-full border ${messageDirty && message?.length < 2 ? 'border-red-500' : 'border-[rgba(59,54,140,0.1)]'} rounded-[5px] bg-[#f6f6fa] resize-none h-[140px] font-sans`} placeholder='Mesajınızı yazınız' type="text" ></textarea>
                    {messageDirty && message?.length < 2 && (
                        <p className="text-red-500 text-sm mt-2">Mesaj zorunlu</p>
                    )}
                    {/* <div className='p-0 items-center pt-[10px] pb-[15px] flex'>
                                        <input id='btn1' className='w-[22px] cursor-pointer h-[22px] rounded-[4px]' type="checkbox" />
                                        <label className='m-0 pl-[10px] text-[16px] font-sans font-normal text-[#6f6c9f] cursor-pointer' htmlFor="btn1">I agree to receive emails, newsletters and promotional messages</label>
                                    </div> */}
                </div>
                <ReCAPTCHA
                    sitekey="6LfBOTArAAAAALVCTYqxh3UdNCR1og5wiPNxtM5J"
                    onChange={onChange}
                />
                <div className='mb-[23px] translate-y-[50px]'>
                    <input onClick={requestHandler} value='MESAJI GÖNDER' className='bg-gradient-to-r cursor-pointer text-white w-auto pr-[50px] pl-[50px] font-semibold ml-auto mr-auto block border-none rounded-[30px] h-[60px] from-[#c165dd] to-[#1153fc] max-xsm:pl-[10px] max-xsm:pr-[10px] hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300' type="button" />
                </div>
            </form>
        </div>
    )
}
