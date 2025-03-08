
"use client";

import carImg from '@/public/assets/nacklecs/Carimg.png';
import img1 from '@/public/assets/nacklecs/img1.png';
import img10 from '@/public/assets/nacklecs/img10.png';
import img11 from '@/public/assets/nacklecs/img11.png';
import img12 from '@/public/assets/nacklecs/img12.png';
import img13 from '@/public/assets/nacklecs/img13.png';
import img14 from '@/public/assets/nacklecs/img14.png';
import img15 from '@/public/assets/nacklecs/img15.png';
import img16 from '@/public/assets/nacklecs/img16.png';
import img17 from '@/public/assets/nacklecs/img17.png';
import img18 from '@/public/assets/nacklecs/img18.png';
import img2 from '@/public/assets/nacklecs/img2.png';
import img3 from '@/public/assets/nacklecs/img3.png';
import img4 from '@/public/assets/nacklecs/img4.png';
import img5 from '@/public/assets/nacklecs/img5.png';
import img6 from '@/public/assets/nacklecs/img6.png';
import img7 from '@/public/assets/nacklecs/img7.png';
import img8 from '@/public/assets/nacklecs/img8.png';
import img9 from '@/public/assets/nacklecs/img9.png';
import Accordion from '../components/accordion/page';
import Card from '../components/cards/Page';
import CarouselImg from '../components/carouselImg/page';




const Neckles = () => {

    const images = [
        { img: img1, title: 'Necklace' },
        { img: img2, title: 'Necklace' },
        { img: img3, title: 'Necklace' },
        { img: img4, title: 'Necklace' },
        { img: img5, title: 'Necklace' },
        { img: img6, title: 'Necklace' },
        { img: img7, title: 'Necklace' },
        { img: img8, title: 'Necklace' },
        { img: img9, title: 'Necklace' },
        { img: img10, title: 'Necklace' },
        { img: img11, title: 'Necklace' },
        { img: img12, title: 'Necklace' },
        { img: img13, title: 'Necklace' },
        { img: img14, title: 'Necklace' },
        { img: img15, title: 'Necklace' },
        { img: img16, title: 'Necklace' },
        { img: img17, title: 'Necklace' },
        { img: img18, title: 'Necklace' },
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

export default Neckles