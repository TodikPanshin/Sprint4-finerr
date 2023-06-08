import { useSwiper } from 'swiper/react';

export function SwiperButtons() {
    const swiper = useSwiper()

    return (
        <>
            <div className='btn-swiper-back' onClick={() => swiper.slidePrev()}></div>
            <div className='btn-swiper-next' onClick={() => swiper.slideNext()}></div>
        </>
    )
}