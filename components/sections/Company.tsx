import Image from "next/image";
import logo from "public/logo.webp";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/Fa";

export default function Footer() {
  return ( 
      <div>
        <div className="max-w-[1240px] mx-auto w-full mt-8 mb-32 px-16">
          <div className="m-8 lg:m-1">
            <div className="grid lg:grid-cols-5 gap-1">
              <div className="lg:col-span-2 item-center">
                <div>
                  <Image src={logo} alt="/" width={150} height={150} />
                </div>
                <div className="text-[#666674] my-10">
                  <p>
                    Small, artisan label that offers a<br /> thoughtfully curated
                    collection of high<br /> quality everyday essentials made.
                  </p>
                </div>

                <div className="flex gap-5">
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <FaFacebook />
                  </div>
                  <div className="rounded-xl bg-[#F1F1F1] p-4 cursor-pointer">
                    <FaLinkedin />
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xl font-bold mb-4">Company</p>
                <ul>
                  <li className="text-md my-2"> About</li>
                  <li className="text-md my-2">Terms of Use</li>
                  <li className="text-md my-2">Privacy Policy</li>
                  <li className="text-md my-2">How it Works</li>
                  <li className="text-md my-2">Contact Us</li>
                </ul>
              </div>

              <div>
                <p className="text-xl font-bold mb-4">Support</p>
                <ul>
                  <li className="text-md my-2">Support Career</li>
                  <li className="text-md my-2">24/7 Services</li>
                  <li className="text-md my-2">Quick Chat</li>
                </ul>
              </div>

              <div>
                <p className="text-xl font-bold mb-4">Contact</p>
                <ul>
                  <li className="text-md my-2">WhatsApp</li>
                  <li className="text-md my-2">Support 24h</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
