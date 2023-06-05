import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import {toggleDrawer} from '../store/'


type Anchor = 'right'

export function OrderDrawer() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return
        }


        setState({ ...state, [anchor]: open });
      }
  const handleClose = (anchor: Anchor) => () => {
    setState({ ...state, [anchor]: false })
  }

    const list = (anchor: Anchor) => (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          gridTemplateRows: 'auto 1fr auto',
          height: '100%',
          maxWidth: 480,
        }}
        role="dialog"


      >

        <header className='drawer-header flex justify-between  '>
          <h2 className='drawer-title'>Order options</h2>
          <span onClick={handleClose(anchor)}><FontAwesomeIcon icon={faX} /></span>
        </header>
        <section className='drawer-main'>
          <div className='test flex column'>
            <div className='drawer-package-details'>
              <div className='flex justify-between'>
                <span className='package-details-type'>Basic</span>
                <span className='drawer-package-price'>12$</span>
              </div>
              <p>Mini I will write dog articles and pet blog content
              </p>
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

      </Box>
    );

    return (
      <div>
        {/* Button to open the drawer */}
        <button onClick={toggleDrawer('right', true)}>Open Drawer</button>

        {/* SwipeableDrawer component */}
        <SwipeableDrawer
          anchor="right"
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}

        >
          {list('right')}
        </SwipeableDrawer>
      </div>
    )
  }
