import Image from "next/image"
import New from "/public/new.webp"
import { Button } from "components/ui/button"

const Unique = () => {
  return (
    <main className="max-w-[1240px] mx-auto w-full my-8">
      <div className="m-8 lg:m-1">
      <div>
        <h2 className="text-2xl font-bold lg:text-5xl tracking-wider lg:pl-96 mb-10 mt-40 lg:leading-snug ">
            Unique and Authentic Vintage Designer Jewellery</h2>
      </div>
      <div className="grid lg:grid-cols-4 gap-12">
      <div className="md:col-span-2">
      <div className="relative z-10">
      <div className="absolute -z-20">
        <p className="text-8xl lg:text-8xl tracking-tighter font-extrabold text-[#F2F3F7]">
          Different from Others</p>
      </div>

      <div>
      <div className="flex justify-around">
      <div>
      <div className="m-4 lg:m-8">
        <h3 className="text-xl font-bold my-4">Using Good Quality Materials</h3>
        <p className="text-md mb-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
      </div>

      <div className="m-4 lg:m-8">
        <h3 className="text-xl font-bold my-4">Modern Fashion Design</h3>
        <p className="text-md mb-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
      </div>
      </div>
      
      <div>
      <div className="m-4 lg:m-8">
       <h3 className="text-xl font-bold my-4">100% Handmade Products</h3>
       <p className="text-md mb-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
      </div>

      <div className="m-4 lg:m-8">
        <h3 className="text-xl font-bold my-4">discount for Bulk Orders</h3>
        <p className="text-md mb-6">Lorem ipsum dolor sit amt, consectetur adipiscing elit</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>

      <div>
        <Image src={New} alt="/" width={300} height={300}/>
      </div>
      <div>
        <div className="md:mt-8 text-md text-justify mb-10">
          <p className="tracking-widest">
          This piece is ethically crafted in our small family-owned 
          workshop in Peru with unmatched attention to detail and
          care.The Natural color is the actual natural color of the 
          fiber,undyed and 100% traceable.
          </p>
        </div>
        <div>
          <Button className="bg-black hover:bg-black text-white">See All Products</Button>
        </div>
      </div>
      </div>
      </div>
            
    </main>
  )
}

export default Unique