import { useState, useEffect } from 'react'
import { userService } from '../services/user.service'
import { ImgUploader } from '../cmps/img-uploader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCheck } from '@fortawesome/free-solid-svg-icons';



library.add(faCheck);



export function LoginSignup({ cancel }) {
    const [credentials, setCredentials] = useState({ username: '', password: '', fullname: '' })
    const [isSignup, setIsSignup] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadUsers()
    }, [])

    async function loadUsers() {
        const users = await userService.getUsers()
        setUsers(users)
    }

    function clearState() {
        setCredentials({ username: '', password: '', fullname: '', imgUrl: '' })
        setIsSignup(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password || !credentials.fullname) return
        userService.signup(credentials)
        clearState()
    }

    function toggleSignup() {
        setIsSignup(!isSignup)
    }

    function onUploaded(imgUrl) {
        setCredentials({ ...credentials, imgUrl })
    }

    return (<div className="sign-up">

        <section className="sign-up-modal flex">
            <section className="sign-up-dezine">
                <div className='sign-up-dezine-txt flex column'>
                    <h2>Success starts here</h2>
                    <ul className='clean-list flex column'>
                        <li>  &nbsp;     <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                            Over 600 categories</li>
                        <li>   &nbsp;    <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                            Pay per project, not per hour</li>
                        <li>   &nbsp;    <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                            Access to talent and businesses across the globe</li>
                    </ul>
                </div>
            </section>
            <section className='sign-up-content'>
                <button className='cancel-sign-up' onClick={() => cancel(false)}>X</button>
                <div><h4 className='txt-display'>Create a new account</h4></div>
                <p className='txt-display-2'>Already have an account?<button className='btn-sign-in'>Sign in</button></p>
                <button className="social-signing-btn"><img src="https://icons8.com/icon/V5cGWnc9R4xj/google" alt="" /> Continue with Google</button>
                <button className="social-signing-btn">Continue with email</button>
                <p className='or flex'>OR</p>
                <section className='flex'>
                    <button className="social-signing-btn">Apple</button>
                    <button className="social-signing-btn">Facebook</button>

                </section>
            </section>
        </section>
    </div>)
    return (
        <div className="login-page">
            <p>
                <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
            </p>
            {!isSignup && <form className="login-form" onSubmit={onLogin}>
                <select
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                >
                    <option value="">Select User</option>
                    {users.map(user => <option key={user._id} value={user.username}>{user.fullname}</option>)}
                </select>
                <button>Login!</button>
            </form>}
            <div className="signup-section">
                {isSignup && <form className="signup-form" onSubmit={onSignup}>
                    <input
                        type="text"
                        name="fullname"
                        value={credentials.fullname}
                        placeholder="Fullname"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        placeholder="Username"
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        placeholder="Password"
                        onChange={handleChange}
                        required
                    />
                    <ImgUploader onUploaded={onUploaded} />
                    <button >Signup!</button>
                </form>}
            </div>
        </div>
    )
}