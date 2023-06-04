import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, A11y } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/thumbs';


export function GigSwiper({ gigImgs }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
            className='main-swiper'
            
                modules={[Navigation, Thumbs, A11y]}
                spaceBetween={50}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                touchRatio={0.4}
            >
                <div className='swiper-wrapper'>
                <SwiperSlide><img src={gigImgs} alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400?img=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400?img=2" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://robohash.org/test?set=set4&bgset=bg1" alt="" /></SwiperSlide>
                {/* <SwiperButtons/> */}
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
                <SwiperSlide><img src={gigImgs} alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400?img=1" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://picsum.photos/400?img=2" alt="" /></SwiperSlide>
                <SwiperSlide> <img src="https://robohash.org/test?set=set4&bgset=bg1" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
};

