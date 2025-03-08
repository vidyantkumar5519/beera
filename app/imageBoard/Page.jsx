
"use client";

import React from 'react';
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import img1 from "@/public/assets/jimg1.png";
import img6 from "@/public/assets/jimg6.png";
import img7 from "@/public/assets/jimg7.png";
import Neck from "@/public/assets/mb.svg";
import Bangle from "@/public/assets/bangle.png";
import Image from 'next/image';



const ImageBoard = () => {




    return (
        <section  className="text-gray-600 body-font relative bg-defaultColor">
            <div  className="container mx-auto relative p-10">
                <div className="flex flex-wrap -m-4 rounded-2xl shadow-[0_0_20px_5px_rgba(184,134,11,0.25)] font-monomakh">
                    <div  className="flex flex-col lg:w-1/2 bg-[#F6F4F2]">
                        <div className="h-full flex flex-col space-y-4 py-[8%] px-[9%]">
                            <p className='text-goldMid'>FREE SHIPPING FR</p>
                            <h1 className='text-defaultColor font-serif text-3xl font-semibold leading-7'>The BestSellers</h1>
                            <p className='text-sm text-slate-400 font-thin leading-6 break-words'>
                                At Beera Jewellers, we believe that you deserve the best, and that you should
                                not choose between quality, affordable prices,and real values.At Azzana,
                                we believe that you deserve the best, and that you should not choose
                                between quality, affordable prices, and real values. At Azzana, we believe
                                that you deserve the best.
                            </p>
                            <div className='flex space-x-2'>
                                <span className='text-goldMid text-xs'>VIEW</span>
                                <HiOutlineArrowNarrowRight className='text-goldMid' />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full lg:w-1/2 bg-slate-300">
                        <Image src={img1} alt="img" layout='responsive' className='w-[200px]' width={100} height={100} />
                        <Image src={img7} alt="img" layout='responsive' width={100} height={100} />
                    </div>
                    <div className="w-full lg:w-1/2 bg-slate-400">
                        <Image src={Bangle} alt="img" layout='responsive' height={100} width={100} />
                    </div>
                    <div className="w-full flex lg:w-1/2 bg-slate-100">
                        <Image src={img6} alt="img" layout='responsive' className='w-[200px]' width={100} height={100} />
                        <Image src={Neck} alt="img" layout='responsive' width={100} height={100} />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ImageBoard