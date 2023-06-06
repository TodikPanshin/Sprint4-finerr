import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { SearchBox } from './search-box.jsx'
import { LoginSignup } from './login-signup.jsx'
import { setFilterBy } from '../store/gig.actions'
import { Categories } from './categories'
import { useInView } from 'react-intersection-observer'

export const categories = [
    'Graphic & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Programming & Tech',
    'Photography',
    'Business',
    'AI Services'
]

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [isProfileBar, setIsProfileBar] = useState(false)
    const [isSignUp, setIsSignup] = useState(false)
    const navigate = useNavigate()

    const { ref, inView } = useInView({
        rootMargin: '0px 0px'
    })

    const isHome = window.location.pathname === '/' ? "is-home" : ""

    //  USER

    async function onLogin(credentials) {
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

    async function onLogout() {
        setIsProfileBar(false)
        try {
            await logout()
            showSuccessMsg(`Bye now`)
        } catch (err) {
            showErrorMsg('Cannot logout')
        }
    }

    function toggleSignup() {
        setIsSignup(true)
    }

    function onProfileClick() {
        setIsProfileBar(!isProfileBar)
        console.log(isProfileBar)
    }

    // FILTER

    function handleCategoryFilter(category) {
        setFilterBy({ tag: category })
        navigate('/gig')
    }

    function resetFilter() {
        setFilterBy({
            txt: ''
        })
    }


    return (
        <header className={`app-header full main-layout`}>
            <section ref={ref} className={`main-header ${isHome} ${inView ? 'in-view' : 'in-sticky'}`}>
                <NavLink key="/" to="/" className="logo">
                    <div className="white-dot">
                    </div>finerr<span className="dot">.</span>
                </NavLink>

                <SearchBox setFilterBy={setFilterBy} placeholder={'What service are you looking for today'} />

                <nav>
                    <NavLink onClick={resetFilter} key="gig" to="/gig">Explore</NavLink>
                    <NavLink key="seller-register" to="/">Become a Seller</NavLink>
                    {user &&
                        <span className="user-info">
                            <button className="user-img" onClick={onProfileClick}>
                                {user.imgUrl && <img src={user.imgUrl} />}
                            </button>
                        </span>
                    }
                    {!user &&
                        <button onClick={toggleSignup}>Sign in</button>
                    }
                    {!user && <button onClick={toggleSignup}>Join</button>
                    }
                </nav>
                {isProfileBar && <section className="profile-bar">
                    <Link to={`user/${user?._id}`} onClick={() => setIsProfileBar(false)}>Profile</Link>
                    <button onClick={onLogout}>Logout</button>

                </section>}
            </section>

            {!isHome && <Categories className="categories" categories={categories} handleCategoryFilter={handleCategoryFilter} />}

            {isSignUp && <LoginSignup cancel={setIsSignup} onLogin={onLogin} onSignup={onSignup} />}
        </header>
    )
}