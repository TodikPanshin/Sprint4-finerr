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
import { SOCKET_EVENT_ORDER_GIG, socketService } from '../services/socket.service'


export function UserDashBoard() {
    const [user, setUser] = useState(userService.demoUser)
    const [isNewOrder, setIsNewOrder] = useState(false)
    const orders = useSelector(storeState => storeState.orderModule.orders)
    const { id } = useParams()
    const navigate = useNavigate()
    // const user = useSelector(storeState => storeState.userModule.user)
    if(!user.isSeller)navigate('/')
    console.log('user', user)
    console.log('orders', orders)


    useEffect(() => {
        socketService.on(SOCKET_EVENT_ORDER_GIG, onNewOrder)
        loadOrders(user)
    }, [isNewOrder])

    function onNewOrder() {
        loadOrders()
        setIsNewOrder(true)
        setTimeout(()=> setIsNewOrder(false), 4800)
    }


    async function handleUpdateOrder(order) {
        try {
            const updatedOrder = await updateOrder(order)
            console.log('Order updated:', updatedOrder)
        } catch (err) {
            console.log('Error updating order:', err)
        }
    }


    if (!user && !orders) return <div>Loading...</div>
    return (
        <section className='user-dashboard main-layout  full '>
            <div className='user-dashboard-container'>
                {isNewOrder && <div className="new-order-msg">New order has arrived</div>}
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