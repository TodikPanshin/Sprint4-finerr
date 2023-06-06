import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SearchBox({setFilterBy, placeholder}) {
    const [showCancelBtn, setshowCancelBtn] = useState('hidden')
    const [txt, setTxt] = useState('')
    const navigate = useNavigate()

    function handleChange({ target }) {
        const field = target.name
        const value = target.value
        
        setTxt(value)
        value.length ? setshowCancelBtn('') : setshowCancelBtn('hidden')

        setFilterBy({ [field]: value })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        navigate('/gig')
    }

    function cancelSearch() {
        handleChange({ target: { name: 'txt', value: '' } })
    }

    function toggleSearchCover() {
        setshowCancelBtn('hidden')
    }


    return (<section className="search-box">
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="txt"></label>
            <input
                onChange={handleChange}
                name="txt" id="txt" type="text"
                value={txt}
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