"use client";
import React, { useEffect, useRef, useState } from 'react'
import styles from './sss.module.css'

export default function Sss() {
    const [activeId, setActiveId] = useState(0)
    const [activeSection, setActiveSection] = useState('');
    const sectionRef = useRef(null);

    const faqs = [
        {
            slug: 'get',
            title: "Başlarken",
            children: [
                {
                    id: 1,
                    title: 'Nasıl Başlarım?',
                    desc: 'Hemen Başla butonuna basarak, kişisel bilgilerinizi ve işletme bilgilerinizi girdikten sonra ihtiyacınıza uygun paketi seçerek hızlı bir şekilde başlayabilirsiniz.'
                },
                {
                    id: 2,
                    title: 'Hangi Paketi Seçmeliyim?',
                    desc: 'Fiyatlandırma sayfasında yer alan paket seçeneklerinde kendi işletmenize en uygun özelliklerdeki paketi seçmeniz işletmeniz için en avantajlısı olacaktır.'
                }
            ]
        },
        {
            slug: 'guest',
            title: "Tüm Misafirleriniz İçin",
            children: [
                {
                    id: 3,
                    title: 'Dil Seçenekleri',
                    desc: 'Müşterilerinize yabancı kalmayın. Dilediğiniz dilleri ekleyip düzenleyebilirsiniz.'
                },
                {
                    id: 4,
                    title: 'Para Birimi Seçenekleri',
                    desc: 'Varsayılan olarak "TL" , "USD" , "GBP" , "EUR" Para birimleri mevcuttur. Farklı bir para birimi ekletmek için lütfen bize ulaşın.'
                }
            ]
        },
        {
            slug: 'package',
            title: "Paket Seçerken",
            children: [
                {
                    id: 5,
                    title: 'Hangi Paketi Tercih Etmeliyim?',
                    desc: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
                },
                {
                    id: 6,
                    title: 'Paket Değişikliği Yapabilir miyim?',
                    desc: 'Dilediğiniz zaman destek ekibimize ulaşarak mevcut paketinizde değişiklik yapabilir, ihtiyacınıza uygun yeni bir paket seçebilirsiniz.'
                },
                {
                    id: 7,
                    title: 'Paket Süresi Bittiğinde Ne Yapmalıyım?',
                    desc: 'Kullanım süreniz sona erdikten sonra, 15 gün boyunca hizmeti kullanmaya devam edebilirsiniz. Bu süre zarfında, istediğiniz zaman kullanım sürenizi uzatma işlemini gerçekleştirebilirsiniz.'
                }
            ]
        },
        {
            slug: 'manage',
            title: "İçerikleri Yönetirken",
            children: [
                {
                    id: 8,
                    title: 'Dil Seçeneklerini Nasıl Güncellerim?',
                    desc: 'İçerik listesinde düzenlemek istediğiniz öğenin satırındaki "Düzenle" butonuna tıklayarak açılan pencerede dil seçenekleri arasında geçiş yapabilir ve düzenlemelerinizi yapabilirsiniz.'
                },
                {
                    id: 9,
                    title: 'Dil Seçeneklerini Nasıl Eklerim?',
                    desc: 'İşletmeniz için kullanılacak diller, talebiniz üzerine hesabınıza tanımlanır. İçerik oluşturduğunuzda, bu dillerde otomatik olarak içerik de oluşturulur. İçerik oluşturduktan sonra, "Düzenle" ekranına giderek her bir dil için gerekli düzenlemeleri yapmanız yeterlidir.'
                },
                {
                    id: 10,
                    title: 'İçerik Güncellemesinde QR Değişir mi?',
                    desc: 'Hayır, içerik güncellemesi yapıldığında QR kodunuz değişmez. Mevcut QR kodu üzerinden güncellenmiş içeriğe erişebilirsiniz.'
                },
                {
                    id: 11,
                    title: 'Kategorilerimi Nasıl Oluştururum?',
                    desc: 'Kategori listesinde yer alan "Yeni Ekle" butonuna tıklayarak açılan pencereden kategorinizi hızlı ve kolay bir şekilde oluşturabilirsiniz.'
                },
                {
                    id: 12,
                    title: 'Ürünlerimi Nasıl Eklerim?',
                    desc: 'Ürün listesinde yer alan "Yeni Ekle" butonuna tıklayarak açılan sayfadan ürünlerinizi hızlı ve kolay bir şekilde oluşturabilirsiniz.'
                }
            ]
        },
        {
            slug: 'security',
            title: "Güvenlik",
            children: [
                {
                    id: 13,
                    title: 'İçeriklerim Silinir mi?',
                    desc: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
                },
                {
                    id: 14,
                    title: 'Veri Güvenliği Nasıl Sağlanıyor?',
                    desc: 'A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy.'
                },
                {
                    id: 15,
                    title: 'Şifremi Unuttum Ne Yapabilirim?',
                    desc: 'Şifrenizi unuttuğunuzda bizlere ulaşarak yeni şifrenizi belirleyebilirsiniz.'
                }
            ]
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 1,
            }
        );

        const sections = document.querySelectorAll('[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Sıkça Sorulan Sorular</h2>
                    <div className='flex mt-[100px] justify-between flex-wrap mx-[-15px]'>
                        <div className={`${styles["col-lg-4"]} relative w-full px-[15px]`}>
                            <aside className='sticky block top-[120px]'>
                                <div className='py-[60px] px-[30px] mb-[30px] bg-cover bg-center bg-no-repeat rounded-[20px] bg-[url(/img/sss/faq-menu.png)]'>
                                    <ul className='m-0 p-0'>
                                        <li className='list-none py-[5px]'>
                                            <a style={{ borderRadius: activeSection === 'get' ? '10px' : '', backgroundColor: activeSection === 'get' ? 'rgba(255,255,255,.2)' : '', paddingLeft: activeSection === 'get' ? '30px' : '' }} className={`py-[8px] text-[#fff] transition-all duration-300 ease-out relative block before:absolute before:content-[">"] before:font-semibold before:left-[12px] before:top-[7px] before:opacity-0 hover:rounded-[10px] hover:bg-[rgba(255,255,255,.2)] hover:pl-[30px] hover:before:opacity-100 ${activeSection === 'get' ? 'before:opacity-100' : 'before:opacity-0'}`} href="#get">Başlarken</a>
                                        </li>
                                        <li className='list-none py-[5px]'>
                                            <a style={{ borderRadius: activeSection === 'guest' ? '10px' : '', backgroundColor: activeSection === 'guest' ? 'rgba(255,255,255,.2)' : '', paddingLeft: activeSection === 'guest' ? '30px' : '' }} className={`py-[8px] text-[#fff] transition-all duration-300 ease-out relative block before:absolute before:content-[">"] before:font-semibold before:left-[12px] before:top-[7px] before:opacity-0 hover:rounded-[10px] hover:bg-[rgba(255,255,255,.2)] hover:pl-[30px] hover:before:opacity-100 ${activeSection === 'guest' ? 'before:opacity-100' : 'before:opacity-0'}`} href="#guest">Tüm Misafirleriniz İçin</a>
                                        </li>
                                        <li className='list-none py-[5px]'>
                                            <a style={{ borderRadius: activeSection === 'package' ? '10px' : '', backgroundColor: activeSection === 'package' ? 'rgba(255,255,255,.2)' : '', paddingLeft: activeSection === 'package' ? '30px' : '' }} className={`py-[8px] text-[#fff] transition-all duration-300 ease-out relative block before:absolute before:content-[">"] before:font-semibold before:left-[12px] before:top-[7px] before:opacity-0 hover:rounded-[10px] hover:bg-[rgba(255,255,255,.2)] hover:pl-[30px] hover:before:opacity-100 ${activeSection === 'package' ? 'before:opacity-100' : 'before:opacity-0'}`} href="#package">Paket Seçerken</a>
                                        </li>
                                        <li className='list-none py-[5px]'>
                                            <a style={{ borderRadius: activeSection === 'manage' ? '10px' : '', backgroundColor: activeSection === 'manage' ? 'rgba(255,255,255,.2)' : '', paddingLeft: activeSection === 'manage' ? '30px' : '' }} className={`py-[8px] text-[#fff] transition-all duration-300 ease-out relative block before:absolute before:content-[">"] before:font-semibold before:left-[12px] before:top-[7px] before:opacity-0 hover:rounded-[10px] hover:bg-[rgba(255,255,255,.2)] hover:pl-[30px] hover:before:opacity-100 ${activeSection === 'manage' ? 'before:opacity-100' : 'before:opacity-0'}`} href="#manage">İçerikleri Yönetirken</a>
                                        </li>
                                        <li className='list-none py-[5px]'>
                                            <a style={{ borderRadius: activeSection === 'security' ? '10px' : '', backgroundColor: activeSection === 'security' ? 'rgba(255,255,255,.2)' : '', paddingLeft: activeSection === 'security' ? '30px' : '' }} className={`py-[8px] text-[#fff] transition-all duration-300 ease-out relative block before:absolute before:content-[">"] before:font-semibold before:left-[12px] before:top-[7px] before:opacity-0 hover:rounded-[10px] hover:bg-[rgba(255,255,255,.2)] hover:pl-[30px] hover:before:opacity-100 ${activeSection === 'security' ? 'before:opacity-100' : 'before:opacity-0'}`} href="#security">Güvenlik</a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div className={`${styles["col-xl-7"]} relative w-full px-[15px]`}>
                            <article className={`${styles["mt-lg-0"]} mt-[70px] text-[#3b368c]`}>
                                {
                                    faqs.map((faq, i) => {
                                        return (
                                            <div key={i} id={faq.slug} ref={sectionRef} className='mb-[53px]'>
                                                <h3 className='font-bold m-0 mb-[26px] text-[36px] leading-[46px] max-md:text-[26px]'>{faq.title}</h3>
                                                {
                                                    faq.children.map((item, x) => {
                                                        return (
                                                            <div key={x}>
                                                                <div className='bg-[#fff] py-[26px] px-[36px] relative border-[1px] border-solid border-[#dee2f1] rounded-[10px] mb-[20px]'>
                                                                    <div onClick={() => activeId === item.id ? setActiveId(0) : setActiveId(item.id)} className='cursor-pointer'>
                                                                        <h6 className='m-0 pr-[15px] font-semibold text-[22px] max-md:text-[20px]  leading-[26px]'>{item.title}</h6>
                                                                        <span style={{ transform: activeId === item.id ? 'rotate(225deg)' : '' }} className='w-[12px] h-[12px] border-t border-solid border-[#3b368c] border-l absolute right-[30px] top-[35px] rotate-[135deg] transition-all duration-300 ease-in'></span>
                                                                    </div>
                                                                    <div style={{
                                                                        maxHeight: activeId === item.id ? '500px' : '0px',
                                                                        opacity: activeId === item.id ? 1 : 0,
                                                                        overflow: 'hidden',
                                                                        paddingTop: activeId === item.id ? '30px' : '0px',
                                                                        paddingBottom: activeId === item.id ? '10px' : '0px',
                                                                        transition: 'all 0.3s ease-in-out, opacity 0.5s ease-in-out'
                                                                    }}>
                                                                        <p className='mb-[-7px] mt-[-12px] text-[18px] text-[#504c89]'>
                                                                            {item.desc}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        )
                                    })
                                }
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
