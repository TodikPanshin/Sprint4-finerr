import { useState } from "react"
import { orderService } from "../services/order.service"
import { toggleDrawer } from '../store/system.actions'
import { addCurrOrder } from '../store/order.actions'
import { PackagesFeatures } from "./packages-features"
import { ReactComponent as DeliveryIcon } from '../assets/img/delivery.svg'
import { ReactComponent as RevisionsIcon } from '../assets/img/revision.svg'



export function Packages({ gig, inView }) {
    const [selected, setSelected] = useState(1)

    function onToggleLabel({ target }) {
        const focused = target.className

        if (focused.includes('basic')) setSelected(1)
        if (focused.includes('standard')) setSelected(2)
        if (focused.includes('premium')) setSelected(3)
    }





    function onToggleDrawer() {
        console.log(`Adding ${gig._id} to Cart`)
        toggleDrawer(true)
        gig.extras.packageSelected = selected
        addCurrOrder(gig)
    }



    return (
        <section className={`packages-container ${inView ? '' : 'sticky'}`}>
            <div className="labels-container">
                <label onClick={onToggleLabel} className={`basic-${selected}`}>Basic</label>
                <label onClick={onToggleLabel} className={`standard-${selected}`}>Standard</label>
                <label onClick={onToggleLabel} className={`premium-${selected}`}>Premium</label>
            </div>
            <div className="main-packages">
                <header className="packages-header ">
                    <div className="packages-details flex justify-between">
                        <h3 className="packages-title">{orderService.checkClass(selected)} Package</h3>
                        <h2 className="packages-price">US${gig.price * selected}</h2>
                    </div>
                    <p>{gig.title.split(' ').slice(2).join(' ')}</p>
                </header>
                <article>
                    <div className="packages-additional-info flex">
                        <div className="packages-delivery flex align-center ">
                            <span className="delivery-icon margin-inline-end-8" aria-hidden="true" style={{ width: '16px', height: '16px', fill: '#62646a' }}>
                                {<DeliveryIcon />}
                            </span>
                            <p>{gig.daysToMake * selected} Days Delivery</p>
                        </div>
                        <div className="packages-revisions flex align-center ">
                            <span className="revisions-icon margin-inline-end-8" aria-hidden="true" style={{ width: '16px', height: '16px', fill: '#62646a' }}>
                                <RevisionsIcon />
                            </span>
                            <p>Unlimited Revisions</p>
                        </div>
                    </div>
                    <PackagesFeatures gig={gig} />
                </article>
                <footer className="packages-footer">
                    <button onClick={onToggleDrawer}>Continue <span>→</span></button>
                </footer>
            </div>
            <footer>
                {/* <button className="btn-black">Contact me</button> */}
            </footer>
        </section>
    )
}