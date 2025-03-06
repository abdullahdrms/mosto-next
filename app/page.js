import SectionOne from "@/components/SectionOne"
import SectionTwo from "@/components/SectionTwo"
import SectionThree from "@/components/SectionThree"
import SectionFour from "@/components/SectionFour"
import SectionFive from "@/components/SectionFive"
import Pricing from "@/components/Pricing"
import Reference from "@/components/Reference"
import Testimonials from "@/components/Testimonials"

export const metadata = {
  title: 'Gdmenu',
  description: 'Gdmenu hızlı ve kolay kullanım sunan qr menü',
}

export default function Home() {
  return (
    <div className="">
      <SectionOne />
      {/* <Reference /> */}
      {/* <Testimonials /> */}
      {/* <SectionTwo /> */}
      {/* <Pricing /> */}
      {/* <SectionThree /> */}
      <SectionFive />
      <SectionFour />
    </div>
  )
}
