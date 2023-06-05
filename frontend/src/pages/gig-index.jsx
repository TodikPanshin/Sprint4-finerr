import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, addToCart } from '../store/gig.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { gigService } from '../services/gig.service.js'
import { GigList } from '../cmps/gig-list.jsx'


export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)

    useEffect(() => {
        loadGigs(filterBy)
    }, [filterBy])

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

    if (!gigs.length) return <div>Loading...</div>
    return (
        <div className='gig-index'>
            <main>
                < GigList
                    gigs={gigs}
                />
            </main>
        </div>
    )
}