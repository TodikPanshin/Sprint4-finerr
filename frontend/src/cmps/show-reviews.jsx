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


    function calculateAverageReviewCount(reviews) {
        const totalCount = reviews.length
        let sum = 0

        reviews.forEach((review) => {
            const { rate } = review
            sum +=parseFloat(rate) 
        })

        const average = totalCount !== 0 ? sum / totalCount : 0
        return average.toFixed(1)
    }

    const reviewsCount = countStarRatings(reviews)
    const avgReviewRate = calculateAverageReviewCount(reviews)

    return (
        <section className='show-reviews-container'>
            <div className='flex '>
                <p className='show-reviews-counter margin-inline-end-8'><span>{reviews.length}</span> reviews for this Gig </p>
                <StarRating rate={avgReviewRate} />
            </div>
            <ReviewCounter reviewsCount={reviewsCount} reviewsNum={reviews.length} checkCount={utilService.checkCount} />
            <ul className='user-review-list clean-list'>
                {reviews.map((review, idx) => <UserReview review={review} key={idx} />)}
            </ul>
        </section>
    )
}




