import { StarRating } from "./star-rating"


export function ReviewsPreview({ review }) {
  const charNum = 116
  const img = (review.imgUrl) ? review.imgUrl : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'


  return (
    <li className="review-preview-item flex">
      <img className='user-img' src={img} alt="user img" />
      <div className='review-preview-details '>
        <div className='user-info flex'>
          <p className='user-name'>{review.name}</p>
          <p className='user-country'> {review.country} </p>
          <p>|</p>
          <div className='reviews-rate cursor-default'>
            <StarRating rate={review.rate} />
          </div>
        </div>
        <p>{review.review.slice(0, charNum) + ' ...'}</p>
        <p>{review.reviewedAt}</p>
      </div>
    </li>
  )
}