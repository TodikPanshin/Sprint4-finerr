import { useState } from "react";
import { Link } from "react-router-dom";

import { setFilterBy } from "../store/gig.actions";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export function FilterBar({ filterBy }) {
    const [isOn, setIsOn] = useState({ pro: false, local: false, online: false })
    const [isOpen, setIsOpen] = useState({ sellerDetails: false, budget: false, deliveryTime: false, sort: false })
    const [newFilterBy, setNewFilterBy] = useState({ ...filterBy })

    const { ref, inView } = useInView({
        rootMargin: '-60px'
    })

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

    function onSortBy(sortBy) {
        console.log(sortBy)
    }

    const title = filterBy.tag ? filterBy.tag : 'All'
    return (
        <div className="filter-bar-container">
            <div className="filter-bar-header">
                <div className="filter-top">
                    <Link to={'/'} className="home-link">
                        <img src="https://www.svgrepo.com/show/435884/home.svg" alt="home" />
                    </Link> <span className="divider">/</span>
                    <a href="">{filterBy.tag}</a>
                </div>
                <h1 className="filter-title">{title}</h1>
                <p className="filter-description">Get a beautiful things people love to engage with.</p>
            </div>

            <div className="float-bar" ref={ref}></div>
            <main className={`filter-main ${inView ? '' : 'float main-layout full'}`}>

                <div className="top-filters">

                    <div className="floating-menu seller-details">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('sellerDetails')}>Seller Details
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.sellerDetails ? 'open' : ''}`}>
                            <div className="menu-items column">
                                <label htmlFor="top-rated"><input type="checkbox" className="checkbox top-rated" onChange={handleCheckboxFilter} />Top Rated Seller</label>
                                <label htmlFor="new-seller"><input type="checkbox" className="checkbox new-seller" onChange={handleCheckboxFilter} />New Seller</label>
                                <label htmlFor="level-2"><input type="checkbox" className="checkbox level-2" onChange={handleCheckboxFilter} />Level 2</label>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear">Clear All</button>
                                <button className="btn-apply">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className="floating-menu budget">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('budget')}>Budget
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.budget ? 'open' : ''}`}>
                            <div className="menu-items">
                                <form className="price-range" action="">
                                    <label htmlFor="min-price">MIN.<input type="text" className="number min-price" placeholder="Any"/><span className="currency">$</span></label>
                                    <label htmlFor="max-price">MAX.<input type="text" className="number max-price" placeholder="Any"/><span className="currency">$</span></label>
                                </form>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear">Clear All</button>
                                <button className="btn-apply">Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className="floating-menu delivery-time">
                        <div className="menu-button"
                            onClick={() => onToggleMenu('deliveryTime')}>Delivery time
                            <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        <div className={`menu-content ${isOpen.deliveryTime ? 'open' : ''}`}>
                            <div className="menu-items">
                                <form action="">
                                    <label className="time-checkbox-container">Express 24H
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                        <div className="outside"></div>
                                    </label>

                                    <label className="time-checkbox-container">Up to 3 days
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>

                                    <label className="time-checkbox-container">Up to 7 days
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>

                                    <label className="time-checkbox-container">Anytime
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </form>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear">Clear All</button>
                                <button className="btn-apply">Apply</button>
                            </div>
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
                <div className="sort-selection">Sort by:
                    <button onClick={() => onToggleMenu('sort')}>{`${filterBy.sort ? filterBy.sort : 'Best Selling'}`}
                        <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />

                        <div className={`sort-options ${isOpen.sort ? 'open' : ''}`}>
                            <button onClick={() => onSortBy('best-selling')}>Best Selling</button>
                            <button onClick={() => onSortBy('recommended')}>Recommended</button>
                            <button onClick={() => onSortBy('newest Arrival')}>Newest Arrival</button>
                        </div>
                    </button>
                </div>
                {/* <button>Best Selling <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" /></button></div> */}
            </div>
        </div>
    )
}