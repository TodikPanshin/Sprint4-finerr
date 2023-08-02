import { gigService } from "../services/gig.service.js";

import { store } from './store.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { ADD_GIG, REMOVE_GIG, SET_GIGS, UNDO_REMOVE_GIG, UPDATE_GIG, SET_FILTER } from "./gig.reducer.js";


// Action Creators:
export function getActionRemoveGig(gigId) {
    return {
        type: REMOVE_GIG,
        gigId
    }
}
export function getActionAddGig(gig) {
    return {
        type: ADD_GIG,
        gig
    }
}
export function getActionUpdateGig(gig) {
    return {
        type: UPDATE_GIG,
        gig
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER, filterBy })
}

export async function loadGigs(filterBy) {
    try {
        let gigs = await gigService.query(filterBy)
        if (!gigs.length) gigs = null
        store.dispatch({
            type: SET_GIGS,
            gigs
        })
    } catch (err) {
        console.log('Cannot load gigs', err)
        throw err
    }

}

export async function removeGig(gigId) {
    try {
        await gigService.remove(gigId)
        store.dispatch(getActionRemoveGig(gigId))
    } catch (err) {
        console.log('Cannot remove gig', err)
        throw err
    }
}

export async function addGig(gig) {
    try {
        const savedGig = await gigService.save(gig)
        console.log('Added Gig', savedGig)
        store.dispatch(getActionAddGig(savedGig))
        return savedGig
    } catch (err) {
        console.log('Cannot add gig', err)
        throw err
    }
}

export function updateGig(gig) {
    return gigService.save(gig)
        .then(savedGig => {
            console.log('Updated Gig:', savedGig)
            store.dispatch(getActionUpdateGig(savedGig))
            return savedGig
        })
        .catch(err => {
            console.log('Cannot save gig', err)
            throw err
        })
}




// Demo for Optimistic Mutation 
// (IOW - Assuming the server call will work, so updating the UI first)
export function onRemoveGigOptimistic(gigId) {
    store.dispatch({
        type: REMOVE_GIG,
        gigId
    })
    showSuccessMsg('Gig removed')

    gigService.remove(gigId)
        .then(() => {
            console.log('Server Reported - Deleted Succesfully');
        })
        .catch(err => {
            showErrorMsg('Cannot remove gig')
            console.log('Cannot load gigs', err)
            store.dispatch({
                type: UNDO_REMOVE_GIG,
            })
        })
}
