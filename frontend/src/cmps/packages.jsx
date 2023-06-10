import { useState } from "react"
import { orderService } from "../services/order.service"
import { toggleDrawer } from '../store/system.actions'
import { addCurrOrder } from '../store/order.actions'
import { PackagesFeatures } from "./packages-features"




export function Packages({ gig }) {
    const [selected, setSelected] = useState(1)

    function onToggleLabel({ target }) {
        const focused = target.className

        if (focused.includes('basic')) setSelected(1)
        if (focused.includes('standard')) setSelected(2)
        if (focused.includes('premium')) setSelected(3)
    }

    
    


    function onToggleDrawer(){
        console.log(`Adding ${gig._id} to Cart`)
        toggleDrawer(true)
        gig.extras.packageSelected = selected
        addCurrOrder(gig) 
    }

    

    return (
        <section className="packages-container">
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                    <path d="M9 4H7v5h5V7H9V4z"></path>
                                </svg>
                            </span>
                            <p>{gig.daysToMake} Days Delivery</p>
                        </div>
                        <div className="packages-revisions flex align-center ">
                            <span className="revisions-icon margin-inline-end-8" aria-hidden="true" style={{ width: '16px', height: '16px', fill: '#62646a' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                    <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                                </svg>
                            </span>
                            <p>Unlimited Revisions</p>
                        </div>
                    </div>
                    <PackagesFeatures gig={gig}/>
                </article>
                <footer className="packages-footer">
                    <button onClick={onToggleDrawer}>Continue <span>→</span></button>
                </footer>
                {/* <a href="#">Compare packages</a> */}
            </div>
            <footer>
                {/* <button>Contact me</button> */}
            </footer>
        </section>
    )
}