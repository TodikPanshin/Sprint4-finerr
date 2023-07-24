import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs } from '../store/gig.actions.js'

import { FilterBar } from '../cmps/filter-bar.jsx'
import { GigList } from '../cmps/gig-list.jsx'
import { Loader } from '../cmps/loader.jsx'

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

    if (!gigs.length) return <Loader/>

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