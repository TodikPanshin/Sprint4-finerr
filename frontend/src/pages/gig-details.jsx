import { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'

import { gigService } from "../services/gig.service.local.js"
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





export function GigDetails() {

    const [reviews, setReviews] = useState([
        {
            id: "i101",
            gig: {
                _id: 'i106',
                title: 'I will write dog articles and pet blog content'
            },
            txt: `I’m a disabled veteran with PTSD, Kloe🐶was a constant companion and source of comfort to me.
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
            date: new Date(),
            by: {
                _id: "u102",
                country: "canada",
                fullname: "strawberryred78",
                imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/76d1e507770ac9db49456d83521d7c0e-1534481351065/5224dec4-7033-4ecb-a118-8ed28b8761de.jpg'
            }
        },

        {
            id: "i102",
            gig: {
                _id: 'i106',
                title: 'I will write dog articles and pet blog content'
            },
            txt: `Absolutely amazing. She worked incredibly fast and delivered beyond expectations.
             I would definitely recommend.
             Her knowledge of dog breeds was unexpectedly broad and detailed. Wow.`,
            rate: 5,
            date: new Date(),
            by: {
                _id: "u103",
                country: "isreal",
                fullname: "marianaolver283",
                imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1fcd42f23834628e5704905ad41b2ee6-1679381258169/ba120b86-0853-4513-a786-ed6f49deeba2.png'
            }
        },

        {
            id: "i103",
            gig: {
                _id: 'i106',
                title: 'I will write dog articles and pet blog content'
            },
            txt: `Jen was great to work with! She is great at communicating and setting a clear goal from the start.
             I appreciate her keeping me updated on her progress. She's fast and very professional.
              I look forward to working with her again soon :)`,
            rate: 5,
            date: new Date(),
            by: {
                _id: "u104",
                country: "united states",
                fullname: "marianaolver283",
                imgUrl: 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/c4238e5b3805218a4dd84180b4cdcd12-1594146133949/3f460af2-6d81-4527-bdc8-332abe7d73c7.jpg'
            }
        },



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
            // console.log(gig)
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
                        <SellerDetails owner={gig.owner} tags={gig.tags} reviewNum={gig.rating.num} />
                        <div className='notable-clients-bar flex'>
                            <p className='notable-clients-title'>Among my clients</p>
                            <p>muki</p>
                            <p>|</p>
                            <p>puki</p>
                        </div>
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
                    <ShowReviews reviews={reviews} />
                </section>
                <Packages gig={gig} />
            </section>
        </>
    )
}

