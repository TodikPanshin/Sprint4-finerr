// import { useState, useEffect, useRef } from "react";

import { Link } from "react-router-dom"
import { PreviewCarousel } from "./preview-carousel"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-regular-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faHeart)

export function GigPreview({ gig }) {
    // const [checked, setChecked] = useState(false);
    // useEffect(
    //     setChecked(!checked),
    //     [checked]
    // )

    // function onSaveGig(gigId, ch) {
    //     console.log('gigId::', gigId, 'ch:', ch)
    // }

    return (
        <article className="gig-preview flex column">
            <Link to={`/gig/${gig._id}`} >
                <div className="img-container">
                    <PreviewCarousel gig={gig} className="gig-img" />
                </div>
            </Link>
            {/* <input type="checkbox" onChange={() => onSaveGig(gig._id, setChecked(!checked))}> */}
            {/* <FontAwesomeIcon icon="fa-regular fa-heart" style={{ color: "#511f29", }} /> */}
            {/* </input> */}


            <div className="owner-details flex">
                <div className="owner-img flex">
                    <img src={gig.owner.imgUrl} alt="img of owner" />
                </div>
                <Link to={`/user/${gig.owner._id}`} className="owner-name">  {gig.owner.fullname}</Link>
            </div>

            <Link to={`/gig/${gig._id}`} className="gig-title">{gig.title}</Link>

            <div className="gig-rating flex">
                <span className="star">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </span>
                <span className="average">
                    {gig.rating.average}
                </span>
                <span className="num">({gig.rating.num})</span>
            </div>

            <Link to={`/gig/${gig._id}`} ><p className="gig-price txt-bold">From <span>${gig.price}</span></p></Link>
        </article >
    )
}
