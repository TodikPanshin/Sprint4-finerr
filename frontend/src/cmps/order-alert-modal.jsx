import { useSelector } from "react-redux";
import { useEffect } from "react";
import { OrderPreview } from "./orderPreview";
import { loadOrders } from "../store/order.actions";

export function OrderAlertModal() {
    const orders = useSelector(storeState => storeState.orderModule.orders)

    useEffect(() => {
        loadOrders()
    }, [])

    return (
        <div className="order-alert-modal-container">
        <ul className='order-alert-modal clean-list'>
            {orders.map(order =>
                <li className='order-preview' key={order._id}>
                    <OrderPreview order={order} isEditable={false} />
                </li>
            )}
        </ul>
        </div>
    )
}