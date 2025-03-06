import Pricing from '@/components/Pricing'
import SectionFour from '@/components/SectionFour'
import React from 'react'

export const metadata = {
    title: 'Gdmenu | Fiyatlandırma',
    description: 'Gdmenu her bütçeye uygun fiyat seçenekleri',
}

export default function PricingPage() {
    return (
        <div>
            <Pricing />
            <SectionFour />
        </div>
    )
}
