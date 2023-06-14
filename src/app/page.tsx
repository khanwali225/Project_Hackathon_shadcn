import Image from 'next/image'
import Hero from '../../components/sections/Hero'
import Promotion from 'components/sections/Promotion'
import Products from 'components/sections/Products'
import Unique from 'components/sections/Unique'

export default function Home() {
  return (
   <h1>
    <Hero />
    <Promotion />
    <Products />
    <Unique />
   </h1>
  )
}
