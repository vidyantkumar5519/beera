
"use client";

import React from 'react';
import CarouselImg from '../components/carouselImg/page';
import carImg from '@/public/assets/all/Mimg.png';
import Accordion from '../components/accordion/page';
import img1 from '@/public/assets/all/img1.png';
import img2 from '@/public/assets/all/img2.png';
import img3 from '@/public/assets/all/img3.png';
import img4 from '@/public/assets/all/img4.png';
import img5 from '@/public/assets/all/img5.png';
import img6 from '@/public/assets/all/img6.png';
import img7 from '@/public/assets/all/img7.png';
import img8 from '@/public/assets/all/img8.png';
import img9 from '@/public/assets/all/img9.png';
import img10 from '@/public/assets/all/img10.png';
import img11 from '@/public/assets/all/img11.png';
import img12 from '@/public/assets/all/img12.png';
import img13 from '@/public/assets/all/img13.png';
import img14 from '@/public/assets/all/img14.png';
import img15 from '@/public/assets/all/img15.png';
import img16 from '@/public/assets/all/img16.png';
import img17 from '@/public/assets/all/img17.png';
// import img18 from '@/public/assets/earrings/img18.png';
import Card from '../components/cards/Page';




const All = () => {

    const images = [
        { img: img1, title: 'Ring' },
        { img: img2, title: 'Diamond Gold Ring' },
        { img: img3, title: 'Ring' },
        { img: img4, title: 'Necklace' },
        { img: img5, title: 'Ring' },
        { img: img6, title: 'Earring' },
        { img: img7, title: 'Necklace' },
        { img: img8, title: 'bangles' },
        { img: img9, title: 'Ring' },
        { img: img10, title: 'Earring' },
        { img: img11, title: 'Ring' },
        { img: img12, title: 'Bangles' },
        { img: img13, title: 'Ring' },
        { img: img14, title: 'Necklace' },
        { img: img15, title: 'Ring' },
        { img: img16, title: 'Necklace' },
        { img: img17, title: 'Bangles' },
        // { img: img18, title: 'Earring' },
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

export default All
