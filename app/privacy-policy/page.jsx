import React from 'react'

export const metadata = {
    title: 'Gdmenu | Gizlilik Politikası',
    description: 'Gdmenu hakkında aklınızda bir şüphe kalmasın',
}

export default function PrivacyPolicy() {

    return (
        <div className="w-full mt-52 max-sm:mt-36">
            <div className="w-[1140px] m-auto max-xl:w-[960px] max-lg:w-[720px] max-md:w-[540px] max-sm:w-full max-sm:pl-[15px] max-sm:pr-[15px]">
                <div className="ml-[15px] flex flex-col justify-center  mr-[15px] max-xl:ml-0 max-xl:mr-0 max-lg:m-auto">
                    <h2 className="mb-[24px] m-auto max-w-[620px] text-center leading-[64px] font-bold text-[54px] max-md:text-[36px] max-md:leading-[46px] text-[#3b368c]">Gizlilik Politikası</h2>
                    {/* <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] max-w-[620px] mt-[-12px] text-center'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit repudiandae voluptates quae exercitationem, libero minima accusamus necessitatibus odit dolorem in.
                    </p> */}
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Giriş</h3>
                        <p className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Bu Gizlilik Politikası, Grande Digital tarafından sunulan QR Menü hizmetimizin ("Hizmet") kullanıcılarından toplanan kişisel verilerin nasıl işlendiğini açıklar. Hizmeti kullanarak, bu politikada belirtilen uygulamaları kabul etmiş sayılırsınız.
                        </p>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Toplanan Bilgiler</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Hizmetimizi kullanırken aşağıdaki türde bilgileri toplayabiliriz:
                            <ul className='mt-[10px] list-disc ml-[10px]'>
                                <li>İletişim Bilgileri: Ad, e-posta adresi, telefon numarası.</li>
                                <li>İşletme Bilgileri: Restoran/kafe adı, konum, menü bilgileri.</li>
                                <li>Kullanım Verileri: IP adresi, tarayıcı türü, ziyaret süresi gibi analitik bilgiler.</li>
                                <li>Çerezler: Site deneyimini geliştirmek için kullanılır.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Bilgilerin Kullanım Amaçları</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Topladığımız bilgileri şu amaçlarla kullanabiliriz:
                            <ul className='mt-[10px] list-disc ml-[10px]'>
                                <li>Hizmeti sağlamak ve sürdürmek,</li>
                                <li>Müşteri desteği sunmak,</li>
                                <li>Hizmette iyileştirme yapmak,</li>
                                <li>Kullanıcıya özel içerik sağlamak,</li>
                                <li>Yasal yükümlülükleri yerine getirmek.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Verilerin Paylaşımı</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Kişisel verilerinizi üçüncü taraflarla izin alınmadan satmayız veya paylaşmayız. Ancak aşağıdaki durumlarda paylaşım olabilir:
                            <ul className='mt-[10px] list-disc ml-[10px]'>
                                <li>Yasal zorunluluklar,</li>
                                <li>Hizmet sağlayıcılar (sunucu hizmetleri, ödeme altyapısı vb.),</li>
                                <li>İzniniz doğrultusunda.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Veri Saklama</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Kişisel verileriniz, hizmetin sağlanması için gerekli olduğu sürece saklanır. Yasal zorunluluklar nedeniyle daha uzun süreli saklama gerekebilir.
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Kullanıcı Hakları</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Kullanıcı olarak aşağıdaki haklara sahipsiniz:
                            <ul className='mt-[10px] list-disc ml-[10px]'>
                                <li>Verilerinize erişme,</li>
                                <li>Verilerinizi düzeltme veya silme,</li>
                                <li>İşlemeyi kısıtlama veya itiraz etme,</li>
                                <li>Veri taşınabilirliği talep etme.</li>
                            </ul>
                            <div className='mt-[10px]'>
                                Bu hakları kullanmak için bizimle iletişime geçebilirsiniz: <a href="mailto:info@gdmenu.com">info@gdmenu.com</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Güvenlik</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Verilerinizi korumak için teknik ve idari önlemler almaktayız. Ancak internet üzerinden yapılan hiçbir veri iletimi %100 güvenli değildir.
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Üçüncü Taraf Bağlantıları</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik politikalarından biz sorumlu değiliz.
                        </div>
                    </div>
                    <div className='mt-[60px]'>
                        <h3 className='text-[36px] leading-[46px] mb-[31px] font-semibold text-[#3b368c]'>Politika Değişiklikleri</h3>
                        <div className='mb-[-7px] text-[18px] leading-[28px] text-[#504c89] mt-[-12px] '>
                            Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlanır ve yürürlük tarihi belirtilir.
                        </div>
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
