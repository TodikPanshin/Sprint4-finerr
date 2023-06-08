import { useState } from "react";
import { Link } from "react-router-dom";

import { setFilterBy } from "../store/gig.actions";
import { useSelector } from "react-redux";

export function FilterBar({ filterBy }) {
    const [isOn, setIsOn] = useState({ pro: false, local: false, online: false })
    const [isOpen, setIsOpen] = useState({ sellerDetails: false, budget: false, deliveryTime: false })
    const [newFilterBy, setNewFilterBy] = useState({ ...filterBy })

    const gigs = useSelector(storeState => storeState.gigModule.gigs)

    function onSwitchFiler(item) {
        setIsOn(prevSet => ({ ...prevSet, [item]: !isOn[item] }))
        setFilterBy({ ...filterBy, [item]: !isOn[item] })
    }

    function onToggleMenu(menu) {
        setIsOpen(prevSet => ({ ...prevSet, [menu]: !isOpen[menu] }))
    }

    function handleCheckboxFilter({ target }) {
        setNewFilterBy(prevFilterBy => ({ ...prevFilterBy, [target.className]: target.checked }))
        setFilterBy(newFilterBy)
    }


    const title = filterBy.tag ? filterBy.tag : 'All'
    return (
        <div className="filter-bar-container">
            <div className="filter-bar-header">
                <p>
                    <Link to={'/'}>
                        <img src="https://www.svgrepo.com/show/435884/home.svg" alt="home" />
                    </Link> /
                    <a href="">{filterBy.tag}</a>
                </p>
                <h1 className="filter-title">{title}</h1>
                <p>Get a beautiful things people love to engage with.</p>
            </div>
            <div className="float-bar"></div>
            <main className="filter-main">
                <div className="top-filters">

                    <div className="floating-menu seller-details">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('sellerDetails')}>Seller Details
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.sellerDetails ? 'open' : ''}`}>
                            <label htmlFor="top-rated">Top Rated Seller<input type="checkbox" className="checkbox top-rated" onChange={handleCheckboxFilter} /></label>
                            <label htmlFor="new-seller">New Seller<input type="checkbox" className="checkbox new-seller" onChange={handleCheckboxFilter} /></label>
                            <label htmlFor="level-2">Level 2<input type="checkbox" className="checkbox level-2" onChange={handleCheckboxFilter} /></label>
                            <button>Clear All</button>
                            <button>Apply</button>
                        </div>
                    </div>

                    <div className="floating-menu budget">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('budget')}>Budget
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.budget ? 'open' : ''}`}>
                            <form action="">
                                <label htmlFor="min-price">MIN.<input type="text" className="number min-price" /></label>
                                <label htmlFor="max-price">MAX.<input type="text" className="number max-price" /></label>
                                <button>Clear All</button>
                                <button>Apply</button>
                            </form>
                        </div>
                    </div>

                    <div className="floating-menu delivery-time">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('deliveryTime')}>Delivery time
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.deliveryTime ? 'open' : ''}`}>
                            <form action="">
                                <label htmlFor=""><input type="checkbox" />Express 24H</label>
                                <label htmlFor=""><input type="checkbox" />Up to 3 days</label>
                                <label htmlFor=""><input type="checkbox" />Up to 7 days</label>
                                <label htmlFor=""><input type="checkbox" />Anytime</label>
                            </form>
                            <button>Clear All</button>
                            <button>Apply</button>
                        </div>
                    </div>
                </div>

                <div className="checkbox-filters">
                    <button onClick={() => onSwitchFiler('pro')}
                        className="switchToggle">
                        <div className={`circle switch-${isOn.pro ? 'on' : 'off'}`}></div>
                    </button><p>Pro services</p>

                    <button onClick={() => onSwitchFiler('local')}
                        className="switchToggle">
                        <div className={`circle switch-${isOn.local ? 'on' : 'off'}`}></div>
                    </button><p>Local sellers</p>

                    <button onClick={() => onSwitchFiler('online')}
                        className="switchToggle">
                        <div className={`circle switch-${isOn.online ? 'on' : 'off'}`}></div>
                    </button><p>Online sellers</p>
                </div>
            </main>
            
            <div className="filter-bar-footer">
                <div>{`${gigs.length} services available`}</div>
                <label for="sortBy">Sort by: 
                    <select className="sort-selection" name="sortBy" id="sortBy">
                        <option value="best-selling">Best Selling</option>
                        <option value="recommended">Recommended</option>
                        <option value="newest-arrival">Newest Arrival</option>
                    </select>
                </label>
                {/* <button>Best Selling <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" /></button></div> */}
            </div>
        </div>
    )
}