import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

import { gigService } from "../services/gig.service.local.js"
import { showErrorMsg } from "../services/event-bus.service.js"
import { GigToolBar } from '../cmps/gig-tool-bar.jsx'

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
            about: `Hi, My Name is Yael Rozanes and in the past 10 years
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
                       more than 7 years.`
        },
        daysToMake: 3,
        description: "Make unique logo...",
        imgUrl: "https://picsum.photos/100",
        tags: [
            "logo-design",
            "artisitic",
            "proffesional",
            "accessible"
        ],
    })
    const { gigId } = useParams()
    const navigate = useNavigate()


    // useEffect(() => {
    //     loadGig()
    // }, [gigId])

    // function loadGig() {
    //     gigService.getById(gigId)
    //         .then(setGig)
    //         .catch((err) => {
    //             console.log('Had issues in gig details', err)
    //             showErrorMsg('Cannot load gig')
    //             navigate('/gig')
    //         })
    // }

    if (!gig||gig.length) return <div>Loading...</div>
    return (
        <>
             {/* <GigToolBar /> */}
            <section className='gig-details-nav clean-list'>
        <a href="#gig-details">Overview</a>
        <a href="#seller-details">About the seller</a>
        <a href="#">Compare packages</a>
        <a href="#">Reviews</a>
    </section>
            <section className="gig-details" id='gig-details'>
                <h1>{gig.title}</h1>
                <div className='seller-img'>
                     <img src={`https://robohash.org/test?set=set4&size=100x100`} alt="cat" />
                </div>
                <h5>{gig.owner.fullname}</h5>
                <h5>Level {gig.owner.rate} Seller</h5>
                <div className='gig-details-imgs-contener'>
                    <img src={gig.imgUrl} alt="test img" />
                </div>
                <h2>About This Gig</h2>
                <p>{gig.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, sunt, sed eos illum quis omnis sequi enim quibusdam ipsum quidem hic mollitia autem, nihil tenetur laudantium tempore. Impedit, assumenda atque.</p>

                <div className='seller-details' id='seller-details'>
                    <h2>About The Seller</h2>
                    <div className='seller-img'>
                    <img src={`https://robohash.org/test?set=set4&size=100x100`} alt="cat" />
                    </div>
                    <h2>{gig.owner.fullname}</h2> 
                    <h5>Level {gig.owner.rate} Seller</h5>
                     <p>{gig.owner.about}</p>
                </div>
            </section>
        // </>
    )
}