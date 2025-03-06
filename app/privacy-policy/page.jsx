import React from 'react'

export const metadata = {
    title: 'Gdmenu | Gizlilik Politikası',
    description: 'Gdmenu hakkında aklınızda bir şüphe kalmasın',
}

export default function PrivacyPolicy() {

    const aboutText = [
        {
            title: 'General',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor neque reiciendis. Quam tenetur hic omnis, impedit sunt beatae saepe magni debitis deserunt unde enim eligendi eius nulla nemo est voluptates quae quia placeat a aspernatur explicabo repudiandae. Eveniet, nesciunt quam? Ut consequatur in magnam repellat voluptate, corporis error numquam?'
        },
        {
            title: 'Intellectual Property',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor neque reiciendis. Quam tenetur hic omnis, impedit sunt beatae saepe magni debitis deserunt unde enim eligendi eius nulla nemo est voluptates quae quia placeat a aspernatur explicabo repudiandae. Eveniet, nesciunt quam? Ut consequatur in magnam repellat voluptate, corporis error numquam?'
        },
        {
            title: 'Security and storage',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor neque reiciendis. Quam tenetur hic omnis, impedit sunt beatae saepe magni debitis deserunt unde enim eligendi eius nulla nemo est voluptates quae quia placeat a aspernatur explicabo repudiandae. Eveniet, nesciunt quam? Ut consequatur in magnam repellat voluptate, corporis error numquam?'
        },
        {
            title: 'Usage Information',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dolor neque reiciendis. Quam tenetur hic omnis, impedit sunt beatae saepe magni debitis deserunt unde enim eligendi eius nulla nemo est voluptates quae quia placeat a aspernatur explicabo repudiandae. Eveniet, nesciunt quam? Ut consequatur in magnam repellat voluptate, corporis error numquam?'
        },
    ]

    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex flex-col justify-center items-center mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Gizlilik Politikası</h2>
                    <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] max-w-[620px] mt-[-12px] text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae voluptates quae exercitationem, libero minima accusamus necessitatibus odit dolorem in.
                    </p>
                    {
                        aboutText.map((item, i) => {
                            return (
                                <div key={i} className='mt-[60px]'>
                                    <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>{item.title}</h3>
                                    <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                                        {item.desc}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
