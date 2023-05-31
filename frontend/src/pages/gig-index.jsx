import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { loadGigs, addGig, updateGig, removeGig, addToCart } from '../store/gig.actions.js'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { gigService } from '../services/gig.service.js'

export function GigIndex() {

    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    useEffect(() => {
        loadGigs()
    }, [])

    async function onRemoveGig(gigId) {
        try {
            await removeGig(gigId)
            showSuccessMsg('Gig removed')            
        } catch (err) {
            showErrorMsg('Cannot remove gig')
        }
    }

    async function onAddGig() {
        const gig = gigService.getEmptyGig()
        gig.vendor = prompt('Vendor?')
        try {
            const savedGig = await addGig(gig)
            showSuccessMsg(`Gig added (id: ${savedGig._id})`)
        } catch (err) {
            showErrorMsg('Cannot add gig')
        }        
    }

    async function onUpdateGig(gig) {
        const price = +prompt('New price?')
        const gigToSave = { ...gig, price }
        try {
            const savedGig = await updateGig(gigToSave)
            showSuccessMsg(`Gig updated, new price: ${savedGig.price}`)
        } catch (err) {
            showErrorMsg('Cannot update gig')
        }        
    }

    function onAddToCart(gig){
        console.log(`Adding ${gig.vendor} to Cart`)
        addToCart(gig)
        showSuccessMsg('Added to Cart')
    }

    function onAddGigMsg(gig) {
        console.log(`TODO Adding msg to gig`)
    }

    return (
        <div>
            <h3>Gigs App</h3>
            <main>
                <button onClick={onAddGig}>Add Gig ⛐</button>
                <ul className="gig-list">
                    {gigs.map(gig =>
                        <li className="gig-preview" key={gig._id}>
                            <h4>{gig.vendor}</h4>
                            <h1>⛐</h1>
                            <p>Price: <span>${gig.price.toLocaleString()}</span></p>
                            <p>Owner: <span>{gig.owner && gig.owner.fullname}</span></p>
                            <div>
                                <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                                <button onClick={() => { onUpdateGig(gig) }}>Edit</button>
                            </div>

                            <button onClick={() => { onAddGigMsg(gig) }}>Add gig msg</button>
                            <button className="buy" onClick={() => { onAddToCart(gig) }}>Add to cart</button>
                        </li>)
                    }
                </ul>
            </main>
        </div>
    )
}