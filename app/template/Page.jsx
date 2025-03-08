"use client";

import React from "react";
import img1 from "@/public/assets/temimg.png";
import img2 from "@/public/assets/temimg2.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="bg-defaultColor body-font flex justify-center">
      <div className="container px-5 py-10 mx-auto flex flex-col lg:flex-row items-center font-monomakh">
        {/* Left Content - Text with Overlay */}
        <div className="w-full lg:w-2/5 md:w-1/2 md:pr-10 md:py-6 h-full flex justify-center">
          <div className="relative flex items-center justify-center bg-black w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={img2}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="opacity-30"
              />
            </div>

            {/* Overlay Content */}
            <div
              className="relative z-10 bg-black/70 p-6 md:p-10 rounded-lg max-w-full lg:max-w-lg text-center shadow-lg"
            >
              <h2 className="text-goldMid text-xl md:text-2xl font-bold mb-4 font-serif">
                OUR VALUES
              </h2>
              <p className="text-textColor leading-5 text-sm md:text-base font-serif">
                At Beera, we believe that you deserve the best, and that you
                should not choose between quality, affordable prices, and real
                values.
              </p>
              <p className="text-white text-sm md:text-base mt-4  font-serif">
                Quality has never been so affordable thanks to our collection of
                more than 200 minimalist jewels, ready to accompany you
                everywhere!
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-3/5 md:w-1/2 mt-6 lg:mt-0">
          <Image
            src={img1}
            alt="img"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
