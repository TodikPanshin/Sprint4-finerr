import React from 'react'
import { ReviewCounter } from './reviews-counter'
import { utilService } from '../services/util.service'
import { UserReview } from './user-review'
import { StarRating } from './star-rating'


export function ShowReviews({ reviews, gig }) {

    function countStarRatings(reviews) {
        const starCounts = [
            { rating: 5, count: 0 },
            { rating: 4, count: 0 },
            { rating: 3, count: 0 },
            { rating: 2, count: 0 },
            { rating: 1, count: 0 },
        ]

        reviews.forEach((review) => {
            const { rate } = review
            const roundedRate = Math.round(rate)
            const starCount = starCounts.find((starCounter) => starCounter.rating === roundedRate)
            if (starCount) {
                starCount.count++
            }
        })

        return starCounts
    }
    const reviewsCount = countStarRatings(reviews)

    return (
        <section className='show-reviews-container'>
            <div className='flex '>
                <p className='show-reviews-counter margin-inline-end-8'><span>{reviews.length}</span> reviews for this Seller </p>
                <StarRating rate={gig.owner.rate} />
            </div>
            <ReviewCounter reviewsCount={reviewsCount}  reviewsNum={reviews.length} checkCount={utilService.checkCount} />
            <ul className='user-review-list clean-list'>
                {reviews.map(review =>
                    <UserReview review={review} key={review.id} />)}
            </ul>
        </section>
    )
}




