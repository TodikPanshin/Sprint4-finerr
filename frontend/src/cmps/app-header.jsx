import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { SearchBox } from './search-box.jsx'
import { LoginSignup } from './login-signup.jsx'
import { setFilterBy } from '../store/gig.actions'
import { Categories } from './categories'

const categories = [
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
        setFilterBy({ category })
        navigate('/gig')
    }

    return (
        <header className="app-header full main-layout">
            <section className="main-header">
                <NavLink key="/" to="/" className="logo">
                    <div className="white-dot">
                    </div>finerr<span className="dot">.</span>
                </NavLink>

                <SearchBox setFilterBy={setFilterBy} placeholder={'What service are you looking for today'} />

                <nav>
                    <NavLink key="gig" to="/gig">Explore</NavLink>
                    <NavLink key="seller-register" to="/">Become a Seller</NavLink>
                    {user &&
                        <span className="user-info">
                            <button onClick={onProfileClick}>
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
                    <Link to={`user/${user._id}`}>Profile</Link>
                    <button onClick={onLogout}>Logout</button>

                </section>}
            </section>

            <Categories categories={categories} handleCategoryFilter={handleCategoryFilter} />

            {isSignUp && <LoginSignup cancel={setIsSignup} onLogin={onLogin} onSignup={onSignup} />}
        </header>
    )
}