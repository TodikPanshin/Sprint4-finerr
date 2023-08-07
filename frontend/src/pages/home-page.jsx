import React, { useState } from 'react'
import { SearchBox } from '../cmps/search-box'
import { HomeCategories } from '../cmps/home-categories'
import { useNavigate } from 'react-router-dom'
import { setFilterBy } from '../store/gig.actions'
import { LoginSignup } from '../cmps/login-signup'
import { login, signup } from '../store/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { Hero } from '../cmps/hero'
import { ServicesCarousel } from '../cmps/services-carousel'
import { PopularBtns } from '../cmps/popular-btns'

export function HomePage() {

    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isSignup, setIsSignup] = useState(false)
    const navigate = useNavigate()

    async function onLogin(credentials) {
        console.log('login - credentials:', credentials)
        try {
            const user = await login(credentials)

            showSuccessMsg(`Welcome: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot login')
        }
    }

    async function onSignup(credentials) {
        try {
            const user = await signup(credentials)
            showSuccessMsg(`Welcome new user: ${user.fullname}`)
        } catch (err) {
            showErrorMsg('Cannot signup')
        }
    }

    function toggleSignup() {
        setIsOpenModal(true)
    }

    function handleCategoryFilter(category) {
        setFilterBy({ tag: category })
        document.body.scrollTop = document.documentElement.scrollTop = 0
        navigate('/gig')
    }

    return (
        <main className="home-page main-layout full">
            <Hero />
            <div className="main-home">
                <h2>Find the right <span>freelance service</span>, right away</h2>
                <SearchBox placeholder={'Search for any service...'} />
                <PopularBtns handleCategoryFilter={handleCategoryFilter} />
            </div>

            <h1 className='popular-services-headline'>Popular services</h1>
            <ServicesCarousel handleCategoryFilter={handleCategoryFilter} />

            <div className="best-part-everything-container main-layout full">
                <div className="best-part-everything">
                    <section className="bast-part-text">
                        <h2>The best part? Everything.</h2>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Stick to your budget</h3>
                        <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Get quality work done quickly</h3>
                        <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Pay when you're happy</h3>
                        <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                        <h3><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path>
                        </svg>Count on 24/7 support</h3>
                        <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </section>
                    <section className="best-part-video">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png" alt="video" />
                    </section>
                </div>
            </div>

            <div className="home-categories">
                <HomeCategories handleCategoryFilter={handleCategoryFilter} />
            </div>

            <div className="join-finerr-img">
                <h2>Suddenly it's all so <span>doable.</span><br />
                    <button onClick={toggleSignup}>Join Finerr</button>
                </h2>
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png" alt="join Finerr" />
            </div>
            {isOpenModal && <LoginSignup cancel={setIsOpenModal} onLogin={onLogin} onSignup={onSignup} isSignup={isSignup} />}
        </main >
    )
}