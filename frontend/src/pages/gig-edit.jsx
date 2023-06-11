import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import { gigService } from "../services/gig.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"

import { categories } from "../cmps/app-header.jsx"
import { addGig } from "../store/gig.actions.js"

export function GigEdit() {
    const [gigToEdit, setGigToEdit] = useState(gigService.getEmptyGig())
    const navigate = useNavigate()
    const { gigId } = useParams()

    useEffect(() => {
        if (!gigId) return
        loadGig()
        // eslint-disable-next-line
    }, [])

    function loadGig() {
        gigService.getById(gigId)
            .then((gig) => setGigToEdit(gig))
            .catch((err) => {
                console.log('Had issues in gig details', err)
                navigate('/gig')
            })
    }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        // value = type === 'number' ? +value : value
        setGigToEdit((prevGig) => ({ ...prevGig, [field]: value }))
    }

    async function onSaveGig(ev) {
        ev.preventDefault()
        try {
            const gig = await addGig(gigToEdit)
            console.log('gig saved', gig);
            showSuccessMsg('Gig saved!')
            navigate('/gig')
        } catch (err) {
            console.log('err', err)
            showErrorMsg('Cannot save gig')
        }
    }

    return <section className="gig-edit">

        <h1 className="gig-edit-title">{gigToEdit.id ? 'Edit this gig' : 'Add a new gig'}</h1>

        <form onSubmit={onSaveGig}>
            <div className="add-gig-title flex">
                <label htmlFor="title" className="add-gig-txt">
                    <h4 className="description-title">Gig title</h4>
                    <p className="description">
                        As your Gig storefront, your <span>title is the most importent place </span>
                        to include keywords that buyers would likely use to search for a service like yours.
                    </p>
                </label>
                <textarea type="text"
                    name="title"
                    id="title"
                    placeholder="I will..."
                    value={gigToEdit.name}
                    onChange={handleChange}
                    className="inbox"
                    required
                />
            </div>

            <div className="add-gig-category flex">
                <label htmlFor="category" className="add-gig-txt">
                    <h4 className="description-title">Category</h4>
                    <p className="description">
                        Choose the category and sub-category most suitable for your Gig.
                    </p>
                </label>
                <select
                    name="category"
                    id="category"
                    placeholder="Enter price"
                    // value="SELECT A CATEGORY"
                    onChange={handleChange}
                    className="inbox"
                    required>
                    <option value="" disabled selected>Select a Category</option>
                    {categories.map(category =>
                        <option key={`${category}`} value={`${category}`}>{category}</option>
                    )}
                </select>
            </div>
            {/* <div className="add-gig-tags flex">
                <label htmlFor="labels" className="add-gig-txt">
                    <h4 className="description-title">Search tags</h4>
                    <p className="description">
                        The your Gig with buzz words that are relevant to the services you offer. Use all 5 tags to get found.
                    </p>

                </label>
                <input type="text"
                    name="labels"
                    id="labels"
                    value={gigToEdit.labels}
                    onChange={handleChange}
                    className="inbox"
                    required
                />
            </div> */}

            <div className="gig-edit-btns">
                <Link className="cancel-btn" to="/gig">Cancel</Link>
                <button className="save-btn">Save & Continue</button>
            </div>
        </form>
    </section>
}