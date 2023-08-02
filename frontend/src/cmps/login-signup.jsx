import { useState } from 'react'
// import { ImgUploader } from '../cmps/img-uploader'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faCheck);


export function LoginSignup(props) {
    const [credentials, setCredentials] = useState({ username: '', password: '' })

    function clearState() {
        setCredentials({ username: '', password: '' })
        props.cancel(false)
    }

    function handleChange(ev) {
        const field = ev.target.name
        const value = ev.target.value
        setCredentials({ ...credentials, [field]: value })
    }

    function onLogin(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username) return
        props.onLogin(credentials)
        clearState()
    }

    function onSignup(ev = null) {
        if (ev) ev.preventDefault()
        if (!credentials.username || !credentials.password) return
        props.onSignup(credentials)
        clearState()
    }

    // function toggleSignup() {
    //     setIsSignup(!isSignup)
    // }

    // function onUploaded(imgUrl) {
    //     setCredentials({ ...credentials, imgUrl })
    // }

    return (
        <>
            <div className='blur-background'></div>
            <div className="sign-up">
                <section className="sign-up-modal flex">
                    <section className="sign-up-dezine">
                        <div className='sign-up-dezine-txt flex column'>
                            <h2>Success starts here</h2>
                            <ul className='clean-list flex column'>
                                <li className='flex'>
                                    <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                                    <p> Over 600 categories </p>
                                </li>
                                <li className='flex'>
                                    <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                                    <p>Pay per project, not per hour</p>
                                </li>
                                <li className='flex'>
                                    <FontAwesomeIcon icon="fa-solid fa-check" size="xs" style={{ color: "#ffffff", }} />
                                    <p>Access to talent and businesses across the globe</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section className='sign-up-content'>
                        <button className='cancel-sign-up' onClick={() => props.cancel(false)}>X</button>
                        <div><h4 className='txt-display-1'>Continue with your name</h4></div>

                        {props.isSignup && <div className="signup-page">
                            <form className="signup-form" onSubmit={onSignup}>
                                <label htmlFor="username" className='txt-display-2'>Username</label>
                                <input
                                    className='inbox'
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="password" className='txt-display-2'>Password</label>
                                <input
                                    className='inbox'
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                                <button className='submit-signup' >Join</button>
                            </form>
                        </div>}

                        {!props.isSignup && <div className="login-page">
                            <form className="signin-form" onSubmit={onLogin}>
                                <label htmlFor="username" className='txt-display-2'>Username</label>
                                <input
                                    className='inbox'
                                    type="text"
                                    name="username"
                                    value={credentials.username}
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                                <label htmlFor="password" className='txt-display-2'>Password</label>
                                <input
                                    className='inbox'
                                    type="password"
                                    name="password"
                                    value={credentials.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                                <button className='submit-signin' >Sign in</button>
                            </form>
                        </div>}

                    </section>
                </section>
            </div></>)
}




//   <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>
//   {!isSignup && <form className="login-form" onSubmit={onLogin}>
//   <ImgUploader onUploaded={onUploaded} />
//   <button >Signup!</button>}
//   <button className="btn-link" onClick={toggleSignup}>{!isSignup ? 'Signup' : 'Login'}</button>