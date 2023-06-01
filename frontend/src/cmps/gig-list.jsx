import PropTypes from 'prop-types'

import { GigPreview } from "./gig-preview.jsx"

export function GigList({ gigs }) { //, onRemoveGig, onEditGig, addToCurt 
    return <ul className="gig-list grid">
        {gigs.map(gig =>
            <li className="gig-preview" key={gig._id}>
                <GigPreview gig={gig} />

                {/* <div>
                    <button onClick={() => { onRemoveGig(gig._id) }}>x</button>
                    <button onClick={() => { onEditGig(gig) }}>Edit</button>
                </div> */}

                {/* <button className="buy" onClick={() => { addToCurt(gig) }}>
                    Add to Curt
                </button> */}
            </li>)}
    </ul>
}



GigList.propTypes = {
    txt(props, propName, cmpName) {
        if (typeof props.txt !== 'string') {
            return new Error('Not a string!')
        }
    },
    nums: PropTypes.arrayOf(PropTypes.number)
}