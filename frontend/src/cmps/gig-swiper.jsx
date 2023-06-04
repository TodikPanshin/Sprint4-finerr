import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';
import { SwiperButtons } from './swiper-nav-buttons';


export function GigSwiper({ gigImgs }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                className='main-swiper'
                modules={[Navigation, Thumbs, A11y]}
                spaceBetween={50}
                navigation
                thumbs={{ swiper: thumbsSwiper }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                touchRatio={0.4}
            >
                <div className='swiper-wrapper'>
                    {gigImgs.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt="" />
                        </SwiperSlide>
                    ))}
                    {/* <SwiperSlide><img src={gigImgs} alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400/300?img=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400/300?img=2" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://robohash.org/test?set=set4&bgset=bg1&size=400x300" alt="" /></SwiperSlide> */}
                    <SwiperButtons />
                </div>
            </Swiper>

            <Swiper
                className='thumbs-swiper'
                modules={[Thumbs]}
                watchSlidesProgress={true}
                spaceBetween={10}
                slidesPerView={4}
                onSwiper={setThumbsSwiper}
            >
                {gigImgs.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

