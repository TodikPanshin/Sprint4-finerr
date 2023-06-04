import { Link } from "react-router-dom"
import { PreviewCarousel } from "./preview-carousel"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function GigPreview({ gig }) {

    return (
        <article className="gig-preview clean-list flex column">
            <Link to={`/gig/${gig._id}`} target="_blank" >
                <PreviewCarousel gig={gig} className="gig-img" />
            </Link>

            <div className="owner-details flex">
                <img src={gig.owner.imgUrl} alt="img of creator" className="owner-img" />
                <Link to={`/user/${gig.owner._id}`} className="owner-name">  {gig.owner.fullname}</Link>
            </div>

            <Link to={`/gig/${gig._id}`} target="_blank" className="title">{gig.title}</Link>

            <div className="rating flex">
                {gig.rating.average} <span>({gig.rating.num})</span> </div>

            <Link to={`/gig/${gig._id}`} target="_blank"><p className="price txt-bold">From <span>${gig.price}</span></p></Link>
        </article >)
}
