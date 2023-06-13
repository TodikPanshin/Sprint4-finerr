import { useEffect, useRef, useState } from "react"


export function OrderPreview({ order, handleUpdateOrder }) {
    const currency = 'US$'
    const serviceFee = 10
    const extraFastPrice = 50
    const price = order.gig.price * order.extras.packageSelected
    const updatedPrice = (order.extras.fastDelivery) ? price + extraFastPrice : price
    const vat = (((updatedPrice) + serviceFee) * 0.17)
    const [isOpen, setIsOpen] = useState(false)
    const [orderStatus, setOrderStatus] = useState(order.status)
    const menuRef = useRef([])


    function onToggleMenu() {
        setIsOpen((isOpen) => !isOpen)
    }

    function handleChange(value) {
        const updatedOrder = { ...order, status: value }
        setOrderStatus(value)
        setIsOpen(false)
        handleUpdateOrder(updatedOrder)
    }

    useEffect(() => {

        function handleKeyDown(ev) {
            if (ev.keyCode === 27) {
                setIsOpen(false)
            }
        }


        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const availableStatusOptions = ["Pending", "Approved", "Declined",'Completed'].filter((status) => status !== orderStatus)


    return (
        <>
            <img className="order-preview-gig-img" src={order.gig.imgUrls} alt="gig img" />
            <div className="order-preview-buyer-details">
                <img src={order.buyer.imgUrl} alt="buyer img" />
                <p>{order.buyer.fullname}</p>
            </div>
            <div className="order-preview-price">
                <p>Price</p><span>{currency}{(updatedPrice + serviceFee + vat).toFixed(2)}</span>
            </div>
            <div className="order-preview-order-date">
                <p>Order Date</p>
                <span>{order.currDate}</span>
            </div>
            <div className="floating-menu order-status">
                <div className={`menu-button ${isOpen.sellerDetails ? 'active' : ''} ${orderStatus.toLowerCase()}`}
                    onClick={() => onToggleMenu()}>{orderStatus}
                </div>
                {isOpen && <div className="outside" onClick={onToggleMenu}></div>}
                <div className={`menu-content ${isOpen ? "open" : ""}`}>
                    <div className="menu-items column">
                        {availableStatusOptions.map((status) => (
                            <button key={status} className={`btn-${status}`} onClick={() => handleChange(status.toLowerCase())}>
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}