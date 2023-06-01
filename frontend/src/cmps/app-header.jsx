import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from '../routes'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { login, logout, signup } from '../store/user.actions.js'
import { SearchBox } from './search-box.jsx'
import { LoginSignup } from './login-signup.jsx'
import { useState } from 'react'

const categories = [
    'Graphic & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Programming&Tech',
    'Photography',
    'Business',
    'AI Services'
]

export function AppHeader() {
    const user = useSelector(storeState => storeState.userModule.user)
    const [isProfileClicked, setIsProfileClicked] = useState(false)
    const navigate = useNavigate()

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



    function onProfileClick() {
        setIsProfileClicked(!isProfileClicked)
        console.log(isProfileClicked)
    }

    return (
        <header className="app-header main-layout full">
            <section className="main-header">
                <NavLink key="/" to="/" className="logo"><div className="white-dot"></div>finerr<span className="dot">.</span></NavLink>
                <SearchBox />

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
                        <button>Sign in</button>
                    }
                    {!user && <button>Join</button>
                        /* <LoginSignup onLogin={onLogin} onSignup={onSignup} /> */
                    }
                </nav>
            </section>
            <section className="categories">
                <ul className="categories-list">
                    {categories.map(category =>
                        <li key={category} className="category">
                            {category}
                        </li>)}
                </ul>
            </section>
        </header>
    )
}