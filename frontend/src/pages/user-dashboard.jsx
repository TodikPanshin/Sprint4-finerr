import { useEffect, useState } from 'react'
import { useParams, useNavigate, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userService } from '../services/user.service'
import { DashboardUserDetails } from '../cmps/dashboard-user-details'
import { DashboardCharts } from '../cmps/dashboard-charts'
import { UserRevenue } from '../cmps/user-revenue'
import { loadOrders, updateOrder } from '../store/order.actions'
import { useEffectUpdate } from '../customHooks/useEffectUpdate'
import { OrderPreview } from '../cmps/orderPreview'


export function UserDashBoard() {
    const [user, setUser] = useState(userService.demoUser)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const { id } = useParams()
    const navigate = useNavigate()
    // const user = useSelector(storeState => storeState.userModule.user)
    // if(!user.isSeller)navigate('/')
    console.log('user', user)
    console.log('orders', orders)

    useEffect(() => {
        loadOrders()
    }, [])

    async function handleUpdateOrder(order) {
        try {
            const updatedOrder = await updateOrder(order)
            console.log('Order updated:', updatedOrder)
        } catch (err) {
            console.log('Error updating order:', err)
        }
    }


    if (!user&&!orders) return <div>Loading...</div>
    return (
        <section className='user-dashboard main-layout  full '>
            <div className='user-dashboard-container'>
                <DashboardUserDetails user={user} />
                <div className='dashboard-content flex justify-between'>
                    <UserRevenue revenue={user.sellerStats.revenue} />
                    <div className='dashboard-orders'>
                        <h1>Orders Status</h1>
                        < DashboardCharts orders={orders} />
                    </div>
                </div>
                <div className='order-index'>
                    <ul className='order-list clean-list'>
                        {orders.map(order =>
                            <li className='order-preview' key={order._id}>
                                <OrderPreview order={order} handleUpdateOrder={handleUpdateOrder} />
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    )
}