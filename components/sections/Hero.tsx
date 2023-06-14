import { ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import heroImg from "/public/heroImg.webp"
import Image from "next/image"
import bazaar from "/public/bazaar.webp"
import inStyle from "/public/inStyle.webp"
import bustle from "/public/bustle.webp"
import Feature from "/public/Feature.webp"




const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6 mt-5">

    <div className=" flex-1 mt-10 px-12">
    <Badge className="py-2 px-5 rounded-lg bg-blue-200 text-blue-500 text-base">Sale 70%</Badge>
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-10 ">
    An Industrial Take on Street-wear
    </h1>
    <p className="leading-7 text-2xl [&:not(:first-child)]:mt-10">
    Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    <Button className="mt-10 py-8">
      <ShoppingCart className="mr-2 h-4 w-5 " /> Start Shopping
    </Button>
    <div className="flex mt-10 py-5 justify-start gap-9">
      <Image src={bazaar} alt="bazaar" />
      <Image src={inStyle} alt="inStyle" />
      <Image src={bustle} alt="bustle" />
      <Image src={Feature} alt="Feature" />
    </div>
    </div>

    <div className="flex-1 bg-red-100 rounded-full ">
      <Image src={heroImg} alt="heroPoster" />
    </div>
    

    </section>

    
  )
}

export default Hero