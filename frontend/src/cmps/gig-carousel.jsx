import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function GigCarousel({ gigImgs }) {
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1,
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 200
            },
            items: 1,
        }
    };

    const CustomDot = ({ onClick, index, active }) => {
        const carouselItems = [
            <img src={gigImgs} alt="" />,
            <img src="https://picsum.photos/400?img=1" alt="" />,
            <img src="https://picsum.photos/400?img=2" alt="" />,
            <img src="https://robohash.org/test?set=set4&bgset=bg1" alt="" />
        ]

        return (
            <button
                className={active ? "active" : ""}
                onClick={() => onClick()}
            >
                {carouselItems[index]}
            </button>
        )
    }

    return (
        <Carousel
            showDots
            slidesToSlide={1}
            containerClass="carousel-container"
            responsive={responsive}
            customDot={<CustomDot />}
            dotListClass="carousel-custom-dots"
            infinite
            // itemClass="carousel-item-padding-40-px"
        >
            <img src={gigImgs} alt="" />
            <img src="https://picsum.photos/400?img=1" alt="" />
            <img src="https://picsum.photos/400?img=2" alt="" />
            <img src="https://robohash.org/test?set=set4&bgset=bg1" alt="" />
        </Carousel>
    )
}
