import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toggleDrawer } from '../store/system.actions'
import { removeCurrOrder } from '../store/order.actions'


export function OrderDrawer() {
  const isOpen = useSelector((storeState) => storeState.systemModule.isOpen)
  const [clicked, setClicked] = useState(false)
  const currOrder = useSelector((storeState) => storeState.orderModule.currOrder)
  const navigate = useNavigate()

  useEffect(() => {
    function handleKeyPress(ev) {
      if (ev.keyCode === 27) {
        handleClose()
      }
    }

    // function handleWheel(ev) {
    //   if (isOpen) {
    //     ev.preventDefault()
    //   }
    // }

    document.addEventListener('keydown', handleKeyPress)
    // window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
      // window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  function onHandleClick() {
    setClicked(!clicked)
  }

  function handleClose() {
    toggleDrawer(false)
    setTimeout(() => {
      removeCurrOrder()
    }, 1000)
  }

  let updatedPrice = (currOrder) ? currOrder.extras.packageSelected * currOrder.gig.price : 0
  const updatedDays = (currOrder) ? currOrder.extras.packageSelected * currOrder.gig.daysToMake : 0
  const extraFastPrice = 50


  const drawerClassName = isOpen ? 'order-drawer open' : 'order-drawer'


  return (
    <div >
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}></div>
      <div className={drawerClassName}>
        <header className='drawer-header flex justify-between'>
          <h2 className='drawer-title'>Order options</h2>
          <span onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </header>
        <section className='drawer-main'>
          <div className='test flex column'>
            <div className='drawer-package-details'>
              <div className='flex justify-between'>
                <span className='package-details-type'>Basic</span>
                {currOrder && <span className='drawer-package-price'>US${updatedPrice}</span>}
              </div>
              {currOrder && <p>{currOrder.gig.title.split(' ').slice(2).join(' ')}</p>}
            </div>
            <div className='drawer-package-upgrade-details'>
              <div className='drawer-package-upgrade-title'>
                <h2>Upgrade your order with extras</h2>
              </div>
              <div className={`drawer-package-upgrade-content ${clicked ? 'clicked' : ''}`} onClick={onHandleClick}>
                {currOrder && <h2 className='drawer-package-upgrade-content-title'>Extra-fast {currOrder.extras.packageSelected}-day delivery</h2>}
                <p>US${extraFastPrice}</p>
              </div>
            </div>
          </div>
          <div className='upgrade-summary'>
            <div className='upgrade-summary-price'>
              {currOrder && <span>US${updatedPrice}</span>}
              <span>single order</span>
            </div>
            <div className='upgrade-summary-details'>
              <span>Basic package</span>
              {currOrder && <span>{updatedDays}-day delivery</span>}
              <span>Unlimited revision</span>
            </div>
          </div>
        </section>
        <footer className='drawer-footer'>
          {currOrder && <button className='btn-black' onClick={() => navigate('/checkout')}>continue <span>({updatedPrice}$)</span></button>}
          <p className='drawer-footer-msg'>You won’t be charged yet</p>
        </footer>
      </div>
    </div>
  )
}
