import { StarRating } from "./star-rating";

export function SellerDetails({ owner, showLevel = true, showOneLiner = false, showBtn = false, tags, reviewNum }) {
    return (
        <div className='seller-details flex align-center'>
            <img className='seller-img' src={owner.imgUrl} alt="seller img" />
            <div className='seller-info flex'>
                <div className='seller-username-line flex'>
                    <p className='seller-name'>{owner.fullname}</p>
                    <p className='seller-at'>@needtoadd</p>
                </div>
                {showLevel && <p className='seller-rate'>Level {owner.rate} Seller</p>}
                {showLevel && <p>|</p>}
                {showOneLiner && <p className='seller-one-liner'>{tags.slice(0, 3).join(', ')}</p>}
                <div className='reviews-rate'>
                    <StarRating rate={owner.rate} reviewNum={reviewNum} />
                    <span className='ratings-count cursor-pointer'>({reviewNum})</span>
                </div>
                {showBtn && <button className='seller-card-btn btn-gig-contact'>Contact me</button>}
            </div>
        </div>
    )
}