import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.js'

import { demoOrders } from '../data/demo.gigs.js'

const ORDER_STORAGE_KEY = 'orderDB'
const CURR_ORDER_STORAGE_KEY = 'currOrderDB'

export const orderService = {

    query,
    getById,
    remove,
    save,
    getCurrOrder,
    checkClass,
    saveLocalCurrOrder,
    getLocalCurrOrder,
    removeLocalCurrOrder,
    getEmptyCard,
}

_createDemoOrder()

async function query(user={}) {
    var orders = await storageService.query(ORDER_STORAGE_KEY)
    console.log('from back',user)
  if (!user||user._id==='6489c2c8cf5c1248e8e898b3')return orders
      if (user.isSeller) {
        orders = orders.filter((order) => order.seller._id === user._id)
      } 
      if (!user.hasOwnProperty('isSeller')||!user.isSeller) {
        orders = orders.filter((order) => order.buyer._id === user._id)
      }
  
      return orders
    
  }
  

function getById(orderId) {
    return storageService.get(ORDER_STORAGE_KEY, orderId)
}

async function remove(orderId) {
    await storageService.remove(ORDER_STORAGE_KEY, orderId)
}

async function save(order) {
    var savedOrder
    if (order._id) {
        savedOrder = await storageService.put(ORDER_STORAGE_KEY, order)
    } else {
        savedOrder = await storageService.post(ORDER_STORAGE_KEY, order)
    }
    return savedOrder
}

function getCurrOrder(gig) {
    const guest = {
        fullname: "guest",
        imgUrl: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
        _id: utilService.makeId()
    }

    const loggedInUser = userService.getLoggedInUser()

    return {
        buyer: loggedInUser ? loggedInUser : guest,
        seller: gig.owner,
        gig: {
            _id: gig._id,
            title: gig.title,
            price: gig.price,
            imgUrls: gig.imgUrls[0],
            featuresList: gig.featuresList,
            daysToMake: gig.daysToMake
        },
        status: 'Pending',
        extras: gig.extras,
        currDate: new Date,
    }
}

function saveLocalCurrOrder(currOrder) {
    sessionStorage.setItem(CURR_ORDER_STORAGE_KEY, JSON.stringify(currOrder))
    return currOrder
}

function getLocalCurrOrder() {
    return JSON.parse(sessionStorage.getItem(CURR_ORDER_STORAGE_KEY))
}

async function removeLocalCurrOrder() {
    sessionStorage.removeItem(CURR_ORDER_STORAGE_KEY)
}

function _createDemoOrder() {
    let orders = localStorage.getItem(ORDER_STORAGE_KEY)
    if (!orders || !orders.length) {
        orders = demoOrders
        localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders))
    }
}

function checkClass(selected) {
    switch (selected) {
        case 1:
            return "Basic";
        case 2:
            return "Standard";
        case 3:
            return "Premium";
        default:
            return "Basic";
    }
}

function getEmptyCard() {
    return {
        cardNumber: '',
        expiryDate: '',
        SecurityCode: '',
        firstName: '',
        lastName: '',
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