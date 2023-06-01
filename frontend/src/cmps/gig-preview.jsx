import { Link } from "react-router-dom";

export function GigPreview({ gig }) {
    return <article className="gig-preview flex column">
        <Link to={`/gig/${gig._id}`} target="_blank" >
            <div className="img-preview">
                <img src={gig.imgUrl} alt="gig img" className="gig-img" />
            </div>
        </Link>
        <div className="owner-details flex">
            <img src={gig.owner.imgUrl} alt="img of creator" className="owner-img" />
            <Link to={`/user/${gig.owner._id}`} className="owner-name">  {gig.owner.fullname}</Link>
        </div>
        <Link to={`/gig/${gig._id}`} target="_blank"><h3 className="title">{gig.title}</h3></Link>

        {/* <p>From <span>${gig.price.toLocaleString()}</span></p> */}
        <div className="rating flex">
            {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
            {gig.rating.average} <span>({gig.rating.num})</span> </div>
        <Link to={`/gig/${gig._id}`} target="_blank"><p className="price txt-bold">From <span>${gig.price}</span></p></Link>
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
