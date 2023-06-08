import { useState } from 'react'

import { StarRating } from "./star-rating";


export function UserReview({ review }) {
    const [expanded, setExpanded] = useState(false)
   const charNum=292

    function toggleExpand(){
        setExpanded(!expanded)
    }

    const textToShow = expanded ? review.txt : review.txt.slice(0, charNum)+ '... '


    return (
        <li className="review-item border-top" >
            <div className='user-review-details'>
                <img className='user-img' src={review.by.imgUrl} alt="user img" />
                <div className='user-info flex'>
                    <div className='user-username-line'>
                        <p className='user-name'>{review.by.fullname}</p>
                        <p className='user-country'> {review.by.country} </p>
                    </div>
                    <div className='reviews-rate cursor-default'>
                        <StarRating rate={review.rate} />
                        <span>|</span>
                        <p>1 day ago</p>
                    </div>
                </div>
            </div>
            <p className="review-content">{textToShow}
            <span>{review.txt.length > charNum && (
                <span  className='expanded underline cursor-pointer' onClick={toggleExpand}>
                    {expanded ? 'See Less' : 'See More'}
                </span>
            )}
            </span>
            </p>
            
        </li>
    )
}

