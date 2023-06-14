import { Button } from "components/ui/button"
import { Input } from "components/ui/input"


export default function NewsLetter() {
  return (
    <div className="mx-w-[1240px] w-full my-40 mx-auto">
      <div className="m-5 lg:m-1">
        <div className="relative z-10 text-center">
          <div>
            <p className="text-7xl md:text-9xl lg:text-[150px] tracking-wide font-extrabold text-[#F2F3F7]">
              Newsletter
            </p>
          </div>
          <div className=" absolute -top-1 md:top-1 inset-0">
            <h2 className="scroll-m-20 pb-2 text-3xl font-bold md:my-2 tracking-wide first:mt-0">
              Subscribe Our Newsletter
            </h2>
            <p className="text-mg mb-1 md:mb-2">
              Get the latest information and promo offers directly
            </p>
            <div className="md:flex justify-center border-black md:my-8">
              <div>
                <Input type="text" placeholder="Your Email Address" />
              </div>
              <div className="my-4 md:my-0 md:mx-4">
                <Button className="bg-black hover:bg-black text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}