import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { setFilterBy } from "../store/gig.actions";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

export function FilterBar() {
    const gigs = useSelector(storeState => storeState.gigModule.gigs)
    const filterBy = useSelector(storeState => storeState.gigModule.filterBy)


    const [isOn, setIsOn] = useState({ pro: false, local: false, online: false })
    const [isOpen, setIsOpen] = useState({ sellerDetails: false, budget: false, deliveryTime: false, sort: false })
    const [newFilterBy, setNewFilterBy] = useState({ speaks: [] })
    const [isFilter, setIsFilter] = useState(false)

    const menuRef = useRef([])

    const { ref, inView } = useInView({
        rootMargin: '20px'
    })

    useEffect(() => {
        onClearFields()
    }, [])



    function onSwitchFiler(item) {
        setIsOn(prevSet => ({ ...prevSet, [item]: !isOn[item] }))
        setFilterBy({ ...filterBy, [item]: !isOn[item] })
    }

    function onToggleMenu(menu) {
        const otherMenus = Object.keys(isOpen).filter(key => key !== menu).forEach(key => isOpen[key] = false)
        setIsOpen({ ...otherMenus, [menu]: !isOpen[menu] })
    }

    function handleChange({ target }) {
        let { value, className, name: field, type, checked } = target

        if (field === "speaks") {
            newFilterBy.speaks.push(className)
            return
        }

        setNewFilterBy(prevFilterBy => ({
            ...prevFilterBy, [field]: type === "checkbox" ? checked
                : target.className === 'number' ? +value : value
        }))
    }

    function onSubmitFilter(menu) {
        onToggleMenu(menu)
        setFilterBy({ ...filterBy, ...newFilterBy })
        setIsFilter(true)
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    function onClearFields() {
        menuRef.current.forEach(menu => {
            menu.checked = false
            menu.value = ''
        })
        setIsOpen(prevSet => ({ ...prevSet, sellerDetails: false, budget: false, deliveryTime: false, sort: false }))
    }

    function onClearFilters() {
        onClearFields()
        setIsOn(prevSet => ({ ...prevSet, pro: false, local: false, online: false }))
        setNewFilterBy({ speaks: [] })
        setFilterBy({})
        setIsFilter(false)
    }

    function onSortBy(sortBy) {
        setFilterBy({ ...filterBy, ...newFilterBy, sortBy })
    }

    const title = filterBy.tag ? filterBy.tag : filterBy.txt ? filterBy.txt : 'All'
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
                        <div className={`menu-button ${isOpen.sellerDetails ? 'active' : ''}`}
                            onClick={() => onToggleMenu('sellerDetails')}>Seller Details
                            <img className={`arrow-${isOpen.sellerDetails ? 'up' : 'down'}`} src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        {isOpen.sellerDetails && <div className="outside" onClick={() => onToggleMenu('sellerDetails')}></div>}
                        <div className={`menu-content ${isOpen.sellerDetails ? 'open' : ''}`}>
                            <div className="menu-items column">
                                <label htmlFor="top-rated"><input ref={(el) => { menuRef.current[0] = el }}
                                    type="checkbox" className="checkbox" name="topRated"
                                    onChange={handleChange} />Top Rated Seller</label>
                                <label htmlFor="level-2"><input ref={(el) => { menuRef.current[1] = el }}
                                    type="checkbox" className="checkbox" name="level2"
                                    onChange={handleChange} />Level 2</label>
                                <div className="seller-speaks">
                                    <h3>Seller Speaks</h3>
                                    <label htmlFor="Hebrew"><input ref={(el) => { menuRef.current[2] = el }}
                                        type="checkbox" className="Hebrew" name="speaks"
                                        onChange={handleChange} />Hebrew</label>
                                    <label htmlFor="English"><input ref={(el) => { menuRef.current[3] = el }}
                                        type="checkbox" className="English" name="speaks"
                                        onChange={handleChange} />English</label>
                                    <label htmlFor="French"><input ref={(el) => { menuRef.current[4] = el }}
                                        type="checkbox" className="French" name="speaks"
                                        onChange={handleChange} />French</label>
                                    <label htmlFor="Spanish"><input ref={(el) => { menuRef.current[5] = el }}
                                        type="checkbox" className="Spanish" name="speaks"
                                        onChange={handleChange} />Spanish</label>
                                </div>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear" onClick={() => onClearFields('sellerDetails')}>Clear All</button>
                                <button className="btn-apply" onClick={() => onSubmitFilter('sellerDetails')}>Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className="floating-menu budget">
                        <div className={`menu-button ${isOpen.budget ? 'active' : ''}`}
                            onClick={() => onToggleMenu('budget')}>Budget
                            <img className={`arrow-${isOpen.budget ? 'up' : 'down'}`}
                                src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        {isOpen.budget && <div className="outside" onClick={() => onToggleMenu('budget')}></div>}
                        <div className={`menu-content ${isOpen.budget ? 'open' : ''}`}>
                            <div className="menu-items">
                                <form className="price-range" action="">
                                    <label htmlFor="min-price">MIN.<input ref={(el) => { menuRef.current[10] = el }}
                                        type="text" className="number" name="minPrice" placeholder="Any"
                                        onChange={handleChange} /><span className="currency">$</span></label>
                                    <label htmlFor="max-price">MAX.<input ref={(el) => { menuRef.current[11] = el }}
                                        type="text" className="number" name="maxPrice" placeholder="Any"
                                        onChange={handleChange} /><span className="currency">$</span></label>
                                </form>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear" onClick={onClearFields}>Clear All</button>
                                <button className="btn-apply" onClick={() => onSubmitFilter('budget')}>Apply</button>
                            </div>
                        </div>
                    </div>

                    <div className="floating-menu delivery-time">
                        <div className={`menu-button ${isOpen.deliveryTime ? 'active' : ''}`}
                            onClick={() => onToggleMenu('deliveryTime')}>Delivery time
                            <img className={`arrow-${isOpen.deliveryTime ? 'up' : 'down'}`}
                                src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />
                        </div>
                        {isOpen.deliveryTime && <div className="outside"
                            onClick={() => onToggleMenu('deliveryTime')}></div>}
                        <div className={`menu-content ${isOpen.deliveryTime ? 'open' : ''}`}>
                            <div className="menu-items">
                                <label className="time-checkbox-container">Express 24H
                                    <input ref={(el) => { menuRef.current[20] = el }} type="radio"
                                        onChange={handleChange} className="number" name="time" value="1" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="time-checkbox-container">Up to 3 days
                                    <input ref={(el) => { menuRef.current[21] = el }} type="radio"
                                        onChange={handleChange} className="number" name="time" value="3" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="time-checkbox-container">Up to 7 days
                                    <input ref={(el) => { menuRef.current[22] = el }} type="radio"
                                        onChange={handleChange} className="number" name="time" value="7" />
                                    <span className="checkmark"></span>
                                </label>

                                <label className="time-checkbox-container">Anytime
                                    <input ref={(el) => { menuRef.current[23] = el }} type="radio"
                                        onChange={handleChange} className="number" name="time" value="any" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="filter-menu-btns-container">
                                <button className="btn-clear" onClick={onClearFields}>Clear All</button>
                                <button className="btn-apply" onClick={() => onSubmitFilter('delivery-time')}>Apply</button>
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
            {isFilter && <div className="active-filter-line" onClick={onClearFilters}>Clear All Filters</div>}

            <div className="filter-bar-footer">
                <div>{`${gigs.length} services available`}</div>
                <div className="sort-selection">Sort by:
                    <div className="sort-btn" onClick={() => onToggleMenu('sort')}>{`${filterBy.sortBy ? filterBy.sortBy : 'Best Selling'}`}
                        <img className={`arrow-${isOpen.sort ? 'up' : 'down'}`} src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="v" />

                        {isOpen.sort && <div className="outside" onClick={() => onToggleMenu('sort')}></div>}
                        <div className={`sort-options ${isOpen.sort ? 'open' : ''}`}>
                            <button onClick={() => onSortBy('Best Selling')}>Best Selling</button>
                            <button onClick={() => onSortBy('Recommended')}>Recommended</button>
                            <button onClick={() => onSortBy('Price')}>Price</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}