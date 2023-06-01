import { useState } from "react"
import { useSelector } from "react-redux"

export function SearchBox() {

    function handleChange({ target }) {
        const field = target.name
        const value = target.value

        // onFilterBy({ [field]: value })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
    }

    function cancelSearch() {
        handleChange({ target: { name: 'txt', value: '' } })
    }

    const txt = ''
    return (<section className="search-box">
        <form onSubmit={onSubmitFilter}>
            {/* <label htmlFor="txt"></label> */}
            <input
                value={txt}
                onChange={handleChange}
                name="txt" id="txt" type="text"
                placeholder="What service are you looking for today?" />
            <button onClick={cancelSearch} className="cancel-btn">X</button>
            <button onClick={onSubmitFilter} className="search-btn">
                <img
                    onClick={onSubmitFilter}
                    src="https://www.svgrepo.com/show/25222/magnifying-glass.svg" alt="search" />
            </button>
        </form>
    </section>)
}