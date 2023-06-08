import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toggleDrawer } from '../store/system.actions'
import { removeCurrOrder } from '../store/order.actions'


export function OrderDrawer() {
  const isOpen = useSelector((storeState) => storeState.systemModule.isOpen)
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


  function handleClose() {
    toggleDrawer(false)
    removeCurrOrder()
  }

const updatedPrice=(currOrder)?currOrder.extras.packageSelected*currOrder.gig.price:0
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
                {currOrder&&<span className='drawer-package-price'>{updatedPrice}$</span>}
              </div>
              {currOrder&&<p>{currOrder.gig.title.split(' ').slice(2).join(' ')}</p>}
            </div>
            <div className='drawer-package-upgrade-details'>
              <div className='drawer-package-upgrade-title'>
                <h2>Upgrade your order with extras</h2>
              </div>
              <div className='drawer-package-upgrade-content'>
                {currOrder&&<h2 className='drawer-package-upgrade-content-title'>Additional revision (+{currOrder.gig.daysToMake} days)</h2>}
                <p>Add an additional revision your seller will provide after the delivery.</p>
              </div>
            </div>
          </div>
          <div className='upgrade-summary'>
            <div className='upgrade-summary-price'>
             {currOrder&& <span>{updatedPrice}$</span>}
              <span>single order</span>
            </div>
            <div className='upgrade-summary-details'>
              <span>Basic package</span>
              {currOrder&&<span>{currOrder.gig.daysToMake}-day delivery</span>}
              <span>Unlimited revision</span>
            </div>
          </div>
        </section>
        <footer className='drawer-footer'>
        {currOrder&& <button className='btn-black' onClick={() => navigate('/checkout')}>continue <span>({updatedPrice}$)</span></button>}
          <p className='drawer-footer-msg'>You won’t be charged yet</p>
        </footer>
      </div>
    </div>
  )
}
