import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { toggleDrawer } from '../store/system.actions'
export function OrderDrawer() {
  // const [isOpen, setIsOpen] = useState(false)
  const isOpen = useSelector((storeState) => storeState.systemModule.isOpen)

  useEffect(() => {
    const handleKeyPress = (ev) => {
      if (ev.keyCode === 27) {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])


  function handleToggleDrawer() {
    toggleDrawer( !isOpen)
  }

  function handleClose() {
    toggleDrawer(false)
  }

  const drawerClassName = isOpen ? 'order-drawer open' : 'order-drawer'

  return (
    <div>
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
                <span className='drawer-package-price'>12$</span>
              </div>
              <p>Mini I will write dog articles and pet blog content</p>
            </div>
            <div className='drawer-package-upgrade-details'>
              <div className='drawer-package-upgrade-title'>
                <h2>Upgrade your order with extras</h2>
              </div>
              <div className='drawer-package-upgrade-content'>
                <h2 className='drawer-package-upgrade-content-title'>Additional revision (+3 days)</h2>
                <p>Add an additional revision your seller will provide after the delivery.</p>
              </div>
            </div>
          </div>
          <div className='upgrade-summary'>
            <div className='upgrade-summary-price'>
              <span>12$</span>
              <span>single order</span>
            </div>
            <div className='upgrade-summary-details'>
              <span>Basic package</span>
              <span>5-day delivery</span>
              <span>1 revision</span>
            </div>
          </div>
        </section>
        <footer className='drawer-footer'>
          <button className='btn-black'>continue <span>(12$)</span></button>
          <p className='drawer-footer-msg'>You won’t be charged yet</p>
        </footer>
      </div>
    </div>
  )
}
