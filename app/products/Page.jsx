
"use client";

import React from 'react';
import Image from 'next/image';
import img1 from '@/public/assets/jimg1.png';
import img2 from '@/public/assets/jimg2.png';
import img3 from '@/public/assets/jimg3.png';
import img4 from '@/public/assets/jimg4.png';
import img5 from '@/public/assets/jimg5.png';
import img6 from '@/public/assets/jimg6.png';
import img7 from '@/public/assets/jimg7.png';
import img8 from '@/public/assets/jimg8.png';
import Card from '../components/cards/Page';
import Left from '@/public/assets/left.png';
import Right from '@/public/assets/right.png';
import CustomButton from '../components/customButton/page';

const BestsellersPage = () => {
  const data = [
    { img: img1, title: 'NECKLACE MURATO' },
    { img: img2, title: 'NECKLACE MURATO' },
    { img: img3, title: 'NECKLACE MURATO' },
    { img: img4, title: 'NECKLACE MURATO' },
    { img: img5, title: 'NECKLACE MURATO' },
    { img: img6, title: 'NECKLACE MURATO' },
    { img: img7, title: 'NECKLACE MURATO' },
    { img: img8, title: 'NECKLACE MURATO' }
  ];

  return (
    <section className="text-gray-600 body-font bg-defaultColor">
      <div className="container px-4 md:px-8 py-12 md:py-24 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-sm font-medium text-goldMid mb-4">
            FREE SHIPPING FR
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 md:w-24">
              <Image
                src={Left}
                alt="left decoration"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-textColor">
              The BestSellers
            </h1>
            <div className="w-16 md:w-24">
              <Image
                src={Right}
                alt="right decoration"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {data.slice(0, 8).map((item, i) => (
            <Card key={i} img={item.img} title={item.title} />
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12 font-monomakh">
          <CustomButton text="See All jewellery" />
          {/* <button className="bg-goldMid text-defaultColor font-semibold font-serif px-8 py-2 hover:bg-goldDark transition-colors duration-200">
            
          </button> */}
        </div>
      </div>
    </section>
  );
};
 
export default BestsellersPage;