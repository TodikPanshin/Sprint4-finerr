import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export function PreviewCarousel({ gig }) {
    // const [isHovered, setIsHovered] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    // }

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // }

    const renderIndicator = (clickHandler, isSelected, index, label) => {
        const indicatorClasses = isSelected ? "carousel-indicator selected-indicator" : "carousel-indicator";
        const indicatorStyle = isSelected ? { transform: "scale(1.5)" } : {};

        return (
            <div
                key={index}
                className={indicatorClasses}
                onClick={(ev) => {
                    ev.preventDefault()
                    clickHandler()
                }}
                onKeyDown={clickHandler}
                role="button"
                tabIndex={0}
                aria-label={label}
                style={indicatorStyle}
            />
        )
    }

    const renderArrowPrev = (clickHandler, hasPrev, label) => (
        <div
            className={`custom-arrow custom-arrow-prev`}
            onClick={(ev) => {
                ev.preventDefault()
                clickHandler()
            }}        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                size="2xs"
                style={{
                    "--fa-primary-color": "#62646a",
                    "--fa-secondary-color": "#ffffff",
                }}
            />
        </div>
    )

    const renderArrowNext = (clickHandler, hasNext, label) => (
        <div
            className={`custom-arrow custom-arrow-next`}
            onClick={(ev) => {
                ev.preventDefault();
                clickHandler();
            }}
        >
            <FontAwesomeIcon
                icon={faChevronRight}
                size="2xs"
                style={{
                    "--fa-primary-color": "#62646a",
                    "--fa-secondary-color": "#ffffff",
                }}
            />
        </div>
    );

    return (
        <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            renderIndicator={renderIndicator}
            className="preview-carousel"

        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        >
            {gig.imgUrls.map((imgUrl) => (
                <div key={imgUrl} className="image-wrapper">
                    <img alt="" src={imgUrl} />
                </div>
            ))}
        </Carousel>
    )
}
