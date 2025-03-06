import React from 'react'
import Component from '../Parallax/SectionFour'
import Link from 'next/link'

export default function SectionFour() {
  return (
    <div className='mt-52 w-full max-sm:mt-36'>
      <div className='max-w-[1140px] max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full m-auto'>
        <div className="flex grid grid-cols-2 max-lg:block  max-sm:ml-[15px]  max-sm:mr-[15px]">
          <div>
            <div className="max-lg:hidden">
              <Component />
            </div>
            <div className='hidden max-lg:mb-9 max-lg:relative max-lg:block'>
              <div className="relative">
                <div className="mb-[35px]">
                  <img className=' max-sm:w-[50px]  max-sm:h-[50px]' src="/img/sectionfour/cate.png" alt="" />
                </div>
                <h2 className="text-[54px] max-md:text-[36px] font-bold text-[#3b368c] leading-[64px] mb-[15px]">
                  Qrmenü İşletmenize Ne Gibi Avantajlar Sağlar
                </h2>
                <Link href='/features' className="text-[#3b368c] text-[18px] hover:text-[#ee4730] transition-all duration-300">Özellikleri Keşfet</Link>
              </div>
            </div>
          </div>
          <div>
            <div className='flex mb-[30px]'>
              <div className="w-[65px] max-sm:w-[40px] max-sm:h-[40px] h-[65px] text-center text-[24px] font-semibold text-[#33406a] border border-[#535c9833] rounded-[50%] justify-center items-center flex"><div className='w-[40px]'>1</div></div>
              <div className="pl-[30px]">
                <h4 className="text-[28px] max-md:text-[24px] w-[440px] max-md:w-full max-lg:w-[595px] max-xl:w-[355px] leading-[38px] font-semibold text-[#3b368c]">
                  Temassız Menüler
                </h4>
                <p className="block w-[440px] max-lg:w-[595px] max-sm:w-full max-md:w-[415px] max-xl:w-[355px] text-[18px] leading-[28px] text-[#504c89] font-sans font-normal mt-[15px]">
                  Müşteriler, masalarından kalkmadan telefonlarıyla menüyü görüntüleyebilir, bu da hijyen ve güvenlik sağlar.
                </p>
              </div>
            </div>

            <div className='flex mb-[30px]'>
              <div className="w-[65px] max-sm:w-[40px] max-sm:h-[40px] h-[65px] text-center text-[24px] font-semibold text-[#33406a] border border-[#535c9833] rounded-[50%] justify-center items-center flex"><div className='w-[40px]'>2</div></div>
              <div className="pl-[30px]">
                <h4 className="text-[28px] max-md:text-[24px] max-md:w-full max-xl:w-[355px] max-lg:w-[595px] w-[440px] leading-[38px] font-semibold text-[#3b368c]">
                  Maliyet Tasarrufu
                </h4>
                <p className="block w-[440px] text-[18px] max-sm:w-full max-lg:w-[595px] max-md:w-[415px] max-xl:w-[355px] leading-[28px] text-[#504c89] font-sans font-normal mt-[15px]">
                  Fiziksel menülerin baskı maliyetleri ortadan kalkar, çünkü dijital menü sürekli güncellenebilir.Menüde yapılan değişiklikler, hemen dijital platformda yansır, fiziksel menüleri değiştirmek gerekmez.
                </p>
              </div>
            </div>

            <div className='flex mb-[30px]'>
              <div className="w-[65px] max-sm:w-[40px] max-sm:h-[40px] h-[65px] text-center text-[24px] font-semibold text-[#33406a] border border-[#535c9833] rounded-[50%] justify-center items-center flex"><div className='w-[40px]'>3</div></div>
              <div className="pl-[30px]">
                <h4 className="text-[28px] max-md:text-[24px] max-md:w-full w-[440px] max-lg:w-[595px] max-xl:w-[355px] leading-[38px] font-semibold text-[#3b368c]">
                  Yüksek Erişilebilirlik
                </h4>
                <p className="block w-[440px] max-sm:w-full max-lg:w-[595px] max-md:w-[415px] max-xl:w-[355px] text-[18px] leading-[28px] text-[#504c89] font-sans font-normal mt-[15px]">
                  Mobil cihazlar üzerinden her yerden erişilebilir, müşteriler menüyü kolayca bulur.
                </p>
              </div>
            </div>

            <div className='flex mb-[30px]'>
              <div className="w-[65px] max-sm:w-[40px] max-sm:h-[40px] h-[65px] text-center text-[24px] font-semibold text-[#33406a] border border-[#535c9833] rounded-[50%] justify-center items-center flex"><div className='w-[40px]'>4</div></div>
              <div className="pl-[30px]">
                <h4 className="text-[28px] max-md:text-[24px] max-md:w-full max-lg:w-[595px] w-[440px] max-xl:w-[355px] leading-[38px] font-semibold text-[#3b368c]">
                  Marka Kimliği Yaratma
                </h4>
                <p className="block w-[440px] max-sm:w-full max-lg:w-[595px] max-md:w-[415px] max-xl:w-[355px] text-[18px] leading-[28px] text-[#504c89] font-sans font-normal mt-[15px]">
                  Özelleştirilebilen dijital menüler, işletmenizin markasına uygun şekilde tasarlanabilir.
                </p>
              </div>
            </div>
            <div className='flex mb-[30px]'>
              <div className="w-[65px] max-sm:w-[40px] max-sm:h-[40px] h-[65px] text-center text-[24px] font-semibold text-[#33406a] border border-[#535c9833] rounded-[50%] justify-center items-center flex"><div className='w-[40px]'>5</div></div>
              <div className="pl-[30px]">
                <h4 className="text-[28px] max-md:text-[24px] max-md:w-full max-lg:w-[595px] w-[440px] max-xl:w-[355px] leading-[38px] font-semibold text-[#3b368c]">
                  Çevre Dostu
                </h4>
                <p className="block w-[440px] max-sm:w-full max-lg:w-[595px] max-md:w-[415px] max-xl:w-[355px] text-[18px] leading-[28px] text-[#504c89] font-sans font-normal mt-[15px]">
                  Kağıt israfını önleyerek çevreye duyarlı bir seçenek sunar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
