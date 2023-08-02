import { ProgressBar } from "./progress-bar";
import { utilService } from "../services/util.service";
import React, { useEffect, useState } from "react";

export function DashboardUserDetails({ user }) {
    const [randomNum, setRandomNums] = useState([])
    const progresBarParams = ['Inbox response rate', 'Inbox response time', 'Order response rate', 'Delivered on time', 'Order completion']

    useEffect(() => {
        const newRandomNums = progresBarParams.map(() => getProgressRate())
        setRandomNums(newRandomNums)
    }, [])

    function getProgressRate() {
        return utilService.getRandomIntInclusive(90, 100)
    }

    return (
        <div className="dashboard-user-details-container">
            <header className='dashboard-user-details-header'>
                <img className='user-img' src={user.imgUrl} alt="seller img" />
                <p className='user-name '>{user.fullname}</p>
                <p className='user-rate'>Level {user.rating.rate} Seller</p>
            </header>
            <ul className='user-dashboard-content clean-list'>
                {progresBarParams.map((params, idx) =>
                    <React.Fragment key={idx} >
                        <li ><p>{params}</p></li>
                        <span className="user-dashboard-progress-bar">
                            <ProgressBar completed={randomNum[idx]} />
                        </span>
                        <span>{randomNum[idx]}%</span>
                    </React.Fragment>
                )}
            </ul>
            <footer>
                <li className="clean-list">Balance available </li><span>US${user.sellerStats.balance}</span>
            </footer>
        </div>

    )
}