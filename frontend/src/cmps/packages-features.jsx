import { ReactComponent as CheckMarkIcon } from '../assets/img/checkmark.svg'

export function PackagesFeatures({ gig }) {
    const featuresList = [
        'Prompt writing',
        'Generated image examples',
        'Artwork delivery',
        'Image upscaling']

    return (
        <ul className="packages-features clean-list ">
            {featuresList.map(feature =>
                <li key={feature} className="packages-feature flex align-center">
                    <CheckMarkIcon />
                    <p>{feature}</p>
                </li>
            )}
        </ul>
    )
}