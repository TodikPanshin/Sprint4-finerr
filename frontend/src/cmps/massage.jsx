import { useEffect, useRef, useState } from 'react'
import { socketService } from '../services/socket.service.js'

export function Massage({ gig, onCloseModal, isOnline, FontAwesomeIcon, faPaperPlane }) {
    // SOCKETS
    const [msgs, setMsgs] = useState([])
    const inputRef = useRef()
    const modalRef = useRef()


    // useEffect(() => {

    //     document.addEventListener('click', (e) => {
    //         console.log('close target', e.target)
    //     })
    //     modalRef.current.addEventListener('click', (ev) => ev.stopPropagation())
    //     return () => {
    //         document.removeEventListener('click', onCloseModal)
    //         // modalRef.current.removeEventListener('click', (ev) => ev.stopPropagation())

    //     }
    // }, [])


    socketService.on('chat addMsg', (msg) =>
        setMsgs([...msgs, msg])
    )

    function onSendMsg(ev) {
        ev.preventDefault()
        if (ev.target[0].value) {
            socketService.emit('chat-send-msg', ev.target[0].value)
        }
        inputRef.current.value = ''
    }


    return (
        <>
            {/* <div className="fullScreen" style={{
                width: "100vw", height: "100vh", position: "fixed", top: 0, left: 0, pointerEvents: "auto"
            }} onClick={onCloseModal}></div> */}

            <aside className='inbox-msg flex column' ref={modalRef}>
                <div className='flex details-area'>
                    <img src={`${gig.owner.imgUrl}`} alt="" className='owner-img' />
                    <div className="background-dot">
                        <div className={`point ${isOnline ? 'isOnline' : ''}`}></div>
                    </div>

                    <div className='owner-details flex column'>
                        <div className='owner-name'>Message {gig.owner.fullname}</div>
                        {!isOnline && <div className='response-time'>Away • Avg. response time: <span> 1 Hour </span></div>}
                        {isOnline && <div className='response-time'>Online • Avg. response time: <span> 1 Hour </span></div>}
                    </div>
                </div>
                <div onClick={onCloseModal} className='close'>X</div>

                <ul>
                    {msgs.map(msg =>
                        <li key={msg} className='msg-line'>{msg}</li>
                    )}
                </ul>
                <form action="" onSubmit={onSendMsg}>
                    <input ref={inputRef} name="msg" id="msg"
                        placeholder={`share your project details with ${gig.owner.fullname}`} />
                    <button className='send-msg flex'>
                        <FontAwesomeIcon icon={faPaperPlane} style={{ color: "#ffffff" }} />
                        <p> Send Message </p></button>
                </form>
            </aside>
        </>)
}