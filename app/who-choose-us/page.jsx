import React from 'react'
import styles from './choose.module.css'

export default function WhoChooseUs() {

    const comments = [
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        },
        {
            name: "Işıklar Pide",
            nickname: "@isiklar",
            desc: "İşletmem için verdiğim en doğru karar! Gdmenu sayesinde müşterilerimize hızlı, pratik ve modern bir deneyim sunabiliyoruz. Dijital menüler sayesinde sipariş süreçleri hızlandı, işletme içi verimlilik arttı ve müşteri memnuniyeti gözle görülür şekilde yükseldi. Gdmenu'nun kullanıcı dostu arayüzü ve özelleştirilebilir yapısı sayesinde markamızı en iyi şekilde yansıtabiliyoruz. "
        }
    ]

    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Bizi Tercih Edenler</h2>
                    <div className='justify-center flex flex-wrap mb-[-30px] mx-[-15px] mt-[100px]'>
                        {
                            comments.map((itm, i) => {
                                return (
                                    <div key={i} className={`${styles["col-lg-4"]} relative w-full px-[15px]`}>
                                        <div className='mx-auto mt-0 mb-[30px] text-[18px] text-[#504c89]'>
                                            <div className='px-[30px] pt-[40px] pb-[70px] rounded-[20px] bg-[linear-gradient(16deg,_#6c01d6_0%,_#712de5_35%,_#7658f4_100%)] text-[#fff] relative before:w-[79px] before:h-[63px] before:bg-[url(/img/who-choose-us/review-before.png)] before:bg-no-repeat before:bg-center before:bg-contain before:top-[30px] before:left-[30px] before:absolute before:content-[""] after:w-[79px] after:h-[63px] after:bg-[url(/img/who-choose-us/review-after.png)] after:bg-no-repeat after:bg-center after:bg-contain after:right-[30px] after:bottom-[30px] after:absolute after:content-[""]'>
                                                <p className='mb-[-7px] mt-[-12px]'>
                                                    {itm.desc}
                                                </p>
                                            </div>
                                            <div className='mx-[30px] mt-[-30px] py-[15px] px-[30px] bg-[#fff] rounded-[10px] relative z-[1] items-center justify-center flex flex-wrap'>
                                                <div className='w-[55px] p-[6px] rounded-full border border-solid border-[#daccff] overflow-hidden'>
                                                    <div className='rounded-full border border-solid border-[#6e0fd1] overflow-hidden'>
                                                        <img className='w-full align-middle' src="/reference/isiklarlogo.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className='items-center justify-between w-[calc(100%-55px)] pl-[18px] flex flex-wrap'>
                                                    <div className='w-[calc(100%-20px)]'>
                                                        <h6 className='text-[18px] m-0 mb-[-4px] text-[#3b368c]'>{itm.name}</h6>
                                                        <span className='text-[15px]'>{itm.nickname}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
