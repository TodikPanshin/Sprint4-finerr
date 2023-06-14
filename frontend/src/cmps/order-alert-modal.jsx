import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { OrderPreview } from "./orderPreview"
import { loadOrders } from "../store/order.actions"

export function OrderAlertModal() {
    const orders = useSelector((storeState) => storeState.orderModule.orders)
    // const user = useSelector((storeState) => storeState.userModule.user)


    useEffect(() => {
        // loadOrders(user)
        loadOrders()
    }, [])

    return (
        <div className="order-alert-modal-container">
            <ul className="order-alert-modal clean-list">
                {!orders || !orders.length ? (
                    <h3>No orders</h3>
                ) : (
                    orders.map((order) => (
                        <li className="order-preview" key={order._id}>
                            <OrderPreview order={order} isEditable={false} />
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}
