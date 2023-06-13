import { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'

import { gigService } from "../services/gig.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'
import { ReviewsPreview } from '../cmps/review-preview.jsx'
import { Packages } from '../cmps/packages.jsx'
import { GigSwiper } from '../cmps/gig-swiper.jsx'
import { OrderDrawer } from '../cmps/order-drawer.jsx'
import { removeGig } from '../store/gig.actions.js'
import { SellerDetails } from '../cmps/seller-details.jsx'
import { SellerCard } from '../cmps/seller-card.jsx'
import { ShowReviews } from '../cmps/show-reviews.jsx'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


import { library } from '@fortawesome/fontawesome-svg-core'
import { useInView } from 'react-intersection-observer'
library.add(faPaperPlane)



export function GigDetails() {
    const [reviews, setReviews] = useState([
        {
            review: `I’m a disabled veteran with PTSD, Kloe🐶was a constant companion and source of comfort to me.
             Her unwavering love and loyalty were a beacon of hope during difficult times.
              Jen is a professional content creator and published author.
               Our heartfelt Social Media Posts are PAWsitive. 
               I was blown away by her unique writing skills. 
               She is a “dog mom” and understands the loss of a Fur Baby.
                Jen, thank you for your words of comfort.
                 I was so overwhelmed with emotion I was moved to tears.
                  Kloe a Yorkie Service Dog was truly a gift from God.
                   Kloe is no longer by my side, but FUREVER in my heart.
                    My heart is💔. A BEAUTIFUL shining light has been dimmed.
                    Kloe’s wings were ready but my Heart was not.🐶🐾🕊 `,
            rate: 5,
            reviewedAt: new Date(),
            _id: "u102",
            country: "canada",
            fullname: "strawberryred78",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/76d1e507770ac9db49456d83521d7c0e-1534481351065/5224dec4-7033-4ecb-a118-8ed28b8761de.jpg'

        },

        {
            review: `Absolutely amazing. She worked incredibly fast and delivered beyond expectations.
             I would definitely recommend.
             Her knowledge of dog breeds was unexpectedly broad and detailed. Wow.`,
            rate: 5,
            reviewedAt: new Date(),
            _id: "u103",
            country: "isreal",
            fullname: "marianaolver283",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1fcd42f23834628e5704905ad41b2ee6-1679381258169/ba120b86-0853-4513-a786-ed6f49deeba2.png'
        },

        {
            review: `Jen was great to work with! She is great at communicating and setting a clear goal from the start.
             I appreciate her keeping me updated on her progress. She's fast and very professional.
              I look forward to working with her again soon :)`,
            rate: 5,
            reviewedAt: new Date(),

            _id: "u104",
            country: "united states",
            fullname: "marianaolver283",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c4238e5b3805218a4dd84180b4cdcd12-1594146133949/3f460af2-6d81-4527-bdc8-332abe7d73c7.jpg'

        },



    ])

    const [showBuyerMsg, setShowBuyerMsg] = useState(false)
    const [gigLoaded, setGigLoaded] = useState(false);

    const [gig, setGig] = useState()
    const [openModal, setOpenModal] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    const { ref, inView } = useInView({
        rootMargin: '-20px 0px'
    })

    useEffect(() => {
        loadGig()
    }, [id])

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBuyerMsg(true)
        }, 3000)

        return () => clearTimeout(timer)
    }, [])


    async function loadGig() {
        try {
            const gig = await gigService.getById(id)
            setGig(gig)
            setGigLoaded(true)
            console.log(gig)
            if (gig.reviews) setReviews(gig.reviews)
        } catch (err) {
            console.log('Had issues in gig details', err)
            showErrorMsg('Cannot load gig');
            navigate('/gig');
        }
    }

    function onOpenModal() {
        setOpenModal(true)
        setShowBuyerMsg(false)
    }

    function onCloseModal() {
        setOpenModal(false)
        setShowBuyerMsg(true)
    }

    // SOCKETS

    function onSendMsg(ev) {
        ev.preventDefault()
        console.log(ev.target[0].value)
    }



    if (!gig || gig.length) return <div>Loading...</div>

    const isOnline = gig.owner.isOnline

    return (
        <>

            <GigToolBar />
            <OrderDrawer />
            <section className='gig-container flex full' >
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
                        <div className='gig-overview-seller-details'>
                            <SellerDetails owner={gig.owner} tags={gig.tags} reviewNum={gig.rating.num} />
                        </div >
                    </div>
                    <div className='gig-imgs-container'>
                        <GigSwiper gigImgs={gig.imgUrls} />
                    </div>
                    <h2 className='review-preview-title'>What people loved about this seller</h2>
                    <section className="review-preview">
                        <ul className="review-preview-list clean-list">
                            {/* {reviews.map((review) => (
                                <ReviewsPreview key={review.id} review={review} />
                                ))} */}
                            <ReviewsPreview review={reviews[0]} />
                        </ul>
                    </section>
                    <h2 className='about-gig-title'>About This Gig</h2>
                    <section className='about-gig' id='about-gig'>
                        <p>{gig.description} </p>
                    </section>
                    <h2 className='seller-details-card-title'>About The Seller</h2>
                    <SellerCard gig={gig} />
                    <h2>Reviews</h2>
                    <ShowReviews reviews={reviews} gig={gig} />

                    {gigLoaded && (
                        <>
                            {showBuyerMsg && (
                                <section className='buyer-msg flex' onClick={onOpenModal}>
                                    <img src={`${gig.owner.imgUrl}`} alt="" className='owner-img' />                                        <div className="background-dot">
                                        <div className={`point ${isOnline ? 'isOnline' : ''}`}></div>
                                    </div>

                                    <div className='owner-details flex column'>
                                        <div className='owner-name'>Message {gig.owner.fullname}</div>
                                        {!isOnline && <div className='response-time'>Away • Avg. response time: <span> 1 Hour </span></div>}
                                        {isOnline && <div className='response-time'>Online • Avg. response time: <span> 1 Hour </span></div>}
                                    </div>
                                </section>
                            )}
                        </>
                    )}
                </section>
                <div className='intersection-ref' ref={ref}></div>
                <Packages gig={gig} inView={inView}/>
                {openModal &&
                    <aside className='inbox-msg flex column'>
                        <div className='flex details-area'>
                            <img src={`${gig.owner.imgUrl}`} alt="" className='owner-img' />
                            <div className="background-dot">
                                <div className={`point ${isOnline ? 'isOnline' : ''}`}></div>
                            </div>

                            <div className='owner-details flex column'>
                                <div className='owner-name'>Message {gig.owner.fullname}</div>
                                {!isOnline && <div className='response-time'>Away • Avg. response time: <span> 1 Hour </span></div>}
                                {isOnline && <div className='response-time'>Online • Avg. response time: <span> 1 Hour </span></div>}
                            </div>
                        </div>
                        <div onClick={onCloseModal} className='close'>X</div>
                        <form action="" onSubmit={onSendMsg}>
                            <textarea name="msg" id="msg" cols="30" rows="10" maxLength="2500" placeholder={`Ask ${gig.owner.fullname} a question or share your project details (requirements, timeline, budget, etc.)`}></textarea>
                            {/* <p>Use at least 40 characters</p> */}
                            <button className='send-msg flex'>
                                <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff" }} />
                                <p> Send Message </p></button>
                        </form>
                    </aside>
                }
            </section>
        </>
    )
}