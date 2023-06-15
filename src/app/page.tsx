import Image from 'next/image'
import Hero from '../../components/sections/Hero'
import Promotion from 'components/sections/Promotion'
import Products from 'components/sections/Products'
import Unique from 'components/sections/Unique'
import Newsletter from 'components/sections/Newsletter'
import Company from 'components/sections/Company'
import Footer from 'components/sections/Footer'

export default function Home() {
  return (
   <h1>
    <Hero />
    <Promotion />
    <Products />
    <Unique />
    <Newsletter />
    <Company />
    <Footer />
   </h1>
  )
}
