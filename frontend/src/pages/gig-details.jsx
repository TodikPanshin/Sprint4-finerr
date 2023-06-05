import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { gigService } from "../services/gig.service.local.js"
import { showSuccessMsg,showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'
import { ReviewsPreview } from '../cmps/review-preview.jsx'
import { Packages } from '../cmps/packages.jsx'
import { GigCarousel } from '../cmps/gig-carousel.jsx'
import { GigSwiper } from '../cmps/gig-swiper.jsx'
import { OrderDrawer } from '../cmps/order-drawer.jsx'
import { removeGig } from '../store/gig.actions.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



export function GigDetails() {

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
    const [gig, setGig] = useState()
    const { id } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        loadGig()
    }, [id])

    async function loadGig() {
        try {
            const gig = await gigService.getById(id)
            setGig(gig)
            console.log(gig)
        } catch (err) {
            console.log('Had issues in gig details', err)
            showErrorMsg('Cannot load gig');
            navigate('/gig');
        }
    }

    async function onRemoveGig(id) {
        try {
            await removeGig(id);
            showSuccessMsg('Gig removed');
        } catch (err) {
            showErrorMsg('Cannot remove Gig');
        }
    }


    if (!gig || gig.length) return <div>Loading...</div>
    return (
        <>
            <GigToolBar />
            <OrderDrawer />
            <div className='trash'>
            <button onClick={() => { onRemoveGig(id) }}><FontAwesomeIcon icon={faTrash} size="xl"/></button>
            </div>
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
                        <GigSwiper gigImgs={gig.imgUrls} />
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

