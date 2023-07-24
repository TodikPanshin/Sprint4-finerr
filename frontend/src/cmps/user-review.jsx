import { useState } from 'react'

import { StarRating } from "./star-rating";

export function UserReview({ review }) {
    const [expanded, setExpanded] = useState(false)
    const charNum = 292

    function toggleExpand() {
        setExpanded(!expanded)
    }
    const img = (review.imgUrl) ? review.imgUrl : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const rate = review.rate ? review.rate : (Math.random() * (5 - 4) + 4).toFixed(1)
    const textToShow = expanded ? review.review : review.review.slice(0, charNum) + '... '

    return (
        <li className="review-item border-top" >
            <div className='user-review-details'>
                <img className='user-img' src={img} alt="user img" />
                <div className='user-info flex'>
                    <div className='user-username-line'>
                        <p className='user-name'>{review.name}</p>
                        <p className='user-country'> {review.country} </p>
                    </div>
                    <div className='reviews-rate cursor-default'>
                        <StarRating rate={rate} />
                        <span>|</span>
                        <p>{review.reviewedAt}</p>
                    </div>
                </div>
            </div>
            <p className="review-content">{textToShow}
                <span>{review.review.length > charNum && (
                    <span className='expanded underline cursor-pointer' onClick={toggleExpand}>
                        {expanded ? 'See Less' : 'See More'}
                    </span>
                )}
                </span>
            </p>
        </li>
    )
}

