import React from "react";
import { Carousel } from "react-responsive-carousel";

export function PreviewCarousel({ gig }) {
    return (
        <Carousel showThumbs={false} showStatus={false}>
            {gig.imgUrls.map(imgUrl =>
                <div key={imgUrl}>
                    <img alt="" src={imgUrl} />
                </div>)}
        </Carousel>
    )
}