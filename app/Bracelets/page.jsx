
"use client";

import img1 from '@/public/assets/ankle/img1.png';
import img2 from '@/public/assets/ankle/img2.png';
import carImg from '@/public/assets/ankle/Mimg.png';
import CarouselImg from '../components/carouselImg/page';
// import img18 from '@/public/assets/earrings/img18.png';
import Card from '../components/cards/Page';




const Bracelets = () => {

    const images = [
        { img: img1, title: 'Bracelets' },
        { img: img2, title: 'Bracelets' },
        // { img: img3, title: 'Ankle' },
        // { img: img4, title: 'Ankle' },
        // { img: img5, title: 'Ankle' },
        // { img: img6, title: 'Ankle' },
        // { img: img7, title: 'Ankle' },
        // { img: img8, title: 'Ankle' },
        // { img: img9, title: 'Ankle' },
        // { img: img10, title: 'Ankle' },
        // { img: img11, title: 'Ankle' },
        // { img: img12, title: 'Ankle' },
        // { img: img13, title: 'Ankle' },
        // { img: img14, title: 'Ankle' },
        // { img: img15, title: 'Ankle' },
        // { img: img16, title: 'Ankle' },
        // { img: img17, title: 'Ankle' },
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

export default Bracelets
