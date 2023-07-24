import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout, login, signup } from '../store/user.actions.js'
import { SearchBox } from './search-box.jsx'
import { LoginSignup } from './login-signup.jsx'
import { setFilterBy } from '../store/gig.actions'
import { Categories } from './categories'
import { useInView } from 'react-intersection-observer'
import { OrderAlertModal } from './order-alert-modal'

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
    const [openNav, setOpenNav] = useState(false)
    const [alertModal, setAlertModal] = useState(false)
    const navigate = useNavigate()

    const isHome = window.location.pathname === '/' ? "is-home" : ""

    // INTERSECTION OBSERVER

    const { ref, inView } = useInView({
        rootMargin: (window.innerWidth >= 600) ? '-80px' : '99999px',
    })

    useEffect(() => {
        
        function handleKeyPress(ev) {
            if (ev.keyCode === 27) {
                setIsProfileBar(false)
                setAlertModal(false)
            }
        }

        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [])


    async function onLogin(credentials) {
        console.log('login - credentials:', credentials)
        try {
            const user = await login(credentials)
            showSuccessMsg(`Welcome agine: ${user.fullname}`)
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

    // Hipster mode 
    const handleAlertModal = () => {
        setAlertModal(!alertModal)
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

    // HAMBURGER

    function onOpenNav() {
        setOpenNav(true)
    }

    return (
        <header className={`app-header full main-layout`}>
            <section ref={ref} className={`main-header ${isHome}`}>
                <NavLink key="/" to="/" className="logo">
                    <div className="white-dot"></div>finerr<span className="dot">.</span>
                </NavLink>

                <SearchBox setFilterBy={setFilterBy} placeholder={'What service are you looking for today'} />
                <div>
                </div>
                <nav>
                    <a href="#" onClick={handleAlertModal}> Orders</a><div className={`alert-overlay ${alertModal ? 'open' : ''}`} onClick={()=>setAlertModal(false)}></div>
                    <NavLink onClick={resetFilter} key="gig" to="/gig">Explore</NavLink>
                    <NavLink key="add-gig" to="/gig/edit">Become a Seller</NavLink>

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
                        <Link to={`user/${user?._id}/Dashboard`} onClick={() => setIsProfileBar(false)}>Dashboard</Link>
                        <button onClick={onLogout}>Logout</button>
                    </section>}
                    {alertModal && <OrderAlertModal />}
                </nav>
            </section>
            {isHome && <section className={`main-header ${inView ? 'hidden' : 'sticky-header'}`}>
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
                        <Link to={`user/${user?._id}/Dashboard`} onClick={() => setIsProfileBar(false)}>Dashboard</Link>
                        <button onClick={onLogout}>Logout</button>
                    </section>}
                </nav>

            </section>}
            <div className='hamburger'>
                <img onClick={onOpenNav} src="https://www.svgrepo.com/show/491033/hamburger-menu.svg" alt="nav-bar" />
                {!user && <button onClick={toggleSignup}>Join</button>}
                {user &&
                    <span className="user-info">
                        {user.imgUrl && <img onClick={onProfileClick} className="user-img" src={user.imgUrl} />}
                    </span>}
                {isProfileBar && <section className="profile-bar">
                    <Link to={`user/${user?._id}`} onClick={() => setIsProfileBar(false)}>Profile</Link>
                    <button onClick={onLogout}>Logout</button>

                </section>}
            </div>
            {<Categories
                categories={categories}
                handleCategoryFilter={handleCategoryFilter}
                inView={inView}
                isHome={isHome} />}
            {isOpenModal && <LoginSignup cancel={setIsOpenModal} onLogin={onLogin} onSignup={onSignup} isSignup={isSignup} />}
        </header>
    )
}