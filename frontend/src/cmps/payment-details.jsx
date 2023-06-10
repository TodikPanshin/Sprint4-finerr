import { PackagesFeatures } from './packages-features'

const currency = 'US$'

export function PaymentDetails({ currOrder, checkClass,onCheckout }) {
    console.log('teeeeessssssttttttttt', currOrder)
    const serviceFee = 10

    return (
        <section className="payment-details-container">
            <header className="payment-details-header  flex ">
                <img src={currOrder.gig.imgUrls} alt="" />
                <p>{currOrder.gig.title}</p>
            </header>
            <article className='payment-details-main'>
                <div className="payment-details-package  flex justify-between">
                    <h3 className="packages-title padding-bottom-16">{checkClass(currOrder.extras.packageSelected)} Package</h3>
                    <h2 className="packages-price">{currency}{currOrder.gig.price * currOrder.extras.packageSelected}</h2>
                </div>
                    <PackagesFeatures gig={currOrder.gig} />
            </article>
            <footer className="packages-footer">
                <div className='additional-charge '>
                    <div className='flex justify-between padding-bottom-12'>
                        <p>service fee </p>
                        <span>{currency}{serviceFee}</span>
                    </div>
                    <div className='flex justify-between'>
                        <p>VAT</p>
                        <span>{currency}{currOrder.gig.price}</span>
                    </div>
                </div>
                <div className='payment-summery padding-bottom-16'>
                    <div className='flex justify-between padding-bottom-12'>
                        <h3>you'll pay</h3>
                        <h3>{currency}{currOrder.gig.price}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total delivery time</p>
                        <span>{currOrder.gig.daysToMake} days</span>
                    </div>
                </div>
                <button className='btn-black' onClick={onCheckout}>Pay in USD</button>
            </footer>
        </section>
    )
}