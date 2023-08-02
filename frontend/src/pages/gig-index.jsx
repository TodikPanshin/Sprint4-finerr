import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, addToCart } from '../store/gig.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { gigService } from '../services/gig.service.js'
import { FilterBar } from '../cmps/filter-bar.jsx'
import { GigList } from '../cmps/gig-list.jsx'
import { SOCKET_EVENT_ORDER_APPROVED, socketService } from '../services/socket.service.js'


export function GigIndex() {
    const [isOrderApproved, setIsOrderApproved] = useState(false)
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    useEffect(() => {
        loadGigs(filterBy)
        socketService.on(SOCKET_EVENT_ORDER_APPROVED, onOrderApproved)
    }, [filterBy])

    function onOrderApproved() {
        setIsOrderApproved(true)
        setTimeout(() => setIsOrderApproved(false), 4800)
    }

    if (gigs === null) return <div className="empty-search">
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/empty-search-results.aabcd99.png" alt="no results" />
        <h2>No Results Found For Your Search</h2>
        <p>Try a new search or get a free quote for your project from our community of freelancers.</p>
    </div>

    if (!gigs.length) return <div className="container">
        <div className="flex-wrapper">
            <div className="loader"></div>
        </div>
    </div>

    return (
        <div className='gig-index'>
            {isOrderApproved && <div className="new-order-msg">Your order has been approved!</div>}
            <FilterBar />
            <main>
                < GigList
                    gigs={gigs}
                />
            </main>
        </div>
    )
}


// async function onRemoveGig(gigId) {
    //     try {
    //         await removeGig(gigId)
    //         showSuccessMsg('Gig removed')
    //     } catch (err) {
    //         showErrorMsg('Cannot remove gig')
    //     }
    // }

    // async function onAddGig() {
    //     const gig = gigService.getEmptyGig()
    //     gig.vendor = prompt('Vendor?')
    //     try {
    //         const savedGig = await addGig(gig)
    //         showSuccessMsg(`Gig added (id: ${savedGig._id})`)
    //     } catch (err) {
    //         showErrorMsg('Cannot add gig')
    //     }
    // }

    // async function onUpdateGig(gig) {
    //     const price = +prompt('New price?')
    //     const gigToSave = { ...gig, price }
    //     try {
    //         const savedGig = await updateGig(gigToSave)
    //         showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
    //     } catch (err) {
    //         showErrorMsg('Cannot update gig')
    //     }
    // }

    // function onAddToCart(gig) {
    //     console.log(`Adding ${gig.vendor} to Cart`)
    //     addToCart(gig)
    //     showSuccessMsg('Added to Cart')
    // }

    // function onAddGigMsg(gig) {
    //     console.log(`TODO Adding msg to gig`)
    // }