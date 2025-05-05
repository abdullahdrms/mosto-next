import React from 'react'

export const metadata = {
    title: 'Gdmenu | Hizmet Şartları',
    description: 'Gdmenu hakkında aklınızda bir şüphe kalmasın',
}

export default function TermsOfService() {
    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex flex-col justify-center mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Hizmet Şartları</h2>
                    {/* <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] max-w-[620px] mt-[-12px] text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae voluptates quae exercitationem, libero minima accusamus necessitatibus odit dolorem in.
                    </p> */}
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Giriş</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Bu Hizmet Şartları ("Şartlar"), Grande Digital tarafından sunulan QR Menü hizmetinin ("Hizmet") kullanımına ilişkin kuralları belirler. Hizmeti kullanarak bu şartları kabul etmiş sayılırsınız.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Hizmetin Tanımı</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            QR Menü Hizmeti, işletmelere dijital menü oluşturma, düzenleme ve müşterileriyle paylaşma imkânı sağlar. Hizmet, web tabanlı bir panel ve QR kod altyapısı üzerinden çalışır.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Kullanıcı Yükümlülükleri</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Kullanıcı olarak:
                            <ul className='mt-[10px] list-disc ml-[10px]'>
                                <li>Verdiğiniz bilgilerin doğru ve güncel olduğunu taahhüt edersiniz.</li>
                                <li>Hizmeti yasal amaçlar doğrultusunda kullanmayı kabul edersiniz.</li>
                                <li>Hizmeti kötüye kullanmamakla yükümlüsünüz (örneğin: spam, zararlı içerik barındırmak vb.).</li>
                                <li>Hesap güvenliğinizden siz sorumlusunuz.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Ücretlendirme ve Ödeme</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Hizmet bazı planlarda ücretsiz olabilir. Ücretli planlar aylık/yıllık abonelik modeliyle sunulur. Ödemeler abonelik sırasında belirtildiği şekliyle tahsil edilir.

                            Abonelik ücretleri haber verilmeden değiştirilebilir; ancak mevcut abonelere bilgilendirme yapılır.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Fikri Mülkiyet</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            QR Menü platformu, tasarımı, yazılımı ve tüm içeriği Grande Digital’e aittir. Hizmet üzerinden oluşturulan menü içerikleri kullanıcıya aittir; ancak kullanıcı, bu içeriği barındırma ve yayınlama hakkını şirkete verir.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Hesap İptali</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Kullanıcı, dilediği zaman hesabını silebilir. Şirket de, hizmet şartlarına aykırı hareket eden kullanıcıların erişimini askıya alma ya da sonlandırma hakkını saklı tutar.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Sorumluluk Reddi</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Hizmet "olduğu gibi" sunulmaktadır. Sistem kesintisi, veri kaybı veya üçüncü taraf saldırılardan doğabilecek zararlardan şirket sorumlu tutulamaz.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Değişiklikler</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Grande Digital, bu şartları zaman zaman güncelleyebilir. Güncellemeler web sitesinde yayınlanır ve yürürlük tarihi belirtilir. Kullanıcı, bu değişiklikleri takip etmekle sorumludur.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Uygulanacak Hukuk</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Bu Şartlar, Türkiye Cumhuriyeti kapsamında yorumlanır ve uygulanır. Taraflar, doğabilecek ihtilaflarda İstanbul mahkemelerinin yetkili olduğunu kabul eder.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>İletişim</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Her türlü soru ve talepleriniz için bize ulaşın: <a href="mailto:info@gdmenu.com">info@gdmenu.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
