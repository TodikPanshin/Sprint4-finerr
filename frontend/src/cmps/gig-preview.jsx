import { Link } from "react-router-dom"
import { PreviewCarousel } from "./preview-carousel"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)


export function GigPreview({ gig }) {

    return (
        <article className="gig-preview flex column">
            <Link to={`/gig/${gig._id}`} >
                <PreviewCarousel gig={gig} className="gig-img" />
            </Link>

            <div className="owner-details flex">
                <img src={gig.owner.imgUrl} alt="img of creator" className="owner-img" />
                <Link to={`/user/${gig.owner._id}`} className="owner-name">  {gig.owner.fullname}</Link>
            </div>

            <Link to={`/gig/${gig._id}`} className="title">{gig.title}</Link>

            <div className="rating flex">
                <span className="star">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                </span>
                <span className="average">
                    {gig.rating.average}
                </span>
                <span className="num">({gig.rating.num})</span>
            </div>

            <Link to={`/gig/${gig._id}`} ><p className="price txt-bold">From <span>${gig.price}</span></p></Link>
        </article >)
}
