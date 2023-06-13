
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

import { removeFromCart, checkout } from '../store/gig.actions'
import { UserMsg } from './user-msg.jsx'

export function AppFooter() {
    return (
        <>
            <footer className="app-footer flex align-center">
                <div className='logo flex align-center'>finerr<span>®</span></div>
                <span className='flex align-center'>© Finerr International Ltd. 2023</span>
            </footer>
        </>
    )
}