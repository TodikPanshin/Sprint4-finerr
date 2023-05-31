
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
        } catch(err) {
            showErrorMsg('Cannot checkout')
        }
    }

    return (
        <footer className="app-footer">
            <p>
                coffeerights - count: {count}
            </p>
            {cart.length > 0 &&
                <h5>
                    <span>{cart.length}</span> Products in your Cart
                    <button className="btn-link" onClick={(ev) => {
                        ev.preventDefault();
                        setIsCartShown(!isCartShown)
                    }}>
                        ({(isCartShown) ? 'hide' : 'show'})
                    </button>
                </h5>
            }

            {isCartShown && cart.length > 0 && <section className="cart" >
                <h5>Your Cart</h5>
                <ul>
                    {
                        cart.map((gig, idx) => <li key={idx}>
                            <button onClick={() => {
                                removeFromCart(gig._id)
                            }}>x</button>
                            {gig.vendor}
                        </li>)
                    }
                </ul>
                <p>Total: ${cartTotal.toLocaleString()} </p>
                <button onClick={onCheckout}>Checkout</button>
            </section>}
            <UserMsg />
        </footer>
    )
}