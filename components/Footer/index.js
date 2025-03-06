import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineGooglePlus, AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoPinterestAlt } from 'react-icons/bi'

export default function Footer() {
  return (
    <footer className='relative bg-cover bg-center bg-no-repeat bg-[url(/img/footer/footer-bg.jpg)] before:top-[-3px] before:left-0 before:w-full before:h-[180px] before:bg-[url(/img/footer/footer-shape.png)] before:bg-center before:h-[210px] before:bg-bottom before:bg-no-repeat before:bg-cover before:absolute max-md:before:bg-none'>
      <div className='w-full mt-52 max-sm:mt-36'>
        <div className='max-w-[1140px] max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full m-auto max-md:pl-[15px] max-md:pr-[15px]'>
          <div className='pt-[120px] pb-[112px] max-lg:pt-[100px] max-lg:pb-[100px] max-md:pt-[80px] max-md:pb-[80px]'>
            <div className="max-w-[140px] mr-auto mb-[30px] ml-auto mt-0">
              <Link className="z-20 relative" href='/'>
                <img className='w-full' src="/logo/gdmenulogowhite.svg" alt="" />
              </Link>
            </div>
            <ul className='justify-center mt-[-7.5px] mr-0 mb-[-7.5px] ml-0 flex flex-wrap'>
              <li className='p-[7.5px] z-20'>
                <Link href='/' className='w-[36px] items-center justify-center flex h-[36px] leading-[36px] text-center text-[16px] border border-[#4c218b] transition-all duration-300 rounded-[50%] text-white hover:bg-[#ee4730] hover:border-[#ee4730]'>
                  <FaFacebookF size={18} />
                </Link>
              </li>

              <li className='p-[7.5px] z-20'>
                <Link href='/' className='w-[36px] items-center justify-center flex h-[36px] leading-[36px] text-center text-[16px] border border-[#4c218b] transition-all duration-300 rounded-[50%] text-white hover:bg-[#ee4730] hover:border-[#ee4730]'>
                  <AiOutlineTwitter size={20} />
                </Link>
              </li>

              <li className='p-[7.5px] z-20'>
                <Link href='/' className='w-[36px] items-center justify-center flex h-[36px] leading-[36px] text-center text-[16px] border border-[#4c218b] transition-all duration-300 rounded-[50%] text-white hover:bg-[#ee4730] hover:border-[#ee4730]'>
                  <BiLogoPinterestAlt size={22} />
                </Link>
              </li>

              <li className='p-[7.5px] z-20'>
                <Link href='/' className='w-[36px] items-center justify-center flex h-[36px] leading-[36px] text-center text-[16px] border border-[#4c218b] transition-all duration-300 rounded-[50%] text-white hover:bg-[#ee4730] hover:border-[#ee4730]'>
                  <AiOutlineGooglePlus size={22} />
                </Link>
              </li>

              <li className='p-[7.5px] z-20'>
                <Link href='/' className='w-[36px] items-center justify-center flex h-[36px] leading-[36px] text-center text-[16px] border border-[#4c218b] transition-all duration-300 rounded-[50%] text-white hover:bg-[#ee4730] hover:border-[#ee4730]'>
                  <AiOutlineInstagram size={20} />
                </Link>
              </li>
            </ul>
          </div>
          <div className='pb-[27px]'>
            <ul className='mt-[-5px] mr-[-40px] mb-[-5px] ml-[-40px] max-lg:mr-[-20px] max-lg:ml-[-20px] justify-center flex flex-wrap'>
              <li className='pt-[5px] pr-[40px] pb-[5px] pl-[40px] max-lg:pl-[20px] max-lg:pr-[20px] relative after:w-[2px] after:h-[19px] after:bg-[#5e5bb7] after:right-0 after:top-[11px]  after:absolute'>
                <Link className="text-[16px] max-[596px]:text-[14px] font-sans font-semibold transition-all duration-300 text-white inline-block hover:text-[#ee4730]" href='/about'>Hakkımızda</Link>
              </li>

              <li className='pt-[5px] pr-[40px] pb-[5px] pl-[40px] max-lg:pl-[20px] max-lg:pr-[20px] relative after:w-[2px] after:h-[19px] after:bg-[#5e5bb7] after:right-0 after:top-[11px]  after:absolute'>
                <Link className="text-[16px] max-[596px]:text-[14px] font-sans font-semibold transition-all duration-300 text-white inline-block hover:text-[#ee4730]" href='/sss'>SSS</Link>
              </li>

              <li className='pt-[5px] pr-[40px] pb-[5px] pl-[40px] max-lg:pl-[20px] max-lg:pr-[20px] relative after:w-[2px] after:h-[19px] after:bg-[#5e5bb7] after:right-0 after:top-[11px]  after:absolute'>
                <Link className="text-[16px] max-[596px]:text-[14px] font-sans font-semibold transition-all duration-300 text-white inline-block hover:text-[#ee4730]" href='/contact'>İletişim</Link>
              </li>

              <li className='pt-[5px] pr-[40px] pb-[5px] pl-[40px] max-lg:pl-[20px] max-lg:pr-[20px] relative after:w-[2px] after:h-[19px] after:bg-[#5e5bb7] after:right-0 after:top-[11px]  after:absolute'>
                <Link className="text-[16px] max-[596px]:text-[14px] font-sans font-semibold transition-all duration-300 text-white inline-block hover:text-[#ee4730]" href='/terms-of-service'>Hizmet Şartları</Link>
              </li>

              <li className='pt-[5px] pr-[40px] pb-[5px] pl-[40px] max-lg:pl-[20px] max-lg:pr-[20px] relative'>
                <Link className="text-[16px] max-[596px]:text-[14px] font-sans font-semibold transition-all duration-300 text-white inline-block hover:text-[#ee4730]" href='/privacy-policy'>Gizlilik</Link>
              </li>
            </ul>
          </div>
          <div className='text-center text-white pt-[22px] pb-[22px] pl-0 pr-0 border-t border-[#49329b]'>
            <p className='max-[596px]:text-[16px]'>
              ©2024 Tüm Hakları Saklıdır
              <Link className='text-[#ee4730] ml-1' href='/'>
                Gdmenu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer >
  )
}
