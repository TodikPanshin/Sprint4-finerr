import { orderService } from "../services/order.service";
// import { userService } from "../services/user.service.js";
import { store } from './store'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { ADD_ORDER, REMOVE_ORDER, SET_ORDERS, UNDO_REMOVE_ORDER, UPDATE_ORDER, ADD_CURR_ORDER, CLEAR_CURR_ORDER } from "./order.reducer.js";
import { SET_SCORE } from "./user.reducer.js";

// Action Creators:
export function getActionRemoveOrder(orderId) {
    return {
        type: REMOVE_ORDER,
        orderId
    }
}
export function getActionAddOrder(order) {
    return {
        type: ADD_ORDER,
        order
    }
}
export function getActionUpdateOrder(order) {
    return {
        type: UPDATE_ORDER,
        order
    }
}

export async function loadOrders() {
    try {
        const orders = await orderService.query()
        store.dispatch({
            type: SET_ORDERS,
            orders
        })

    } catch (err) {
        console.log('Cannot load orders', err)
        throw err
    }

}

export async function removeOrder(orderId) {
    try {
        await orderService.remove(orderId)
        store.dispatch(getActionRemoveOrder(orderId))
    } catch (err) {
        console.log('Cannot remove order', err)
        throw err
    }
}

export async function addOrder(order) {
    try {
        const savedOrder = await orderService.save(order)
        console.log('Added Order', savedOrder)
        store.dispatch(getActionAddOrder(savedOrder))
        return savedOrder
    } catch (err) {
        console.log('Cannot add order', err)
        throw err
    }
}

export async function updateOrder(order) {
    try {
        const savedOrder = await orderService.save(order);
        console.log('Updated Order:', savedOrder);
        store.dispatch(getActionUpdateOrder(savedOrder));
        return savedOrder;
    } catch (err) {
        console.log('Cannot save order', err);
        throw err;
    }
}

export function addCurrOrder(gig) {
   const currOrder= orderService.getCurrOrder(gig)
   orderService.saveLocalCurrOrder(currOrder)
    store.dispatch({
        type: ADD_CURR_ORDER,
        currOrder
    })
}

export function removeCurrOrder() {
    store.dispatch({ type: CLEAR_CURR_ORDER })
}

export async function checkout(total) {
    try {
        // const score = await userService.changeScore(-total)
        // store.dispatch({ type: SET_SCORE, score })
        store.dispatch({ type: CLEAR_CURR_ORDER })
        // return score
    } catch (err) {
        console.log('GigActions: err in checkout', err)
        throw err
    }
}




// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveOrderOptimistic(orderId) {
    store.dispatch({
        type: REMOVE_ORDER,
        orderId
    })
    showSuccessMsg('Order removed')

    orderService.remove(orderId)
        .then(() => {
            console.log('Server Reported - Deleted Succesfully');
        })
        .catch(err => {
            showErrorMsg('Cannot remove order')
            console.log('Cannot load orders', err)
            store.dispatch({
                type: UNDO_REMOVE_ORDER,
            })
        })
}
