
"use client";

import Img from "@/public/assets/HB.svg";
import Image from "next/image";
import { Grandiflora_One, Poppins } from "next/font/google";
import CustomButton from '../components/customButton/page';

const grandifloraOne = Grandiflora_One({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200"],
  variable: "--font-poppins",
});

const ImageCarousel = () => {

  return (
    <div
      className="relative w-full group"
    >
      <div
        className="w-full transition-transform duration-500 ease-out bg-black font-monomakh"
      >
        <Image
          src={Img}
          alt="img"
          layout="responsive"
          height={100}
          width={100}
          className="mt-[50px] sm:mt-[100px]"
          loading="lazy"
        />

        <div  data-aos="fade-right"  className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div  className="absolute left-0 w-full md:w-[50%] top-1/2 transform -translate-y-1/2 text-white p-8 space-y-4">

            <h2 className="text-sm md:text-5xl font-monomakh mb-0 md:mb-4 text-[#CFA500] leading-tight md:leading-[3rem] ">
            TIMELESS ELEGANCE 
              <span className="block md:my-4">CRAFTED FOR YOU</span>
             
            </h2>

            <p className="hidden md:block w-[70%] break-words text-xs md:text-sm text-slate-300 font-light tracking-wider ">
            Discover exquisite craftsmanship and timeless designs that celebrate life’s precious moments. From traditional heirlooms to contemporary masterpieces, our collections are crafted to make every occasion unforgettable.
            </p>

            <CustomButton text="Explore Collections"/> 

          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
