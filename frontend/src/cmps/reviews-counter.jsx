import { ProgressBar } from "./progress-bar";

export function ReviewCounter({ reviewsCount,reviewsNum,checkCount }) {
  return (
    <ul className="star-progress-container clean-list">
      {reviewsCount.map((ratingBar) => (
        <li className="star-progress" key={ratingBar.rating}>
          <p className="star-progress-star-name">{ratingBar.rating} Stars</p>
          <span className="star-progress-progress-bar">
            <ProgressBar completed={checkCount(ratingBar.count,reviewsNum)} />
          </span>
          <span className="star-progress-count">
            {`(${ratingBar.count})`}
          </span>
        </li>))}
    </ul>
  )
}