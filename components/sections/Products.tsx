import Image from "next/image"
import picture1 from "/public/picture1.png"
import picture2 from "/public/picture2.png"
import picture3 from "/public/picture3.png"
import { Card, CardContent, CardDescription } from "components/ui/card"


export default function Products() {
  return (
    <section className="max-w-[1240px] w-full mx-auto my-20 p-8 lg:p-0">
      <p className="text-center tracking-wide text-[#2118FF]">
        PRODUCTS
      </p>
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold text-center my-4 tracking-wide first:mt-0">
        Check What We Have
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
        <div className="transition-transform duration-300 hover:scale-110">
          <Card>
            <CardContent className="text-center w-full p-4">
              <Image src={picture1} alt="/" width={500} height={500} />
            </CardContent>
            <CardDescription>
              <p className="text-xl px-4">Brushed Raglan Sweatshirt</p>
              <p className="text-xl px-4">$195</p>
            </CardDescription>
          </Card>
        </div>
        <div className="transition-transform duration-300 hover:scale-110">
          <Card>
            <CardContent className="text-center w-full p-4">
              <Image src={picture2} alt="/" width={500} height={500} />
            </CardContent>
            <CardDescription>
              <p className="text-xl px-4">Cameryn Sash Tie Dress</p>
              <p className="text-xl px-4">$545</p>
            </CardDescription>
          </Card>
        </div>
        <div className="transition-transform duration-300 hover:scale-110">
          <Card>
            <CardContent className="text-center w-full p-4">
              <Image src={picture3} alt="/" width={500} height={500} />
            </CardContent>
            <CardDescription>
              <p className="text-xl px-4">Flex Sweatshirt</p>
              <p className="text-xl px-4">$175</p>
            </CardDescription>
          </Card>
        </div>
      </div>
    </section>
  );
}