import { SellerDetails } from "./seller-details";

export function SellerCard({gig}) {
    return (
        <section className='seller-card' id='seller-card'>
        <SellerDetails owner={gig.owner} showLevel={false} showOneLiner={true} tags={gig.tags} showBtn={true} reviewNum={gig.rating.num} />
        <div className='seller-stats'>
            <ul className="seller-stats-info clean-list flex">
                <li>From
                    <span>Canada</span>
                </li>
                <li>Member since
                    <span>Mar 2021</span>
                </li>
                <li>Avg. response time
                    <span>2 hours</span>
                </li>
                <li>Last delivery
                    <span>1 day</span>
                </li>
                <li>Languages
                    <span> English</span>
                </li>
            </ul>
            <p className='seller-about'>{gig.owner.about}</p>
        </div>
    </section>
    )
}