import { StarRating } from "./star-rating"


export function ReviewsPreview({ review }) {
  const charNum = 116

  return (
    <li className="review-preview-item flex">
      <img className='user-img' src={review.by.imgUrl} alt="user img" />
      <div className='review-preview-details '>
        <div className='user-info flex'>
          <p className='user-name'>{review.by.fullname}</p>
          <p className='user-country'> {review.by.country} </p>
          <p>|</p>
          <div className='reviews-rate cursor-default'>
            <StarRating rate={review.rate} />
          </div>
        </div>
        <p>{review.txt.slice(0, charNum)+' ...'}</p>
        <p>1 day ago</p>
      </div>
    </li>
  )
}