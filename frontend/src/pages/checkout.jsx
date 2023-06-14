import { orderService } from "../services/order.service"
import { PaymentCard } from "../cmps/payment-card";
import { PaymentDetails } from "../cmps/payment-details";
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addOrder, removeCurrOrder } from "../store/order.actions";
import { showSuccessMsg } from "../services/event-bus.service.js"


export function Checkout() {
  const currOrder = useSelector((storeState) => storeState.orderModule.currOrder) || orderService.getLocalCurrOrder()
  const [cardDetails, setCardDetails] = useState(orderService.getEmptyCard)
  const navigate = useNavigate()


  function onSetCardDetails(cardDetails) {
    setCardDetails(cardDetails)
  }

  function onCheckout(ev) {
  ev.preventDefault()
  setCardDetails(orderService.getEmptyCard)

  addOrder(currOrder)
    .then(() => {
      showSuccessMsg(`Your order has been added ${currOrder.buyer.fullname}`)
      removeCurrOrder()
      navigate('/gig') 
    })
    .catch((err) => {
      console.log("Cannot save order:", err)
    })
  }







  console.log('card test   111111111111111111111111', cardDetails)


  return (
    <section className="checkout-layout">
      <PaymentCard onSetCardDetails={onSetCardDetails} onCheckout={onCheckout} />
      <PaymentDetails currOrder={currOrder} checkClass={orderService.checkClass} onCheckout={onCheckout} />
    </section>
  )
}

