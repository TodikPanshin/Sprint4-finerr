import { Link } from "react-router-dom"
import { PreviewCarousel } from "./preview-carousel"
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';


export function GigPreview({ gig }) {
// console.log(gig)
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

            {/* <p>From <span>${gig.price.toLocaleString()}</span></p> */}
            
            <div className="rating flex">
                {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
                {gig.rating.average} <span>({gig.rating.num})</span> </div>
            
            <Link to={`/gig/${gig._id}`} target="_blank"><p className="price txt-bold">From <span>${gig.price}</span></p></Link>
        </article >)
}


                            // <h4>{car.vendor}</h4>
                            // <h1>⛐</h1>
                            // <p>Price: <span>${car.price.toLocaleString()}</span></p>
                            // <p>Owner: <span>{car.owner && car.owner.fullname}</span></p>
                            // <div>
                            //     <button onClick={() => { onRemoveCar(car._id) }}>x</button>
                            //     <button onClick={() => { onUpdateCar(car) }}>Edit</button>
                            // </div>

                            // <button onClick={() => { onAddCarMsg(car) }}>Add car msg</button>
                            // <button className="buy" onClick={() => { onAddToCart(car) }}>Add to cart</button>
