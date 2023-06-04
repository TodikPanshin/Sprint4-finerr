
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { removeFromCart, checkout } from '../store/gig.actions'
import { UserMsg } from './user-msg.jsx'

export function AppFooter() {
    const [isCartShown, setIsCartShown] = useState(false)
    const cart = useSelector(storeState => storeState.gigModule.cart)
    const count = useSelector(storeState => storeState.userModule.count)
    const cartTotal = cart.reduce((acc, gig) => acc + gig.price, 0)

    async function onCheckout() {
        try {
            const score = await checkout(cartTotal)
            showSuccessMsg(`Charged, your new score: ${score.toLocaleString()}`)
        } catch (err) {
            showErrorMsg('Cannot checkout')
        }
    }

    return (
        <footer className="app-footer">
           
        </footer>
    )
}