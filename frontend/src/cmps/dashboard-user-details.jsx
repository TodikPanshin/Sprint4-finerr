import { ProgressBar } from "./progress-bar";


export function DashboardUserDetails({ user }) {
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    return (
        <div className="dashboard-user-details-container">
            <header className='dashboard-user-details-header'>
                <img className='user-img' src={user.imgUrl} alt="seller img" />
                <p className='user-name '>{user.fullname}</p>
                <p className='user-rate'>Level {user.rating.rate} Seller</p>
            </header>
            <ul className='user-dashboard-content clean-list'>
                <li ><p>Inbox response rate</p></li><span className="user-dashboard-progress-bar"><ProgressBar completed={100} /></span><span>100%</span>
                <li><p>Inbox response time</p></li><span className="user-dashboard-progress-bar"><ProgressBar completed={100} /></span><span>100%</span>
                <li><p>Order response rate</p></li><span className="user-dashboard-progress-bar"><ProgressBar completed={100} /></span><span>100%</span>
                <li><p>Delivered on time</p></li><span className="user-dashboard-progress-bar"><ProgressBar completed={100} /></span><span>100%</span>
                <li><p>Order completion</p></li><span className="user-dashboard-progress-bar"><ProgressBar completed={100} /></span><span>100%</span>
            </ul>
            <footer>
                <li className="clean-list">Balance available </li><span>US${user.sellerStats.balance}</span>
            </footer>
        </div>

    )
}