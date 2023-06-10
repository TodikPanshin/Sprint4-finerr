import { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SellerDetails } from '../cmps/seller-details.jsx'
import { userService } from '../services/user.service.js'
import { DashboardUserDetails } from '../cmps/dashboard-user-details.jsx'
import { DashboardCharts } from '../cmps/dashboard-charts.jsx'

export function UserDashBoard() {
    const [user, setUser] = useState(userService.demoUser)
    const { id } = useParams()
    const navigate = useNavigate()
    // const user = useSelector(storeState => storeState.userModule.user)
    // if(!user.isSeller)navigate('/')
    return (
        <section className='user-dashboard  full '>
            <DashboardUserDetails user={user} />
            <div className='dashboard-content flex justify-between'>
                {/* <h1>Welcome,{user.fullname} </h1> */}
                <div className='dashboard-funds'>
                    <h4>Available funds</h4>
                    <div>
                        <h1>US${1000}</h1>
                    </div>
                </div>
                <div className='dashboard-orders'>
                    <h4>Completed Orders</h4>
                   < DashboardCharts/>
                </div>
            </div>


        </section>
    )
}