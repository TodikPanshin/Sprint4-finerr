import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { gigService } from "../services/gig.service.local.js"
import { showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'
import { ReviewsPreview } from '../cmps/review-preview.jsx'
import { Packages } from '../cmps/packages.jsx'
import { GigCarousel } from '../cmps/gig-carousel.jsx'
import { GigSwiper } from '../cmps/gig-swiper.jsx'


export function GigDetails() {
    const [gig, setGig] = useState({
        _id: "i101",
        title: "I will design your logo",
        price: 12,
        owner: {
            _id: "u101",
            fullname: "Dudu Da",
            imgUrl: '',
            level: "basic/premium",
            rate: 4,
            about: `Hi, My Name is Dudu Da and in the past 10 years
             Ive been working as a UI/UX designer,
              product manager and creative director
               in the E-commerce field. I offer a wide
                variety of design and development services
                 for business owners to help you grow your
                  business. I can create any kind of unique 
                  design overnight to help businesses attract
                   more clients.I am a Shopify official partner
                    and Expert and have been part of the Shopify
                     Marketplace for nearly 5 years. I am also a 
                     skilled WordPress Developer. I have been designing
                      and developing WordPress & Shopify websites for
                       more than 7 years.`},
        daysToMake: 3,
        description: `A logo is what identifies your brand and business.
         If you are looking for a modern minimalist luxury and elegant logo,
          then you are on the right page and a step away to get your brand’s identity logo.

        With over 2000 satisfied clients, VIP customer care and 
        a creative mind at your service. Where the customer's
         satisfaction is on top of everything, you will be provided
          with a very friendly, yet professional treatment. I always
           prioritise client’s satisfaction because it is the most
            important factor when it comes to work. Having that said,
             I always take client’s requirements and imagination into
              consideration and give my 100% to every projects and work
               until the client is completely satisfied with the work.`,

        imgUrl: "https://picsum.photos/400/300",
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible"
        ],
    })

    // const [gig, setGig] = useState({})
    const [reviews, setReviews] = useState([
        {
            id: "madeId",
            gig: "{optional-mini-gig}",
            txt: "Very kind and works fast",
            rate: 4,
            by: {
                _id: "u102",
                fullname: "user2",
                imgUrl: ''
            }
        }
    ])

    const { gigId } = useParams()
    const navigate = useNavigate()


    // useEffect(() => {
    //     loadGig()
    // }, [gigId])

    function loadGig() {
        gigService.getById(gigId)
            .then(setGig)
            .catch((err) => {
                console.log('Had issues in gig details', err)
                showErrorMsg('Cannot load gig')
                navigate('/gig')
            })
    }

    if (!gig || gig.length) return <div>Loading...</div>
    return (
        <>
            <GigToolBar />
            <section className='gig-container flex row' >
                <section className="gig-details" id='gig-details'>
                    <h1 className='gig-title'>{gig.title}</h1>
                    <div className='seller-details flex align-center'>
                        <div className='seller-img'>
                            <img src={`https://robohash.org/test?set=set4&size=50x50&bgset=bg1`} alt="cat" />
                        </div>
                        <div className='seller-txt flex'>
                            <h5 className='seller-name'>{gig.owner.fullname}</h5>
                            <h5 className='seller-rate'>Level {gig.owner.rate} Seller</h5>
                            <h5>|</h5>
                            <div className='reviews-rate'>
                                <h5>Reviews</h5>
                            </div>
                        </div>
                    </div>
                    <div className='notable-clients-bar flex'>
                        <h5 className='notable-clients-title'>Among my clients</h5>
                        <h5>muki</h5>
                        <h5>|</h5>
                        <h5>puki</h5>
                    </div>
                    <div className='gig-imgs-contener'>
                        {/* <GigCarousel gigImgs={gig.imgUrl}/> */}
                        <GigSwiper gigImgs={gig.imgUrl} />
                    </div>
                    <section className="review-preview">
                        <h3 className='review-preview-title'>What people loved about this seller</h3>
                        <ul className="review-list clean-list">
                            {reviews.map((review) => (
                                <ReviewsPreview key={review.id} review={review} />
                            ))}
                        </ul>
                    </section>
                    <section className='about-gig' id='about-gig'>
                        <h2 className='about-gig-title'>About This Gig</h2>
                        <p>{gig.description} </p>
                    </section>
                    <h2 className='seller-details-card-title'>About The Seller</h2>
                    <section className='seller-card' id='seller-card'>
                        <div className='seller-details-card flex '>
                            <div className='seller-img'>
                                <img src={`https://robohash.org/test?set=set4&size=50x50&bgset=bg1`} alt="cat" />
                            </div>
                            <div className='seller-details-card-txt flex column'>
                                <h2>{gig.owner.fullname}</h2>
                                <h5>Level {gig.owner.rate} Seller</h5>
                                <button className='btn-gig-contact'>Contact me</button>
                            </div>
                        </div>
                        <p>{gig.owner.about}</p>
                    </section>
                </section>
                <Packages gig={gig} />
            </section>
        // </>
    )
}

