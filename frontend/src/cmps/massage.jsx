import { useRef, useState } from 'react'
import { socketService } from '../services/socket.service.js'

export function Massage({ gig, onCloseModal, isOnline, FontAwesomeIcon, faPaperPlane }) {
    // SOCKETS
    const [msgs, setMsgs] = useState([])
    const inputRef = useRef()

    socketService.on('chat addMsg', (msg) =>
        setMsgs([...msgs, msg])
    )

    function onSendMsg(ev) {
        ev.preventDefault()
        if (ev.target[0].value) {
            socketService.emit('chat-send-msg', ev.target[0].value)}
            inputRef.current.value = ''
    }


    return (
        <aside className='inbox-msg flex column'>
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
        </aside>)
}