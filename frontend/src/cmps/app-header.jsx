import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout, login, signup } from '../store/user.actions.js'
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
    const [isSignup, setIsSignup] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const navigate = useNavigate()

    const isHome = window.location.pathname === '/' ? "is-home" : ""

    // INTERSECTION OBSERVER

    const { ref, inView } = useInView({
        rootMargin: '-80px 0px'
    })


    //  USER

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
        console.log('credentials:', credentials)
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
        setIsOpenModal(true)
    }

    function onProfileClick() {
        setIsProfileBar(!isProfileBar)
        console.log(isProfileBar)
    }

    function openSignIn() {
        setIsSignup(false)
        setIsOpenModal(true)
    }

    function openJoin() {
        setIsSignup(true)
        setIsOpenModal(true)
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
            <section ref={ref} className={`main-header ${isHome}`}>
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
                        <button onClick={openSignIn}>Sign in</button>
                    }
                    {!user && <button onClick={openJoin}>Join</button>
                    }
                    {isProfileBar && <section className="profile-bar">
                        <Link to={`user/${user?._id}`} onClick={() => setIsProfileBar(false)}>Profile</Link>
                        <button onClick={onLogout}>Logout</button>

                    </section>}
                </nav>
            </section>

            {isHome && <section className={`main-header main-layout ${inView ? 'hidden' : 'sticky-header'}`}>
                <div className="scroll-background"></div>
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
                    {isProfileBar && <section className="profile-bar">
                        <Link to={`user/${user?._id}`} onClick={() => setIsProfileBar(false)}>Profile</Link>
                        <button onClick={onLogout}>Logout</button>

                    </section>}
                </nav>

            </section>}

            {<Categories
                categories={categories}
                handleCategoryFilter={handleCategoryFilter}
                inView={inView}
                isHome={isHome} />}

            {isOpenModal && <LoginSignup cancel={setIsOpenModal} onLogin={onLogin} onSignup={onSignup} isSignup={isSignup} />}
        </header>
    )
}