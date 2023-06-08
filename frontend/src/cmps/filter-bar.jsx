import { useState } from "react";
import { Link } from "react-router-dom";

export function FilterBar({ filterBy }) {
    const [proIsOn, setProIsOn] = useState(false)
    const [localIsOn, setLocalIsOn] = useState(false)
    const [onlineIsOn, setOnlineIsOn] = useState(false)

    function onSwitchFiler(item) {
        console.log(item)

        if (item === 'pro') setProIsOn(!proIsOn)
        if (item === 'local') setLocalIsOn(!localIsOn)
        if (item === 'online') setOnlineIsOn(!onlineIsOn)
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
                    <button>Service Options <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="🔻" /></button>
                    <button>Seller Details <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="🔻" /></button>
                    <button>Budget <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="🔻" /></button>
                    <button>Delivery time <img src="https://www.svgrepo.com/show/511355/arrow-down-339.svg" alt="🔻" /></button>
                </div>

                <div className="checkbox-filters">
                    <button onClick={() => onSwitchFiler('pro')}
                        className="switchToggle">
                        <div className={`circle switch-${proIsOn ? 'on' : 'off'}`}></div>
                    </button><p>Pro services</p>

                    <button onClick={() => onSwitchFiler('local')}
                        className="switchToggle">
                        <div className={`circle switch-${localIsOn ? 'on' : 'off'}`}></div>
                    </button><p>Local sellers</p>

                    <button onClick={() => onSwitchFiler('online')}
                        className="switchToggle">
                        <div className={`circle switch-${onlineIsOn ? 'on' : 'off'}`}></div>
                    </button><p>Online sellers</p>
                </div>
            </main>
            <div className="filter-bar-footer">
                <div>services available</div>
                <div>Sort By: <button>Best Selling 🔽</button></div>
            </div>
        </div>
    )
}