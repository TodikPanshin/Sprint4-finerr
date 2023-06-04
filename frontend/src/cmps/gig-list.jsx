import { GigPreview } from "./gig-preview.jsx"

export function GigList({ gigs }) { //, onRemoveGig, onEditGig, addToCurt 
    return <ul className="gig-list">
        {gigs.map(gig =>
            <li className="clean-list" key={gig._id}>
                <GigPreview gig={gig} />

            </li>)}
    </ul>
}
