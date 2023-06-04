import { useSwiper } from 'swiper/react';

export function SwiperButtons() {
    const swiper = useSwiper()

    return (
        <>
            <div>
                <button className='swiper-nav-btn btn-back' onClick={() => swiper.slidePrev()}>&lt;</button>
            </div>
            <div>
                <button className='swiper-nav-btn btn-next' onClick={() => swiper.slideNext()}>&gt;</button> 
            </div>
        </>
    )
}