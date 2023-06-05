import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

import { demoOrders } from '../data/demo.orders.js'

const ORDER_STORAGE_KEY = 'orderDB'

async function query() {
    var orders = await storageService.query(ORDER_STORAGE_KEY)

    return orders
}

function getById(orderId) {
    return storageService.get(STORAGE_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(STORAGE_KEY, orderId)
}

async function save(order) {
    var savedGig
    if (order._id) {
        savedGig = await storageService.put(STORAGE_KEY, order)
    } else {
        // Later, owner is set by the backend
        order.owner = userService.getLoggedinUser()
        savedGig = await storageService.post(STORAGE_KEY, order)
    }
    return savedGig
}

function getEmptyOrder() {
    return {
        buyer: userService.getLoggedinUser(),
        seller: '',
        gig: {
            _id: '',
            name: '',
            price: '',
            imgUrl:'',
        },
        status: 'Pending'
    }
}


function _createDemoOrder() {
    let orders = localStorage.getItem(STORAGE_KEY)
    if (!orders || !orders.length) {
        orders = demoOrders
        localStorage.setItem(STORAGE_KEY, JSON.stringify(orders))
    }
}


//  const orders = [
//   {
//     "_id": "o1225",
//     "buyer": "mini-user",
//     "seller": "mini-user",
//     "gig": {
//       "_id": "i101",
//       "name": "Design Logo",
//       "price": 20
//     },
//     "status": "pending"
//   }
// ]


// On the Gigs page, you can see statuses:
// Active: These are your Gigs, which are currently available in the Fiverr marketplace.
// Pending approval: These are your Gigs, which require our content team's approval before becoming available. This may be caused by an uploaded video, which needs to be approved.
// Requires modification: These are your Gigs, which were reviewed by the Fiverr content team and needs changes before becoming available.
// Draft: These are your Gigs, which you haven't published yet.
// Denied: These are your Gigs, which were denied for various reasons, such as videos that don't meet the criteria for Fiverr's site or text, which may be inappropriate.
// Paused: These are your Gigs that are not available. You can select these Gigs and make them active. If they contain video, they will need to be approved first.

// ACTIVE Your Gig is visible and may be ordered by all users.
// DRAFT You need to finish editing your Gig before it goes live.
// PAUSED No one can see your Gig. You may reactivate it whenever you like.
// DENIED This Gig failed to pass our review and is not visible to anyone.
// ON HOLD This Gig is disabled due to inactivity. You can reactivate it later.
// PENDING APPROVAL Gig is pending Fiverr's review and is not yet available.
// EXPRESS Express Gig. You must deliver it within 24 hours.
// FEATURED Your gig was handpicked by Fiverr and will get higher exposure.
// ATTENTION Your Gig requires some modifications before it goes live.