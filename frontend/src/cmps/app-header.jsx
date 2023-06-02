import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { SearchBox } from './search-box.jsx'
import { LoginSignup } from './login-signup.jsx'
import { setFilterBy } from '../store/gig.actions'

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
    const [isProfileClicked, setIsProfileClicked] = useState(false)
    const [isSignUp, setIsSignup] = useState(false)
    
    const [newFilterBy, setNewFilterBy] = useState({})
    
    
    
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
        setIsProfileClicked(!isProfileClicked)
        console.log(isProfileClicked)
    }

    // FILTER

    function handleCategoryFilter(category) {
        setNewFilterBy({...newFilterBy, category })
        setFilterBy(newFilterBy)
    }

    return (
        <header className="app-header full main-layout">
            <section className="main-header">
                <NavLink key="/" to="/" className="logo">
                    <div className="white-dot">
                    </div>finerr<span className="dot">.</span>
                </NavLink>

                <SearchBox setFilterBy={setFilterBy}/>

                <nav>
                    <NavLink key="gig" to="/gig">Explore</NavLink>
                    <NavLink key="seller-register" to="/">Become a Seller</NavLink>
                    {user &&
                        <span className="user-info">
                            <button onClick={onProfileClick}>
                                {user.imgUrl && <img src={user.imgUrl} />}
                            </button>
                            {isProfileClicked && <section className="profile-bar">
                                <Link to={`user/${user._id}`}>Profile</Link>
                                <button onClick={onLogout}>Logout</button>

                            </section>}
                        </span>
                    }
                    {!user &&
                        <button onClick={toggleSignup}>Sign in</button>
                    }
                    {!user && <button onClick={toggleSignup}>Join</button>
                    }
                </nav>
            </section>

            <section className="categories full main-layout">
                <ul className="categories-list">
                    {categories.map(category =>
                        <li key={category} className="category"
                            onClick={() => handleCategoryFilter(category)}>
                            {category}
                        </li>)}
                </ul>
                {isSignUp && <LoginSignup cancel={setIsSignup} onLogin={onLogin} onSignup={onSignup} />}
            </section>
        </header>
    )
}