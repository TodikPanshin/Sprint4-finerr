import { ReactComponent as CheckMarkIcon } from '../assets/img/checkmark.svg'

export function PackagesFeatures({gig}) {
    return (
        <ul className="packages-features clean-list ">
            {gig.featuresList.map(feature =>
                <li key={feature} className="packages-feature flex align-center">
                    <CheckMarkIcon/>
                    <p>{feature}</p>
                </li>
            )}
        </ul>
    )
}