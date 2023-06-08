import React from 'react'
import { ReviewCounter } from './reviews-counter'
import { utilService } from '../services/util.service'
import { UserReview } from './user-review'


export function ShowReviews({ reviews }) {

    return (
        <section>
        <p><span>num</span> reviews for this Seller</p>
        <ReviewCounter />
        <ul className='user-review-list clean-list'>
        {reviews.map(review=>
            <UserReview review={review} key={review.id}/>)}
            </ul>
        </section>
    )
}




