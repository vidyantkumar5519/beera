
"use client";

import img1 from '@/public/assets/bangales/img1.png';
import img10 from '@/public/assets/bangales/img10.png';
import img11 from '@/public/assets/bangales/img11.png';
import img12 from '@/public/assets/bangales/img12.png';
import img13 from '@/public/assets/bangales/img13.png';
import img14 from '@/public/assets/bangales/img14.png';
import img15 from '@/public/assets/bangales/img15.png';
import img16 from '@/public/assets/bangales/img16.png';
import img17 from '@/public/assets/bangales/img17.png';
import img18 from '@/public/assets/bangales/img18.png';
import img2 from '@/public/assets/bangales/img2.png';
import img3 from '@/public/assets/bangales/img3.png';
import img4 from '@/public/assets/bangales/img4.png';
import img5 from '@/public/assets/bangales/img5.png';
import img6 from '@/public/assets/bangales/img6.png';
import img7 from '@/public/assets/bangales/img7.png';
import img8 from '@/public/assets/bangales/img8.png';
import img9 from '@/public/assets/bangales/img9.png';
import carImg from '@/public/assets/bangales/Mimg.png';
import Accordion from '../components/accordion/page';
import Card from '../components/cards/Page';
import CarouselImg from '../components/carouselImg/page';




const Bangles = () => {

    const images = [
        { img: img1, title: 'Bangles' },
        { img: img2, title: 'Bangles' },
        { img: img3, title: 'Bangles' },
        { img: img4, title: 'Bangles' },
        { img: img5, title: 'Bangles' },
        { img: img6, title: 'Bangles' },
        { img: img7, title: 'Bangles' },
        { img: img8, title: 'Bangles' },
        { img: img9, title: 'Bangles' },
        { img: img10, title: 'Bangles' },
        { img: img11, title: 'Bangles' },
        { img: img12, title: 'Bangles' },
        { img: img13, title: 'Bangles' },
        { img: img14, title: 'Bangles' },
        { img: img15, title: 'Bangles' },
        { img: img16, title: 'Bangles' },
        { img: img17, title: 'Bangles' },
        { img: img18, title: 'Bangles' },
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