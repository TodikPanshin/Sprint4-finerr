// import PropTypes from 'prop-types'

import { GigPreview } from "./gig-preview.jsx"

export function GigList({ gigs }) { //, onRemoveGig, onEditGig, addToCurt 
    return <ul className="gig-list clean-list">
        {gigs.map(gig =>
            <li key={gig._id}>
                <GigPreview gig={gig} />

            </li>)}
    </ul>
}



// GigList.propTypes = {
    // txt(props, propName, cmpName) {
    //     if (typeof props.txt !== 'string') {
    //         return new Error('Not a string!')
    //     }
    // },
    // nums: PropTypes.arrayOf(PropTypes.number)
// }