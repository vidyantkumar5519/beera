
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/rings/Mimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/rings/img1.png';
import img2 from '@/public/assets/rings/img2.png';
import img3 from '@/public/assets/rings/img3.png';
import img4 from '@/public/assets/rings/img4.png';
import img5 from '@/public/assets/rings/img5.png';
import img6 from '@/public/assets/rings/img6.png';
import img7 from '@/public/assets/rings/img7.png';
import img8 from '@/public/assets/rings/img8.png';
import img9 from '@/public/assets/rings/img9.png';
import img10 from '@/public/assets/rings/img10.png';
import img11 from '@/public/assets/rings/img11.png';
import img12 from '@/public/assets/rings/img12.png';
import img13 from '@/public/assets/rings/img13.png';
import img14 from '@/public/assets/rings/img14.png';
import Card from '../components/cards/Page';




const Bangles = () => {

    const images = [
        { img: img1, title: 'Ring' },
        { img: img2, title: 'Ring' },
        { img: img3, title: 'Ring' },
        { img: img4, title: 'Ring' },
        { img: img5, title: 'Ring' },
        { img: img6, title: 'Ring' },
        { img: img7, title: 'Ring' },
        { img: img8, title: 'Ring' },
        { img: img9, title: 'Ring' },
        { img: img10, title: 'Ring' },
        { img: img11, title: 'Ring' },
        { img: img12, title: 'Ring' },
        { img: img13, title: 'Ring' },
        { img: img14, title: 'Ring' }
    ]

    return (

        <div className='w-full h-full mx-auto bg-defaultColor'>

            <div className='w-full'>
                <CarouselImg Img={carImg} />
            </div>

            <section className="w-full min-h-screen bg-defaultColor pb-16">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                        {/* Sidebar */}
                        {/* <div className="w-full lg:w-1/4">
                            <div className="sticky top-4">
                                <Accordion />
                            </div>
                        </div> */}

                        {/* Main Content */}
                        <div className="w-full lg:w-3/4 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {images.map((item, index) => (
                                    <Card key={index} img={item.img} title={item.title} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Bangles