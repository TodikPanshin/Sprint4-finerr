import { PackagesFeatures } from './packages-features'

export function PaymentDetails({ currOrder, checkClass, onCheckout }) {
    const currency = 'US$'
    const serviceFee = 10
    const extraFastPrice = 50
    const price = currOrder.gig.price * currOrder.extras.packageSelected
    const updatedPrice = (currOrder.extras.fastDelivery) ? price + extraFastPrice : price
    const vat = (((updatedPrice) + serviceFee) * 0.17)
    const vatTest = vat.toFixed(2)
    const daysToMake = (currOrder.extras.fastDelivery) ? currOrder.extras.packageSelected : currOrder.gig.daysToMake

    return (
        <section className="payment-details-container">
            <header className="payment-details-header  flex ">
                <img src={currOrder.gig.imgUrls} alt="" />
                <p>{currOrder.gig.title}</p>
            </header>
            <article className='payment-details-main'>
                <div className="payment-details-package  flex justify-between">
                    <h3 className="packages-title padding-bottom-16">{checkClass(currOrder.extras.packageSelected)} Package</h3>
                    <h2 className="packages-price">{currency}{updatedPrice}</h2>
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
                        <span>{currency}{vatTest}</span>
                    </div>
                </div>
                <div className='payment-summery padding-bottom-16'>
                    <div className='flex justify-between padding-bottom-12'>
                        <h3>you'll pay</h3>
                        <h3>{currency}{(updatedPrice + serviceFee + vat).toFixed(2)}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <p>Total delivery time</p>
                        <span>{daysToMake} days</span>
                    </div>
                </div>
                <button className='btn-black' onClick={onCheckout}>Pay in USD</button>
            </footer>
        </section>
    )
}