

export function DashboardUserDetails({user}){
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' })
    return(
        <div className="dashboard-user-details-container">
        <header className='dashboard-user-details-header'>
                    <img className='user-img' src={user.imgUrl} alt="seller img" />
                    <p className='user-name '>{user.fullname}</p>
                    <p className='user-rate'>Level {user.rating.rate} Seller</p>
            </header>
            <ul className='user-dashboard-content clean-list'>
                <li >Inbox response rate </li><span>100%</span>
                <li>Inbox response time</li><span>100%</span>
                <li>Order response rate</li><span>100%</span>
                <li>Delivered on time</li><span>100%</span>
                <li>Order completion</li><span>100%</span>
            </ul>
            <footer>
                <li className="clean-list">Earned in {currentMonth}</li><span>US${10000}</span>
            </footer>
            </div>
            
    )
}