import { ReactComponent as CreditCard } from '../assets/img/credit-card.svg'
import { useForm } from "../customHooks/useForm";
import { orderService } from "../services/order.service"

export function PaymentCard({ onSetCardDetails}) {
    const [cardDetailsForm, setCardDetailsForm, handleChange] = useForm(orderService.getEmptyCard(), onSetCardDetails)



    function onSubmitCard(ev) {
        ev.preventDefault()
        onSetCardDetails(cardDetailsForm)
    }



    const cardIcon = <CreditCard />

    return (
        <section className="payment-container">
            <header>
                <h4 className="payment-title">Payment Options</h4>
            </header>
            <form className="payment-card-form" onSubmit={onSubmitCard}>
                <div className="form-input flex column">
                    <label htmlFor="cardNumber">Card number</label>
                    {cardIcon}
                    <input
                        type="number"
                        name="cardNumber"
                        id="cardNumber"
                        value={cardDetailsForm.cardNumber}
                        onChange={handleChange}
                        placeholder={`    0000 0000 0000 0000`}
                        pattern="[0-9]{4}\D*[0-9]{4}\D*[0-9]{4}\D*[0-9]{4}"
                        required
                    />
                </div>
                <div className="flex form-group">
                    <div className="form-input ">
                        <label htmlFor="expiryDate">Expiry date</label>
                        <input
                            type="number"
                            name="expiryDate"
                            id="expiryDate"
                            value={cardDetailsForm.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YY"
                            pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="cvv">Security code</label>
                        <input
                            type="number"
                            name="SecurityCode"
                            id="Security code"
                            value={cardDetailsForm.SecurityCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group flex">
                    <div className="form-input">
                        <label htmlFor="first-name">First name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="first-name"
                            value={cardDetailsForm.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-input">
                        <label htmlFor="last-name">Last name</label>
                        <input
                            type="text"
                            name="lastName"
                            id="last-name"
                            value={cardDetailsForm.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
            </form>
        </section>
    )
}