import { Link } from "react-router-dom";

export function GigPreview({ gig }) {
    return <article className="gig-preview flex row">
        <Link to={`/gig/${gig._id}`} target="_blank" className="img">
            {gig.imgUrl}
        </Link>
        <div className="owner-details flex">
            {gig.owner.imgUrl}
            {gig.owner && <Link to={`/user/${gig.owner._id}`} className="owner-name">{gig.owner.fullname}</Link>}
        </div>
        <Link to={`/gig/${gig._id}`} target="_blank" className="title">{gig.title}</Link>

        {/* <p>From <span>${gig.price.toLocaleString()}</span></p> */}
        <p className="rating">*{gig.rating.average} <span>({gig.rating.num})</span> </p>
        <Link to={`/gig/${gig._id}`} target="_blank" className="price"><p>From <span>${gig.price}</span></p></Link>
    </article>
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
