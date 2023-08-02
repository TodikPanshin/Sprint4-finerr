import { GigPreview } from "./gig-preview.jsx"

export function GigList({ gigs }) {
    return <ul className="gig-list clean-list">
        {gigs.map(gig =>
            <li key={gig._id}>
                <GigPreview gig={gig} />
            </li>)}
    </ul>
}