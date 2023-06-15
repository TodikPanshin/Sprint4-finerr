import { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { utilService } from '../services/util.service.js'
import { gigService } from "../services/gig.service.js"
import { showSuccessMsg, showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'
import { ReviewsPreview } from '../cmps/review-preview.jsx'
import { Packages } from '../cmps/packages.jsx'
import { GigSwiper } from '../cmps/gig-swiper.jsx'
import { OrderDrawer } from '../cmps/order-drawer.jsx'
import { SellerDetails } from '../cmps/seller-details.jsx'
import { SellerCard } from '../cmps/seller-card.jsx'
import { ShowReviews } from '../cmps/show-reviews.jsx'
import { Massage } from '../cmps/massage.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import { useInView } from 'react-intersection-observer'





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
            reviewedAt: utilService.randomPastTime(),
            _id: "u102",
            country: "canada",
            name: "strawberryred78",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/76d1e507770ac9db49456d83521d7c0e-1534481351065/5224dec4-7033-4ecb-a118-8ed28b8761de.jpg'

        },

        {
            review: `Absolutely amazing. She worked incredibly fast and delivered beyond expectations.
             I would definitely recommend.
             Her knowledge of dog breeds was unexpectedly broad and detailed. Wow.`,
            rate: 5,
            reviewedAt: utilService.randomPastTime(),
            _id: "u103",
            country: "isreal",
            name: "marianaolver283",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1fcd42f23834628e5704905ad41b2ee6-1679381258169/ba120b86-0853-4513-a786-ed6f49deeba2.png'
        },

        {
            review: `Jen was great to work with! She is great at communicating and setting a clear goal from the start.
             I appreciate her keeping me updated on her progress. She's fast and very professional.
              I look forward to working with her again soon :)`,
            rate: 5,
            reviewedAt: utilService.randomPastTime(),

            _id: "u104",
            country: "united states",
            name: "marianaolver283",
            imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c4238e5b3805218a4dd84180b4cdcd12-1594146133949/3f460af2-6d81-4527-bdc8-332abe7d73c7.jpg'

        },



    ])

    const [showBuyerMsg, setShowBuyerMsg] = useState(false)
    const [gigLoaded, setGigLoaded] = useState(false)

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

    // useEffect(() => {
    //     function handleKeyDown(ev) {
    //         if (ev.keyCode === 27) {
    //             setIsOpen(false)
    //         }
    //     }

    //     document.addEventListener("keydown", handleKeyDown)
    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown)
    //     }
    // }, [])

    // useEffect(() => {
    //     window.addEventListener('keydown', function (e) {
    //         if (e.keyIdentifier == 'U+000A' || e.keyIdentifier === 'Enter') {
    //             e.preventDefault();
    //             onCloseModal()
    //             return false;
    //         }
    //     }, true)
    //     return () => {
    //         document.removeEventListener("keydown", handleKeyDown)
    //     }
    // }, [])


    async function loadGig() {
        try {
            const gig = await gigService.getById(id)
            setGig(gig)
            setGigLoaded(true)
            // console.log(gig)
            if (gig.reviews) setReviews(addReviewsRate(gig.reviews))
        } catch (err) {
            console.log('Had issues in gig details', err)
            showErrorMsg('Cannot load gig');
            navigate('/gig');
        }
    }

    function addReviewsRate(reviews) {
        return reviews.map(review => ({
            ...review, rate: review.rate || (Math.random() * 0.5 + 4.5).toFixed(1)
        }))
    }

    function onOpenModal() {
        setOpenModal(true)
        setShowBuyerMsg(false)
    }

    function onCloseModal() {
        setOpenModal(false)
        setShowBuyerMsg(true)
    }


    if (!gig || gig.length) return <div className="container">
        <div className="flex-wrapper"><div className="loader"></div></div></div>

    const isOnline = gig.owner.isOnline
    // console.log('reviews test', reviews)
    return (
        <>

            <GigToolBar />
            <OrderDrawer />
            <section className='gig-container flex full' >
                <section className="gig-details" id='gig-details'>
                    <div className='gig-overview'>
                        <nav className='gig-overview-filter-nav'>
                            <ul className='flex clean-list'>
                                <li className='gig-overview-main-tag'><a href="#">{gig.tags[0]}</a></li>
                                <img src="https://www.svgrepo.com/show/486236/right-arrow-backup-2.svg" alt="" />
                                <li className='gig-overview-secondary tag'><a href="#">{gig.tags[1]}</a></li>
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
                                    <img src={`${gig.owner.imgUrl}`} alt="" className='owner-img' />
                                    <div className="background-dot">
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
                <Packages gig={gig} inView={inView} />
                {openModal && <Massage gig={gig} onCloseModal={onCloseModal} isOnline={isOnline} FontAwesomeIcon={FontAwesomeIcon} faPaperPlane={faPaperPlane} />}
            </section>
        </>
    )
}