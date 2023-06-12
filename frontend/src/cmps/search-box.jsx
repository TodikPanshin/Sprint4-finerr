import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

export function SearchBox({ setFilterBy, placeholder }) {
    const [showCancelBtn, setshowCancelBtn] = useState('hidden')
    const [txt, setTxt] = useState('')
    const navigate = useNavigate()
    const ref = useRef()

    window.addEventListener('keydown', function (e) {
        if (e.keyIdentifier == 'U+000A' || e.keyIdentifier === 'Enter' || e.keyCode === 13) {
            if (e.target.nodeName == 'INPUT' && e.target.type === 'text') {
                e.preventDefault();
                setshowCancelBtn('hidden')
                return false;
            }
        }
    }, true)



    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        setTxt(value)
        setFilterBy({ [field]: value })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()        
    }

    function cancelSearch() {
        ref.current.value = ""
        setshowCancelBtn('hidden')
        handleChange({ target: { name: 'txt', value: '' } })
    }

    function toggleSearchCover() {
        setshowCancelBtn('hidden')
    }


    return (<section className="search-box">
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="txt"></label>
            <input
                ref={ref}
                onClick={() => setshowCancelBtn('')}
                onChange={handleChange}
                onSubmit={handleChange}
                name="txt" id="txt" type="text"
                placeholder={placeholder} />
            <button onClick={cancelSearch} className={`cancel-btn ${showCancelBtn}`}>✖</button>
            <button onClick={onSubmitFilter} className="search-btn">
                <img
                    onClick={onSubmitFilter}
                    src="https://www.svgrepo.com/show/25222/magnifying-glass.svg" alt="search" />
            </button>
        </form>
        <div className={`search-cover ${showCancelBtn}`} onClick={toggleSearchCover}></div>
    </section>)
}