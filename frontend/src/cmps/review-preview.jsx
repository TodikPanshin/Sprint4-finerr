

export function ReviewsPreview({review}){


    return (
        <li>
            <p>{review.by.fullname}</p>
             <p>{review.txt}</p>
            
        </li>
      )
    }