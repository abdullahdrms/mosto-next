import React from 'react'
import styles from './testimonials.module.css'
import { FaStar } from "react-icons/fa6";
import Link from 'next/link';

export default function Testimonials() {
    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto  max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <div className='flex flex-wrap-reverse items-center px-[-15px]'>
                        <div className={`${styles["tab"]} relative w-full px-[15px] max-sm:px-[0px]`}>
                            <div className='items-center flex flex-wrap mr-[-15px] ml-[-15px]'>
                                <div className={`${styles['tab2']} relative w-full px-[15px]`}>
                                    <div className='bg-[#fff] rounded-[20px] shadow-[2.925px_23.821px_38px_0_rgba(10,25,63,0.28)] px-[20px] py-[25px] mb-[30px] leading-[28px] text-[#504c89] text-[18px]'>
                                        <div className='flex items-center mb-[40px]'>
                                            <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-cover align-middle' src="https://qrmenuapp.testgrande.com/uploads/426551461_3543886942591169_8293048381864936022_n_47bfcec173_1e8f6ce90a.jpg" alt="" />
                                            </div>
                                            <div className='pl-[20px] text-[14px]'>
                                                <h6 className='m-0 font-medium leading-[26px] text-[20px] text-[#3b368c]'>Skyfall Arena</h6>
                                                <span className=''>Gece Kulübü</span>
                                            </div>
                                        </div>
                                        <div className='mb-[15px] flex gap-1'>
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                        </div>
                                        <blockquote className='mb-[1rem] text-[#504c89] text-[18px] leading-[28px]'>
                                            “Her zaman alışılmışın dışında düşünün ve nerede olursa olsun karşınıza çıkan fırsatları değerlendirin.”
                                        </blockquote>
                                        <strong>Harika Uygulama!</strong>
                                    </div>
                                    <div className='bg-[linear-gradient(90deg,#4050e9_0%,#a12ffe_100%)] rounded-[20px] shadow-[2.925px_23.821px_38px_0_rgba(10,25,63,0.28)] px-[20px] py-[25px] mb-[30px] leading-[28px] text-[rgba(255,255,255,.9)] text-[18px]'>
                                        <div className='flex items-center mb-[40px]'>
                                            <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-cover align-middle' src="/reference/isiklarlogo.jpg" alt="" />
                                            </div>
                                            <div className='pl-[20px] text-[14px]'>
                                                <h6 className='m-0 font-medium leading-[26px] text-[20px] text-[rgba(255,255,255,.9)]'>Işıklar Pide</h6>
                                                <span className=''>Börek Salonu</span>
                                            </div>
                                        </div>
                                        <div className='mb-[15px] flex gap-1'>
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                        </div>
                                        <blockquote className='mb-[1rem] text-[rgba(255,255,255,.9)] text-[18px] leading-[28px]'>
                                            “Her zaman alışılmışın dışında düşünün ve nerede olursa olsun karşınıza çıkan fırsatları değerlendirin.”
                                        </blockquote>
                                        <strong>Harika Uygulama!</strong>
                                    </div>
                                    <div className='bg-[#fff] rounded-[20px] shadow-[2.925px_23.821px_38px_0_rgba(10,25,63,0.28)] px-[20px] py-[25px] mb-[30px] leading-[28px] text-[#504c89] text-[18px]'>
                                        <div className='flex items-center mb-[40px]'>
                                            <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-cover align-middle' src="/img/testimonials/client03.png" alt="" />
                                            </div>
                                            <div className='pl-[20px] text-[14px]'>
                                                <h6 className='m-0 font-medium leading-[26px] text-[20px] text-[#3b368c]'>Rudy Riley</h6>
                                                <span className=''>CEO & Founder</span>
                                            </div>
                                        </div>
                                        <div className='mb-[15px] flex gap-1'>
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                        </div>
                                        <blockquote className='mb-[1rem] text-[#504c89] text-[18px] leading-[28px]'>
                                            “Her zaman alışılmışın dışında düşünün ve nerede olursa olsun karşınıza çıkan fırsatları değerlendirin.”
                                        </blockquote>
                                        <strong>Harika Uygulama!</strong>
                                    </div>
                                </div>
                                <div className={`${styles['tab2']} relative w-full px-[15px]`}>
                                    <div className='bg-[#fff] rounded-[20px] shadow-[2.925px_23.821px_38px_0_rgba(10,25,63,0.28)] px-[20px] py-[25px] mb-[30px] leading-[28px] text-[#504c89] text-[18px]'>
                                        <div className='flex items-center mb-[40px]'>
                                            <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-cover align-middle' src="/img/testimonials/client03.png" alt="" />
                                            </div>
                                            <div className='pl-[20px] text-[14px]'>
                                                <h6 className='m-0 font-medium leading-[26px] text-[20px] text-[#3b368c]'>Rudy Riley</h6>
                                                <span className=''>CEO & Founder</span>
                                            </div>
                                        </div>
                                        <div className='mb-[15px] flex gap-1'>
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                        </div>
                                        <blockquote className='mb-[1rem] text-[#504c89] text-[18px] leading-[28px]'>
                                            “Her zaman alışılmışın dışında düşünün ve nerede olursa olsun karşınıza çıkan fırsatları değerlendirin.”
                                        </blockquote>
                                        <strong>Harika Uygulama!</strong>
                                    </div>
                                    <div className='bg-[#fff] rounded-[20px] shadow-[2.925px_23.821px_38px_0_rgba(10,25,63,0.28)] px-[20px] py-[25px] mb-[30px] leading-[28px] text-[#504c89] text-[18px]'>
                                        <div className='flex items-center mb-[40px]'>
                                            <div className='w-[50px] h-[50px] overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-cover align-middle' src="/img/testimonials/client03.png" alt="" />
                                            </div>
                                            <div className='pl-[20px] text-[14px]'>
                                                <h6 className='m-0 font-medium leading-[26px] text-[20px] text-[#3b368c]'>Rudy Riley</h6>
                                                <span className=''>CEO & Founder</span>
                                            </div>
                                        </div>
                                        <div className='mb-[15px] flex gap-1'>
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                            <FaStar size={22} color='#fc0' />
                                        </div>
                                        <blockquote className='mb-[1rem] text-[#504c89] text-[18px] leading-[28px]'>
                                            “Her zaman alışılmışın dışında düşünün ve nerede olursa olsun karşınıza çıkan fırsatları değerlendirin.”
                                        </blockquote>
                                        <strong>Harika Uygulama!</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles["tab"]} relative w-full px-[15px] max-sm:px-[0px]`}>
                            <div className={`${styles['mblg']}`}>
                                <div className='text-left ml-0 max-w-full mb-[45px] relative z-[1]'>
                                    <h5 className='text-[#ff8a00] mb-[38px] text-[24px] leading-[28px] font-semibold max-md:text-[20px]'>Yorumlar</h5>
                                    <h2 className='mb-[24px] leading-[64px] font-bold text-[48px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c] mt-[-20px]'>Sadece bizim sözümüze güvenmeyin!</h2>
                                    <p className='text-[18px] text-[#504c89] leading-[28px]'>
                                        Yüzlerce profesyonel ve işletme halihazırda Uygulamaların keyfini çıkarıyor. Bazılarının ne dediğini dinleyin!
                                    </p>
                                </div>
                                <Link href={'#'} className='font-semibold rounded-[30px] text-[#fff] py-[15px] px-[45px] bg-[linear-gradient(-65deg,#c165dd_0%,#1153fc_100%)] inline-block hover:text-[#fff] hover:shadow-[0_17px_24px_0_rgba(18,83,252,0.51)] transition-all duration-300'>HEMEN BAŞLA</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
