import React from "react";
import { Carousel } from "react-responsive-carousel";

export function PreviewCarousel({ gig }) {
    // console.log('gig test:  ',gig)
    return (
        <Carousel showThumbs={false} showStatus={false} className="preview-carousel">
            {gig.imgUrls.map(imgUrl =>
                <div key={imgUrl}>
                    <img alt="" src={imgUrl} />
                </div>)}
        </Carousel>
    )
}