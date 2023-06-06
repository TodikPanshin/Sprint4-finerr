import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { gigService } from "../services/gig.service.local.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'
import { ReviewsPreview } from '../cmps/review-preview.jsx'
import { Packages } from '../cmps/packages.jsx'
import { GigCarousel } from '../cmps/gig-carousel.jsx'
import { GigSwiper } from '../cmps/gig-swiper.jsx'
import { OrderDrawer } from '../cmps/order-drawer.jsx'
import { removeGig } from '../store/gig.actions.js'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { StarRating } from '../cmps/star-rating.jsx'





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
            {/* <div className='trash'>
            <button onClick={() => { onRemoveGig(id) }}><FontAwesomeIcon icon={faTrash} size="xl"/></button>
            </div> */}
            <section className='gig-container flex row' >
                <section className="gig-details" id='gig-details'>
                    <div className='gig-overview'>
                        <nav className='gig-overview-filter-nav'>
                            <ul className='flex clean-list'>
                                <li className='gig-overview-main-tag'><a href="#">main tag</a></li>
                                <span>&gt;</span>
                                <li className='gig-overview-secondary tag'><a href="#">secondary tag</a></li>
                            </ul>
                        </nav>
                        <h1 className='gig-title'>{gig.title}</h1>
                        <div className='seller-details flex align-center'>
                            <div className='seller-img'>
                                <img src={`https://robohash.org/test?set=set4&size=50x50&bgset=bg1`} alt="cat" />
                            </div>
                            <div className='seller-txt flex'>
                            <div className='seller-username-line flex'>
                                <h5 className='seller-name'>{gig.owner.fullname}</h5>
                                <h5 className='seller-at'>@needtoadd</h5>
                                </div>
                                <h5 className='seller-rate'>Level {gig.owner.rate} Seller</h5>
                                <h5>|</h5>
                                <div className='reviews-rate'>
                                    <StarRating rate={gig.owner.rate} />
                                    <span className='ratings-count'>({gig.rating.num})</span>
                                </div>
                            </div>
                        </div>
                        <div className='notable-clients-bar flex'>
                            <h5 className='notable-clients-title'>Among my clients</h5>
                            <h5>muki</h5>
                            <h5>|</h5>
                            <h5>puki</h5>
                        </div>
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
                                <div className='seller-username-line flex'>
                                <h5 className='seller-name'>{gig.owner.fullname}</h5>
                                <h5 className='seller-at'>@needtoadd</h5>
                                </div>
                                <h5 className='seller-one-liner'>{gig.tags.slice(0, 3).join(', ')}</h5>
                                <StarRating rate={gig.owner.rate} />
                                <button className='seller-card-btn btn-gig-contact'>Contact me</button>
                            </div>
                        </div>
                        <div className='seller-stats'>
                            <ul class="seller-info clean-list">
                                <li>From
                                    <span>Canada</span>
                                </li>
                                <li>Member since
                                    <span>Mar 2021</span>
                                </li>
                                <li>Avg. response time
                                    <span>2 hours</span>
                                </li><li>Last delivery
                                    <span>1 day</span>
                                </li>
                                <li><p>Languages</p>
                                    <span> English</span>
                                </li>
                            </ul>
                            <p className='seller-about'>{gig.owner.about}</p>
                        </div>
                    </section>
                </section>
                <Packages gig={gig} />
            </section>
        </>
    )
}

