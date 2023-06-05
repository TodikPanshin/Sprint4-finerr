// import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// library.add(fas);

// export function PreviewCarousel({ gig }) {
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//     };

//     const handleMouseLeave = () => {
//         setHoveredIndex(null);
//     };

//     const renderArrowPrev = (clickHandler, hasPrev, label) => (
//         <div
//             className={`custom-arrow custom-arrow-prev ${hoveredIndex === null ? "" : "active"
//                 }`}
//             onClick={clickHandler}
//         >
//             <FontAwesomeIcon
//                 icon={faChevronLeft}
//                 style={{
//                     "--fa-primary-color": "#62646a",
//                     "--fa-secondary-color": "#ffffff",
//                 }}
//             />
//         </div>
//     );

//     const renderArrowNext = (clickHandler, hasNext, label) => (
//         <div
//             className={`custom-arrow custom-arrow-next ${hoveredIndex === null ? "" : "active"
//                 }`}
//             onClick={clickHandler}
//         >
//             <FontAwesomeIcon
//                 icon={faChevronRight}
//                 style={{
//                     "--fa-primary-color": "#62646a",
//                     "--fa-secondary-color": "#ffffff",
//                 }}
//             />
//         </div>
//     );

//     return (
//         <Carousel
//             showThumbs={false}
//             showStatus={false}
//             className="preview-carousel"
//             renderArrowPrev={renderArrowPrev}
//             renderArrowNext={renderArrowNext}
//         >
//             {gig.imgUrls.map((imgUrl, index) => (
//                 <div
//                     key={imgUrl}
//                     className="image-wrapper"
//                     onMouseEnter={() => handleMouseEnter(index)}
//                     onMouseLeave={handleMouseLeave}
//                 >
//                     <img alt="" src={imgUrl} />
//                 </div>
//             ))}
//         </Carousel>
//     );
// }

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

    const renderArrowPrev = (clickHandler, hasPrev, label) => (
        <div
            className={`custom-arrow custom-arrow-prev`}
            onClick={(ev) => {
                ev.preventDefault()
                clickHandler()
            }}        >
            <FontAwesomeIcon
                icon={faChevronLeft}
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
                ev.preventDefault()
                // ev.stopPropagation()
                clickHandler()
            }}        >
            <FontAwesomeIcon
                icon={faChevronRight}
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
            className="preview-carousel"
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
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
